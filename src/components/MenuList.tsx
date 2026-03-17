import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export function MenuList() {
  const groups = products.reduce<Record<string, typeof products>>(
    (acc, item) => {
      (acc[item.category] ??= []).push(item);
      return acc;
    },
    {}
  );

  const orderedCategories = [
    "Burgerler",
    "Hot Doglar",
    "Atıştırmalıklar",
    "Milkshake",
    "Tatlılar",
    "İçecekler",
  ].filter((c) => groups[c]?.length);

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
      <div className="space-y-12">
        {orderedCategories.map((category) => (
          <section
            key={category}
            id={idMap[category] ?? category.toLowerCase().replace(/\s+/g, "-")}
            className="scroll-mt-40"
          >
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="text-2xl font-semibold tracking-tight uppercase">
                {labelMap[category] ?? category}
              </h2>
              <div className="h-2 w-24 bg-red-600 border border-neutral-900" />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {groups[category].map((item) => (
                <Link
                  key={item.slug}
                  href={`/menu/${item.slug}`}
                  className="bg-white border-2 border-neutral-900 hover:border-red-600 transition-colors p-4 flex gap-4 shadow-[6px_6px_0_0_#000000]"
                >
                  <div className="w-28 shrink-0">
                    <div className="relative aspect-square bg-white border-2 border-neutral-900 overflow-hidden">
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.name.tr}
                          fill
                          sizes="112px"
                          className="object-cover"
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline gap-4 mb-1">
                      <h3 className="text-lg font-semibold uppercase tracking-wide">
                        {item.name.tr}
                      </h3>
                      <span className="text-sm font-extrabold text-red-700 whitespace-nowrap">
                        {item.price.toFixed(2)} TL
                      </span>
                    </div>
                    <p className="text-sm text-neutral-700 line-clamp-3">
                      {item.description.tr}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

