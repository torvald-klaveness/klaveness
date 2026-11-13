import type { JSX } from "react";

import commitment from "@/assets/icons/values/commitment.png";
import craftsmanship from "@/assets/icons/values/craftsmanship.png";
import curiosity from "@/assets/icons/values/curiosity.png";
import integrity from "@/assets/icons/values/integrity.png";

type IconProps = { className?: string };

/*
 * The four Klaveness value icons (cap, anchor, helm, telescope), supplied as
 * artwork. Drawn as a mask so they take the surrounding text colour.
 */
function maskIcon(src: string) {
  return function ValueIcon({ className }: IconProps) {
    const mask = `url(${src})`;
    return (
      <span
        aria-hidden
        className={`inline-block bg-current ${className ?? ""}`}
        style={{
          maskImage: mask,
          WebkitMaskImage: mask,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      />
    );
  };
}

export const valueIcons: Record<string, (props: IconProps) => JSX.Element> = {
  Craftsmanship: maskIcon(craftsmanship.src),
  Integrity: maskIcon(integrity.src),
  Commitment: maskIcon(commitment.src),
  Curiosity: maskIcon(curiosity.src),
};
