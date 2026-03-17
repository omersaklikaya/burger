import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    id: "burgerler",
    label: "Burgerler",
    image: "/images/burgers/bulls-burger.png",
  },
  {
    id: "atistirmaliklar",
    label: "Atıştırmalıklar",
    image: "/images/others/crispy-fries.png",
  },
  {
    id: "milkshake",
    label: "Shakeler",
    image: "/images/others/vanilla-classic-shake.jpg",
  },
  {
    id: "hot-doglar",
    label: "Hot Doglar",
    image: "/images/hotdogs/bulls-classic-dog.jpg",
  },
  {
    id: "tatlilar",
    label: "Tatlılar",
    image: "/images/others/brownie-parca-parca.jpg",
  },
  {
    id: "icecekler",
    label: "Soğuk İçecekler",
    image: "/images/drinks/coca-cola.jpg",
  },
];

export function MenuPreview() {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight inline-block relative">
          ÜRÜNLERİMİZ
        </h2>
        <div className="mt-3 h-1 w-full max-w-xs md:max-w-sm bg-red-600 mx-auto" />
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/menu#${cat.id}`}
            className="bg-white border-2 border-neutral-900 hover:border-red-600 transition-colors p-6 flex flex-col items-center shadow-[6px_6px_0_0_#000000]"
          >
            <div className="relative w-40 h-40 mb-4">
              <div className="absolute inset-0 border-[3px] border-neutral-900 rounded-sm -rotate-1" />
              <div className="absolute inset-1 bg-white rotate-1 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
            </div>
            <span className="mt-auto inline-block bg-red-600 text-white px-4 py-2 text-xs font-extrabold tracking-[0.2em] uppercase">
              {cat.label}
            </span>
          </Link>
        ))}
        <Link
          href="/menu"
          className="bg-white border-2 border-neutral-900 hover:border-red-600 transition-colors p-6 flex flex-col items-center justify-center shadow-[6px_6px_0_0_#000000] md:col-start-2"
        >
          <span className="bg-red-600 text-white px-4 py-2 text-xs font-extrabold tracking-[0.2em] uppercase">
            TÜM MENÜ
          </span>
        </Link>
      </div>
    </div>
  );
}

