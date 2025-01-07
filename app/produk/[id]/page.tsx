"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

const formatRupiah = (number: string) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(Number(number));
};

const ProductDetail = () => {
  const pathname = usePathname();
  const id = pathname ? pathname.split("/").pop() : null;
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const foundProduct = productsData.find((product) => product.id === id);
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="pt-20 py-8 bg-white md:py-16 dark:bg-gray-900 antialiased min-h-screen flex justify-center items-center ">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          {/* Gambar Produk */}
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img
              className="w-full dark:hidden max-h-[500px] object-contain"
              src={product.imageUrl}
              alt={product.productName}
            />
            <img
              className="w-full hidden dark:block max-h-[500px] object-contain"
              src={product.imageUrl}
              alt={product.productName}
            />
          </div>

          {/* Detail Produk */}
          <div className="mt-6 sm:mt-8 lg:mt-0 flex flex-col justify-center">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {product.productName}
            </h1>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                {formatRupiah(product.priceProduct)}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-4 h-4 ${
                      index < product.rating
                        ? "text-yellow-300"
                        : "text-gray-300"
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Tombol WhatsApp */}
            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <a
                href={`https://wa.me/${product.whatsappNumber}`}
                title="Contact via WhatsApp"
                className="mt-4 sm:mt-0 bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-white focus:outline-none flex items-center justify-center"
                role="button"
              >
                <FaWhatsapp className="mr-2" /> Contact via WhatsApp
              </a>
            </div>
            {/* Deskripsi Produk */}
            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
            <p className="mb-6 text-gray-500 dark:text-gray-400">
              {product.descriptionProduct}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
