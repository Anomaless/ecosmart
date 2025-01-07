"use client";
import { motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import ProdukCard from "@/components/ProdukCard";

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
    selectedEcommerce: string;
    whatsappNumber: string; // Add this line
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
            selectedEcommerce: data.selectedEcommerce,
            whatsappNumber: data.whatsappNumber || "", // Add this line
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
      <div className=" max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto">
        <h2 className="text-2xl font-bold text-[#2b7a0b] mb-8 text-center">
          PRODUK KAMI
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
        >
          {productsData.slice(0, 3).map((product, index) => (
            <motion.div key={index} variants={setVariants}>
              <ProdukCard product={product} />
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
