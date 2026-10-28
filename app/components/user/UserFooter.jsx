import Link from "next/link";
import { Ticket, Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

// ============================================================
// USER FOOTER — component khusus User
// Footer untuk halaman User. Mengambil gaya visual footer landing
// (bg gelap, ikon sosial) tapi linknya mengarah ke area User.
// Landing page tetap memakai Footer (landingPage) miliknya.
// ============================================================

export default function UserFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo + Deskripsi */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500">
                <Ticket size={22} />
              </div>
              <h2 className="text-2xl font-black">TicketWave</h2>
            </div>

            <p className="mt-5 leading-7 text-slate-400">
              Platform pembelian tiket konser, festival, olahraga,
              dan berbagai event terbesar di Indonesia.
            </p>

            <div className="mt-6 flex gap-3">
              {[FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn].map(
                (Icon, i) => (
                  <button
                    key={i}
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-cyan-500"
                  >
                    <Icon size={17} />
                  </button>
                )
              )}
            </div>
          </div>

          {/* Navigasi User */}
          <div>
            <h3 className="mb-5 text-lg font-bold">Menu</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="/user/home" className="transition hover:text-cyan-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/user/event" className="transition hover:text-cyan-400">
                  Event
                </Link>
              </li>
              <li>
                <Link href="/user/ticket" className="transition hover:text-cyan-400">
                  Tiket Saya
                </Link>
              </li>
              <li>
                <Link href="/user/pesanan" className="transition hover:text-cyan-400">
                  Pesanan Saya
                </Link>
              </li>
              <li>
                <Link href="/" className="transition hover:text-cyan-400">
                  Halaman Utama
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="mb-5 text-lg font-bold">Kontak</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="shrink-0 text-cyan-500" />
                Jakarta, Indonesia
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-cyan-500" />
                support@ticketwave.id
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-cyan-500" />
                +62 812 3456 7890
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between border-t border-slate-800 pt-7 text-slate-500 md:flex-row">
          <p>© 2026 TicketWave. All rights reserved.</p>
          <p>Semua transaksi aman dan terenkripsi.</p>
        </div>
      </div>
    </footer>
  );
}
