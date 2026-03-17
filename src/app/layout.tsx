import "./globals.css";
import type { ReactNode } from "react";
import { Inter, Archivo, Poppins } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageContext";

const inter = Inter({ subsets: ["latin"] });
const display = Archivo({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
});
const hero = Poppins({
  weight: ["800", "900"],
  subsets: ["latin"],
  variable: "--font-hero",
});

export const metadata = {
  title: "Bulls Burger",
  description: "Bulls Burger - Five Guys esintili burgerci zinciri",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${inter.className} ${display.variable} ${hero.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

