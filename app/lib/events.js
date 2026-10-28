// ============================================================
// DATA PLACEHOLDER — BELUM ADA BACKEND
// ============================================================
// Project ini belum memiliki API backend (tidak ada folder service,
// tidak ada NEXT_PUBLIC_API_URL, tidak ada endpoint di dokumentasi).
//
// Seluruh data di file ini adalah data contoh (dummy) yang dipakai
// untuk membangun UI halaman User. Struktur datanya dibuat mengikuti
// bentuk respons API yang wajar (id, nama, tanggal, tiket, dst)
// supaya saat backend siap, cukup mengganti import di tiap halaman
// dengan fetch ke endpoint, tanpa mengubah komponen.
//
// ENDPOINT YANG DIPERLUKAN DARI BACKEND:
//   GET /api/events            -> daftar event (support ?search=&category=&sort=)
//   GET /api/events/:id        -> detail event + daftar kategori tiket + sisa kuota
//   GET /api/events/upcoming   -> event yang akan datang
//   POST /api/orders           -> buat pesanan (checkout)
//   GET /api/orders            -> daftar pesanan milik user yang login
//   GET /api/orders/:id        -> detail pesanan milik user yang login
//   POST /api/payments         -> pembayaran / instruksi pembayaran
//   GET /api/tickets           -> tiket milik user (dengan kode/QR dari backend)
//   GET /api/auth/me           -> profil user yang login
//   PATCH /api/auth/me         -> update profil
//   POST /api/auth/password    -> ubah password
//   POST /api/promos/validate  -> validasi kode promo
// ============================================================

export const EVENTS = [
  {
    id: 1,
    slug: "music-festival-2026",
    nama: "Music Festival 2026",
    kategori: "Music Festival",
    tanggal: "2026-12-20",
    waktu: "16:00 WIB",
    lokasi: "Jakarta",
    venue: "Gelora Bung Karno, Jakarta",
    deskripsi:
      "Festival musik tahunan dengan deretan artis nasional dan internasional. Satu hari, dua panggung, dan belasan penampilan dari siang hingga malam.",
    penyelenggara: "TicketWave Live",
    gambar:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
    tiket: [
      {
        id: "t1-reg",
        nama: "Reguler",
        harga: 150000,
        kuota: 500,
        sisa: 320,
        deskripsi: "Free standing area",
      },
      {
        id: "t1-vip",
        nama: "VIP",
        harga: 450000,
        kuota: 200,
        sisa: 86,
        deskripsi: "Standing area depan panggung + merchandise",
      },
      {
        id: "t1-vvip",
        nama: "VVIP",
        harga: 950000,
        kuota: 50,
        sisa: 12,
        deskripsi: "Seating premium + meet & greet",
      },
    ],
  },
  {
    id: 2,
    slug: "summer-sound-live",
    nama: "Summer Sound Live",
    kategori: "Live Concert",
    tanggal: "2026-12-28",
    waktu: "19:00 WIB",
    lokasi: "Bandung",
    venue: "Sabuga Convention Hall, Bandung",
    deskripsi:
      "Konser tunggal dengan setlist penampilan akustik dan full band. Pintu dibuka pukul 17.00 WIB.",
    penyelenggara: "Sound Nation",
    gambar:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
    tiket: [
      {
        id: "t2-reg",
        nama: "Reguler",
        harga: 200000,
        kuota: 800,
        sisa: 640,
        deskripsi: "Free standing area",
      },
      {
        id: "t2-festival",
        nama: "Festival",
        harga: 350000,
        kuota: 300,
        sisa: 155,
        deskripsi: "Area festival + fast lane entry",
      },
    ],
  },
  {
    id: 3,
    slug: "electronic-night",
    nama: "Electronic Night",
    kategori: "EDM",
    tanggal: "2027-01-05",
    waktu: "21:00 WIB",
    lokasi: "Jakarta",
    venue: "Kemayoran Hall, Jakarta",
    deskripsi:
      "Malam musik elektronik dengan line-up DJ nasional dan internasional hingga tengah malam.",
    penyelenggara: "Pulse Events",
    gambar:
      "https://images.unsplash.com/photo-1571266028243-d220c9c3b63d?auto=format&fit=crop&w=1200&q=80",
    tiket: [
      {
        id: "t3-presale",
        nama: "Presale",
        harga: 175000,
        kuota: 400,
        sisa: 0,
        deskripsi: "Harga presale — sold out",
      },
      {
        id: "t3-normal",
        nama: "Reguler",
        harga: 250000,
        kuota: 600,
        sisa: 410,
        deskripsi: "Free standing area",
      },
    ],
  },
];

export const KATEGORI_EVENT = [
  "Semua",
  "Music Festival",
  "Live Concert",
  "EDM",
  "K-Pop",
  "Pop",
  "Rock",
];

// --- Helpers format ---

export function formatRupiah(angka) {
  return "Rp" + Number(angka || 0).toLocaleString("id-ID");
}

export function formatTanggal(iso) {
  if (!iso) return "-";
  return new Date(iso).toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatTanggalSingkat(iso) {
  if (!iso) return "-";
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function hargaMulaiDari(event) {
  const tersedia = event.tiket.filter((t) => t.sisa > 0);
  const daftar = tersedia.length > 0 ? tersedia : event.tiket;
  return Math.min(...daftar.map((t) => t.harga));
}

export function getEventById(id) {
  return EVENTS.find((e) => String(e.id) === String(id)) || null;
}
