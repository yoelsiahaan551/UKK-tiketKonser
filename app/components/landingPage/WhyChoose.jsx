"use client";

import {
  ShieldCheck,
  Ticket,
  CreditCard,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "100% Secure",
    desc: "Semua transaksi dienkripsi dan dilindungi dengan sistem keamanan modern.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: Ticket,
    title: "Official Ticket",
    desc: "Tiket resmi langsung dari promotor tanpa risiko tiket palsu.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: CreditCard,
    title: "Easy Payment",
    desc: "Mendukung QRIS, Virtual Account, E-Wallet, dan Kartu Kredit.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Customer service siap membantu kapan pun dibutuhkan.",
    color: "from-purple-500 to-indigo-600",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-28 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-cyan-600 uppercase tracking-[6px] font-bold">
            WHY US
          </span>

          <h2 className="text-5xl font-black mt-4">
            Why Choose TicketWave?
          </h2>

          <p className="text-slate-500 mt-6 max-w-2xl mx-auto">
            Kami menghadirkan pengalaman membeli tiket yang cepat,
            aman, dan nyaman untuk semua jenis event.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {features.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="bg-white rounded-[32px] p-8 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-500 group"
              >

                <div
                  className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${item.color}
                  flex items-center justify-center text-white shadow-xl`}
                >

                  <Icon size={34} />

                </div>

                <h3 className="text-2xl font-bold mt-8">
                  {item.title}
                </h3>

                <p className="text-slate-500 mt-5 leading-8">
                  {item.desc}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}