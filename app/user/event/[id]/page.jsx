"use client";

import { useParams, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import Link from "next/link";
import {
  CalendarDays,
  Clock,
  MapPin,
  Building2,
  ArrowLeft,
  Minus,
  Plus,
  Ticket,
  AlertTriangle,
} from "lucide-react";
import {
  getEventById,
  formatTanggal,
  formatRupiah,
} from "@/app/lib/events";

// ============================================================
// DETAIL EVENT — /user/event/[id]
// Banner, info event, pilihan kategori tiket, pemilihan jumlah,
// ringkasan harga, tombol lanjut ke checkout.
// Data dari app/lib/events.js (contoh). Ketersediaan kuota
// wajib divalidasi ulang backend saat checkout (GET /api/events/:id
// dan validasi stok di POST /api/orders).
// ============================================================

export default function EventDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const event = useMemo(() => getEventById(id), [id]);

  const [pilihan, setPilihan] = useState({});

  if (!event) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
            <AlertTriangle size={30} />
          </div>
          <h1 className="mt-5 text-xl font-black text-slate-900">
            Event tidak ditemukan
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Event dengan ID ini tidak tersedia.
          </p>
          <Link
            href="/user/event"
            className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 font-bold text-white"
          >
            <ArrowLeft size={18} />
            Kembali ke Daftar Event
          </Link>
        </div>
      </div>
    );
  }

  const ubahJumlah = (tiketId, delta, sisa) => {
    setPilihan((prev) => {
      const next = Math.min(
        Math.max((prev[tiketId] || 0) + delta, 0),
        sisa
      );
      return { ...prev, [tiketId]: next };
    });
  };

  const itemDipilih = event.tiket
    .map((t) => ({ ...t, jumlah: pilihan[t.id] || 0 }))
    .filter((t) => t.jumlah > 0);

  const total = itemDipilih.reduce(
    (acc, t) => acc + t.harga * t.jumlah,
    0
  );

  const totalTiket = itemDipilih.reduce((acc, t) => acc + t.jumlah, 0);

  const lanjutCheckout = () => {
    if (totalTiket === 0) return;
    // Data pilihan dikirim lewat sessionStorage — checkout akan
    // memvalidasi ulang harga & stok lewat backend saat endpoint siap.
    sessionStorage.setItem(
      "ticketwave_checkout",
      JSON.stringify({
        eventId: event.id,
        eventNama: event.nama,
        eventTanggal: event.tanggal,
        eventWaktu: event.waktu,
        lokasi: event.lokasi,
        venue: event.venue,
        gambar: event.gambar,
        items: itemDipilih.map((t) => ({
          id: t.id,
          nama: t.nama,
          harga: t.harga,
          jumlah: t.jumlah,
        })),
      })
    );
    router.push("/user/checkout");
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      {/* Kembali */}
      <Link
        href="/user/event"
        className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-cyan-600"
      >
        <ArrowLeft size={17} />
        Kembali ke Daftar Event
      </Link>

      {/* Banner */}
      <div className="relative mt-6 h-64 overflow-hidden rounded-3xl md:h-96">
        <img
          src={event.gambar}
          alt={event.nama}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
          <span className="rounded-full bg-cyan-500 px-4 py-1.5 text-xs font-bold text-white">
            {event.kategori}
          </span>
          <h1 className="mt-4 text-3xl font-black text-white md:text-5xl">
            {event.nama}
          </h1>
        </div>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        {/* Info Event */}
        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5">
              <CalendarDays size={20} className="mt-0.5 shrink-0 text-cyan-600" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Tanggal
                </p>
                <p className="mt-1 text-sm font-bold text-slate-900">
                  {formatTanggal(event.tanggal)}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5">
              <Clock size={20} className="mt-0.5 shrink-0 text-cyan-600" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Waktu
                </p>
                <p className="mt-1 text-sm font-bold text-slate-900">
                  {event.waktu}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5">
              <MapPin size={20} className="mt-0.5 shrink-0 text-cyan-600" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Lokasi
                </p>
                <p className="mt-1 text-sm font-bold text-slate-900">
                  {event.venue}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5">
              <Building2 size={20} className="mt-0.5 shrink-0 text-cyan-600" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Penyelenggara
                </p>
                <p className="mt-1 text-sm font-bold text-slate-900">
                  {event.penyelenggara}
                </p>
              </div>
            </div>
          </div>

          {/* Deskripsi */}
          <div className="mt-8">
            <h2 className="text-xl font-black text-slate-900">
              Tentang Event
            </h2>
            <p className="mt-3 leading-8 text-slate-600">
              {event.deskripsi}
            </p>
          </div>
        </div>

        {/* Pilih Tiket */}
        <div className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-28">
          <h2 className="flex items-center gap-2 text-lg font-black text-slate-900">
            <Ticket size={20} className="text-cyan-600" />
            Pilih Tiket
          </h2>

          <div className="mt-5 space-y-4">
            {event.tiket.map((t) => {
              const habis = t.sisa <= 0;
              return (
                <div
                  key={t.id}
                  className={`rounded-2xl border p-4 ${
                    habis
                      ? "border-slate-200 bg-slate-50 opacity-70"
                      : "border-slate-200"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-bold text-slate-900">
                        {t.nama}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        {t.deskripsi}
                      </p>
                    </div>
                    <p className="shrink-0 font-black text-cyan-600">
                      {formatRupiah(t.harga)}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <p
                      className={`text-xs font-semibold ${
                        habis
                          ? "text-red-500"
                          : t.sisa <= 20
                          ? "text-amber-600"
                          : "text-emerald-600"
                      }`}
                    >
                      {habis
                        ? "Kuota habis"
                        : `Sisa ${t.sisa} tiket`}
                    </p>

                    {!habis && (
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => ubahJumlah(t.id, -1, t.sisa)}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 text-slate-600 transition hover:bg-slate-100"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-6 text-center text-sm font-bold text-slate-900">
                          {pilihan[t.id] || 0}
                        </span>
                        <button
                          type="button"
                          onClick={() => ubahJumlah(t.id, 1, t.sisa)}
                          className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white transition hover:scale-105"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Ringkasan */}
          <div className="mt-6 border-t border-slate-200 pt-5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900">Total</span>
              <span className="text-xl font-black text-cyan-600">
                {formatRupiah(total)}
              </span>
            </div>

            <button
              type="button"
              onClick={lanjutCheckout}
              disabled={totalTiket === 0}
              className="mt-5 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-bold text-white shadow-lg shadow-cyan-200 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
            >
              {totalTiket > 0
                ? `Lanjut ke Checkout (${totalTiket} tiket)`
                : "Pilih Tiket Terlebih Dahulu"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
