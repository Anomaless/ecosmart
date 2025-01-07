"use client";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import Image from "next/image";
import { motion } from "framer-motion";

const page = () => {
  interface Product {
    id: string;
    imageUrl: string;
    productName: string;
    ownerName: string;
    priceProduct: string;
  }

  const [productsData, setProductsData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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
    <div>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white py-20 min-h-screen relative flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/image/Berita.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative max-w-screen-sm mx-auto px-6 sm:px-8 lg:px-16 text-center">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-[#2b7a0b]">INOVASI HIJAU</span> DARI{" "}
            <span className="text-[#2b7a0b]">KOMUNITAS</span> KAMI
          </h1>
          <p className="text-lg mb-8 text-white">
            DAUR ULANG DAN PRODUK LOKAL YANG MENDUKUNG KEBERLANGSUNGAN
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16">
          <h2 className="text-3xl font-bold text-center mb-8text-2xl text-[#2b7a0b] mb-16">
            Produk Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <motion.div
                key={product.id}
                className="max-w-xs rounded-lg shadow-lg bg-white relative transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
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
                  <p className="text-lg font-semibold text-gray-700">
                    {product.priceProduct}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
