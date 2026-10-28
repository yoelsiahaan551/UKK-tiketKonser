"use client";

import Link from "next/link";

export default function RegisterForm() {
  return (
    <form className="space-y-6">

      {/* Name */}

      <div>
        <label className="mb-2 block font-semibold text-slate-900">
          Full Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          className="h-14 w-full rounded-2xl border border-slate-300 px-5 outline-none transition-all focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
        />
      </div>

      {/* Email */}

      <div>
        <label className="mb-2 block font-semibold text-slate-900">
          Email Address
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          className="h-14 w-full rounded-2xl border border-slate-300 px-5 outline-none transition-all focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
        />
      </div>

      {/* Password */}

      <div>
        <label className="mb-2 block font-semibold text-slate-900">
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className="h-14 w-full rounded-2xl border border-slate-300 px-5 outline-none transition-all focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
        />
      </div>

      {/* Confirm Password */}

      <div>
        <label className="mb-2 block font-semibold text-slate-900">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className="h-14 w-full rounded-2xl border border-slate-300 px-5 outline-none transition-all focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
        />
      </div>

      {/* Terms */}

      <div className="flex items-center">
        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            className="h-4 w-4 rounded"
          />
          I agree to the{" "}
          <Link href="#" className="font-medium text-cyan-600 hover:text-cyan-700">
            Terms &amp; Conditions
          </Link>
        </label>
      </div>

      {/* Register */}

      <button
        className="h-14 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-[1.02]"
      >
        Register
      </button>

      {/* Login */}

      <p className="text-center text-slate-700">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-bold text-cyan-600"
        >
          Login
        </Link>
      </p>

    </form>
  );
}