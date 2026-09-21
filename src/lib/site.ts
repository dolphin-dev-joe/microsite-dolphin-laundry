// ============================================================================
// KONFIGURASI MICROSITE DOLPHIN LAUNDRY
// ----------------------------------------------------------------------------
// Semua data yang sering berubah dikumpulkan di sini supaya gampang diedit.
// Cukup ganti nilainya di bawah — tidak perlu menyentuh kode tampilan.
// ============================================================================

// Alamat microsite ini sendiri (subdomain link-in-bio). Dipakai untuk canonical & share preview.
export const SITE_URL = "https://link.dolphin-laundry-kupang.biz.id";

// Alamat website utama Dolphin Laundry (tujuan tombol-tombol microsite)
export const MAIN_SITE = "https://www.dolphin-laundry-kupang.biz.id";

// Daftar nomor WhatsApp. Boleh 1 atau lebih.
//   display = tampilan yang dibaca orang (bebas formatnya)
//   number  = format internasional TANPA "+" atau "0" di depan (0821... -> 62821...)
export const WHATSAPP_NUMBERS = [
  { display: "0821-4450-0030", number: "6282144500030" },
  { display: "0815-2950-0130", number: "6281529500130" },
];

// Pesan otomatis yang muncul saat pelanggan klik tombol WhatsApp
export const WHATSAPP_MESSAGE =
  "Halo Dolphin Laundry, saya mau pesan layanan laundry 🧺";

// Membuat link WhatsApp siap pakai dari sebuah nomor
export const waLink = (number: string): string =>
  `https://wa.me/${number}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Info bisnis
export const BUSINESS = {
  name: "Dolphin Laundry",
  tagline: "Laundry & Dry Cleaning • Kupang",
  address:
    "Jl. R. W. Monginsidi I No.2, Pasir Panjang, Kec. Kota Lama, Kota Kupang, Nusa Tenggara Timur",
  hours: "Setiap hari • 05.45 – 22.00 WITA",
  mapsLink: "https://goo.gl/maps/Tu5ijHJKQZAwYQiA6",
  // Link "tulis ulasan" resmi Google Business Profile — langsung munculkan modal bintang
  reviewLink: "https://g.page/r/CQyopW0qY3paEBM/review",
  instagram: "https://www.instagram.com/dolphin.laundry_kupang",
  instagramHandle: "@dolphin.laundry_kupang",
  facebook: "https://www.facebook.com/rembo46",
};

// Banner promo di bagian atas. Set `active: false` kalau sedang tidak ada promo.
export const PROMO = {
  active: true,
  title: "Gratis Parfum Premium ✨",
  subtitle: "Setiap cuci kiloan, wangi tahan lama seharian",
};

// Tombol-tombol utama microsite. Tambah/kurang/urutkan sesuka hati.
// icon = nama ikon Iconify berwarna (cari di https://icon-sets.iconify.design).
// Set yang dipakai: "logos" (logo brand), "flat-color-icons", "noto" — semuanya colorful.
export type LinkItem = {
  label: string;
  description: string;
  icon: string;
  href: string;
  external?: boolean; // true = buka tab baru
  featured?: boolean; // true = tombol emas menonjol (khusus WhatsApp)
};

// Catatan: tombol WhatsApp TIDAK ada di daftar ini — ia punya komponen sendiri
// (WhatsAppButton) yang membuka modal pilihan nomor. Lihat WHATSAPP_NUMBERS di atas.
export const LINKS: LinkItem[] = [
  {
    label: "Daftar Harga",
    description: "Cuci kiloan, satuan, dry clean",
    icon: "flat-color-icons:currency-exchange",
    href: `${MAIN_SITE}/daftar-harga`,
    external: true,
  },
  {
    label: "Layanan Kami",
    description: "Cuci, setrika, sepatu, karpet",
    icon: "flat-color-icons:services",
    href: `${MAIN_SITE}/layanan`,
    external: true,
  },
  {
    label: "Pilihan Parfum",
    description: "Aroma segar tahan lama",
    icon: "noto:lotion-bottle",
    href: `${MAIN_SITE}/pilihan-parfum`,
    external: true,
  },
  {
    label: "Lokasi & Jam Buka",
    description: BUSINESS.hours,
    icon: "logos:google-maps",
    href: BUSINESS.mapsLink,
    external: true,
  },
  {
    label: "Review Google Maps",
    description: "Beri rating & ulasan ⭐",
    icon: "flat-color-icons:rating",
    href: BUSINESS.reviewLink,
    external: true,
  },
];
