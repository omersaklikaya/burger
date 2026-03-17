import Link from "next/link";

export function Hero() {
  return (
    <section className="relative border-b-4 border-red-600 overflow-hidden">
      {/* Arka plandaki fotoğraf */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[url('/images/hero.jpg')] bg-cover bg-[position:130%_center]" />
      </div>
      {/* Hafif karartma */}
      <div className="absolute inset-0 bg-black/25" />
      <div className="relative max-w-6xl mx-auto px-4 py-20 flex flex-col items-start gap-8">
        <div className="max-w-3xl">
          <h1 className="text-7xl md:text-[5.5rem] font-hero tracking-[0.03em] mb-5 leading-[0.85] uppercase text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.95)]">
            <span className="block">HER ISIRIKTA</span>
            <span className="inline-flex items-center gap-3 mt-2">
              <span className="bg-red-600 px-4 py-2 shadow-[4px_4px_0_0_#000000]">
                BULLS
              </span>
              <span>İMZASI</span>
            </span>
          </h1>
          <p className="text-white font-bold text-lg max-w-xl mb-8 drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)]">
            Beyaz-kırmızı kareli masalarda, dumanı üstünde smash burgerler,
            çıtır yan ürünler ve sütlü milkshake&apos;ler. Zincir gibi değil,
            mahallendeki favori burgerci gibi hissettirmek için buradayız.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/menu"
              className="bg-red-600 text-white px-6 py-3 text-sm font-extrabold tracking-[0.22em] uppercase hover:bg-red-700 transition-colors shadow-[6px_6px_0_0_#000000]"
            >
              Menüyü Gör
            </Link>
            <Link
              href="/hikayemiz"
              className="bg-white border-2 border-neutral-900 px-6 py-3 text-sm font-extrabold tracking-[0.22em] uppercase hover:bg-neutral-900 hover:text-white transition-colors shadow-[6px_6px_0_0_#000000]"
            >
              Hikayemizi Oku
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

