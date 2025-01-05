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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sit amet purus non eros fermentum tincidunt. Nulla
              facilisi. Morbi dapibus, risus et laoreet fringilla, ex dolor
              interdum sapien, ac scelerisque nisi justo id risus. Fusce
              porttitor dolor sed elit dapibus, ac fermentum metus feugiat. Cras
              luctus velit nec elit pharetra, eu convallis purus tempor.
              Suspendisse potenti. In vitae consectetur dolor, ac malesuada
              erat. Curabitur vehicula bibendum neque, sed vulputate mi blandit
              eu. Integer dapibus augue sed tellus pulvinar varius.
            </p>
            <p className="py-4 text-black">
              Donec nec neque ac purus dapibus facilisis. Nam sit amet dui a
              eros suscipit malesuada. Vivamus eu augue at lectus congue
              lacinia. Quisque ac odio sit amet elit congue vestibulum. Sed
              elementum, urna nec congue dictum, risus nulla pharetra nisl, a
              malesuada lectus justo nec orci. Integer a orci odio. Nulla
              facilisi. Suspendisse nec magna in orci vehicula laoreet. Nam
              sagittis purus et velit dapibus, sit amet tincidunt nunc pharetra.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
