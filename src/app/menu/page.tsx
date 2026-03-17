"use client";

import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MenuList } from "@/components/MenuList";
import { PageHero } from "@/components/PageHero";

export default function MenuPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash?.slice(1);
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: "instant", block: "start" });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />
      <PageHero image="/images/hero-menu.jpg" title="MENÜ" />
      <div className="w-full border-b-[3px] border-[#cc0000]" style={{ borderBottom: "3px solid #cc0000" }} />
      <main className="flex-1 max-w-6xl mx-auto px-4 pt-16 pb-16">
        <MenuList />
      </main>
      <Footer />
    </div>
  );
}

