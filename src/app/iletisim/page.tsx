import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function IletisimPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-extrabold tracking-tight mb-6">
          İletişim
        </h1>
        <p className="text-sm text-neutral-700 mb-8">
          Soruların, önerilerin veya iş birliği taleplerin için bize buradan
          ulaşabilirsin.
        </p>
        <div className="space-y-6">
          <div>
            <h2 className="font-semibold mb-1">Telefon</h2>
            <p className="text-sm text-neutral-800">+90 (___) ___ __ __</p>
          </div>
          <div>
            <h2 className="font-semibold mb-1">E-posta</h2>
            <p className="text-sm text-neutral-800">info@bullsburger.com</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

