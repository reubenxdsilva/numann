import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const stabilGrotesk = localFont({
  variable: "--font-family-sans",
  display: "swap",
  src: [
    { path: "./fonts/StabilGrotesk-50Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/StabilGrotesk-60Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/StabilGrotesk-70Bold.woff2", weight: "700", style: "normal" },
  ],
});

const moderatSerif = localFont({
  variable: "--font-family-serif",
  display: "swap",
  src: [
    { path: "./fonts/Moderat-Serif-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/Moderat-Serif-Regular.woff2", weight: "400", style: "normal" },
  ],
});

const kUniforma = localFont({
  variable: "--font-family-label",
  display: "swap",
  src: [
    { path: "./fonts/KUniforma-50Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/KUniforma-70Semibold.woff2", weight: "600", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Humann",
  description: "Cardiovascular health is everything health.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${stabilGrotesk.variable} ${moderatSerif.variable} ${kUniforma.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
