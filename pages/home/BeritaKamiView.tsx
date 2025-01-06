"use client";
import { motion } from "framer-motion";
import Image from "next/image";
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

const newsData = [
  {
    imageUrl: "/assets/image/news1.png",
    title: "Berita 1",
    description: "Deskripsi singkat berita 1",
  },
  {
    imageUrl: "/assets/image/news2.png",
    title: "Berita 2",
    description: "Deskripsi singkat berita 2",
  },
  {
    imageUrl: "/assets/image/news3.png",
    title: "Berita 3",
    description: "Deskripsi singkat berita 3",
  },
];

export default function BeritaKamiSection() {
  const setVariants = useMemo(() => variants(), []);

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center py-12">
      <div className="text-center max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto">
        <h2 className="text-2xl font-bold text-[#2b7a0b] mb-8">BERITA KAMI</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
        >
          {newsData.map((news, index) => (
            <motion.div
              key={index}
              variants={setVariants}
              className="flex flex-col bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition"
            >
              <div className="relative w-full h-64 rounded-t-xl overflow-hidden">
                <Image
                  src={news.imageUrl}
                  alt={news.title}
                  layout="fill"
                  className="absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                />
              </div>
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800">
                  {news.title}
                </h3>
                <p className="mt-1 text-gray-500">{news.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <button className="mt-8 px-6 py-2 bg-[#2b7a0b] text-white rounded-lg shadow hover:bg-[#245d08] transition-colors duration-300">
          Lainnya
        </button>
      </div>
    </section>
  );
}
