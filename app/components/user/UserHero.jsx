import Link from "next/link";
import { ArrowRight, CalendarDays, Ticket, MapPin } from "lucide-react";

export default function UserHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      
      {/* Background Decoration */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative mx-auto grid min-h-[600px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        
        {/* Left Content */}
        <div className="max-w-2xl">
          
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            <Ticket size={16} />
            Temukan Event Favoritmu
          </div>

          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Nikmati Pengalaman Event
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Tanpa Batas
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            Temukan konser, festival, dan berbagai event menarik.
            Pesan tiket dengan mudah dan nikmati pengalaman terbaik
            bersama TicketWave.
          </p>

          {/* Button */}
          <div className="mt-8 flex flex-wrap gap-4">
            
            <Link
              href="/user/event"
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-bold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.03]"
            >
              Jelajahi Event
              <ArrowRight size={19} />
            </Link>

            <Link
              href="/user/ticket"
              className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              <Ticket size={19} />
              Ticket Saya
            </Link>

          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            
            <div>
              <p className="text-2xl font-black text-white">
                500+
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Event
              </p>
            </div>

            <div>
              <p className="text-2xl font-black text-white">
                50K+
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Pengguna
              </p>
            </div>

            <div>
              <p className="text-2xl font-black text-white">
                100+
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Kota
              </p>
            </div>

          </div>

        </div>

        {/* Right Content */}
        <div className="relative">
          
          {/* Event Card */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">
            
            <div className="relative h-[420px] overflow-hidden rounded-2xl">
              
              <img
                src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80"
                alt="Concert"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

              {/* Event Info */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-3 py-1 text-xs font-bold">
                  Trending Event
                </div>

                <h2 className="text-2xl font-black">
                  Music Festival 2026
                </h2>

                <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-200">
                  
                  <div className="flex items-center gap-2">
                    <CalendarDays size={17} />
                    20 Desember 2026
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={17} />
                    Jakarta
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Floating Ticket */}
          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:flex sm:items-center sm:gap-3">
            
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600">
              <Ticket size={21} />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">
                Tiket Aman
              </p>

              <p className="text-xs text-slate-500">
                Pesan dengan mudah
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}