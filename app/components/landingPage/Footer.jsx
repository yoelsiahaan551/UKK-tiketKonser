import { Ticket } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">

                <Ticket />

              </div>

              <h2 className="text-3xl font-black">
                TicketWave
              </h2>

            </div>

            <p className="text-slate-400 mt-6 leading-8">
              Platform pembelian tiket konser, festival,
              olahraga, dan berbagai event terbesar di Indonesia.
            </p>

            <div className="flex gap-4 mt-8">
  {[FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn].map(
    (Icon, i) => (
      <button
        key={i}
        className="w-12 h-12 rounded-full bg-slate-800 hover:bg-cyan-500 transition flex items-center justify-center"
      >
        <Icon size={20} />
      </button>
    )
  )}
</div>

          </div>

          {/* Company */}

          <div>

            <h3 className="font-bold text-xl mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>About Us</li>
              <li>Career</li>
              <li>Blog</li>
              <li>Press</li>

            </ul>

          </div>

          {/* Support */}

          <div>

            <h3 className="font-bold text-xl mb-6">
              Support
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>Help Center</li>
              <li>Refund Policy</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-bold text-xl mb-6">
              Contact
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>Jakarta, Indonesia</li>
              <li>support@ticketwave.id</li>
              <li>+62 812 3456 7890</li>

            </ul>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between text-slate-500">

          <p>
            © 2026 TicketWave. All rights reserved.
          </p>


        </div>

      </div>

    </footer>
  );
}