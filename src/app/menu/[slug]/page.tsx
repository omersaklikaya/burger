import { notFound } from "next/navigation";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { products } from "@/data/products";

interface Props {
  params: { slug: string };
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="relative aspect-square bg-white border-2 border-neutral-900 shadow-[10px_10px_0_0_#000000] overflow-hidden">
              {product.image && (
                <Image
                  src={product.image}
                  alt={product.name.tr}
                  fill
                  sizes="(min-width: 768px) 320px, 100vw"
                  className="object-cover"
                />
              )}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-2">
              <h1 className="text-4xl font-display tracking-tight">
                {product.name.tr}
              </h1>
              <span className="text-xl font-extrabold text-red-700">
                {product.price.toFixed(2)} TL
              </span>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
              {product.category}
            </p>

            <p className="text-neutral-800 mb-6">{product.description.tr}</p>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white border-2 border-neutral-900 shadow-[8px_8px_0_0_#000000] p-5">
                <h2 className="font-display mb-2">İçindekiler</h2>
                <ul className="list-disc list-inside text-sm text-neutral-800">
                  {product.ingredients.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border-2 border-neutral-900 shadow-[8px_8px_0_0_#000000] p-5">
                <h2 className="font-display mb-2">Besin / Etiketler</h2>
                <p className="text-sm text-neutral-800 mb-1">
                  Kalori: {product.calories} kcal
                </p>
                {product.tags.length > 0 && (
                  <p className="text-sm text-neutral-800">
                    Etiketler: {product.tags.join(", ")}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

