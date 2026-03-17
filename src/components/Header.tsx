import Link from "next/link";
import { LanguageToggle } from "@/i18n/LanguageToggle";

export function Header() {
  return (
    <header className="border-b-4 border-red-600 bg-black/95 sticky top-0 z-20 overflow-visible">
      <div className="max-w-6xl mx-auto pr-4 py-2 md:py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 -ml-12 md:-ml-24">
          <div className="w-24 h-24 -mb-8 bg-red-600 text-white font-hero tracking-[0.2em] text-lg uppercase shadow-[8px_8px_0_0_#000000] flex items-center justify-center">
            BULLS
          </div>
        </Link>
        <nav className="flex items-center gap-8 md:gap-10 text-xs md:text-sm font-extrabold tracking-[0.18em] uppercase text-white">
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
          <Link
            href="/login"
            className="hover:text-red-400 transition-colors"
          >
            GİRİŞ
          </Link>
          <Link
            href="/register"
            className="bg-red-600 text-white px-3 py-2 text-[10px] md:text-xs uppercase tracking-[0.22em] hover:bg-red-700 transition-colors shadow-[4px_4px_0_0_#000000]"
          >
            ÜYE OL
          </Link>
          <LanguageToggle />
        </nav>
      </div>
    </header>
  );
}

