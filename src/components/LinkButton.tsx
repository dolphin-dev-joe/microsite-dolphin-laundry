import { Icon } from "@iconify/react";
import type { LinkItem } from "../lib/site";

export function LinkButton({ item, index }: { item: LinkItem; index: number }) {
  const featured = item.featured;

  return (
    <a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      style={{ animationDelay: `${0.15 + index * 0.07}s` }}
      className={[
        "animate-in group flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-all duration-300",
        "hover:-translate-y-0.5 active:translate-y-0",
        featured
          ? "bg-gradient-to-r from-gold-300 to-gold-400 text-brand-950 shadow-lg shadow-gold-400/30 hover:shadow-xl hover:shadow-gold-400/40"
          : "bg-white/10 text-white border border-white/15 backdrop-blur-md hover:bg-white/15 hover:border-white/30",
      ].join(" ")}
    >
      {/* Ikon berwarna di atas tile putih agar warnanya menonjol */}
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
        <Icon icon={item.icon} width="26" height="26" />
      </span>

      <span className="flex flex-1 flex-col text-left">
        <span className="font-bold leading-tight">{item.label}</span>
        <span
          className={[
            "text-xs leading-tight",
            featured ? "text-brand-900/70" : "text-white/60",
          ].join(" ")}
        >
          {item.description}
        </span>
      </span>

      {/* Panah chevron (SVG inline, selalu tampil) */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={[
          "shrink-0 transition-transform duration-300 group-hover:translate-x-1",
          featured ? "text-brand-900/60" : "text-white/40",
        ].join(" ")}
        aria-hidden
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </a>
  );
}
