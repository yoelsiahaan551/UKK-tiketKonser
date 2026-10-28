"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthLayout from "@/app/components/auth/AuthLayout";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();

    router.push("/user/home");
  };

  return (
    <AuthLayout
      title="Create Your Account 🚀"
      subtitle="Daftar sekarang dan mulai temukan konser favoritmu."
    >
      <form
        onSubmit={handleRegister}
        className="space-y-3.5"
      >
        {/* Full Name */}
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-slate-900">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Your full name"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-slate-900">
            Email
          </label>

          <input
            type="email"
            placeholder="you@example.com"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
          />
        </div>

        {/* Password */}
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-slate-900">
            Password
          </label>

          <input
            type="password"
            placeholder="Create a password"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-slate-900">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm your password"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
          />
        </div>

        {/* Terms */}
        <label className="flex items-start gap-2 pt-1 text-xs leading-5 text-slate-600">
          <input
            type="checkbox"
            required
            className="mt-1"
          />

          <span>
            I agree to the{" "}
            <Link
              href="#"
              className="font-medium text-cyan-600 hover:underline"
            >
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link
              href="#"
              className="font-medium text-cyan-600 hover:underline"
            >
              Privacy Policy
            </Link>
          </span>
        </label>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3.5 font-bold text-white transition hover:scale-[1.02]"
        >
          Create Account
        </button>

        {/* Login */}
        <p className="pt-1 text-center text-sm text-slate-700">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-cyan-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}