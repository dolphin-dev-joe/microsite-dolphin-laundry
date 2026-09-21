import { Bubbles } from "./components/Bubbles";
import { LinkButton } from "./components/LinkButton";
import { SocialLinks } from "./components/SocialLinks";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { BUSINESS, LINKS, PROMO } from "./lib/site";

export default function App() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center px-5 py-10">
      <Bubbles />

      <div className="relative z-10 flex w-full max-w-md flex-1 flex-col">
        {/* Header */}
        <header className="flex flex-col items-center text-center">
          <div className="animate-in flex h-24 w-24 items-center justify-center rounded-full bg-white/10 p-2 ring-1 ring-white/20 backdrop-blur-md">
            <img
              src="/images/dl-logo.png"
              alt={`Logo ${BUSINESS.name}`}
              width={96}
              height={96}
              className="h-full w-full object-contain"
            />
          </div>

          <h1
            className="animate-in mt-4 text-2xl font-extrabold tracking-tight"
            style={{ animationDelay: "0.05s" }}
          >
            {BUSINESS.name}
          </h1>
          <p
            className="animate-in mt-1 text-sm text-white/70"
            style={{ animationDelay: "0.1s" }}
          >
            {BUSINESS.tagline}
          </p>

          <p
            className="animate-in mt-3 max-w-xs text-xs leading-relaxed text-white/50"
            style={{ animationDelay: "0.12s" }}
          >
            📍 {BUSINESS.address}
          </p>
        </header>

        {/* Promo banner */}
        {PROMO.active && (
          <div
            className="animate-in mt-6 rounded-2xl border border-gold-400/40 bg-gold-400/10 px-4 py-3 text-center backdrop-blur-md"
            style={{ animationDelay: "0.14s" }}
          >
            <p className="font-bold text-gold-300">{PROMO.title}</p>
            <p className="text-xs text-white/70">{PROMO.subtitle}</p>
          </div>
        )}

        {/* Tombol-tombol */}
        <div className="mt-6 flex flex-col gap-3">
          <WhatsAppButton />
          {LINKS.map((item, i) => (
            <LinkButton key={item.label} item={item} index={i + 1} />
          ))}
        </div>

        {/* Sosial media */}
        <div className="mt-8">
          <SocialLinks />
        </div>

        {/* Footer */}
        <footer className="mt-auto pt-10 text-center text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name} • Kupang, NTT
          </p>
        </footer>
      </div>
    </main>
  );
}
