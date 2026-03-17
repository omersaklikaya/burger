import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Gazete } from "@/components/Gazete";
import { PageHero } from "@/components/PageHero";

export default function StoryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />
      <PageHero image="/images/hero-hikayemiz.jpg" title="HİKAYEMİZ" />
      <div className="w-full border-b-[3px] border-[#cc0000]" style={{ borderBottom: "3px solid #cc0000" }} />
      <main className="flex-1 w-full pt-16 pb-16">
        <section className="relative w-full overflow-hidden">
          <div
            className="shrink-0 w-full"
            style={{ marginLeft: "1.5rem", marginRight: "1.5rem", width: "auto", maxWidth: "none" }}
          >
            <Gazete />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
