import type { Metadata } from "next";
import { Noto_Serif_Bengali, Hind_Siliguri } from "next/font/google";
import "./globals.css";

const display = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bn-serif",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const body = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-bn-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "ডা. তানভীর হাসান — হৃদরোগ বিশেষজ্ঞ",
  description:
    "ঢাকার হৃদরোগ বিশেষজ্ঞ ডা. তানভীর হাসান। একই সপ্তাহে অ্যাপয়েন্টমেন্ট, সাশ্রয়ী মূল্যে চেম্বার কনসালটেশন।",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className={`${display.variable} ${body.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
