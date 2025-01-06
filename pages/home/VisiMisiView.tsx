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

export default function VisiMisiPage() {
  const setVariants = useMemo(() => variants(), []);

  return (
    <div
      id="visi-misi"
      className="bg-white min-h-screen flex items-center justify-center py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-green-700 text-4xl font-bold mb-12">VISI MISI</h1>
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-8"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Misi Card */}
          <motion.div
            variants={setVariants}
            className="bg-green-700 text-white p-8 rounded-lg max-w-md"
          >
            <Image
              src="/assets/image/misi.png"
              alt="Illustration of community and environment"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h2 className="text-xl font-bold mb-4">MISI</h2>
            <p className="leading-relaxed">
              Mengubah sampah menjadi sumber daya yang bermanfaat dan
              mempromosikan produk lokal yang ramah lingkungan. Kami ingin
              memberdayakan setiap anggota komunitas untuk terlibat dalam
              menjaga kebersihan lingkungan dan memanfaatkan limbah secara
              kreatif.
            </p>
          </motion.div>

          {/* Visi Card */}
          <motion.div
            variants={setVariants}
            className="border-2 border-green-700 p-8 rounded-lg max-w-md"
          >
            <Image
              src="/assets/image/visi.png"
              alt="Illustration of community and environment"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h2 className="text-xl font-bold text-green-700 mb-4">VISI</h2>
            <p className="leading-relaxed">
              Kami membayangkan dunia di mana setiap orang berkontribusi pada
              pelestarian lingkungan, dimana sampah tidak lagi menjadi masalah,
              tetapi menjadi solusi. Kami ingin menjadi jembatan antara warga
              dan lingkungan, menciptakan harmoni antara keduanya.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
