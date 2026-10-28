"use client";

import { useState } from "react";
import TicketCard from "@/app/components/user/TicketCard";
import EmptyState from "@/app/components/user/EmptyState";
import { Ticket as TicketIcon } from "lucide-react";

// ============================================================
// TIKET SAYA — /user/ticket
// Menampilkan tiket MILIK PENGGUNA (bukan katalog).
// Belum ada backend: GET /api/tickets belum tersedia, jadi
// halaman menampilkan empty state jujur. Contoh tiket di bawah
// hanya untuk pengembangan visual — HAPUS saat backend siap
// dan ganti dengan fetch GET /api/tickets (auth via session/token).
// ============================================================

// Data contoh untuk pengembangan visual — BUKAN data pengguna nyata.
const TIKET_CONTOH = [
  {
    id: "demo-1",
    eventNama: "Music Festival 2026",
    kategoriTiket: "VIP",
    tanggal: "2026-12-20",
    waktu: "16:00 WIB",
    lokasi: "Gelora Bung Karno, Jakarta",
    gambar:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80",
    kode: "TW-DEMO-XXXX1",
    status: "aktif",
  },
  {
    id: "demo-2",
    eventNama: "Summer Sound Live",
    kategoriTiket: "Reguler",
    tanggal: "2026-12-28",
    waktu: "19:00 WIB",
    lokasi: "Sabuga Convention Hall, Bandung",
    gambar:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
    kode: "TW-DEMO-XXXX2",
    status: "digunakan",
  },
];

const FILTERS = [
  { id: "semua", label: "Semua" },
  { id: "aktif", label: "Berlaku" },
  { id: "digunakan", label: "Sudah Digunakan" },
  { id: "batal", label: "Dibatalkan" },
];

export default function TicketPage() {
  const [filter, setFilter] = useState("semua");
  const [tiket] = useState(TIKET_CONTOH); // TODO: ganti dengan GET /api/tickets

  const hasil =
    filter === "semua"
      ? tiket
      : tiket.filter((t) => t.status === filter);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-8">
        <span className="text-sm font-bold uppercase tracking-wider text-cyan-600">
          Tiket Saya
        </span>
        <h1 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">
          Tiket yang Ku Miliki
        </h1>
        <p className="mt-3 max-w-xl leading-7 text-slate-500">
          Semua tiket yang kamu beli melalui TicketWave. Tunjukkan
          kode tiket saat memasuki venue.
        </p>
      </div>

      {/* Filter status */}
      <div className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={`rounded-xl px-5 py-2.5 text-sm font-bold transition ${
              filter === f.id
                ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md"
                : "border border-slate-300 bg-white text-slate-600 hover:border-cyan-500 hover:text-cyan-600"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Daftar tiket */}
      {hasil.length === 0 ? (
        <EmptyState
          icon={TicketIcon}
          judul={
            filter === "semua"
              ? "Belum ada tiket"
              : "Tidak ada tiket dengan status ini"
          }
          deskripsi={
            filter === "semua"
              ? "Kamu belum memiliki tiket. Jelajahi event menarik dan beli tiket pertamamu sekarang."
              : "Coba pilih filter status lain."
          }
          aksiLabel={filter === "semua" ? "Jelajahi Event" : undefined}
          aksiHref={filter === "semua" ? "/user/event" : undefined}
        />
      ) : (
        <div className="space-y-5">
          {hasil.map((t) => (
            <TicketCard key={t.id} ticket={t} />
          ))}
        </div>
      )}
    </div>
  );
}
