"use client";
import { InfoCard } from "@/components/InfoCard";
import { motion } from "framer-motion";
import { useMemo } from "react";

function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 1 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration,
      },
    }),
  };
}

const cardsData = [
  {
    imageUrl: "/assets/image/edukasi.png",
    title: "EDUKASI & KESADARAN",
    description:
      "Kami menyelenggarakan berbagai kegiatan untuk meningkatkan kesadaran masyarakat tentang pentingnya daur ulang.",
  },
  {
    imageUrl: "/assets/image/support.png",
    title: "DUKUNGAN KOMUNITAS",
    description:
      "Melalui kerja sama dengan warga lokal, kami membantu mempromosikan produk-produk daur ulang.",
    isInverted: true,
  },
  {
    imageUrl: "/assets/image/inovasi.png",
    title: "INOVASI BERKELANJUTAN",
    description:
      "Kami menyelenggarakan berbagai kegiatan untuk meningkatkan kesadaran masyarakat tentang pentingnya daur ulang.",
  },
];

export default function WhatWeDoSection() {
  const setVariants = useMemo(() => variants(), []);

  return (
    <section className="bg-[#f3f8e7] flex items-center justify-center py-12">
      <div className="text-center max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto">
        <h2 className="text-2xl font-bold text-[#2b7a0b] mb-8">
          APA YANG KAMI LAKUKAN?
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
        >
          {cardsData.map((card, index) => (
            <motion.div key={index} variants={setVariants}>
              <InfoCard {...card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
