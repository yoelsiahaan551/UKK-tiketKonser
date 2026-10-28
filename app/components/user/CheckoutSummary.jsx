"use client";

// ============================================================
// CHECKOUT SUMMARY — component khusus User
// Ringkasan harga di halaman checkout. Subtotal, biaya layanan,
// dan total dihitung dari harga yang di-pass parent — harga final
// transaksi wajib dikonfirmasi backend (belum tersedia).
// ============================================================

import { formatRupiah } from "@/app/lib/events";

export default function CheckoutSummary({
  items = [],
  biayaLayanan = 0,
  diskon = 0,
  total,
}) {
  const subtotal = items.reduce(
    (acc, item) => acc + item.harga * item.jumlah,
    0
  );

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-black text-slate-900">
        Ringkasan Pembayaran
      </h3>

      <div className="mt-5 space-y-3.5">
        {items.map((item, i) => (
          <div
            key={item.id || i}
            className="flex items-center justify-between text-sm"
          >
            <div>
              <p className="font-semibold text-slate-800">
                {item.nama} × {item.jumlah}
              </p>
              <p className="text-xs text-slate-500">
                {formatRupiah(item.harga)} / tiket
              </p>
            </div>
            <span className="font-bold text-slate-900">
              {formatRupiah(item.harga * item.jumlah)}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 space-y-2.5 border-t border-slate-200 pt-5 text-sm">
        <div className="flex justify-between text-slate-600">
          <span>Subtotal</span>
          <span className="font-semibold text-slate-900">
            {formatRupiah(subtotal)}
          </span>
        </div>

        {biayaLayanan > 0 && (
          <div className="flex justify-between text-slate-600">
            <span>Biaya layanan</span>
            <span className="font-semibold text-slate-800">
              {formatRupiah(biayaLayanan)}
            </span>
          </div>
        )}

        {diskon > 0 && (
          <div className="flex justify-between text-emerald-600">
            <span>Diskon</span>
            <span className="font-semibold">
              -{formatRupiah(diskon)}
            </span>
          </div>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-5">
        <span className="font-bold text-slate-900">Total Pembayaran</span>
        <span className="text-xl font-black text-cyan-600">
          {formatRupiah(total)}
        </span>
      </div>

      <p className="mt-4 rounded-2xl bg-slate-50 px-4 py-3 text-xs leading-5 text-slate-500">
        Harga final akan dikonfirmasi ulang oleh server saat order dibuat.
        Integrasi pembayaran backend belum tersedia.
      </p>
    </div>
  );
}
