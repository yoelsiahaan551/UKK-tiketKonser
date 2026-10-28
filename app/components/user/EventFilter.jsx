"use client";

import { Search, SlidersHorizontal } from "lucide-react";

// ============================================================
// EVENT SEARCH + FILTER — component khusus User
// Search nama event, filter kategori, filter lokasi, sorting.
// Saat backend belum ada: kategori/lokasi diambil dari data contoh.
// ============================================================

export default function EventFilter({
  search,
  onSearch,
  kategori,
  onKategori,
  daftarKategori,
  lokasi,
  onLokasi,
  daftarLokasi,
  urutan,
  onUrutan,
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      {/* Search */}
      <div className="relative">
        <Search
          size={19}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Cari nama event..."
          className="w-full rounded-2xl border border-slate-300 py-3.5 pl-12 pr-5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        {/* Kategori */}
        <select
          value={kategori}
          onChange={(e) => onKategori(e.target.value)}
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 outline-none transition focus:border-cyan-500"
        >
          {daftarKategori.map((k) => (
            <option key={k} value={k}>
              {k === "Semua" ? "Semua Kategori" : k}
            </option>
          ))}
        </select>

        {/* Lokasi */}
        <select
          value={lokasi}
          onChange={(e) => onLokasi(e.target.value)}
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 outline-none transition focus:border-cyan-500"
        >
          {daftarLokasi.map((l) => (
            <option key={l} value={l}>
              {l === "Semua" ? "Semua Lokasi" : l}
            </option>
          ))}
        </select>

        {/* Sorting */}
        <div className="flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-3">
          <SlidersHorizontal size={16} className="text-slate-500" />
          <select
            value={urutan}
            onChange={(e) => onUrutan(e.target.value)}
            className="bg-transparent text-sm font-semibold text-slate-700 outline-none"
          >
            <option value="terdekat">Tanggal Terdekat</option>
            <option value="termurah">Harga Terendah</option>
            <option value="termahal">Harga Tertinggi</option>
            <option value="nama">Nama A-Z</option>
          </select>
        </div>
      </div>
    </div>
  );
}
