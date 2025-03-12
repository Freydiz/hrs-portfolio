import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import { Header } from "@/components";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Henriette Riis Steinbach",
  description: "Henriette Riis Steinbach is a Danish Frontend Developer,",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Header />

        {children}
        <div className="background-gradient absolute inset-0 -z-50 max-h-screen" />
        <div className="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light" />
      </body>
    </html>
  );
}
