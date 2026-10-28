"use client";

import { useMemo, useState } from "react";
import EventCard from "@/app/components/user/EventCard";
import EventFilter from "@/app/components/user/EventFilter";
import EmptyState from "@/app/components/user/EmptyState";
import { EVENTS, KATEGORI_EVENT, hargaMulaiDari } from "@/app/lib/events";
import { SearchX } from "lucide-react";

// ============================================================
// DAFTAR EVENT — /user/event
// Pencarian nama, filter kategori, filter lokasi, sorting.
// Data berasal dari app/lib/events.js (data contoh, belum ada
// backend). Saat backend siap: ganti sumber EVENTS dengan fetch
// GET /api/events?search=&kategori=&lokasi=&sort=.
// ============================================================

export default function EventListPage() {
  const [search, setSearch] = useState("");
  const [kategori, setKategori] = useState("Semua");
  const [lokasi, setLokasi] = useState("Semua");
  const [urutan, setUrutan] = useState("terdekat");
  const [tampil, setTampil] = useState(6);

  const daftarLokasi = useMemo(() => {
    const set = new Set(EVENTS.map((e) => e.lokasi));
    return ["Semua", ...Array.from(set)];
  }, []);

  const hasil = useMemo(() => {
    let data = EVENTS.filter((e) => {
      const cocokNama = e.nama.toLowerCase().includes(search.toLowerCase());
      const cocokKategori =
        kategori === "Semua" || e.kategori === kategori;
      const cocokLokasi = lokasi === "Semua" || e.lokasi === lokasi;
      return cocokNama && cocokKategori && cocokLokasi;
    });

    data = [...data].sort((a, b) => {
      if (urutan === "terdekat")
        return new Date(a.tanggal) - new Date(b.tanggal);
      if (urutan === "termurah")
        return hargaMulaiDari(a) - hargaMulaiDari(b);
      if (urutan === "termahal")
        return hargaMulaiDari(b) - hargaMulaiDari(a);
      if (urutan === "nama") return a.nama.localeCompare(b.nama);
      return 0;
    });

    return data;
  }, [search, kategori, lokasi, urutan]);

  const tampilData = hasil.slice(0, tampil);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      {/* Header */}
      <div className="mb-8">
        <span className="text-sm font-bold uppercase tracking-wider text-cyan-600">
          Jelajahi
        </span>
        <h1 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">
          Semua Event
        </h1>
        <p className="mt-3 max-w-xl leading-7 text-slate-500">
          Temukan konser, festival, dan event menarik lainnya.
          Saring berdasarkan kategori, lokasi, dan urutan.
        </p>
      </div>

      {/* Filter */}
      <EventFilter
        search={search}
        onSearch={setSearch}
        kategori={kategori}
        onKategori={setKategori}
        daftarKategori={KATEGORI_EVENT}
        lokasi={lokasi}
        onLokasi={setLokasi}
        daftarLokasi={daftarLokasi}
        urutan={urutan}
        onUrutan={setUrutan}
      />

      {/* Info jumlah hasil */}
      <p className="mt-6 text-sm font-semibold text-slate-500">
        {hasil.length} event ditemukan
      </p>

      {/* Grid hasil */}
      {tampilData.length === 0 ? (
        <div className="mt-6">
          <EmptyState
            icon={SearchX}
            judul="Event tidak ditemukan"
            deskripsi="Tidak ada event yang cocok dengan pencarian atau filtermu. Coba ubah kata kunci atau reset filter."
          />
        </div>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tampilData.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}

      {/* Load more */}
      {tampil < hasil.length && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setTampil(tampil + 6)}
            className="rounded-2xl border border-slate-300 bg-white px-8 py-3.5 font-bold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600"
          >
            Muat Lebih Banyak
          </button>
        </div>
      )}
    </div>
  );
}
