import clsx from "clsx";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import { GridBackground, Header } from "@/components";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Henriette Riis Steinbach",
  description: "Henriette Riis Steinbach | Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(urbanist.className, "bg-background text-text")}>
        <GridBackground />

        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
