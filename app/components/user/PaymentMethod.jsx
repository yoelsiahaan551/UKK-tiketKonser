"use client";

import { Banknote, Store, Wallet } from "lucide-react";

// ============================================================
// PAYMENT METHOD — component khusus User
// Pilihan metode pembayaran di checkout. Ini HANYA UI.
// Tidak ada endpoint pembayaran di backend, jadi tidak ada
// metode yang benar-benar aktif — konfirmasi order akan
// menampilkan pesan bahwa pembayaran belum tersedia.
// ============================================================

const METHODS = [
  {
    id: "transfer_bank",
    nama: "Transfer Bank",
    deskripsi: "Verifikasi manual oleh admin",
    icon: Banknote,
  },
  {
    id: "virtual_account",
    nama: "Virtual Account",
    deskripsi: "Otomatis setelah bayar",
    icon: Wallet,
  },
  {
    id: "qris",
    nama: "QRIS",
    deskripsi: "Scan dari e-wallet apa saja",
    icon: Store,
  },
];

export default function PaymentMethod({ value, onChange }) {
  return (
    <div>
      <h3 className="text-lg font-black text-slate-900">
        Metode Pembayaran
      </h3>
      <p className="mt-1 text-sm text-slate-500">
        Integrasi pembayaran backend belum tersedia — pilihan di bawah
        belum memproses pembayaran sungguhan.
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {METHODS.map((m) => {
          const Icon = m.icon;
          const active = value === m.id;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => onChange(m.id)}
              className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition ${
                active
                  ? "border-cyan-500 bg-cyan-50 ring-2 ring-cyan-200"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                  active
                    ? "bg-gradient-to-br from-blue-600 to-cyan-500 text-white"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                <Icon size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  {m.nama}
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  {m.deskripsi}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
