"use client";

import Link from "next/link";
import { Search, Ticket, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scroll
          ? "bg-white/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-3 font-bold text-2xl"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg">

            <Ticket className="text-white" size={22} />

          </div>

          <span
            className={`transition ${
              scroll ? "text-slate-900" : "text-white"
            }`}
          >
            TicketWave
          </span>

        </Link>

        {/* Menu Desktop */}

        <nav className="hidden lg:flex items-center gap-10">

          <Link
            href="/"
            className={`font-medium transition hover:text-cyan-500 ${
              scroll ? "text-slate-700" : "text-white"
            }`}
          >
            Home
          </Link>

          <Link
            href="/event"
            className={`font-medium transition hover:text-cyan-500 ${
              scroll ? "text-slate-700" : "text-white"
            }`}
          >
            Event
          </Link>

          <Link
            href="/ticket"
            className={`font-medium transition hover:text-cyan-500 ${
              scroll ? "text-slate-700" : "text-white"
            }`}
          >
            Ticket
          </Link>

          <Link
            href="/pesanan"
            className={`font-medium transition hover:text-cyan-500 ${
              scroll ? "text-slate-700" : "text-white"
            }`}
          >
            Pesanan Saya
          </Link>

        </nav>

        {/* Search */}

        <div className="hidden lg:flex items-center relative">

          <Search
            size={18}
            className="absolute left-4 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search event..."
            className="w-72 h-11 pl-11 pr-5 rounded-full bg-white shadow-md border outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />

        </div>

        {/* Button */}

        <div className="hidden lg:flex items-center gap-3">

          <Link
            href="/login"
            className={`px-5 py-2 rounded-full transition ${
              scroll
                ? "text-slate-700 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            Login
          </Link>

          <Link
            href="/register"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:scale-105 transition-all duration-300"
          >
            Register
          </Link>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden ${
            scroll ? "text-black" : "text-white"
          }`}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="lg:hidden bg-white shadow-2xl border-t">

          <div className="flex flex-col p-6 gap-5">

            <Link
              href="/"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/event"
              onClick={() => setOpen(false)}
            >
              Event
            </Link>

            <Link
              href="/ticket"
              onClick={() => setOpen(false)}
            >
              Ticket
            </Link>

            <Link
              href="/pesanan"
              onClick={() => setOpen(false)}
            >
              Pesanan Saya
            </Link>

            <hr />

            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="text-center rounded-xl border border-slate-300 py-3 font-semibold hover:bg-slate-100 transition"
            >
              Login
            </Link>

            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="text-center rounded-xl py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold"
            >
              Register
            </Link>

          </div>

        </div>

      )}

    </header>
  );
}