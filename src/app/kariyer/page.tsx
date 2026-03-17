import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CareerFormSection } from "@/components/CareerFormSection";

export default function KariyerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />
      <PageHero image="/images/hero-kariyer.png" title="KARİYER" />
      <div className="w-full border-b-[3px] border-[#cc0000]" style={{ borderBottom: "3px solid #cc0000" }} />
      <main className="flex-1 w-full pt-0 pb-16">
        <CareerFormSection />
      </main>
      <Footer />
    </div>
  );
}

