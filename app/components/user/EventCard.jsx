"use client";

import Link from "next/link";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import {
  formatTanggalSingkat,
  formatRupiah,
  hargaMulaiDari,
} from "@/app/lib/events";

// ============================================================
// EVENT CARD — component khusus User
// Menampilkan 1 event: gambar, nama, tanggal, lokasi, harga mulai.
// Data event di-pass dari parent (home atau daftar event).
// ============================================================

export default function EventCard({ event }) {
  if (!event) return null;

  return (
    <Link
      href={`/user/event/${event.id}`}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={event.gambar}
          alt={event.nama}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-800 shadow">
          {event.kategori}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-black text-slate-900 transition group-hover:text-cyan-600">
          {event.nama}
        </h3>

        <div className="mt-4 space-y-2.5 text-sm text-slate-500">
          <div className="flex items-center gap-3">
            <CalendarDays size={17} className="shrink-0 text-cyan-600" />
            <span>{formatTanggalSingkat(event.tanggal)}</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={17} className="shrink-0 text-cyan-600" />
            <span className="truncate">{event.lokasi}</span>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
          <div>
            <p className="text-xs font-semibold text-slate-500">
              Mulai dari
            </p>
            <span className="font-black text-cyan-600">
              {formatRupiah(hargaMulaiDari(event))}
            </span>
          </div>

          <span className="flex items-center gap-1.5 rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-bold text-slate-700 transition group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white">
            Detail
            <ArrowRight size={15} />
          </span>
        </div>
      </div>
    </Link>
  );
}
