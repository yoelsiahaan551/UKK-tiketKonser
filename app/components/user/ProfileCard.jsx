"use client";

import { User, Mail, Phone } from "lucide-react";

// ============================================================
// PROFILE CARD — component khusus User
// Kartu profil di halaman /user/profile. Data dari props
// (parent mengambil dari API auth/me — belum tersedia, jadi
// parent menampilkan state belum tersedia).
// ============================================================

export default function ProfileCard({ user }) {
  if (!user) return null;

  const initials = (user.nama || "U")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Banner */}
      <div className="relative h-28 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
      </div>

      <div className="px-6 pb-6">
        {/* Avatar */}
        <div className="-mt-10 mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-white bg-gradient-to-br from-blue-600 to-cyan-500 text-2xl font-black text-white shadow-lg">
          {initials}
        </div>

        <h2 className="text-xl font-black text-slate-900">
          {user.nama}
        </h2>
        <p className="mt-0.5 text-sm text-slate-500">
          Anggota TicketWave
        </p>

        <div className="mt-6 space-y-3 border-t border-slate-100 pt-5 text-sm">
          <div className="flex items-center gap-3 text-slate-600">
            <Mail size={17} className="shrink-0 text-cyan-600" />
            <span className="truncate">{user.email}</span>
          </div>

          {user.telepon && (
            <div className="flex items-center gap-3 text-slate-600">
              <Phone size={17} className="shrink-0 text-cyan-600" />
              {user.telepon}
            </div>
          )}

          <div className="flex items-center gap-3 text-slate-600">
            <User size={17} className="shrink-0 text-cyan-600" />
            Bergabung {user.bergabung || "-"}
          </div>
        </div>
      </div>
    </div>
  );
}
