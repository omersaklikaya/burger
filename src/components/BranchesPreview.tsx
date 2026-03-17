"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";

type BranchSchedule = {
  weekdays?: { open: string; close: string };
  weekend?: { open: string; close: string } | "closed";
  every?: { open: string; close: string };
};

type Branch = {
  id: string;
  image: string;
  imageInterior: string;
  name: string;
  description: string;
  hoursText: string;
  schedule: BranchSchedule;
  mapsUrl: string;
  tags: string[];
  hoursWeekdays: string;
  hoursWeekend: string;
  favorite: { name: string; description: string; price: number };
  address: string;
};

const branches: Branch[] = [
  {
    id: "kadikoy",
    image: "/images/place/kadikoy-dis.jpg",
    imageInterior: "/images/place/kadikoy-ic.jpg",
    name: "Bulls Burger Kadıköy",
    description: "Moda'da, sahile yürüme mesafesinde.",
    hoursText: "Hafta içi 11:00 – 23:00",
    schedule: {
      weekdays: { open: "11:00", close: "23:00" },
      weekend: { open: "11:00", close: "00:00" },
    },
    mapsUrl: "https://maps.google.com/?q=Kadıköy+İstanbul",
    tags: ["Sahil", "Sakin", "Akşam"],
    hoursWeekdays: "11:00 – 23:00",
    hoursWeekend: "11:00 – 00:00",
    favorite: {
      name: "Trüf mü Dedim?",
      description: "Mantar sote, isli kaşar ve hafif trüf mayo ile gurme ama boğmayan bir tat.",
      price: 365,
    },
    address: "Kadıköy, İstanbul",
  },
  {
    id: "besiktas",
    image: "/images/place/besiktas-dis.jpg",
    imageInterior: "/images/place/besiktas-ic.jpg",
    name: "Bulls Burger Beşiktaş",
    description: "Çarşının tam kalbinde, maç öncesi buluşma noktası.",
    hoursText: "Her gün 11:00 – 01:00",
    schedule: { every: { open: "11:00", close: "01:00" } },
    mapsUrl: "https://maps.google.com/?q=Beşiktaş+İstanbul",
    tags: ["Maç", "Kalabalık", "Gece"],
    hoursWeekdays: "11:00 – 01:00",
    hoursWeekend: "11:00 – 01:00",
    favorite: {
      name: "Double Trouble",
      description: "İçinde gizli çıtır soğan halkası olan, tok ve çıtır karakterli doyurucu burger.",
      price: 345,
    },
    address: "Beşiktaş, İstanbul",
  },
  {
    id: "atasehir",
    image: "/images/place/atasehir-dis.jpg",
    imageInterior: "/images/place/atasehir-ic.jpg",
    name: "Bulls Burger Ataşehir",
    description: "Ofis çıkışı burger molası için ideal.",
    hoursText: "Hafta içi 11:00 – 22:00",
    schedule: {
      weekdays: { open: "11:00", close: "22:00" },
      weekend: "closed",
    },
    mapsUrl: "https://maps.google.com/?q=Ataşehir+İstanbul",
    tags: ["Öğle", "Ofis", "Hızlı"],
    hoursWeekdays: "11:00 – 22:00",
    hoursWeekend: "Kapalı",
    favorite: {
      name: "Bulls Burger",
      description: "Çift smash köfte, karamelize soğan ve Bulls imzalı özel sos ile klasik ama güçlü.",
      price: 295,
    },
    address: "Ataşehir, İstanbul",
  },
];

function getBranchStatus(branch: Branch, now: Date): { isOpen: boolean; label: string } {
  const day = now.getDay();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const isWeekend = day === 0 || day === 6;

  const toMinutes = (s: string) => {
    const [h, m] = s.split(":").map(Number);
    return (h % 24) * 60 + (m || 0);
  };

  const formatClose = (s: string) => {
    if (s === "00:00") return "24:00";
    return s;
  };

  let openMin: number, closeMin: number;

  if (branch.schedule.every) {
    openMin = toMinutes(branch.schedule.every.open);
    closeMin = toMinutes(branch.schedule.every.close);
    const current = now.getHours() * 60 + now.getMinutes();
    const wrapsMidnight = closeMin <= openMin;
    const isOpen = wrapsMidnight
      ? current >= openMin || current < closeMin
      : current >= openMin && current < closeMin;
    const closeDisplay = branch.schedule.every.close;
    return {
      isOpen,
      label: isOpen ? `Bugün ${closeDisplay}'e kadar açık` : "Şu an kapalı",
    };
  }

  if (isWeekend && branch.schedule.weekend === "closed") {
    return { isOpen: false, label: "Şu an kapalı" };
  }

  const slot = isWeekend ? branch.schedule.weekend : branch.schedule.weekdays;
  if (typeof slot === "string" || !slot) {
    return { isOpen: false, label: "Şu an kapalı" };
  }

  openMin = toMinutes(slot.open);
  closeMin = toMinutes(slot.close);
  if (closeMin === 0) closeMin = 24 * 60;
  const isOpen = currentMinutes >= openMin && currentMinutes < closeMin;
  return {
    isOpen,
    label: isOpen ? `Bugün ${formatClose(slot.close)}'e kadar açık` : "Şu an kapalı",
  };
}

