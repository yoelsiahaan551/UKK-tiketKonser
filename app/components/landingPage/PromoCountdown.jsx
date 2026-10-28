"use client";

import { useEffect, useState } from "react";
import { TicketPercent, ArrowRight } from "lucide-react";

export default function PromoCountdown() {
  // Target promo (ubah sesuai kebutuhan)
  const targetDate = new Date("2026-12-31T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((distance / 1000) % 60)).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="py-28 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 overflow-hidden relative">

      {/* Glow */}
      <div className="absolute w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full -left-20 top-10"></div>
      <div className="absolute w-80 h-80 bg-blue-600/20 blur-[120px] rounded-full right-0 bottom-0"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-cyan-500/20 text-cyan-300 mb-8">

              <TicketPercent size={20} />

              FLASH SALE

            </div>

            <h2 className="text-6xl font-black text-white leading-tight">

              Save Up To

              <span className="block text-cyan-400">

                50% OFF

              </span>

            </h2>

            <p className="text-slate-300 mt-8 leading-8 text-lg">

              Dapatkan potongan harga spesial untuk konser,
              festival, olahraga, dan berbagai event favoritmu.
              Promo hanya berlaku dalam waktu terbatas.

            </p>

            <button className="mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-xl hover:scale-105 transition flex items-center gap-3">

              Claim Discount

              <ArrowRight size={20} />

            </button>

          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-6">

            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (

              <div
                key={item.label}
                className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[30px] p-10 text-center hover:border-cyan-400 transition"
              >

                <h2 className="text-6xl font-black text-white">
                  {item.value}
                </h2>

                <p className="text-cyan-300 mt-4 uppercase tracking-[3px]">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}