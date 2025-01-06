"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (pathname?.startsWith("/admin-workstation")) {
    return null;
  }

  const MotionImage = motion.create(Image);

  const menuVariants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 transition-all ${
          scrollActive
            ? "bg-[#009539] text-white shadow-md"
            : "bg-transparent text-[#009539]"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto">
          <div className="flex items-center justify-between py-3 sm:py-4">
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

            {/* Hamburger Menu */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 focus:outline-none"
              >
                <div
                  className={`w-6 h-0.5 bg-current transition-all ${
                    isOpen ? "transform rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <div
                  className={`w-6 h-0.5 bg-current mt-1 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <div
                  className={`w-6 h-0.5 bg-current mt-1 transition-all ${
                    isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </button>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center">
              <li className="px-4 py-2 mx-2 cursor-pointer hover:text-green-700">
                <Link href="/" onClick={() => setActiveLink("home")}>
                  Beranda
                </Link>
              </li>
              <li className="px-4 py-2 mx-2 cursor-pointer hover:text-green-700">
                <Link href="/produk" onClick={() => setActiveLink("produk")}>
                  Produk
                </Link>
              </li>
              <li className="px-4 py-2 mx-2 cursor-pointer hover:text-green-700">
                <Link href="/news" onClick={() => setActiveLink("news")}>
                  Berita
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={menuVariants}
            className="lg:hidden overflow-hidden"
          >
            <ul className="flex flex-col items-center pb-4">
              <li className="w-full text-center py-2 hover:bg-green-600 hover:text-white">
                <Link
                  href="/"
                  onClick={() => {
                    setActiveLink("home");
                    setIsOpen(false);
                  }}
                >
                  Beranda
                </Link>
              </li>
              <li className="w-full text-center py-2 hover:bg-green-600 hover:text-white">
                <Link
                  href="/produk"
                  onClick={() => {
                    setActiveLink("produk");
                    setIsOpen(false);
                  }}
                >
                  Produk
                </Link>
              </li>
              <li className="w-full text-center py-2 hover:bg-green-600 hover:text-white">
                <Link
                  href="/news"
                  onClick={() => {
                    setActiveLink("news");
                    setIsOpen(false);
                  }}
                >
                  Berita
                </Link>
              </li>
            </ul>
          </motion.div>
        </nav>
      </header>
    </>
  );
}
