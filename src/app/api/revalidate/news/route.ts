import { createHmac, timingSafeEqual } from "node:crypto";

import { revalidateTag } from "next/cache";

import { NEWS_CACHE_TAG, getNewsRepo } from "@/lib/news/config";

/**
 * GitHub webhook for the content repo (push events). A push to the content
 * branch marks every news page stale; each one is rebuilt in the background
 * on its next visit, without redeploying the site.
 */
export async function POST(request: Request) {
  const secret = process.env.NEWS_WEBHOOK_SECRET?.trim();
  if (!secret)
    return Response.json({ error: "Webhook secret is not configured." }, { status: 500 });

  const body = await request.text();
  const signature = request.headers.get("x-hub-signature-256") ?? "";
  const expected = Buffer.from(`sha256=${createHmac("sha256", secret).update(body).digest("hex")}`);
  const received = Buffer.from(signature);
  if (received.length !== expected.length || !timingSafeEqual(received, expected)) {
    return Response.json({ error: "Invalid signature." }, { status: 401 });
  }

  const event = request.headers.get("x-github-event");
  if (event === "ping") return Response.json({ ok: true });
  if (event !== "push") return Response.json({ ok: true, ignored: event });

  let payload: { ref?: string; repository?: { full_name?: string } };
  try {
    payload = JSON.parse(body);
  } catch {
    return Response.json({ error: "Invalid payload." }, { status: 400 });
  }

  const { owner, repo, branch } = getNewsRepo();
  const sameRepo =
    payload.repository?.full_name?.toLowerCase() === `${owner}/${repo}`.toLowerCase();
  if (!sameRepo || payload.ref !== `refs/heads/${branch}`) {
    return Response.json({ ok: true, ignored: payload.ref });
  }

  revalidateTag(NEWS_CACHE_TAG, "max");
  return Response.json({ ok: true, revalidated: NEWS_CACHE_TAG });
}
