"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Lock,
  LogOut,
  ShieldAlert,
  Bell,
  User as UserIcon,
} from "lucide-react";

// ============================================================
// PENGATURAN — /user/settings
// Ubah password dan preferensi notifikasi BELUM didukung backend
// (endpoint POST /api/auth/password belum ada). UI tampil tapi
// setiap aksi menampilkan pesan bahwa backend belum siap —
// tidak ada yang mengklaim berhasil. Logout membersihkan
// penyimpanan lokal dan mengarah ke /login.
// ============================================================

export default function SettingsPage() {
  const router = useRouter();

  const [pwForm, setPwForm] = useState({
    lama: "",
    baru: "",
    konfirmasi: "",
  });
  const [pwError, setPwError] = useState(null);
  const [pwPesan, setPwPesan] = useState(null);
  const [pwSaving, setPwSaving] = useState(false);

  const [notif, setNotif] = useState({ emailPromo: true, pengingatEvent: true });

  const [konfirmasiLogout, setKonfirmasiLogout] = useState(false);

  const validasiPassword = () => {
    if (!pwForm.lama) return "Password lama wajib diisi";
    if (pwForm.baru.length < 8)
      return "Password baru minimal 8 karakter";
    if (pwForm.baru !== pwForm.konfirmasi)
      return "Konfirmasi password tidak cocok";
    return null;
  };

  const ubahPassword = async (e) => {
    e.preventDefault();
    const err = validasiPassword();
    if (err) {
      setPwError(err);
      return;
    }
    setPwError(null);
    setPwSaving(true);
    setPwPesan(null);

    // Endpoint POST /api/auth/password belum ada di backend.
    await new Promise((r) => setTimeout(r, 400));

    setPwPesan(
      "Perubahan password belum diproses: endpoint POST /api/auth/password belum tersedia di backend."
    );
    setPwSaving(false);
    setPwForm({ lama: "", baru: "", konfirmasi: "" });
  };

  const logout = () => {
    // Belum ada backend auth. Bersihkan penyimpanan lokal, lalu keluar.
    sessionStorage.clear();
    localStorage.removeItem("ticketwave_user");
    router.push("/login");
  };

  const inputClass =
    "w-full rounded-2xl border border-slate-300 px-5 py-3.5 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200";

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <div className="mb-8">
        <span className="text-sm font-bold uppercase tracking-wider text-cyan-600">
          Akun
        </span>
        <h1 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">
          Pengaturan
        </h1>
        <p className="mt-3 leading-7 text-slate-500">
          Kelola keamanan akun dan preferensimu.
        </p>
      </div>

      <div className="space-y-6">
        {/* Informasi akun */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="flex items-center gap-2.5 text-lg font-black text-slate-900">
            <UserIcon size={19} className="text-cyan-600" />
            Informasi Akun
          </h2>

          <div className="mt-5 space-y-3 text-sm">
            <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4">
              <span className="font-semibold text-slate-600">Status akun</span>
              <span className="rounded-full bg-cyan-100 px-3 py-1.5 text-xs font-bold text-cyan-700">
                Pengguna
              </span>
            </div>

            <p className="rounded-2xl bg-slate-50 px-5 py-4 text-xs leading-5 text-slate-500">
              Detail akun (nama, email) belum terhubung backend.
              Lihat dan ubah data profil di halaman{" "}
              <a href="/user/profile" className="font-bold text-cyan-600 hover:underline">
                Profil Saya
              </a>
              .
            </p>
          </div>
        </div>

        {/* Ubah password */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="flex items-center gap-2.5 text-lg font-black text-slate-900">
            <Lock size={19} className="text-cyan-600" />
            Ubah Password
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Endpoint POST /api/auth/password belum tersedia — form
            tampil tapi belum mengubah password sungguhan.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-900">
                Password Lama
              </label>
              <input
                type="password"
                value={pwForm.lama}
                onChange={(e) => setPwForm({ ...pwForm, lama: e.target.value })}
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-900">
                Password Baru
              </label>
              <input
                type="password"
                value={pwForm.baru}
                onChange={(e) => setPwForm({ ...pwForm, baru: e.target.value })}
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-900">
                Konfirmasi Password Baru
              </label>
              <input
                type="password"
                value={pwForm.konfirmasi}
                onChange={(e) =>
                  setPwForm({ ...pwForm, konfirmasi: e.target.value })
                }
                className={inputClass}
              />
            </div>
          </div>

          {pwError && (
            <p className="mt-4 rounded-2xl bg-red-50 px-5 py-3 text-sm font-medium text-red-600">
              {pwError}
            </p>
          )}

          {pwPesan && (
            <p className="mt-4 flex items-start gap-2 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-3 text-sm leading-6 text-amber-800">
              <ShieldAlert size={16} className="mt-0.5 shrink-0" />
              {pwPesan}
            </p>
          )}

          <button
            type="button"
            onClick={ubahPassword}
            disabled={pwSaving}
            className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 font-bold text-white shadow-lg shadow-cyan-200 transition hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
          >
            {pwSaving ? "Menyimpan..." : "Simpan Password Baru"}
          </button>
        </div>

        {/* Preferensi notifikasi */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="flex items-center gap-2.5 text-lg font-black text-slate-900">
            <Bell size={19} className="text-cyan-600" />
            Preferensi Notifikasi
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Endpoint preferensi notifikasi belum tersedia di backend —
            pengaturan ini belum aktif.
          </p>

          <div className="mt-5 space-y-3">
            {[
              {
                key: "emailPromo",
                label: "Promo dan penawaran spesial via email",
              },
              {
                key: "pengingatEvent",
                label: "Pengingat event yang akan datang",
              },
            ].map((item) => (
              <label
                key={item.key}
                className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-700"
              >
                {item.label}
                <input
                  type="checkbox"
                  checked={notif[item.key]}
                  onChange={(e) =>
                    setNotif({ ...notif, [item.key]: e.target.checked })
                  }
                  className="h-5 w-9 cursor-pointer appearance-none rounded-full bg-slate-300 transition checked:bg-cyan-500 relative before:absolute before:top-0.5 before:left-0.5 before:h-4 before:w-4 before:rounded-full before:bg-white before:transition checked:before:translate-x-4"
                />
              </label>
            ))}
          </div>
        </div>

        {/* Logout */}
        <div className="rounded-3xl border border-red-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="flex items-center gap-2.5 text-lg font-black text-slate-900">
            <LogOut size={19} className="text-red-500" />
            Keluar Akun
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Keluar dari akun TicketWave di perangkat ini.
          </p>

          {konfirmasiLogout ? (
            <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="text-sm font-bold text-red-700">
                Yakin ingin keluar dari akun?
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={logout}
                  className="rounded-xl bg-red-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-red-600"
                >
                  Ya, Keluar
                </button>
                <button
                  type="button"
                  onClick={() => setKonfirmasiLogout(false)}
                  className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-bold text-slate-600 transition hover:bg-slate-100"
                >
                  Batal
                </button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setKonfirmasiLogout(true)}
              className="mt-5 flex items-center gap-2 rounded-2xl border border-red-300 px-6 py-3.5 font-bold text-red-500 transition hover:bg-red-50"
            >
              <LogOut size={18} />
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
