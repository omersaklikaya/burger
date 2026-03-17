import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-white">
      <div className="checker-footer h-8" />
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3 text-xs text-neutral-700">
        {/* Logo ve telif */}
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2">
            <div className="px-4 py-2 bg-red-600 text-white font-hero tracking-[0.2em] text-sm uppercase shadow-[4px_4px_0_0_#000000]">
              BULLS
            </div>
          </div>
          <p className="tracking-wide">
            © {year} Bulls Burger. Tüm hakları saklıdır.
          </p>
          <p className="tracking-wide">
            Beyaz-kırmızı kareli masalarda, her şubede aynı Bulls imzasını taşıyoruz.
          </p>
        </div>

        {/* Site haritası */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold uppercase tracking-[0.18em] text-neutral-900 mb-1">
            Site Haritası
          </h3>
          <Link href="/menu" className="hover:text-red-600 transition-colors">
            Menü
          </Link>
          <Link href="/subeler" className="hover:text-red-600 transition-colors">
            Şubeler
          </Link>
          <Link href="/hikayemiz" className="hover:text-red-600 transition-colors">
            Hikayemiz
          </Link>
          <Link href="/sss" className="hover:text-red-600 transition-colors">
            SSS
          </Link>
        </div>

        {/* İletişim / Sosyal */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold uppercase tracking-[0.18em] text-neutral-900 mb-1">
            İletişim
          </h3>
          <p>Telefon: +90 (___) ___ __ __</p>
          <p>E‑posta: info@bullsburger.com</p>
          <div className="mt-3 flex flex-col gap-1">
            <span>Instagram</span>
            <span>TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

