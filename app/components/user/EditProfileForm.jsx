"use client";

import { useState } from "react";
import { Save, AlertCircle } from "lucide-react";

// ============================================================
// EDIT PROFILE FORM — component khusus User
// Form edit profil. onSubmit dipanggil parent; parent yang
// memutuskan apakah benar-benar menyimpan via API. Component
// hanya menangani state form + validasi sisi klien.
// ============================================================

export default function EditProfileForm({ user, onSubmit, saving }) {
  const [form, setForm] = useState({
    nama: user?.nama || "",
    email: user?.email || "",
    telepon: user?.telepon || "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.nama.trim()) e.nama = "Nama wajib diisi";
    if (!form.email.trim()) e.email = "Email wajib diisi";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Format email tidak valid";
    if (form.telepon && !/^[0-9+\-\s]{8,16}$/.test(form.telepon))
      e.telepon = "Nomor telepon tidak valid";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    onSubmit?.(form);
  };

  const inputClass =
    "w-full rounded-2xl border border-slate-300 px-5 py-3.5 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
    >
      <h3 className="text-lg font-black text-slate-900">
        Edit Profil
      </h3>
      <p className="mt-1 text-sm text-slate-500">
        Perubahan disimpan melalui API profile. Endpoint belum
        tersedia — tombol simpan akan menampilkan pesan bahwa
        backend belum siap.
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900">
            Nama Lengkap
          </label>
          <input
            type="text"
            value={form.nama}
            onChange={(e) => setForm({ ...form, nama: e.target.value })}
            className={inputClass}
          />
          {errors.nama && (
            <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-500">
              <AlertCircle size={13} />
              {errors.nama}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900">
            Email
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
          />
          {errors.email && (
            <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-500">
              <AlertCircle size={13} />
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900">
            Nomor Telepon
          </label>
          <input
            type="tel"
            value={form.telepon}
            onChange={(e) => setForm({ ...form, telepon: e.target.value })}
            placeholder="Opsional"
            className={inputClass}
          />
          {errors.telepon && (
            <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-500">
              <AlertCircle size={13} />
              {errors.telepon}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={saving}
        className="mt-7 flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 font-bold text-white shadow-lg shadow-cyan-200 transition hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
      >
        <Save size={18} />
        {saving ? "Menyimpan..." : "Simpan Perubahan"}
      </button>
    </form>
  );
}
