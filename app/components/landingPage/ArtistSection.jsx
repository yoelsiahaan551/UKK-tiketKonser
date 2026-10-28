"use client";

import { Music2, ArrowRight } from "lucide-react";

const artists = [
  {
    id: 1,
    name: "Coldplay",
    genre: "Alternative Rock",
    events: "12 Upcoming Events",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200",
  },
  {
    id: 2,
    name: "Bruno Mars",
    genre: "Pop",
    events: "8 Upcoming Events",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200",
  },
  {
    id: 3,
    name: "BLACKPINK",
    genre: "K-Pop",
    events: "15 Upcoming Events",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200",
  },
  {
    id: 4,
    name: "Imagine Dragons",
    genre: "Rock",
    events: "6 Upcoming Events",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=1200",
  },
];

export default function ArtistSection() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-cyan-600 font-bold">
            Top Artists
          </p>

          <h2 className="text-5xl font-black mt-3">
            Featured Artists
          </h2>

          <p className="text-slate-500 mt-5 max-w-2xl mx-auto">
            Meet the world's most popular artists performing at
            TicketWave events.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {artists.map((artist) => (

            <div
              key={artist.id}
              className="group relative rounded-[35px] overflow-hidden shadow-xl h-[500px]"
            >

              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute top-6 left-6">

                <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  TOP ARTIST
                </span>

              </div>

              <div className="absolute bottom-0 p-7 text-white w-full">

                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center mb-5">

                  <Music2 />

                </div>

                <h3 className="text-3xl font-black">
                  {artist.name}
                </h3>

                <p className="text-gray-300 mt-2">
                  {artist.genre}
                </p>

                <p className="text-cyan-300 mt-2">
                  {artist.events}
                </p>

                <button
                  className="mt-6 flex items-center gap-2 bg-white text-black rounded-full px-5 py-3 font-semibold group-hover:bg-cyan-500 group-hover:text-white transition"
                >
                  View Events
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}