"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "Bagaimana cara membeli tiket?",
    answer:
      "Pilih event yang diinginkan, tentukan jumlah tiket, lakukan pembayaran, lalu e-ticket akan langsung tersedia pada akun Anda.",
  },
  {
    question: "Apakah tiket dapat direfund?",
    answer:
      "Setiap event memiliki kebijakan refund yang berbeda. Informasi refund dapat dilihat pada halaman detail event.",
  },
  {
    question: "Metode pembayaran apa saja yang tersedia?",
    answer:
      "Kami mendukung QRIS, Virtual Account, Transfer Bank, E-Wallet, serta Kartu Kredit.",
  },
  {
    question: "Bagaimana jika saya kehilangan e-ticket?",
    answer:
      "Anda dapat membuka kembali menu My Ticket atau menghubungi Customer Support untuk mendapatkan tiket kembali.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-28 bg-white">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-cyan-600 font-bold">
            FAQ
          </p>

          <h2 className="text-5xl font-black mt-4 text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-600 mt-6">
            Temukan jawaban dari pertanyaan yang paling sering diajukan.
          </p>

        </div>

        <div className="space-y-5">

          {faqData.map((faq, index) => (

            <div
              key={index}
              className="rounded-3xl border border-slate-200 overflow-hidden shadow-sm"
            >

              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                className="w-full flex justify-between items-center p-7 hover:bg-slate-50 transition"
              >

                <h3 className="text-xl font-semibold text-left text-slate-900">
                  {faq.question}
                </h3>

                {active === index ? (
                  <Minus className="text-cyan-600" />
                ) : (
                  <Plus className="text-slate-600" />
                )}

              </button>

              {active === index && (

                <div className="px-7 pb-7">

                  <p className="text-slate-700 leading-8">
                    {faq.answer}
                  </p>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}