type Yoğunluk = "sakin" | "orta" | "yoğun" | "kapalı";

function getYoğunluk(branch: Branch, now: Date): { level: Yoğunluk; label: string; bars: number } {
  const status = getBranchStatus(branch, new Date());
  if (!status.isOpen) return { level: "kapalı", label: "-", bars: 0 };

  const h = now.getHours() + now.getMinutes() / 60;
  if (h >= 11 && h < 12) return { level: "sakin", label: "Şu an oldukça sakin", bars: 1 };
  if (h >= 12 && h < 14) return { level: "yoğun", label: "Şu an kalabalık", bars: 3 };
  if (h >= 14 && h < 17) return { level: "orta", label: "Orta yoğunlukta", bars: 2 };
  if (h >= 17 && h < 20) return { level: "yoğun", label: "Şu an kalabalık", bars: 3 };
  return { level: "orta", label: "Orta yoğunlukta", bars: 2 };
}

function BranchModal({
  branch,
  onClose,
}: {
  branch: Branch;
  onClose: () => void;
}) {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const now = useMemo(() => new Date(), []);
  const status = getBranchStatus(branch, now);
  const yoğunluk = getYoğunluk(branch, now);
  const images = [branch.image, branch.imageInterior];
  const isWeekend = now.getDay() === 0 || now.getDay() === 6;

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [onClose]);

  const stopProp = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 bg-black/75 z-[1000] flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal
      aria-label={branch.name}
    >
      <div
        className="bg-white w-[95%] md:w-[90%] max-w-[580px] max-h-[95vh] md:max-h-[90vh] overflow-y-auto relative border-[1.5px] border-[#1a1a1a]"
        onClick={stopProp}
      >
        <button
          type="button"
          className="absolute top-3 right-3.5 text-[20px] text-[#1a1a1a] cursor-pointer bg-transparent border-none z-10"
          onClick={onClose}
          aria-label="Kapat"
        >
          ×
        </button>

        {/* Fotoğraf galerisi */}
        <div className="relative overflow-hidden h-[200px] md:h-[240px] bg-neutral-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[galleryIndex]}
            alt=""
            className="w-full h-full object-cover block"
          />
          <button
            type="button"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white border-none py-2 px-3 text-lg cursor-pointer"
            onClick={() => setGalleryIndex((i) => (i === 0 ? 1 : 0))}
            aria-label="Önceki"
          >
            ‹
          </button>
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white border-none py-2 px-3 text-lg cursor-pointer"
            onClick={() => setGalleryIndex((i) => (i === 1 ? 0 : 1))}
            aria-label="Sonraki"
          >
            ›
          </button>
          <div
            className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5"
            style={{ gap: 6 }}
          >
            {[0, 1].map((i) => (
              <span
                key={i}
                className="rounded-full w-[7px] h-[7px] shrink-0"
                style={{
                  background: i === galleryIndex ? "#fff" : "rgba(255,255,255,0.5)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Bilgi alanı */}
        <div className="p-4 md:py-5 md:px-6" style={{ padding: "20px 24px" }}>
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-[20px] font-bold text-[#1a1a1a]">{branch.name}</h3>
            <span
              className="text-[11px] font-bold shrink-0 py-0.5 px-2.5"
              style={{
                background: status.isOpen ? "#dcfce7" : "#fee2e2",
                color: status.isOpen ? "#15803d" : "#cc0000",
                padding: "3px 10px",
              }}
            >
              {status.isOpen ? "Açık" : "Kapalı"}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mt-2.5" style={{ marginTop: 10, gap: 8 }}>
            {branch.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] text-[#555] border border-[#ddd] py-0.5 px-2.5"
                style={{ letterSpacing: "0.05em", padding: "3px 10px" }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Çalışma saatleri */}
          <div className="mt-3.5 pt-3.5 border-t border-[#eee]" style={{ marginTop: 14, paddingTop: 14 }}>
            <p className="text-[11px] font-bold text-[#999] mb-2" style={{ letterSpacing: "0.1em", marginBottom: 8 }}>
              ÇALIŞMA SAATLERİ
            </p>
            <div className="flex justify-between text-[13px] text-[#1a1a1a] py-1 border-b border-[#eee] border-dotted" style={{ padding: "4px 0" }}>
              <span>Hafta içi</span>
              <span className={!isWeekend ? "font-bold" : ""}>{branch.hoursWeekdays}</span>
            </div>
            <div className="flex justify-between text-[13px] text-[#1a1a1a] py-1 border-b border-[#eee] border-dotted" style={{ padding: "4px 0" }}>
              <span>Hafta sonu</span>
              <span className={isWeekend ? "font-bold" : ""}>{branch.hoursWeekend}</span>
            </div>
          </div>

          {/* Yoğunluk */}
          <div className="mt-3.5 pt-3.5 border-t border-[#eee]" style={{ marginTop: 14, paddingTop: 14 }}>
            <p className="text-[11px] font-bold text-[#999] mb-2.5" style={{ letterSpacing: "0.1em", marginBottom: 10 }}>
              ŞU AN YOĞUNLUK
            </p>
            <div className="flex gap-1" style={{ gap: 4 }}>
              {[1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="h-2 flex-1 rounded-sm"
                  style={{
                    height: 8,
                    borderRadius: 2,
                    background: yoğunluk.bars >= i ? "#cc0000" : "#eee",
                  }}
                />
              ))}
            </div>
            <p className="text-[12px] text-[#555] mt-1.5">{yoğunluk.label}</p>
          </div>

          {/* Favori */}
          <div className="mt-3.5 pt-3.5 border-t border-[#eee]" style={{ marginTop: 14, paddingTop: 14 }}>
            <p className="text-[11px] font-bold text-[#999] mb-2" style={{ letterSpacing: "0.1em", marginBottom: 8 }}>
              BURAYA GELENLERİN FAVORİSİ
            </p>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="min-w-0" style={{ maxWidth: 320 }}>
                <p className="text-[16px] font-bold text-[#1a1a1a]">{branch.favorite.name}</p>
                <p className="text-[12px] text-[#555] mt-0.5" style={{ marginTop: 3 }}>{branch.favorite.description}</p>
              </div>
              <p className="text-[16px] font-bold text-[#cc0000] shrink-0">{branch.favorite.price} TL</p>
            </div>
          </div>

          {/* Adres + Yol tarifi */}
          <div className="mt-3.5 pt-3.5 border-t border-[#eee] flex items-center justify-between gap-4 flex-wrap" style={{ marginTop: 14, paddingTop: 14 }}>
            <div>
              <p className="text-[11px] font-bold text-[#999]" style={{ letterSpacing: "0.1em" }}>ADRES</p>
              <p className="text-[14px] text-[#1a1a1a] mt-1" style={{ marginTop: 4 }}>{branch.address}</p>
            </div>
            <a
              href={branch.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#cc0000] text-white text-[12px] font-bold py-2 px-4 border-none cursor-pointer shrink-0"
              style={{ letterSpacing: "0.05em", padding: "8px 16px" }}
            >
              YOL TARİFİ AL →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function BranchCard({ branch, onSelect }: { branch: Branch; onSelect: () => void }) {
  const status = useMemo(() => getBranchStatus(branch, new Date()), [branch.id]);
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="overflow-hidden bg-white border-[1.5px] border-[#1a1a1a] cursor-pointer"
      style={{ boxShadow: "none" }}
      onClick={onSelect}
      onKeyDown={(e) => e.key === "Enter" && onSelect()}
      role="button"
      tabIndex={0}
    >
      <div
        className="relative overflow-hidden h-[200px] md:h-[180px] bg-neutral-200"
      >
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center text-neutral-500 text-sm">
            Şube fotoğrafı
          </div>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={branch.image}
            alt={branch.name}
            className="w-full h-full object-cover object-center block"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
            onError={() => setImageError(true)}
          />
        )}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.65) 100%)",
          }}
        />
        <div
          className="absolute bottom-[10px] left-3 flex items-center gap-1.5"
          style={{ bottom: 10, left: 12, display: "flex", alignItems: "center", gap: 6 }}
        >
          <span
            className="rounded-full shrink-0"
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: status.isOpen ? "#22c55e" : "#cc0000",
            }}
          />
          <span
            className="text-white font-medium"
            style={{ fontSize: "11px", color: "#fff", fontWeight: 500 }}
          >
            {status.label}
          </span>
        </div>
      </div>
      <div className="p-3.5 px-4" style={{ padding: "14px 16px" }}>
        <h3 className="text-[16px] font-bold text-[#1a1a1a] mb-1" style={{ marginBottom: 4 }}>
          {branch.name}
        </h3>
        <p className="text-[12px] text-[#555] mb-2" style={{ marginBottom: 8 }}>
          {branch.description}
        </p>
        <p className="text-[12px] text-[#1a1a1a] mb-2.5" style={{ marginBottom: 10 }}>
          {branch.hoursText}
        </p>
        <div className="border-t border-[#eee] pt-2.5" style={{ borderTop: "1px solid #eee", paddingTop: 10 }} onClick={(e) => e.stopPropagation()}>
          <Link
            href={branch.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold text-[#cc0000] cursor-pointer no-underline"
            style={{ letterSpacing: "0.05em" }}
          >
            YOL TARİFİ AL →
          </Link>
        </div>
      </div>
    </div>
  );
}

export function BranchesPreview() {
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);

  return (
    <div>
      <div
        className="grid gap-6 grid-cols-1 md:grid-cols-3"
        style={{ gap: "1.5rem" }}
      >
        {branches.map((branch) => (
          <BranchCard
            key={branch.id}
            branch={branch}
            onSelect={() => setSelectedBranch(branch)}
          />
        ))}
      </div>
      {selectedBranch && (
        <BranchModal
          branch={selectedBranch}
          onClose={() => setSelectedBranch(null)}
        />
      )}
    </div>
  );
}
