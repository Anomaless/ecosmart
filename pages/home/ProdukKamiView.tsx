"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

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

export default function ProdukKamiSection() {
  interface Product {
    id: string;
    imageUrl: string;
    productName: string;
    ownerName: string;
    priceProduct: string;
  }

  const [productsData, setProductsData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const setVariants = useMemo(() => variants(), []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            imageUrl: data.imageUrl,
            productName: data.productName,
            ownerName: data.ownerName,
            priceProduct: data.priceProduct,
          } as Product;
        });
        setProductsData(productsData);
      } catch (error) {
        console.error("Error fetching products data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="min-h-screen flex items-center justify-center py-12 ">
      <div className="text-center max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto">
        <h2 className="text-2xl font-bold text-[#2b7a0b] mb-8">PRODUK KAMI</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
        >
          {productsData.map((product, index) => (
            <motion.div
              key={index}
              variants={setVariants}
              className="max-w-xs rounded-lg shadow-lg bg-white relative transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <Image
                  src={product.imageUrl}
                  alt={product.productName}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
                  <i className="fas fa-heart text-black"></i>
                </button>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">
                  {product.ownerName}
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {product.productName}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center mt-8">
          <Link
            href="/produk"
            className="px-6 py-2 bg-[#2b7a0b] text-white rounded-lg shadow hover:bg-[#245d08] transition-colors duration-300 flex items-center space-x-2"
          >
            <span>Lihat Selengkapnya</span>
            <FaArrowRight className="text-lg" />
          </Link>
        </div>
      </div>
    </section>
  );
}
