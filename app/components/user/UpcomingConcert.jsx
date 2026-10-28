import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
} from "lucide-react";

const concerts = [
  {
    id: 1,
    title: "Music Festival 2026",
    date: "20 Desember 2026",
    location: "Jakarta",
    category: "Music Festival",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "Summer Sound Live",
    date: "28 Desember 2026",
    location: "Bandung",
    category: "Live Concert",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "Electronic Night",
    date: "05 Januari 2027",
    location: "Jakarta",
    category: "EDM",
    image:
      "https://images.unsplash.com/photo-1571266028243-d220c9c3b63d?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function UpcomingConcert() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-cyan-600">
              Upcoming Event
            </span>

            <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">
              Event yang Akan Datang
            </h2>

            <p className="mt-3 max-w-xl leading-7 text-slate-500">
              Jangan lewatkan konser dan event seru yang akan segera hadir.
              Pilih event favoritmu dan pesan tiketnya sekarang.
            </p>
          </div>

          <Link
            href="/user/event"
            className="flex w-fit items-center gap-2 font-bold text-cyan-600 transition hover:text-cyan-700"
          >
            Lihat Semua Event
            <ArrowRight size={18} />
          </Link>

        </div>

        {/* Event Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {concerts.map((concert) => (
            <Link
              key={concert.id}
              href={`/user/event/${concert.id}`}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">

                <img
                  src={concert.image}
                  alt={concert.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-800 shadow">
                  {concert.category}
                </span>

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-black text-slate-900 transition group-hover:text-cyan-600">
                  {concert.title}
                </h3>

                <div className="mt-5 space-y-3 text-sm text-slate-500">

                  <div className="flex items-center gap-3">
                    <CalendarDays
                      size={18}
                      className="text-cyan-600"
                    />

                    <span>{concert.date}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin
                      size={18}
                      className="text-cyan-600"
                    />

                    <span>{concert.location}</span>
                  </div>

                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

                  <span className="text-sm font-semibold text-slate-500">
                    Mulai dari
                  </span>

                  <span className="font-black text-cyan-600">
                    Rp150.000
                  </span>

                </div>

              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}