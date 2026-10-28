"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  MapPin,
  Clock,
  Receipt,
  AlertTriangle,
} from "lucide-react";
import { formatTanggal, formatTanggalSingkat, formatRupiah } from "@/app/lib/events";

// ============================================================
// DETAIL PESANAN — /user/pesanan/[id]
// Data contoh pengembangan visual. Saat backend siap, ganti dengan
// GET /api/orders/:id — backend wajib memverifikasi pesanan milik
// user yang login (otorisasi server-side). Frontend hanya
// menampilkan error dari API bila akses ditolak.
// ============================================================

// Data contoh untuk pengembangan visual — BUKAN data pesanan nyata.
const PESANAN_CONTOH = [
  {
    id: "demo-1",
    nomor: "TW-ORD-DEMO-001",
    eventNama: "Music Festival 2026",
    eventTanggal: "2026-12-20",
    eventWaktu: "16:00 WIB",
    venue: "Gelora Bung Karno, Jakarta",
    dibuatPada: "2026-10-20",
    status: "menunggu_pembayaran",
    statusPembayaran: "belum_bayar",
    metodePembayaran: null,
    batasBayar: "2026-10-22T23:59:59",
    instruksi: null,
    items: [
      { nama: "VIP", harga: 450000, jumlah: 2 },
    ],
  },
  {
    id: "demo-2",
    nomor: "TW-ORD-DEMO-002",
    eventNama: "Summer Sound Live",
    eventTanggal: "2026-12-28",
    eventWaktu: "19:00 WIB",
    venue: "Sabuga Convention Hall, Bandung",
    dibuatPada: "2026-10-15",
    status: "selesai",
    statusPembayaran: "lunas",
    metodePembayaran: "Transfer Bank",
    waktuBayar: "2026-10-15T14:32:00",
    batasBayar: null,
    instruksi: null,
    items: [
      { nama: "Reguler", harga: 200000, jumlah: 1 },
    ],
  },
];

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

export default function PesananDetailPage() {
  const { id } = useParams();
  const order = PESANAN_CONTOH.find((p) => String(p.id) === String(id));

  if (!order) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
            <AlertTriangle size={30} />
          </div>
          <h1 className="mt-5 text-xl font-black text-slate-900">
            Pesanan tidak ditemukan
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Pesanan ini tidak tersedia atau bukan milikmu.
          </p>
          <Link
            href="/user/pesanan"
            className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 font-bold text-white"
          >
            <ArrowLeft size={18} />
            Kembali ke Pesanan Saya
          </Link>
        </div>
      </div>
    );
  }

  const sp = STATUS_PESANAN[order.status] || { label: order.status, style: "bg-slate-100 text-slate-600" };
  const sb = STATUS_PEMBAYARAN[order.statusPembayaran] || { label: order.statusPembayaran, style: "bg-slate-100 text-slate-600" };
  const subtotal = order.items.reduce((a, i) => a + i.harga * i.jumlah, 0);

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <Link
        href="/user/pesanan"
        className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-cyan-600"
      >
        <ArrowLeft size={17} />
        Kembali ke Pesanan Saya
      </Link>

      <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            No. Pesanan
          </p>
          <h1 className="mt-1 font-mono text-2xl font-black text-slate-900">
            {order.nomor}
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Dibuat {formatTanggalSingkat(order.dibuatPada)}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className={`rounded-full px-4 py-2 text-sm font-bold ${sp.style}`}>
            {sp.label}
          </span>
          <span className={`rounded-full px-4 py-2 text-sm font-bold ${sb.style}`}>
            Pembayaran: {sb.label}
          </span>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Detail event + item */}
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-lg font-black text-slate-900">
              <Receipt size={19} className="text-cyan-600" />
              Detail Event
            </h2>

            <div className="mt-4 space-y-2.5 text-sm text-slate-600">
              <p className="font-black text-slate-900">{order.eventNama}</p>
              <p className="flex items-center gap-2.5">
                <CalendarDays size={16} className="text-cyan-600" />
                {formatTanggal(order.eventTanggal)}
              </p>
              <p className="flex items-center gap-2.5">
                <Clock size={16} className="text-cyan-600" />
                {order.eventWaktu}
              </p>
              <p className="flex items-center gap-2.5">
                <MapPin size={16} className="text-cyan-600" />
                {order.venue}
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-black text-slate-900">
              Rincian Tiket
            </h2>

            <div className="mt-4 space-y-3">
              {order.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4 text-sm"
                >
                  <div>
                    <p className="font-bold text-slate-900">{item.nama}</p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      {item.jumlah} tiket × {formatRupiah(item.harga)}
                    </p>
                  </div>
                  <p className="font-black text-slate-900">
                    {formatRupiah(item.harga * item.jumlah)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Instruksi pembayaran dari backend (jika ada) */}
          {order.instruksi && (
            <div className="rounded-3xl border border-cyan-200 bg-cyan-50 p-6">
              <h2 className="text-lg font-black text-cyan-900">
                Instruksi Pembayaran
              </h2>
              <p className="mt-3 text-sm leading-7 text-cyan-800">
                {order.instruksi}
              </p>
            </div>
          )}
        </div>

        {/* Ringkasan pembayaran */}
        <div className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-28">
          <h2 className="text-lg font-black text-slate-900">
            Pembayaran
          </h2>

          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between text-slate-600">
              <span>Subtotal</span>
              <span className="font-semibold text-slate-900">
                {formatRupiah(subtotal)}
              </span>
            </div>

            <div className="flex justify-between border-t border-slate-200 pt-3">
              <span className="font-bold text-slate-900">Total</span>
              <span className="text-lg font-black text-cyan-600">
                {formatRupiah(subtotal)}
              </span>
            </div>
          </div>

          <div className="mt-5 space-y-2.5 border-t border-slate-200 pt-5 text-sm text-slate-600">
            <p>
              <span className="font-semibold text-slate-800">Metode:</span>{" "}
              {order.metodePembayaran || "Belum dipilih"}
            </p>

            {order.waktuBayar && (
              <p>
                <span className="font-semibold text-slate-800">Dibayar:</span>{" "}
                {formatTanggal(order.waktuBayar)}
              </p>
            )}

            {order.batasBayar && (
              <p className="text-amber-700">
                <span className="font-semibold">Batas bayar:</span>{" "}
                {formatTanggal(order.batasBayar)}
              </p>
            )}
          </div>

          <p className="mt-5 rounded-2xl bg-slate-50 px-4 py-3 text-xs leading-5 text-slate-500">
            Data pesanan ini masih data contoh pengembangan. Endpoint
            GET /api/orders/:id belum tersedia di backend.
          </p>
        </div>
      </div>
    </div>
  );
}
