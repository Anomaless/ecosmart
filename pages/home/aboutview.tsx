"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";
import Image from "next/image";

function variantsText() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 4 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

function variantsProfile() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 5 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

export default function AboutPage() {
  const setVariantsText = useMemo(() => variantsText(), []);
  const setVariantsProfile = useMemo(() => variantsProfile(), []);

  return (
    <div id="about" className="h-full min-h-screen">
      <div className="mx-auto max-w-7xl bg-[#F4F7DA] px-6 md:px-14 md:mt-4">
        <h1 className="font-bold text-center p-4">TENTANG KAMI</h1>
        <motion.div className="flex flex-col xl:flex-row items-start text-white justify-between xl:p-8 gap-6">
          <motion.div
            variants={setVariantsText}
            initial="offscreen"
            animate="onscreen"
            className="w-full xl:w-1/2 flex justify-center"
          >
            <Image
              src="/assets/image/Berita.jpeg"
              alt="Berita"
              width={500}
              height={500}
              className="object-cover w-full md:w-[500px] md:h-[500px]"
            />
          </motion.div>

          <motion.div
            variants={setVariantsProfile}
            initial="offscreen"
            animate="onscreen"
            className="w-full xl:w-1/2 text-start xl:text-start"
          >
            <p className="pb-4 text-black">
              Unit Katon Semilak adalah komunitas bank sampah yang lahir dari
              semangat kebersamaan warga Gebang, RT 02 RW 16, Banjarsari.
              Didukung oleh ibu-ibu PKK dan masyarakat setempat, komunitas ini
              menjadi pelopor pengelolaan sampah yang kreatif dan berkelanjutan.
              Berkat dedikasi dan inovasi kami, Unit Katon Semilak telah meraih
              berbagai prestasi membanggakan hingga menarik perhatian media
              internasional, termasuk dari Jepang.
            </p>
            <p className="py-4 text-black">
              Dari tangan-tangan kreatif anggota komunitas, lahir berbagai
              produk ramah lingkungan seperti ecoprint, kompos, tas daur ulang,
              dan masih banyak lagi. Produk-produk ini tidak hanya membawa
              manfaat bagi lingkungan, tetapi juga menjadi sumber inspirasi dan
              peluang ekonomi bagi masyarakat. Kami percaya bahwa melalui
              langkah kecil yang konsisten, kita dapat menciptakan dampak besar
              untuk masa depan yang lebih hijau dan berkelanjutan.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
