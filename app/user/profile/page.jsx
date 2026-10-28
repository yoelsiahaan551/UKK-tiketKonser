"use client";

import { useState } from "react";
import ProfileCard from "@/app/components/user/ProfileCard";
import EditProfileForm from "@/app/components/user/EditProfileForm";
import { ShieldAlert } from "lucide-react";

// ============================================================
// PROFIL — /user/profile
// Data profil berasal dari GET /api/auth/me — endpoint belum
// tersedia. Halaman menampilkan pesan jujur bahwa backend belum
// siap. Form edit tampil, tapi tombol simpan TIDAK mengklaim
// data tersimpan — menampilkan peringatan endpoint belum ada.
// ============================================================

export default function ProfilePage() {
  // null = data profil belum tersedia (GET /api/auth/me belum ada).
  // JANGAN mengisi nama/email palsu di sini.
  const [user] = useState(null);
  const [saving, setSaving] = useState(false);
  const [pesan, setPesan] = useState(null);

  const handleSave = async () => {
    setSaving(true);
    setPesan(null);

    // Endpoint PATCH /api/auth/me belum ada di backend.
    await new Promise((r) => setTimeout(r, 400));

    setPesan({
      tipe: "peringatan",
      teks:
        "Perubahan belum disimpan: endpoint PATCH /api/auth/me belum tersedia di backend.",
    });

    setSaving(false);
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-8">
        <span className="text-sm font-bold uppercase tracking-wider text-cyan-600">
          Akun
        </span>
        <h1 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">
          Profil Saya
        </h1>
      </div>

      {/* Status backend belum siap */}
      <div className="mb-8 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-800">
        <ShieldAlert size={18} className="mt-0.5 shrink-0" />
        <div>
          Data profil belum terhubung backend (GET /api/auth/me belum
          tersedia). Form di bawah sudah siap dan akan menyimpan via
          API begitu endpoint tersedia.
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
        {/* Kartu profil */}
        {user ? (
          <ProfileCard user={user} />
        ) : (
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-20 w-20 animate-pulse items-center justify-center rounded-2xl bg-slate-200" />
            <div className="mx-auto mt-5 h-5 w-36 animate-pulse rounded-lg bg-slate-200" />
            <div className="mx-auto mt-3 h-4 w-48 animate-pulse rounded-lg bg-slate-100" />
            <div className="mx-auto mt-8 h-4 w-56 animate-pulse rounded-lg bg-slate-100" />
            <div className="mx-auto mt-3 h-4 w-40 animate-pulse rounded-lg bg-slate-100" />
            <p className="mt-8 text-xs font-semibold text-slate-400">
              Menunggu data profil dari backend
            </p>
          </div>
        )}

        {/* Form edit */}
        <div className="space-y-5">
          {pesan && (
            <div
              className={`flex items-start gap-3 rounded-2xl border p-5 text-sm leading-6 ${
                pesan.tipe === "peringatan"
                  ? "border-amber-200 bg-amber-50 text-amber-800"
                  : "border-emerald-200 bg-emerald-50 text-emerald-700"
              }`}
            >
              <ShieldAlert size={18} className="mt-0.5 shrink-0" />
              {pesan.teks}
            </div>
          )}

          <EditProfileForm
            user={user || { nama: "", email: "", telepon: "" }}
            onSubmit={handleSave}
            saving={saving}
          />
        </div>
      </div>
    </div>
  );
}
