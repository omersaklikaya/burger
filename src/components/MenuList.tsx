"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products as staticProducts, type Product } from "@/data/products";
import { collection, getDocs } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";

type MenuItem = Product;

export function MenuList() {
  const [items, setItems] = useState<MenuItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      try {
        const snap = await getDocs(collection(getFirebaseDb(), "menuItems"));
        const fromDb = snap.docs.map((d) => d.data() as MenuItem).filter((x) => x && typeof x.slug === "string");
        if (cancelled) return;
        // If Firestore is empty, keep static fallback.
        setItems(fromDb.length ? fromDb : staticProducts);
      } catch (e) {
        if (cancelled) return;
        setError("Menü şu an yüklenemedi. Lütfen biraz sonra tekrar dene.");
        setItems(staticProducts);
      }
    }
    void run();
    return () => {
      cancelled = true;
    };
  }, []);

  const resolvedItems = items ?? staticProducts;

  const groups = useMemo(
    () =>
      resolvedItems.reduce<Record<string, MenuItem[]>>((acc, item) => {
        (acc[item.category] ??= []).push(item);
        return acc;
      }, {}),
    [resolvedItems]
  );

  const orderedCategories = [
    "Burgerler",
    "Hot Doglar",
    "Atıştırmalıklar",
    "Milkshake",
    "Tatlılar",
    "İçecekler",
  ].filter((c) => groups[c]?.length);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const update = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        // Masaüstünde tüm kategoriler açık olsun; `isMobile` false iken koşul zaten her kategoriyi gösteriyor.
        setOpenCategories([]);
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [orderedCategories.length]);

  const idMap: Record<string, string> = {
    Burgerler: "burgerler",
    "Hot Doglar": "hot-doglar",
    Atıştırmalıklar: "atistirmaliklar",
    Milkshake: "milkshake",
    Tatlılar: "tatlilar",
    İçecekler: "icecekler",
  };

  const labelMap: Record<string, string> = {
    Burgerler: "Burgerler",
    "Hot Doglar": "Hot Doglar",
    Atıştırmalıklar: "Atıştırmalıklar",
    Milkshake: "Shakeler",
    Tatlılar: "Tatlılar",
    İçecekler: "Soğuk İçecekler",
  };

  return (
    <div>
      {error && (
        <div className="mb-6 bg-white border-2 border-neutral-900 shadow-[6px_6px_0_0_#000000] p-4 text-sm text-neutral-800">
          {error}
        </div>
      )}
      <div className="space-y-12">
        {orderedCategories.map((category) => (
          <section
            key={category}
            id={idMap[category] ?? category.toLowerCase().replace(/\s+/g, "-")}
            className="scroll-mt-40"
          >
            <button
              type="button"
              className="w-full flex items-center justify-between mb-4 border-b border-neutral-800 pb-2"
              onClick={() => {
                if (!isMobile) return;
                setOpenCategories((prev) =>
                  prev.includes(category)
                    ? prev.filter((c) => c !== category)
                    : [...prev, category]
                );
              }}
            >
              <h2 className="text-2xl font-semibold tracking-tight uppercase text-left">
                {labelMap[category] ?? category}
              </h2>
              <span className="text-xl font-extrabold">
                {isMobile && openCategories.includes(category) ? "−" : "+"}
              </span>
            </button>
            {(!isMobile || openCategories.includes(category)) && (
              <div className="grid gap-4 md:gap-6 md:grid-cols-2">
                {groups[category].map((item) => (
                  <Link
                    key={item.slug}
                    href={`/menu/${item.slug}`}
                    className="bg-white border-2 border-neutral-900 hover:border-red-600 transition-colors p-4 flex gap-4 shadow-[6px_6px_0_0_#000000]"
                  >
                    <div className="w-24 md:w-28 shrink-0">
                      <div className="relative aspect-square bg-white border-2 border-neutral-900 overflow-hidden">
                        {item.image && (
                          <Image
                            src={item.image}
                            alt={item.name.tr}
                            fill
                            sizes="96px"
                            className="object-cover"
                          />
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline gap-4 mb-1">
                        <h3 className="text-base md:text-lg font-semibold uppercase tracking-wide">
                          {item.name.tr}
                        </h3>
                        <span className="text-sm font-extrabold text-red-700 whitespace-nowrap">
                          {item.price.toFixed(2)} TL
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-neutral-700 line-clamp-3">
                        {item.description.tr}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

