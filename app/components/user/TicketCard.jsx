"use client";

import { CalendarDays, MapPin, Clock } from "lucide-react";
import { formatTanggal } from "@/app/lib/events";

// ============================================================
// TICKET CARD — component khusus User
// Menampilkan 1 tiket milik pengguna. Data tiket diambil dari
// props (parent). Kode tiket berasal dari backend, bukan digenerate
// di frontend. QR belum didukung backend sehingga belum ditampilkan.
// ============================================================

const STATUS_STYLE = {
  aktif: "bg-cyan-100 text-cyan-700",
  digunakan: "bg-slate-100 text-slate-500",
  batal: "bg-red-100 text-red-600",
};

const STATUS_LABEL = {
  aktif: "Berlaku",
  digunakan: "Sudah Digunakan",
  batal: "Dibatalkan",
};

export default function TicketCard({ ticket }) {
  if (!ticket) return null;

  const status = ticket.status || "aktif";
  const style = STATUS_STYLE[status] || STATUS_STYLE.aktif;

  return (
    <div
      className={`overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-lg ${
        status === "batal" ? "opacity-70" : ""
      }`}
    >
      <div className="flex flex-col sm:flex-row">
        {/* Event image */}
        <div className="relative h-40 shrink-0 sm:h-auto sm:w-52">
          <img
            src={ticket.gambar}
            alt={ticket.eventNama}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-black text-slate-900">
                {ticket.eventNama}
              </h3>
              <p className="mt-1 text-sm font-semibold text-cyan-600">
                {ticket.kategoriTiket}
              </p>
            </div>

            <span
              className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold ${style}`}
            >
              {STATUS_LABEL[status] || status}
            </span>
          </div>

          <div className="mt-4 grid gap-2.5 text-sm text-slate-500 sm:grid-cols-2">
            <div className="flex items-center gap-2.5">
              <CalendarDays size={16} className="shrink-0 text-cyan-600" />
              {formatTanggal(ticket.tanggal)}
            </div>

            <div className="flex items-center gap-2.5">
              <Clock size={16} className="shrink-0 text-cyan-600" />
              {ticket.waktu}
            </div>

            <div className="flex items-center gap-2.5 sm:col-span-2">
              <MapPin size={16} className="shrink-0 text-cyan-600" />
              {ticket.lokasi}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
            <div>
              <p className="text-xs font-semibold text-slate-500">
                Kode Tiket
              </p>
              <p className="font-mono text-sm font-bold tracking-wider text-slate-900">
                {ticket.kode || "—"}
              </p>
            </div>

            <p className="text-xs text-slate-400">
              {status === "aktif"
                ? "Tunjukkan kode ini saat masuk venue."
                : status === "digunakan"
                ? "Tiket telah dipakai."
                : "Tiket tidak dapat digunakan."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
