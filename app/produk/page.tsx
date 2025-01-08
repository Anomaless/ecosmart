"use client";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import ProdukCard from "@/components/ProdukCard";
import ProdukCardSkeleton from "@/components/ProdukCardSkeleton";

const page = () => {
  interface Product {
    id: string;
    imageUrl: string;
    productName: string;
    ownerName: string;
    priceProduct: string;
    selectedEcommerce: string;
    whatsappNumber: string;
    descriptionProduct: string;
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
            selectedEcommerce: data.selectedEcommerce,
            whatsappNumber: data.whatsappNumber || "",
            descriptionProduct: data.descriptionProduct || "",
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
          <h2 className=" font-bold text-center mb-8 text-2xl text-[#2b7a0b]">
            Produk Kami
          </h2>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center ">
            {loading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <ProdukCardSkeleton key={index} />
                ))
              : productsData.map((product) => (
                  <ProdukCard key={product.id} product={product} />
                ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
