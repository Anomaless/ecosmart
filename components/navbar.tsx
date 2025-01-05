"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const MotionImage = motion(Image);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 transition-all ${
          scrollActive
            ? "bg-[#2e7d32] text-white shadow-md"
            : "bg-transparent text-[#2e7d32]"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <div className="cursor-pointer flex gap-2 font-bold items-center text-[20px]">
              <MotionImage
                src="/assets/image/ecoSmartLogo.png"
                alt="logoEcoSmart"
                width={50}
                height={50}
                className="cursor-pointer"
              />
              EcoSmart
            </div>
          </div>
          {/* Align the links to the right */}
          <ul className="hidden lg:flex col-start-2 col-end-2 items-center ml-auto">
            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative ${
                activeLink === "home"
                  ? "text-[#94c207] shadow-[#94c207]"
                  : "font-bold hover:text-[#94c207]"
              }`}
            >
              <Link href="/" onClick={() => setActiveLink("home")}>
                Beranda
              </Link>
            </li>

            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative ${
                activeLink === "product"
                  ? "text-[#94c207] shadow-[#94c207]"
                  : "font-bold hover:text-[#94c207]"
              }`}
            >
              <Link href="/product" onClick={() => setActiveLink("product")}>
                Produk
              </Link>
            </li>
            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative ${
                activeLink === "news"
                  ? "text-[#94c207] shadow-[#94c207]"
                  : "font-bold hover:text-[#94c207]"
              }`}
            >
              <Link href="/news" onClick={() => setActiveLink("news")}>
                Berita
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 shadow-t bg-[#2e7d32]">
        <div className="sm:px-3">
          <ul className="overflow-x-auto flex w-full justify-between items-center text-[#f5f5dc]">
            <li
              className={`px-2 py-2 mx-2 cursor-pointer inline-block relative ${
                activeLink === "home"
                  ? "text-[#f5f5dc] shadow-[#f5f5dc]"
                  : "font-bold hover:text-[#94c207]"
              }`}
            >
              <Link href="/" onClick={() => setActiveLink("home")}>
                Beranda
              </Link>
            </li>
            <li
              className={`px-2 py-2 mx-2 cursor-pointer inline-block relative ${
                activeLink === "product"
                  ? "text-[#f5f5dc] shadow-[#f5f5dc]"
                  : "font-bold hover:text-[#94c207]"
              }`}
            >
              <Link href="/product" onClick={() => setActiveLink("product")}>
                Produk
              </Link>
            </li>
            <li
              className={`px-2 py-2 mx-2 cursor-pointer inline-block relative ${
                activeLink === "news"
                  ? "text-[#f5f5dc] shadow-[#f5f5dc]"
                  : "font-bold hover:text-[#94c207]"
              }`}
            >
              <Link href="/news" onClick={() => setActiveLink("news")}>
                Berita
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
