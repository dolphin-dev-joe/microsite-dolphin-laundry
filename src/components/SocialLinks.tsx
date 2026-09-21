import { Icon } from "@iconify/react";
import { BUSINESS, MAIN_SITE } from "../lib/site";

const socials = [
  { icon: "flat-color-icons:globe", href: MAIN_SITE, label: "Website" },
  { icon: "skill-icons:instagram", href: BUSINESS.instagram, label: "Instagram" },
  { icon: "logos:facebook", href: BUSINESS.facebook, label: "Facebook" },
  { icon: "logos:google-maps", href: BUSINESS.mapsLink, label: "Google Maps" },
];

export function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-3">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white"
        >
          <Icon icon={s.icon} width="24" height="24" />
        </a>
      ))}
    </div>
  );
}
