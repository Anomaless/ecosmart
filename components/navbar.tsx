"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);
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

  if (
    pathname?.startsWith("/admin-workstation/dashboard") ||
    pathname?.startsWith("/admin-workstation/product") ||
    pathname?.startsWith("/admin-workstation/news")
  ) {
    return null;
  }

  const MotionImage = motion(Image);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 transition-all ${
          scrollActive
            ? "bg-[#009539] text-white shadow-md"
            : "bg-transparent text-[#009539]"
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
          <ul className="hidden lg:flex col-start-2 col-end-2 items-center ml-auto">
            <li className={`px-4 py-2 mx-2 cursor-pointer inline-block`}>
              <Link href="/" onClick={() => setActiveLink("home")}>
                Beranda
              </Link>
            </li>
            <li className={`px-4 py-2 mx-2 cursor-pointer inline-block`}>
              <Link href="/product" onClick={() => setActiveLink("product")}>
                Produk
              </Link>
            </li>
            <li className={`px-4 py-2 mx-2 cursor-pointer inline-block`}>
              <Link href="/news" onClick={() => setActiveLink("news")}>
                Berita
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
