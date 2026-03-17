"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

type FaqItem = { q: string; a: string };
type FaqCategory = { title: string; items: FaqItem[] };

const faqData: FaqCategory[] = [
  {
    title: "MENÜ & MALZEME",
    items: [
      {
        q: "Vejetaryen seçenek var mı?",
        a: "Var! Vege Smash burgerimiz sebze köftesi, turşu ve otlu sosla hafif ama karakterli bir alternatif. Et yemeyenler için de aynı özenle hazırlanıyor.",
      },
      {
        q: "Etleriniz taze mi, dondurulmuş mu?",
        a: "Her gün taze. Dünden kalan köfte Bulls mutfağında yoktur — bu bizim için pazarlık konusu değil.",
      },
      {
        q: "Alerjen bilgisi alabilir miyim?",
        a: "Elbette. Şubelerimizde çalışanlarımız alerjen içerikleri konusunda sizi bilgilendirmeye hazır. Geldiğinizde sormaktan çekinmeyin.",
      },
      {
        q: "Gluten içermeyen seçenek var mı?",
        a: "Şu an özel glutensiz ekmek seçeneğimiz bulunmuyor. Ancak ekmeğsiz köfte + malzeme kombinasyonu isteyenler için mutfağımız esnektir.",
      },
    ],
  },
  {
    title: "SİPARİŞ & SERVİS",
    items: [
      {
        q: "Paket servis yapıyor musunuz?",
        a: "Şu an paket servis yapmıyoruz. Burgerlerimiz en iyi sıcak ve taze yendiğinde ortaya çıkıyor — sizi masada görmek isteriz.",
      },
      {
        q: "Online sipariş verebilir miyim?",
        a: "Şu an online sipariş veya teslimat hizmetimiz bulunmuyor. Tüm şubelerimiz walk-in çalışıyor — gel, otur, ye.",
      },
      {
        q: "Çocuk menüsü var mı?",
        a: "Özel bir çocuk menümüz yok ama küçük iştahlar için tek köfteli daha sade kombinasyonlar hazırlayabiliyoruz. Sormak yeterli.",
      },
    ],
  },
  {
    title: "ŞUBELER & GENEL",
    items: [
      {
        q: "Rezervasyon alıyor musunuz?",
        a: "Hayır, tamamen walk-in çalışıyoruz. Kapımız herkese açık — rezervasyona gerek yok, sadece gelin.",
      },
      {
        q: "Kaç şubeniz var?",
        a: "Şu an Kadıköy, Beşiktaş ve Ataşehir'de üç şubemiz var. Yakında yeni noktalar geliyor — takipte kalın.",
      },
      {
        q: "Kurumsal sipariş veya etkinlik için iletişime geçebilir miyim?",
        a: "Kesinlikle. Büyük gruplar, doğum günleri veya kurumsal siparişler için bize ulaşın — birlikte çözeriz.",
      },
    ],
  },
];

function FaqAccordion() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div>
      {faqData.map((cat, catIndex) => (
        <div key={catIndex}>
          <p
            className="font-bold text-[#cc0000] mt-8 mb-2 first:mt-0 text-base md:text-lg tracking-[0.15em] uppercase"
            style={{
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#cc0000",
              margin: catIndex === 0 ? "0 0 0.5rem" : "2rem 0 0.5rem",
            }}
          >
            {cat.title}
          </p>
          <div className="border-t border-[#1a1a1a]">
            {cat.items.map((item, itemIndex) => {
              const key = `${catIndex}-${itemIndex}`;
              const isOpen = openKey === key;
              return (
                <div
                  key={key}
                  className="border-b border-[#eee] cursor-pointer"
                  onClick={() => setOpenKey(isOpen ? null : key)}
                >
                  <div
                    className="flex justify-between items-center gap-4 py-4 md:py-5"
                    style={{ padding: "16px 0" }}
                  >
                    <span
                      className="text-[15px] md:text-[17px] text-[#1a1a1a] pr-2 leading-snug"
                      style={{
                        fontWeight: isOpen ? 700 : 500,
                      }}
                    >
                      {item.q}
                    </span>
                    <span
                      className="text-[#cc0000] font-light leading-none shrink-0 text-xl md:text-2xl"
                      style={{ fontWeight: 300, lineHeight: 1 }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>
                  <div
                    className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                    style={{
                      maxHeight: isOpen ? 600 : 0,
                    }}
                  >
                    <div
                      className="text-sm md:text-base text-[#333] pb-4 border-l-4 border-[#cc0000] pl-4 ml-0 leading-relaxed"
                      style={{
                        lineHeight: 1.65,
                        padding: "0 0 16px",
                        paddingLeft: 16,
                        marginLeft: 0,
                      }}
                    >
                      {item.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function SssPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />
      <PageHero image="/images/hero-sss.jpg" title="SIKÇA SORULAN SORULAR" />
      <div className="w-full border-b-[3px] border-[#cc0000]" style={{ borderBottom: "3px solid #cc0000" }} />
      <main className="flex-1 flex flex-col items-stretch pt-8 pb-16">
        <div className="max-w-[720px] w-full mx-auto pb-8 px-4 md:pb-12 md:px-6">
          <FaqAccordion />
        </div>
      </main>
      <Footer />
    </div>
  );
}
