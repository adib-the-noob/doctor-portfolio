import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Next.js's next/font/google will fetch and self-host the fonts at build time.
// If the build environment is offline, it falls back gracefully to system fonts
// declared in the font-family stacks (Georgia / system-ui / Menlo).

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
  fallback: ["Georgia", "ui-serif", "serif"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "ui-sans-serif", "sans-serif"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  fallback: ["Menlo", "ui-monospace", "monospace"],
});

export const metadata: Metadata = {
  title: "Dr. Mira Halden — Cardiology, Private Practice",
  description:
    "Board-certified cardiologist Mira Halden, MD. Personalized cardiovascular care, advanced diagnostics, and same-week appointments in a calm, unhurried practice.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
