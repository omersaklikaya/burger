import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { BranchesPreview } from "@/components/BranchesPreview";

export default function SubelerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />
      <PageHero image="/images/hero-subeler.jpg" title="ŞUBELERİMİZ" />
      <div className="w-full border-b-[3px] border-[#cc0000]" style={{ borderBottom: "3px solid #cc0000" }} />
      <main className="flex-1 w-full pt-16 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <BranchesPreview />
        </div>
      </main>
      <Footer />
    </div>
  );
}

