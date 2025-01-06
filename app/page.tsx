import HomePage from "@/pages/home/homeview";
import AboutPage from "@/pages/home/aboutview";
import WeDoPage from "@/pages/home/weDoView";
import React from "react";
import VisiMisiView from "@/pages/home/VisiMisiView";
import ProdukKamiSection from "@/pages/home/ProdukKamiView";
import BeritaKamiSection from "@/pages/home/BeritaKamiView";

export default function page() {
  return (
    <div className="">
      <HomePage />
      <AboutPage />
      <WeDoPage />
      <VisiMisiView />
      <ProdukKamiSection />
      <BeritaKamiSection />
    </div>
  );
}
