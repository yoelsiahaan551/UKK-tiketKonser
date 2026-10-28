"use client";

import Link from "next/link";
import { Ticket } from "lucide-react";

export default function AuthLayout({
  children,
  title,
  subtitle,
}) {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2000"
        alt="Concert"
        className="absolute inset-0 h-full w-full object-cover"
      />


      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/85" />


      {/* Blur Effect */}
      <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-blue-700/20 blur-[120px]" />


      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-6">


        {/* Main Card */}
        <div className="grid w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl lg:grid-cols-2">


          {/* LEFT SIDE */}
          <div className="hidden lg:flex flex-col justify-center p-10">


            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600">

                <Ticket
                  size={25}
                  className="text-white"
                />

              </div>


              <div>

                <h2 className="text-2xl font-black text-white">
                  TicketWave
                </h2>


                <p className="text-sm text-slate-300">
                  Discover Amazing Events
                </p>

              </div>

            </Link>



            {/* Text */}
            <div className="mt-12">


              <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm text-cyan-300">

                #1 Ticket Platform

              </span>



              <h1 className="mt-6 text-4xl font-black leading-tight text-white">

                Book

                <span className="block text-cyan-400">
                  Amazing
                </span>

                Events

              </h1>



              <p className="mt-5 max-w-sm text-base leading-7 text-slate-300">

                Temukan konser, festival, olahraga dan berbagai
                event menarik dalam satu platform.

              </p>


            </div>


          </div>




          {/* RIGHT SIDE */}
          <div className="relative flex items-center justify-center bg-white">


            {/* Glow */}
            <div className="absolute h-64 w-64 rounded-full bg-cyan-300/30 blur-[100px]" />



            {/* Form */}
            <div className="relative z-10 w-full max-w-sm px-8 py-10">


              <h2 className="text-3xl font-black text-slate-900">

                {title}

              </h2>



              <p className="mt-2 text-sm text-slate-500">

                {subtitle}

              </p>



              <div className="mt-8">

                {children}

              </div>


            </div>


          </div>



        </div>


      </div>


    </section>
  );
}