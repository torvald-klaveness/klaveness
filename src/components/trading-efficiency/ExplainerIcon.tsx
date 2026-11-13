import Image from "next/image";
import type { CSSProperties } from "react";

import { type ExplainerIcon, explainerIcons } from "@/content/trading-efficiency-explained-icons";

/** Decorative two-tone icon for the Trading Efficiency Explained page. */
export function Ic({
  n,
  className,
  style,
  sizes = "(max-width: 700px) 160px, 340px",
}: {
  n: ExplainerIcon;
  className?: string;
  style?: CSSProperties;
  sizes?: string;
}) {
  return <Image src={explainerIcons[n]} alt="" sizes={sizes} className={className} style={style} />;
}
