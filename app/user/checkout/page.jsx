"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarDays, Clock, MapPin, ArrowLeft, ShieldAlert } from "lucide-react";
import CheckoutSummary from "@/app/components/user/CheckoutSummary";
import PaymentMethod from "@/app/components/user/PaymentMethod";
import EmptyState from "@/app/components/user/EmptyState";
import { formatTanggal, formatRupiah } from "@/app/lib/events";

// ============================================================
// CHECKOUT — /user/checkout
// Menerima pilihan tiket dari sessionStorage (diisi halaman
// detail event). PENTING: harga di sini masih harga frontend.
// Harga final wajib dikonfirmasi backend via POST /api/orders
// (endpoint belum ada). Konfirmasi pesanan saat ini hanya
// menampilkan status "butuh backend" — tidak mengarang
// keberhasilan pembayaran.
// ============================================================

export default function CheckoutPage() {
  // sessionStorage dibaca saat klik "Pilih Tiket" di detail event.
  // useState initializer hanya jalan di client setelah hydration guard.
  const [data, setData] = useState(null);
  const [ready, setReady] = useState(false);
  const [metode, setMetode] = useState("transfer_bank");
  const [submitting, setSubmitting] = useState(false);
  const [pesan, setPesan] = useState(null);

  if (typeof window !== "undefined" && !ready && !data) {
    const raw = sessionStorage.getItem("ticketwave_checkout");
    if (raw) {
      try {
        setData(JSON.parse(raw));
      } catch {
        setData(null);
      }
    }
    setReady(true);
  }

  const items = data?.items || [];
  const total = items.reduce((acc, i) => acc + i.harga * i.jumlah, 0);
  const totalTiket = items.reduce((acc, i) => acc + i.jumlah, 0);

  const konfirmasiPesanan = async () => {
    setSubmitting(true);
    setPesan(null);

    // Endpoint POST /api/orders belum ada di backend.
    // Tidak ada pembayaran yang diproses di sini.
    await new Promise((r) => setTimeout(r, 400));

    setPesan({
      tipe: "peringatan",
      teks:
        "Pesanan belum dapat dibuat: endpoint POST /api/orders belum tersedia di backend. " +
        "Setelah endpoint siap, harga dan stok akan divalidasi ulang oleh server di langkah ini.",
    });

    setSubmitting(false);
  };

  // Belum pilih tiket
  if (ready && !data) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16">
        <EmptyState
          judul="Belum ada tiket yang dipilih"
          deskripsi="Pilih event dan tiket terlebih dahulu untuk melanjutkan ke checkout."
          aksiLabel="Jelajahi Event"
          aksiHref="/user/event"
        />
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <Link
        href={`/user/event/${data.eventId}`}
        className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-cyan-600"
      >
        <ArrowLeft size={17} />
        Kembali ke Detail Event
      </Link>

      <h1 className="mt-6 text-3xl font-black text-slate-900 md:text-4xl">
        Checkout
      </h1>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        {/* Kiri: ringkasan event + metode */}
        <div className="space-y-8">
          {/* Ringkasan Event */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col sm:flex-row">
              <img
                src={data.gambar}
                alt={data.eventNama}
                className="h-40 w-full object-cover sm:h-auto sm:w-56"
              />

              <div className="p-6">
                <h2 className="text-xl font-black text-slate-900">
                  {data.eventNama}
                </h2>

                <div className="mt-4 space-y-2.5 text-sm text-slate-500">
                  <p className="flex items-center gap-2.5">
                    <CalendarDays size={16} className="text-cyan-600" />
                    {formatTanggal(data.eventTanggal)}
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Clock size={16} className="text-cyan-600" />
                    {data.eventWaktu}
                  </p>
                  <p className="flex items-center gap-2.5">
                    <MapPin size={16} className="text-cyan-600" />
                    {data.venue}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rincian item */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-black text-slate-900">
              Tiket Dipilih
            </h3>

            <div className="mt-5 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4"
                >
                  <div>
                    <p className="font-bold text-slate-900">
                      {item.nama}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      {item.jumlah} tiket ×{" "}
                      {formatRupiah(item.harga)}
                    </p>
                  </div>
                  <p className="font-black text-slate-900">
                    {formatRupiah(item.harga * item.jumlah)}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-slate-400">
              Total {totalTiket} tiket
            </p>
          </div>

          {/* Metode pembayaran */}
          <PaymentMethod value={metode} onChange={setMetode} />

          {/* Kode promo — mekanisme validasi promo belum didukung backend,
              jadi input tidak ditampilkan. */}
        </div>

        {/* Kanan: ringkasan harga */}
        <div className="h-fit space-y-5 lg:sticky lg:top-28">
          <CheckoutSummary items={items} total={total} />

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

          <button
            type="button"
            onClick={konfirmasiPesanan}
            disabled={submitting || totalTiket === 0}
            className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-bold text-white shadow-lg shadow-cyan-200 transition hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
          >
            {submitting
              ? "Memproses..."
              : `Konfirmasi Pesanan — ${formatRupiah(total)}`}
          </button>
        </div>
      </div>
    </div>
  );
}
