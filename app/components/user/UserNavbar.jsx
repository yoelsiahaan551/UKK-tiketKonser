"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Ticket,
  Menu,
  X,
  Bell,
  User,
  Settings,
  LogOut,
  ChevronDown,
  Home,
  CalendarDays,
  Receipt,
} from "lucide-react";

export default function UserNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const menus = [
    {
      name: "Home",
      href: "/user/home",
      icon: Home,
    },
    {
      name: "Event",
      href: "/user/event",
      icon: CalendarDays,
    },
    {
      name: "Tiket Saya",
      href: "/user/ticket",
      icon: Ticket,
    },
    {
      name: "Pesanan Saya",
      href: "/user/pesanan",
      icon: Receipt,
    },
  ];

  const isActive = (href) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  const handleLogout = () => {
    // Belum ada backend auth. Logout hanya membersihkan data lokal.
    if (typeof window !== "undefined") {
      sessionStorage.clear();
      localStorage.removeItem("ticketwave_user");
    }
    window.location.href = "/login";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link
          href="/user/home"
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-cyan-200">
            <Ticket className="text-white" size={22} />
          </div>

          <span className="text-xl font-black tracking-tight text-slate-900">
            TicketWave
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-1 md:flex">
          {menus.map((menu) => {
            const Icon = menu.icon;
            const active = isActive(menu.href);
            return (
              <Link
                key={menu.name}
                href={menu.href}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  active
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100 hover:text-cyan-600"
                }`}
              >
                <Icon size={16} />
                {menu.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Section */}
        <div className="hidden items-center gap-4 md:flex">
          
          {/* Notification */}
          <button
            type="button"
            className="relative flex h-11 w-11 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 hover:text-cyan-600"
            title="Notifikasi"
          >
            <Bell size={21} />
          </button>

          {/* Profile */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-3 rounded-xl px-2 py-2 transition hover:bg-slate-100"
            >
              {/* Avatar */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 font-bold text-white">
                U
              </div>

              <div className="hidden text-left lg:block">
                <p className="text-sm font-bold text-slate-800">
                  Pengguna
                </p>

                <p className="text-xs text-slate-500">
                  Pengguna
                </p>
              </div>

              <ChevronDown
                size={16}
                className={`text-slate-500 transition ${
                  profileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown */}
            {profileOpen && (
              <div className="absolute right-0 top-14 w-56 overflow-hidden rounded-2xl border border-slate-200 bg-white py-2 shadow-xl">
                
                <Link
                  href="/user/profile"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center gap-3 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  <User size={18} />
                  Profile Saya
                </Link>

                <Link
                  href="/user/settings"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center gap-3 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  <Settings size={18} />
                  Pengaturan
                </Link>

                <div className="my-2 border-t border-slate-100" />

                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 px-5 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-slate-700 hover:bg-slate-100 md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-1">
            {menus.map((menu) => {
              const Icon = menu.icon;
              const active = isActive(menu.href);
              return (
                <Link
                  key={menu.name}
                  href={menu.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    active
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                      : "text-slate-700 hover:bg-slate-100 hover:text-cyan-600"
                  }`}
                >
                  <Icon size={19} />
                  {menu.name}
                </Link>
              );
            })}

            <div className="my-3 border-t border-slate-200" />

            <Link
              href="/user/profile"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-slate-100"
            >
              <User size={19} />
              Profile Saya
            </Link>

            <Link
              href="/user/settings"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-slate-100"
            >
              <Settings size={19} />
              Pengaturan
            </Link>

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                handleLogout();
              }}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-left font-semibold text-red-500 hover:bg-red-50"
            >
              <LogOut size={19} />
              Logout
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}