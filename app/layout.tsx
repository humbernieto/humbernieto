import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import WhatsApp from "./_components/WhatsApp";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Humber Nieto",
  description:
    "Desarrollador frontend, apasionado por la tecnología y el desarrollo de software. ¡Amante de Nextjs y Vercel!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
        <WhatsApp />
      </body>
    </html>
  );
}
