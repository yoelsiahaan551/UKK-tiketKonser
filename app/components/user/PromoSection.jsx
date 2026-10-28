import Link from "next/link";
import { ArrowRight, Sparkles, Ticket } from "lucide-react";

export default function PromoSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 px-8 py-12 shadow-xl md:px-14 md:py-16">

          {/* Decoration */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" />
          <div className="absolute -bottom-32 left-1/2 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">

            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                <Sparkles size={16} />
                Promo Spesial TicketWave
              </div>

              <h2 className="mt-6 max-w-2xl text-3xl font-black leading-tight text-white md:text-5xl">
                Dapatkan Diskon Hingga
                <span className="block text-cyan-200">
                  50% Untuk Event Pilihan
                </span>
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-blue-100">
                Jangan lewatkan kesempatan mendapatkan tiket event
                favorit dengan harga spesial. Promo terbatas untuk
                event-event pilihan.
              </p>

              <Link
                href="/user/event"
                className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 font-bold text-blue-700 transition hover:scale-[1.03] hover:shadow-lg"
              >
                Lihat Promo Event
                <ArrowRight size={19} />
              </Link>
            </div>

            {/* Promo Card */}
            <div className="relative">
              <div className="mx-auto max-w-sm rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">

                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-cyan-600">
                    <Ticket size={28} />
                  </div>

                  <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-cyan-950">
                    LIMITED
                  </span>
                </div>

                <p className="mt-8 text-sm font-semibold text-blue-100">
                  GUNAKAN KODE PROMO
                </p>

                <h3 className="mt-2 text-3xl font-black tracking-wider text-white">
                  WAVE50
                </h3>

                <div className="mt-6 border-t border-white/20 pt-5">
                  <p className="text-sm text-blue-100">
                    Diskon hingga
                  </p>

                  <p className="text-4xl font-black text-cyan-200">
                    50%
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}