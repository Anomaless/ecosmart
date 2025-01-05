import { Montserrat } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "EcoSmartVillage",
  description: "EcoSmartVillage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${montserrat.className} antialiased flex`}>
        <Navbar />
        <Sidebar />

        <div className="w-full">
          <main className="w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
