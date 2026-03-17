"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";

type Mode = "login" | "register";

interface Props {
  mode: Mode;
}

export function AuthForm({ mode }: Props) {
  const [loading, setLoading] = useState(false);
  const isLogin = mode === "login";

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Burada Fireback Studio auth endpoint'lerine istek atacağız.
    // Şimdilik sadece sahte bir bekleme bırakıyoruz.
    await new Promise((res) => setTimeout(res, 600));
    setLoading(false);
  }

  return (
    <div>
      <h1 className="text-4xl font-display tracking-tight mb-6">
        {isLogin ? "Giriş Yap" : "Üye Ol"}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white border-2 border-neutral-900 p-5 shadow-[10px_10px_0_0_#000000]"
      >
        {!isLogin && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Ad</label>
              <input
                required
                name="firstName"
                className="w-full border-2 border-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Soyad</label>
              <input
                required
                name="lastName"
                className="w-full border-2 border-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
          </div>
        )}
        <div>
          <label className="block text-sm font-medium mb-1">E-posta</label>
          <input
            required
            type="email"
            name="email"
            className="w-full border-2 border-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Şifre</label>
          <input
            required
            type="password"
            name="password"
            className="w-full border-2 border-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-600 text-white py-3 text-sm font-extrabold tracking-[0.22em] uppercase hover:bg-red-700 transition-colors disabled:opacity-60 shadow-[6px_6px_0_0_#000000]"
        >
          {loading
            ? "Gönderiliyor..."
            : isLogin
            ? "Giriş Yap"
            : "Üye Ol"}
        </button>
      </form>
      <p className="text-xs text-neutral-600 mt-4">
        {isLogin ? (
          <>
            Hesabın yok mu?{" "}
            <Link href="/register" className="text-red-600 font-semibold">
              Üye ol
            </Link>
          </>
        ) : (
          <>
            Zaten üye misin?{" "}
            <Link href="/login" className="text-red-600 font-semibold">
              Giriş yap
            </Link>
          </>
        )}
      </p>
    </div>
  );
}

