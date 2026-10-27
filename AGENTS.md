<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Branches and publishing

The site has two branches, each deployed by its own Vercel account:

| Branch    | Deployed to                            | Updated by                     |
| --------- | -------------------------------------- | ------------------------------ |
| `staging` | https://klaveness.vercel.app (preview) | Anyone on the team, every push |
| `main`    | https://www.klaveness.com (live)       | Only Haley (`HaleyZerwas`)     |

- Do all work on `staging` (or on a branch with a pull request into `staging`). Every push to `staging` updates klaveness.vercel.app within a couple of minutes.
- `main` is protected on GitHub: only `HaleyZerwas` can push or merge into it, so a push to `main` from anyone else is refused.
- Preview locally with `pnpm dev`.
- News articles are not in this repo: they live in the `klaveness-content` repository and appear on the site within 15 minutes of a push there, without a deploy.

## Publishing to klaveness.com

Publishing means merging `staging` into `main` through a pull request. Anyone can open it:

```bash
gh pr create --base main --head staging --title "Publish to klaveness.com" --body "Publish the changes checked on klaveness.vercel.app."
```

Only Haley can merge it, with **Merge pull request** on GitHub or, from her login, `gh pr merge --merge`. If a pull request from `staging` into `main` is already open, merge that one instead of opening another. klaveness.com updates a couple of minutes after the merge.
