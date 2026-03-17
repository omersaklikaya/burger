"use client";

import Link from "next/link";
import { useTranslations } from "@/i18n/useTranslations";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MenuPreview } from "@/components/MenuPreview";

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />
      <main className="flex-1">
        <Hero />
        <section id="menu-preview" className="max-w-6xl mx-auto px-4 py-16">
          <MenuPreview />
        </section>
        <section className="bg-neutral-50 border-y border-neutral-200">
          <div className="max-w-6xl mx-auto px-4 py-16 space-y-10">
            {/* Blok 1: metin + full height görsel sağda */}
            <div className="grid gap-0 md:grid-cols-2 items-stretch">
              <div className="bg-white border border-neutral-200 rounded-sm md:rounded-none md:rounded-l-sm shadow-[0_4px_16px_rgba(0,0,0,0.08)] px-6 md:px-10 py-10 flex flex-col gap-4">
                <div className="flex items-center justify-start">
                  <span className="relative inline-flex items-center justify-center">
                    <span className="w-7 h-7 border-2 border-red-600 rounded-full" />
                    <span className="absolute w-2 h-2 rounded-full bg-red-600" />
                    <span className="absolute bottom-[-6px] w-[2px] h-4 bg-red-600" />
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-hero tracking-[0.18em] uppercase text-red-600 mb-3">
                    Şubelerimizi Bul
                  </h2>
                  <p className="text-sm md:text-base text-neutral-800">
                    Sana en yakın Bulls Burger şubesini bul ve sıcak burgerleri yerinde dene.
                  </p>
                </div>
                <div>
                  <Link
                    href="/subeler"
                  className="inline-block border border-neutral-900 px-6 py-3 text-xs font-extrabold tracking-[0.22em] uppercase hover:bg-neutral-900 hover:text-white transition-colors"
                  >
                    ŞUBELERİ GÖR
                  </Link>
                </div>
              </div>
              <div className="h-64 md:h-full bg-[url('/images/others/hero-1.jpg')] bg-cover bg-center rounded-sm md:rounded-none md:rounded-r-sm" />
            </div>

            {/* Blok 2: full height görsel solda, metin sağda */}
            <div className="grid gap-0 md:grid-cols-2 items-stretch">
              <div className="h-64 md:h-full bg-[url('/images/others/hero-2.jpg')] bg-cover bg-center rounded-sm md:rounded-none md:rounded-l-sm" />
              <div className="bg-white border border-neutral-200 rounded-sm md:rounded-none md:rounded-r-sm shadow-[0_4px_16px_rgba(0,0,0,0.08)] px-6 md:px-10 py-10 flex flex-col gap-4">
                <div className="flex items-center justify-start">
                  <span className="relative inline-flex items-center justify-center">
                    <span className="w-7 h-7 border-2 border-red-600 rounded-full" />
                    <span className="absolute w-2 h-2 rounded-full bg-red-600" />
                    <span className="absolute bottom-[-6px] w-[2px] h-4 bg-red-600" />
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-hero tracking-[0.18em] uppercase text-red-600 mb-3">
                    Nasıl Hazırlıyoruz?
                  </h2>
                  <p className="text-sm md:text-base text-neutral-800">
                    Köfteleri sipariş anında smash ediyor, patatesleri her gün taze
                    kesiyor ve her tabakta aynı Bulls imzasını koruyoruz.
                  </p>
                </div>
                <div>
                  <Link
                    href="/hikayemiz"
                    className="inline-block border border-neutral-900 px-6 py-3 text-xs font-extrabold tracking-[0.22em] uppercase hover:bg-neutral-900 hover:text-white transition-colors"
                  >
                    HİKAYEMİZİ OKU
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

