"use client";

import {
  Calendar,
  Clock,
  MapPin,
  Ticket,
  Star,
  ArrowRight,
} from "lucide-react";

export default function FeaturedEvent() {
  return (
    <section className="py-28 bg-slate-950 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}

          <div className="relative group">

            <div className="absolute inset-0 bg-cyan-500 blur-[120px] opacity-25 rounded-full"></div>

            <img
              src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1400"
              alt="Coldplay"
              className="relative rounded-[35px] shadow-2xl group-hover:scale-105 duration-700 transition"
            />

            {/* Floating Rating */}

            <div className="absolute top-6 left-6 bg-white rounded-2xl shadow-xl px-5 py-4">

              <div className="flex items-center gap-2">

                <Star
                  fill="#FFD700"
                  color="#FFD700"
                  size={18}
                />

                <span className="font-bold">
                  4.9
                </span>

              </div>

              <p className="text-gray-500 text-sm">
                18K Reviews
              </p>

            </div>

            {/* Floating Ticket */}

            <div className="absolute bottom-6 right-6 bg-cyan-500 text-white rounded-2xl px-5 py-4 shadow-xl">

              <Ticket />

              <h2 className="font-bold mt-2">
                1,248 Left
              </h2>

            </div>

          </div>

          {/* CONTENT */}

          <div>

            <span className="bg-cyan-500/20 text-cyan-300 px-5 py-2 rounded-full">

              FEATURED EVENT

            </span>

            <h2 className="text-6xl font-black text-white mt-8 leading-tight">

              Coldplay

              <span className="block text-cyan-400">

                Music Of The Spheres

              </span>

            </h2>

            <p className="text-gray-400 mt-8 leading-8">

              Experience one of the biggest concerts in the world.
              Enjoy spectacular visuals, immersive sound,
              and unforgettable moments together.

            </p>

            {/* INFO */}

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800">

                <Calendar className="text-cyan-400" />

                <p className="text-gray-400 mt-3">

                  Date

                </p>

                <h3 className="text-white font-bold">

                  24 August 2026

                </h3>

              </div>

              <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800">

                <Clock className="text-cyan-400" />

                <p className="text-gray-400 mt-3">

                  Time

                </p>

                <h3 className="text-white font-bold">

                  19:30 WIB

                </h3>

              </div>

              <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800">

                <MapPin className="text-cyan-400" />

                <p className="text-gray-400 mt-3">

                  Venue

                </p>

                <h3 className="text-white font-bold">

                  JIS Jakarta

                </h3>

              </div>

              <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800">

                <Ticket className="text-cyan-400" />

                <p className="text-gray-400 mt-3">

                  Price

                </p>

                <h3 className="text-cyan-400 font-bold text-xl">

                  Rp399.000

                </h3>

              </div>

            </div>

            {/* Countdown */}

            <div className="mt-10">

              <div className="flex justify-between mb-2">

                <span className="text-gray-400">

                  Ticket Remaining

                </span>

                <span className="text-cyan-400">

                  78%

                </span>

              </div>

              <div className="h-3 rounded-full bg-slate-800 overflow-hidden">

                <div className="w-[78%] h-full bg-gradient-to-r from-cyan-500 to-blue-600"></div>

              </div>

            </div>

            {/* BUTTON */}

            <div className="flex gap-5 mt-12">

              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-xl hover:scale-105 transition">

                Book Ticket

              </button>

              <button className="px-8 py-4 rounded-full border border-slate-700 text-white hover:bg-white hover:text-black transition flex items-center gap-2">

                Learn More

                <ArrowRight size={18} />

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}