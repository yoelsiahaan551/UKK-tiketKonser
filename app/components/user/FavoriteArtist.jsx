import Link from "next/link";
import { ArrowRight, Heart, Music2 } from "lucide-react";

const artists = [
  {
    id: 1,
    name: "Pamungkas",
    genre: "Indie Pop",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Rich Brian",
    genre: "Hip Hop",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "NIKI",
    genre: "Pop / R&B",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Tulus",
    genre: "Pop",
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=800&q=80",
  },
];

export default function FavoriteArtist() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-600">
              <Music2 size={17} />
              Popular Artist
            </div>

            <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">
              Artis Favorit Minggu Ini
            </h2>

            <p className="mt-3 max-w-xl leading-7 text-slate-500">
              Temukan artis favoritmu dan jangan lewatkan event mereka
              yang akan datang.
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

        {/* Artist Grid */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />

                {/* Favorite Button */}
                <button
                  type="button"
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition hover:scale-110 hover:text-red-500"
                >
                  <Heart size={18} />
                </button>

                {/* Artist Info */}
                <div className="absolute bottom-0 left-0 w-full p-5">
                  <p className="text-lg font-black text-white">
                    {artist.name}
                  </p>

                  <p className="mt-1 text-sm text-slate-300">
                    {artist.genre}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}