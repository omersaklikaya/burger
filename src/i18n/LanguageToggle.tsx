"use client";

import { useLanguageContext } from "./LanguageContext";
import Image from "next/image";

export function LanguageToggle() {
  const { lang, setLang } = useLanguageContext();

  return (
    <button
      type="button"
      onClick={() => setLang(lang === "tr" ? "en" : "tr")}
      className="flex items-center gap-1 bg-transparent px-1 py-0.5"
    >
      <span className="inline-block w-6 h-4 relative" aria-label="Türkçe">
        <Image
          src="/images/flag-tr.png"
          alt="Türkçe"
          fill
          sizes="24px"
          className="object-cover"
        />
      </span>
      <span className="inline-block w-6 h-4 relative" aria-label="English">
        <Image
          src="/images/flag-uk.png"
          alt="English"
          fill
          sizes="24px"
          className="object-cover"
        />
      </span>
    </button>
  );
}

