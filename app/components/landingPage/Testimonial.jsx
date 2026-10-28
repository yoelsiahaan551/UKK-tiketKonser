"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Michael Jordan",
    job: "Music Enthusiast",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500",
    review:
      "TicketWave membuat proses pembelian tiket menjadi sangat mudah. Saya mendapatkan tiket konser hanya dalam hitungan menit.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    job: "Content Creator",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500",
    review:
      "Interface sangat modern, pembayaran cepat, dan QR Ticket langsung masuk setelah transaksi selesai.",
  },
  {
    id: 3,
    name: "Kevin Hart",
    job: "Traveler",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500",
    review:
      "Pengalaman terbaik membeli tiket festival. Tidak ada kendala saat masuk venue dan semuanya berjalan lancar.",
  },
];

export default function Testimonial() {
  return (
    <section className="py-28 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[6px] text-cyan-400 font-bold">
            TESTIMONIAL
          </span>

          <h2 className="text-5xl font-black text-white mt-4">
            What People Say
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            Ribuan pengguna telah menggunakan TicketWave untuk membeli tiket
            konser, festival, olahraga, dan berbagai event lainnya.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (

            <div
              key={item.id}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-8 hover:-translate-y-3 hover:border-cyan-500 transition-all duration-500"
            >

              <div className="flex gap-1 mb-6">

                {[1,2,3,4,5].map((star)=>(
                  <Star
                    key={star}
                    size={18}
                    fill="#FFD700"
                    color="#FFD700"
                  />
                ))}

              </div>

              <p className="text-slate-300 leading-8 italic">
                "{item.review}"
              </p>

              <div className="flex items-center gap-4 mt-8">

                <img
                  src={item.image}
                  className="w-16 h-16 rounded-full object-cover border-2 border-cyan-500"
                  alt={item.name}
                />

                <div>

                  <h3 className="text-white font-bold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-slate-400">
                    {item.job}
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