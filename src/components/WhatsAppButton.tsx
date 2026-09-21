import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { WHATSAPP_NUMBERS, waLink } from "../lib/site";

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  // Tutup modal dengan tombol Escape + kunci scroll body saat modal terbuka
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Tombol utama (emas menonjol) */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        style={{ animationDelay: "0.15s" }}
        className="animate-in group flex w-full items-center gap-4 rounded-2xl bg-gradient-to-r from-gold-300 to-gold-400 px-4 py-3.5 text-brand-950 shadow-lg shadow-gold-400/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold-400/40 active:translate-y-0"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
          <Icon icon="logos:whatsapp-icon" width="26" height="26" />
        </span>
        <span className="flex flex-1 flex-col text-left">
          <span className="font-bold leading-tight">Pesan via WhatsApp</span>
          <span className="text-xs leading-tight text-brand-900/70">
            Antar-jemput & tanya harga
          </span>
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0 text-brand-900/60 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* Modal pilih nomor */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Pilih nomor WhatsApp"
          onClick={() => setOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
          className="fixed inset-0 z-50 flex items-end justify-center bg-brand-950/50 p-4 sm:items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.stopPropagation();
              }
            }}
            role="dialog"
            className="animate-in w-full max-w-sm rounded-3xl bg-white p-5 text-brand-950 shadow-2xl"
          >
            <div className="mb-1 flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-extrabold">Pilih Nomor WhatsApp</h2>
                <p className="text-sm text-brand-950/50">
                  Kami balas secepatnya 😊
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Tutup"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-brand-950/50 transition hover:bg-brand-950/5 hover:text-brand-950"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              {WHATSAPP_NUMBERS.map((wa, i) => (
                <a
                  key={wa.number}
                  href={waLink(wa.number)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 transition hover:border-green-300 hover:bg-green-100"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                    <Icon icon="logos:whatsapp-icon" width="26" height="26" />
                  </span>
                  <span className="flex flex-1 flex-col text-left">
                    <span className="font-bold leading-tight">
                      {wa.display}
                    </span>
                    <span className="text-xs leading-tight text-brand-950/50">
                      Nomor {i + 1} • klik untuk chat
                    </span>
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 text-green-600/60 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
