"use client";

import {
  Calendar,
  MapPin,
  ArrowRight,
  Star,
} from "lucide-react";

const events = [
  {
    id: 1,
    title: "Coldplay World Tour",
    city: "Jakarta",
    date: "24 Aug 2026",
    price: "Rp399K",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200",
  },
  {
    id: 2,
    title: "Bruno Mars Live",
    city: "Bandung",
    date: "30 Aug 2026",
    price: "Rp299K",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200",
  },
  {
    id: 3,
    title: "Summer Festival",
    city: "Bali",
    date: "12 Sep 2026",
    price: "Rp199K",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200",
  },
];

export default function TrendingEvents() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-14">

          <div>

            <p className="text-cyan-600 font-semibold uppercase tracking-widest">
              Trending
            </p>

            <h2 className="text-5xl font-black mt-2 text-slate-900">
              Popular Events
            </h2>

            <p className="text-slate-500 mt-4">
              Don't miss the hottest events this month.
            </p>

          </div>

          <button className="hidden md:flex items-center gap-2 rounded-full border px-6 py-3 hover:bg-slate-900 hover:text-white transition">
            View All
            <ArrowRight size={18} />
          </button>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {events.map((event) => (

            <div
              key={event.id}
              className="group bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500"
            >

              <div className="relative overflow-hidden">

                <img
                  src={event.image}
                  alt={event.title}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute top-5 left-5 bg-white rounded-full px-4 py-2 font-semibold shadow">
                  🔥 Trending
                </div>

                <div className="absolute bottom-5 right-5 bg-black/70 backdrop-blur text-white rounded-full px-4 py-2 flex items-center gap-2">
                  <Star size={16} fill="gold" color="gold" />
                  {event.rating}
                </div>

              </div>

              <div className="p-7">

                <h3 className="text-2xl font-bold text-slate-900">
                  {event.title}
                </h3>

                <div className="flex items-center gap-2 text-slate-500 mt-4">
                  <MapPin size={18} />
                  {event.city}
                </div>

                <div className="flex items-center gap-2 text-slate-500 mt-2">
                  <Calendar size={18} />
                  {event.date}
                </div>

                <div className="flex justify-between items-center mt-8">

                  <div>

                    <p className="text-slate-400 text-sm">
                      Starting From
                    </p>

                    <h2 className="text-3xl font-black text-blue-600">
                      {event.price}
                    </h2>

                  </div>

                  <button className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 hover:scale-105 transition">
                    Book Now
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}