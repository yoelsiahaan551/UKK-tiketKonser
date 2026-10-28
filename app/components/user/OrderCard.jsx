"use client";

import Link from "next/link";
import { CalendarDays, ChevronRight } from "lucide-react";
import { formatRupiah, formatTanggalSingkat } from "@/app/lib/events";

// ============================================================
// ORDER CARD — component khusus User
// Menampilkan 1 pesanan milik pengguna di daftar pesanan.
// Status pesanan dan status pembayaran dipisah — dua hal berbeda.
// ============================================================

const STATUS_PESANAN = {
  menunggu_pembayaran: { label: "Menunggu Pembayaran", style: "bg-amber-100 text-amber-700" },
  diproses: { label: "Diproses", style: "bg-cyan-100 text-cyan-700" },
  selesai: { label: "Selesai", style: "bg-emerald-100 text-emerald-700" },
  dibatalkan: { label: "Dibatalkan", style: "bg-red-100 text-red-600" },
};

const STATUS_PEMBAYARAN = {
  belum_bayar: { label: "Belum Dibayar", style: "bg-slate-100 text-slate-600" },
  menunggu_konfirmasi: { label: "Menunggu Konfirmasi", style: "bg-amber-100 text-amber-700" },
  lunas: { label: "Lunas", style: "bg-emerald-100 text-emerald-700" },
  gagal: { label: "Gagal", style: "bg-red-100 text-red-600" },
};

export default function OrderCard({ order }) {
  if (!order) return null;

  const sp = STATUS_PESANAN[order.status] || { label: order.status, style: "bg-slate-100 text-slate-600" };
  const sb = STATUS_PEMBAYARAN[order.statusPembayaran] || { label: order.statusPembayaran, style: "bg-slate-100 text-slate-600" };

  const bisaLanjutBayar =
    order.status === "menunggu_pembayaran" && order.statusPembayaran === "belum_bayar";

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            No. Pesanan
          </p>
          <p className="font-mono text-sm font-bold text-slate-900">
            {order.nomor}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className={`rounded-full px-3 py-1.5 text-xs font-bold ${sp.style}`}>
            {sp.label}
          </span>
          <span className={`rounded-full px-3 py-1.5 text-xs font-bold ${sb.style}`}>
            Pembayaran: {sb.label}
          </span>
        </div>
      </div>

      <div className="mt-5 grid gap-4 border-t border-slate-100 pt-5 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-xs font-semibold text-slate-500">Event</p>
          <p className="mt-1 text-sm font-bold text-slate-900">
            {order.eventNama}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold text-slate-500">Tanggal Pesan</p>
          <p className="mt-1 flex items-center gap-2 text-sm text-slate-700">
            <CalendarDays size={15} className="text-cyan-600" />
            {formatTanggalSingkat(order.dibuatPada)}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold text-slate-500">Jumlah Tiket</p>
          <p className="mt-1 text-sm text-slate-700">
            {order.jumlahTiket} tiket
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold text-slate-500">Total</p>
          <p className="mt-1 font-black text-cyan-600">
            {formatRupiah(order.total)}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={`/user/pesanan/${order.id}`}
          className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-cyan-200 transition hover:scale-[1.03]"
        >
          Lihat Detail
          <ChevronRight size={15} />
        </Link>

        {bisaLanjutBayar && (
          <span
            className="flex items-center rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-bold text-slate-400"
            title="Menunggu integrasi pembayaran backend"
          >
            Lanjutkan Pembayaran (segera)
          </span>
        )}
      </div>
    </div>
  );
}
