"use client";

import { Mail, ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-28 bg-slate-950 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 left-0 w-[450px] h-[450px] rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        <div className="rounded-[40px] bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 p-[1px]">

          <div className="rounded-[40px] bg-slate-900 px-10 py-16">

            <div className="grid lg:grid-cols-2 gap-10 items-center">

              {/* Left */}

              <div>

                <span className="uppercase tracking-[6px] text-cyan-400 font-bold">
                  NEWSLETTER
                </span>

                <h2 className="text-5xl font-black text-white mt-5 leading-tight">
                  Never Miss
                  <span className="block text-cyan-400">
                    Amazing Events
                  </span>
                </h2>

                <p className="text-slate-400 mt-6 leading-8">
                  Dapatkan informasi konser terbaru, promo eksklusif,
                  festival, dan event favorit langsung ke email kamu.
                </p>

              </div>

              {/* Right */}

              <div>

                <div className="bg-white rounded-full flex items-center p-2 shadow-2xl">

                  <Mail
                    className="ml-5 text-slate-400"
                    size={22}
                  />

                  <input
                    type="email"
                    placeholder="Enter your email..."
                    className="flex-1 px-5 py-4 outline-none rounded-full"
                  />

                  <button className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 font-semibold flex items-center gap-2 hover:scale-105 transition">

                    Subscribe

                    <ArrowRight size={18} />

                  </button>

                </div>

                <p className="text-slate-500 mt-5 text-sm">
                  By subscribing, you agree to receive promotional
                  emails from TicketWave.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}