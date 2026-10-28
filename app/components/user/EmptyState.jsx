"use client";

import { CalendarX } from "lucide-react";

// ============================================================
// EMPTY STATE — component khusus User
// Dipakai di halaman event, ticket, dan pesanan saat data kosong.
// ============================================================

export default function EmptyState({
  icon: Icon = CalendarX,
  judul,
  deskripsi,
  aksiLabel,
  aksiHref,
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
        <Icon size={30} />
      </div>

      <h3 className="mt-5 text-lg font-black text-slate-900">
        {judul}
      </h3>

      {deskripsi && (
        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
          {deskripsi}
        </p>
      )}

      {aksiLabel && aksiHref && (
        <a
          href={aksiHref}
          className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 font-bold text-white shadow-lg shadow-cyan-200 transition hover:scale-[1.03]"
        >
          {aksiLabel}
        </a>
      )}
    </div>
  );
}
