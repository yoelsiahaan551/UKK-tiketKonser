"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthLayout from "@/app/components/auth/AuthLayout";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Untuk sementara tanpa backend
    // Setelah klik Login langsung masuk ke halaman user
    router.push("/user/home");
  };

  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Login untuk melanjutkan ke akun TicketWave kamu."
    >
      <form
        className="space-y-5"
        onSubmit={handleLogin}
      >
        {/* Email */}

        <div>
          <label className="mb-2 block font-semibold text-slate-900">
            Email
          </label>

          <input
            type="email"
            placeholder="you@example.com"
            required
            className="w-full rounded-2xl border border-slate-300 px-5 py-4 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
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
            required
            className="w-full rounded-2xl border border-slate-300 px-5 py-4 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
          />
        </div>

        {/* Remember */}

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-slate-700">
            <input type="checkbox" />
            Remember me
          </label>

          <Link
            href="#"
            className="text-cyan-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Button */}

        <button
          type="submit"
          className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-bold text-white transition hover:scale-[1.02]"
        >
          Login
        </button>

        {/* Register */}

        <p className="pt-2 text-center text-slate-700">
          Don't have an account?{" "}

          <Link
            href="/register"
            className="font-semibold text-cyan-600"
          >
            Register
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}