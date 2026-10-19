"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Logo } from "@/components/brand/Logo";
import { ArrowRight } from "@/components/icons";
import { NavAnchor } from "@/components/ui/NavAnchor";
import { type NavItem, mainNav, site } from "@/content/site";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

/** A menu item is "current" on its own page and on any of its sub-pages (About → Governance). */
const inSection = (pathname: string, item: NavItem) =>
  isActive(pathname, item.href) ||
  Boolean(item.children?.some((child) => !child.external && isActive(pathname, child.href)));

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Desktop dropdown closed by a click on one of its links, until the pointer leaves.
  const [dismissed, setDismissed] = useState<string | null>(null);
  const lastY = useRef(0);

  // Solid background once the page scrolls; tuck the bar away while scrolling
  // down through content and bring it back on any upward scroll.
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 24);
        if (y <= 480 || y < lastY.current - 4) setHidden(false);
        else if (y > lastY.current + 4) setHidden(true);
        lastY.current = y;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close the mobile menu on navigation (back/forward included).
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const solid = scrolled && !menuOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[translate,background-color,box-shadow,color] duration-500 ease-out-expo ${
          hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"
        } ${
          solid
            ? "bg-white/90 text-ink shadow-[0_1px_0_rgb(0_20_70/0.08)] backdrop-blur-xl backdrop-saturate-150"
            : "bg-transparent text-white"
        }`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-10 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>

        <div
          className={`flex items-center justify-between px-6 transition-[height] duration-500 ease-out-expo md:px-[clamp(2.5rem,4.2vw,5rem)] ${
            solid ? "h-[4.5rem]" : "h-20 md:h-[clamp(6rem,9.4vw,11.25rem)]"
          }`}
        >
          <Link href="/" aria-label={`${site.name} — home`} className="relative z-10 shrink-0">
            <Logo
              variant="stacked"
              className="h-8 w-auto md:h-[clamp(2.25rem,2.45vw,2.95rem)]"
              title={site.name}
            />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => {
                const active = inSection(pathname, item);
                return (
                  <li
                    key={item.href}
                    className="group/nav relative"
                    // The dropdown opens on hover and focus, both of which outlast a
                    // click: drop the focus and hide it until the pointer moves away.
                    onClick={(event) => {
                      if (!(event.target as Element).closest("a")) return;
                      (document.activeElement as HTMLElement | null)?.blur();
                      setDismissed(item.href);
                    }}
                    onMouseLeave={() => setDismissed(null)}
                  >
                    {item.menuOnly ? (
                      <button
                        type="button"
                        aria-haspopup="true"
                        aria-current={active ? "true" : undefined}
                        className="relative inline-flex h-11 cursor-default items-center px-[clamp(0.875rem,1.5vw,1.75rem)] text-[clamp(0.875rem,0.9375vw,1.125rem)] font-medium"
                      >
                        {item.label}
                        <span
                          aria-hidden
                          className={`absolute inset-x-[clamp(0.875rem,1.5vw,1.75rem)] bottom-2 h-px origin-left bg-orange transition-transform duration-500 ease-out-expo group-focus-within/nav:scale-x-100 group-hover/nav:scale-x-100 ${
                            active ? "scale-x-100" : "scale-x-0"
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        aria-current={
                          active ? (pathname === item.href ? "page" : "true") : undefined
                        }
                        className="relative inline-flex h-11 items-center px-[clamp(0.875rem,1.5vw,1.75rem)] text-[clamp(0.875rem,0.9375vw,1.125rem)] font-medium"
                      >
                        {item.label}
                        <span
                          aria-hidden
                          className={`absolute inset-x-[clamp(0.875rem,1.5vw,1.75rem)] bottom-2 h-px origin-left bg-orange transition-transform duration-500 ease-out-expo group-focus-within/nav:scale-x-100 group-hover/nav:scale-x-100 ${
                            active ? "scale-x-100" : "scale-x-0"
                          }`}
                        />
                      </Link>
                    )}

                    {item.children && (
                      <div
                        className={`invisible absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 transition-[opacity,visibility,transform] duration-300 ease-out-expo ${
                          dismissed === item.href
                            ? ""
                            : "group-focus-within/nav:visible group-focus-within/nav:opacity-100 group-hover/nav:visible group-hover/nav:opacity-100"
                        }`}
                      >
                        <ul className="min-w-64 rounded-xl bg-white p-2 text-ink shadow-[0_24px_60px_-20px_rgb(0_20_70/0.35),0_0_0_1px_rgb(0_20_70/0.06)]">
                          {item.children.map((child) => (
                            <li key={child.href + child.label}>
                              <NavAnchor
                                href={child.href}
                                external={child.external}
                                current={pathname === child.href}
                                className="group/sub flex items-center justify-between gap-6 rounded-lg px-4 py-2.5 text-[0.875rem] whitespace-nowrap text-ink-soft transition-colors hover:bg-mist hover:text-ink aria-[current=page]:text-ink"
                              >
                                {child.label}
                                {!child.external && (
                                  <ArrowRight className="size-3.5 -translate-x-1 text-orange opacity-0 transition duration-300 group-hover/sub:translate-x-0 group-hover/sub:opacity-100" />
                                )}
                              </NavAnchor>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            className="relative z-10 -mr-2 inline-flex size-11 items-center justify-center lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="relative block h-3 w-6">
              <span
                className={`absolute left-0 h-px w-6 bg-current transition-transform duration-500 ease-out-expo ${
                  menuOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-px bg-current transition-all duration-500 ease-out-expo ${
                  menuOpen ? "top-1.5 w-6 -rotate-45" : "top-3 w-4"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Outside <header>: its transform would otherwise trap this fixed overlay. */}
      <MobileMenu open={menuOpen} pathname={pathname} onNavigate={() => setMenuOpen(false)} />
    </>
  );
}

function MobileMenu({
  open,
  pathname,
  onNavigate,
}: {
  open: boolean;
  pathname: string;
  onNavigate: () => void;
}) {
  return (
    <div
      id="mobile-menu"
      inert={!open}
      className={`fixed inset-0 z-40 overflow-y-auto bg-navy text-white transition-[opacity,visibility] duration-500 ease-out-expo lg:hidden ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <nav
        aria-label="Mobile"
        className="container-site flex min-h-full flex-col pt-28 pb-10"
        // Any link closes the menu, including one to the page already open.
        onClick={(event) => (event.target as Element).closest("a") && onNavigate()}
      >
        <ul className="divide-y divide-white/10 border-y border-white/10">
          {mainNav.map((item, index) => (
            <li
              key={item.href}
              className={`transition-[opacity,transform] duration-700 ease-out-expo ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${80 + index * 45}ms` : "0ms" }}
            >
              {item.children ? (
                <details className="group/acc">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-5 [&::-webkit-details-marker]:hidden">
                    <span className="heading-display text-[1.75rem]">{item.label}</span>
                    <span
                      aria-hidden
                      className="relative size-4 before:absolute before:top-1/2 before:left-0 before:h-px before:w-4 before:bg-orange after:absolute after:top-0 after:left-1/2 after:h-4 after:w-px after:bg-orange after:transition-transform after:duration-300 group-open/acc:after:scale-y-0"
                    />
                  </summary>
                  <ul className="space-y-1 pb-5">
                    {/* Keep the section page reachable when it isn't one of its sub-links. */}
                    {[
                      ...(item.menuOnly || item.children.some((child) => child.href === item.href)
                        ? []
                        : [{ label: item.label, href: item.href }]),
                      ...item.children,
                    ].map((child) => (
                      <li key={child.href + child.label}>
                        <NavAnchor
                          href={child.href}
                          external={"external" in child ? child.external : false}
                          current={pathname === child.href}
                          className="flex items-center gap-2 py-1.5 text-base text-white/70 transition-colors hover:text-white aria-[current=page]:text-white"
                        >
                          {child.label}
                        </NavAnchor>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link
                  href={item.href}
                  aria-current={
                    inSection(pathname, item)
                      ? pathname === item.href
                        ? "page"
                        : "true"
                      : undefined
                  }
                  className="heading-display block py-5 text-[1.75rem]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-12 text-sm text-white/60">
          <p className="text-eyebrow font-semibold tracking-[0.14em] text-white/85 uppercase">
            Headquarters
          </p>
          <p className="mt-3 leading-relaxed">
            {site.headquarters.street}, {site.headquarters.postalCode} {site.headquarters.city}
            <br />
            <a
              href={`tel:${site.headquarters.phone.replace(/\s/g, "")}`}
              className="hover:text-white"
            >
              {site.headquarters.phone}
            </a>
          </p>
        </div>
      </nav>
    </div>
  );
}
