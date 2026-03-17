"use client";

import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b-4 border-red-600 bg-black/95 sticky top-0 z-20 overflow-visible">
      <div className="max-w-6xl mx-auto px-4 pt-0 pb-2 md:py-3 flex items-center justify-start md:justify-between relative">
        {/* Logo (solda) */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-24 h-24 -mb-8 md:-mt-3 bg-red-600 text-white font-hero tracking-[0.2em] text-lg uppercase shadow-[8px_8px_0_0_#000000] flex items-center justify-center">
            BULLS
          </div>
        </Link>

        {/* Masaüstü nav */}
        <nav className="hidden md:flex items-center gap-8 md:gap-10 text-xs md:text-sm font-extrabold tracking-[0.18em] uppercase text-white ml-auto">
          <Link
            href="/menu"
            className="hover:text-red-400 transition-colors"
          >
            MENÜ
          </Link>
          <Link
            href="/hikayemiz"
            className="hover:text-red-400 transition-colors"
          >
            HİKAYEMİZ
          </Link>
          <Link
            href="/subeler"
            className="hover:text-red-400 transition-colors"
          >
            ŞUBELER
          </Link>
          <Link
            href="/sss"
            className="hover:text-red-400 transition-colors"
          >
            SSS
          </Link>
          <Link
            href="/kariyer"
            className="hover:text-red-400 transition-colors"
          >
            KARİYER
          </Link>
        </nav>

        {/* Mobil hamburger (sağ üstte) */}
        <button
          type="button"
          aria-label="Menüyü aç"
          className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-[3px] w-8 h-8 border-2 border-white bg-black text-white hover:bg-white hover:text-black transition-colors"
          onClick={() => setOpen(true)}
        >
          <span className="block w-5 h-[2px] bg-current" />
          <span className="block w-5 h-[2px] bg-current" />
          <span className="block w-5 h-[2px] bg-current" />
        </button>
      </div>

      {/* Mobil tam ekran menü (siyah arkaplan, sağdan kayarak gelir) */}
      <div
        className={`fixed inset-0 z-30 bg-black text-white flex flex-col transform transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
          <div className="border-b border-neutral-800">
            <div className="relative max-w-6xl mx-auto pr-4 py-2 flex items-center">
              {/* Görünmeyen logo: navbar ile aynı yükseklik için spacer */}
              <div className="flex items-center gap-3 -ml-12 md:-ml-24 opacity-0 pointer-events-none">
                <div className="w-24 h-24 -mb-8 bg-red-600 text-white font-hero tracking-[0.2em] text-lg uppercase shadow-[8px_8px_0_0_#000000] flex items-center justify-center">
                  BULLS
                </div>
              </div>
              {/* X butonu, hamburger ile tam aynı konum */}
              <button
                type="button"
                aria-label="Menüyü kapat"
                className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 border-2 border-white bg-black text-white hover:bg-white hover:text-black transition-colors"
                onClick={() => setOpen(false)}
              >
                <span className="relative block w-5 h-5">
                  <span className="absolute inset-1/2 block w-5 h-[2px] bg-current -translate-x-1/2 -translate-y-1/2 rotate-45" />
                  <span className="absolute inset-1/2 block w-5 h-[2px] bg-current -translate-x-1/2 -translate-y-1/2 -rotate-45" />
                </span>
              </button>
            </div>
          </div>

          <nav className="flex-1 flex flex-col text-center text-lg font-extrabold uppercase tracking-[0.2em] mt-10">
            <Link
              href="/menu"
              className="py-4 border-b border-neutral-800"
              onClick={() => setOpen(false)}
            >
              MENÜ
            </Link>
            <Link
              href="/hikayemiz"
              className="py-4 border-b border-neutral-800"
              onClick={() => setOpen(false)}
            >
              HİKAYEMİZ
            </Link>
            <Link
              href="/subeler"
              className="py-4 border-b border-neutral-800"
              onClick={() => setOpen(false)}
            >
              ŞUBELER
            </Link>
            <Link
              href="/sss"
              className="py-4 border-b border-neutral-800"
              onClick={() => setOpen(false)}
            >
              SSS
            </Link>
            <Link
              href="/kariyer"
              className="py-4 border-b border-neutral-800"
              onClick={() => setOpen(false)}
            >
              KARİYER
            </Link>
          </nav>

          <div className="border-t border-neutral-800 px-4 py-6 flex items-center justify-center">
            <div className="w-20 h-20 bg-red-600 text-white font-hero tracking-[0.2em] text-sm uppercase shadow-[0_6px_0_0_#000000] flex items-center justify-center">
              BULLS
            </div>
          </div>
        </div>
    </header>
  );
}

