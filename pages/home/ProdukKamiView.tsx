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

const productsData = [
  {
    imageUrl: "/assets/image/tas.png",
    title: "Produk 1",
    subtitle: "Subjudul Produk 1",
  },
  {
    imageUrl: "/assets/image/kain.jpeg",
    title: "Produk 2",
    subtitle: "Subjudul Produk 2",
  },
  {
    imageUrl: "/assets/image/tas.png",
    title: "Produk 3",
    subtitle: "Subjudul Produk 3",
  },
];

export default function ProdukKamiSection() {
  const setVariants = useMemo(() => variants(), []);

  return (
    <section className="bg-white min-h-screen flex items-center justify-center py-12">
      <div className="text-center max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto">
        <h2 className="text-2xl font-bold text-[#2b7a0b] mb-8">PRODUK KAMI</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
        >
          {productsData.map((product, index) => (
            <motion.div
              key={index}
              variants={setVariants}
              className=" p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={300}
                height={300}
                className="mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-bold mb-2">{product.title}</h3>
              <p className="text-gray-700">{product.subtitle}</p>
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
