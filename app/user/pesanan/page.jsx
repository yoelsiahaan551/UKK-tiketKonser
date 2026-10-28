"use client";

import { useState } from "react";
import OrderCard from "@/app/components/user/OrderCard";
import EmptyState from "@/app/components/user/EmptyState";
import { Receipt } from "lucide-react";

// ============================================================
// PESANAN SAYA — /user/pesanan
// Daftar pesanan MILIK PENGGUNA. Status pesanan dan status
// pembayaran ditampilkan terpisah (dua hal berbeda di backend).
// Belum ada backend: GET /api/orders belum tersedia, jadi halaman
// menampilkan data contoh pengembangan visual — HAPUS saat
// backend siap dan ganti dengan fetch GET /api/orders.
// ============================================================

// Data contoh untuk pengembangan visual — BUKAN data pesanan nyata.
const PESANAN_CONTOH = [
  {
    id: "demo-1",
    nomor: "TW-ORD-DEMO-001",
    eventNama: "Music Festival 2026",
    dibuatPada: "2026-10-20",
    jumlahTiket: 2,
    total: 900000,
    status: "menunggu_pembayaran",
    statusPembayaran: "belum_bayar",
  },
  {
    id: "demo-2",
    nomor: "TW-ORD-DEMO-002",
    eventNama: "Summer Sound Live",
    dibuatPada: "2026-10-15",
    jumlahTiket: 1,
    total: 200000,
    status: "selesai",
    statusPembayaran: "lunas",
  },
];

const FILTERS = [
  { id: "semua", label: "Semua" },
  { id: "menunggu_pembayaran", label: "Menunggu Pembayaran" },
  { id: "diproses", label: "Diproses" },
  { id: "selesai", label: "Selesai" },
  { id: "dibatalkan", label: "Dibatalkan" },
];

export default function PesananPage() {
  const [filter, setFilter] = useState("semua");
  const [pesanan] = useState(PESANAN_CONTOH); // TODO: ganti dengan GET /api/orders

  const hasil =
    filter === "semua"
      ? pesanan
      : pesanan.filter((p) => p.status === filter);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-8">
        <span className="text-sm font-bold uppercase tracking-wider text-cyan-600">
          Transaksi
        </span>
        <h1 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">
          Pesanan Saya
        </h1>
        <p className="mt-3 max-w-xl leading-7 text-slate-500">
          Riwayat pesanan tiket yang kamu buat di TicketWave.
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

      {/* Daftar pesanan */}
      {hasil.length === 0 ? (
        <EmptyState
          icon={Receipt}
          judul={
            filter === "semua"
              ? "Belum ada pesanan"
              : "Tidak ada pesanan dengan status ini"
          }
          deskripsi={
            filter === "semua"
              ? "Kamu belum membuat pesanan. Jelajahi event dan pesan tiket pertamamu."
              : "Coba pilih filter status lain."
          }
          aksiLabel={filter === "semua" ? "Jelajahi Event" : undefined}
          aksiHref={filter === "semua" ? "/user/event" : undefined}
        />
      ) : (
        <div className="space-y-5">
          {hasil.map((p) => (
            <OrderCard key={p.id} order={p} />
          ))}
        </div>
      )}
    </div>
  );
}
