import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <Image
        src="/assets/image/footerBg.png"
        alt="Footer Background"
        layout="responsive"
        width={1920}
        height={1080}
      />
      <footer className="bg-[#009539] text-white">
        <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto py-6 lg:py-8">
          <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6">
            {/* Logo Section */}
            <div className="flex-1 mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <Image
                  src="/assets/image/ecoSmartLogo.png"
                  alt="logoEcoSmart"
                  width={50}
                  height={50}
                  className="cursor-pointer"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap ml-2">
                  EcoSmart
                </span>
              </a>
              <ul className="mt-4 text-gray-200 font-medium">
                <li className="mb-2">
                  <a href="/" className="hover:underline">
                    Tentang Kami
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/produk" className="hover:underline">
                    Produk
                  </a>
                </li>
                <li>
                  <a href="/news" className="hover:underline">
                    Berita
                  </a>
                </li>
              </ul>
            </div>

            {/* Form & Contact Section */}
            <div className="flex-1 mb-6 md:mb-0">
              <h2 className="mb-6 text-sm font-semibold uppercase">Pesan</h2>
              <p className="mb-4">
                "Berikan kesan dan pesan serta kritikan untuk kami agar kami
                dapat lebih baik ke depannya."
              </p>
              <form>
                <input
                  type="text"
                  placeholder="Nama"
                  className="w-full p-4 mb-4 rounded-lg text-gray-700"
                />
                <textarea
                  placeholder="Pesan"
                  className="w-full p-4 mb-4 rounded-lg text-gray-700 h-32"
                />
                <button
                  type="submit"
                  className="w-full p-4 bg-green-700 rounded-lg text-white hover:bg-green-600 transition"
                >
                  Kirim
                </button>
              </form>
            </div>
            {/* Contact Information */}
            <div className="flex-1">
              <h2 className="mb-6 text-sm font-semibold uppercase">Kontak</h2>
              <p className="mb-4">(027)-2256-8420</p>
              <p>
                Jl. Bromo VII, Gebang RT02, RW16 Banjarsari, Surakarta, Jawa
                Tengah 57136
              </p>
            </div>
          </div>

          {/* Footer Bottom */}
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="text-center">
            <span className="text-sm text-gray-200">
              © 2024 EcoSmart. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
