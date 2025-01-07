"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

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

export default function BeritaKamiSection() {
  interface News {
    id: string;
    imageUrl: string;
    titleNews: string;
    descriptionNews: string;
    writterNews: string;
    dateCreated: string;
  }

  const [newsData, setNewsData] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const setVariants = useMemo(() => variants(), []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "news"));
        const newsData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            imageUrl: data.imageUrl,
            titleNews: data.titleNews,
            descriptionNews: data.descriptionNews,
            writterNews: data.writterNews,
            dateCreated: data.dateCreated,
          } as News;
        });
        setNewsData(newsData);
      } catch (error) {
        console.error("Error fetching news data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-white min-h-screen flex items-center justify-center py-12">
      <div className="text-center max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto w-full">
        <h2 className="text-2xl font-bold text-[#2b7a0b] mb-8">BERITA KAMI</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
        >
          {newsData.slice(0, 3).map((news, index) => (
            <motion.div
              key={index}
              variants={setVariants}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={news.imageUrl}
                  alt={news.titleNews}
                  layout="fill"
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-left">
                <p className="text-sm text-gray-500">
                  {formatDate(news.dateCreated)}
                </p>
                <h2 className="text-xl font-bold mt-2">
                  {news.titleNews}
                  <i className="fas fa-arrow-right"></i>
                </h2>
                <p className="text-gray-700 mt-2">{news.descriptionNews}</p>
                <Link
                  href={`/news/${news.id}`}
                  className="mt-4 text-[#2b7a0b] hover:underline"
                >
                  Lihat Detail &raquo;
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <Link href="/news">
          <button className="mt-8 px-6 py-2 bg-[#2b7a0b] text-white rounded-lg shadow hover:bg-[#245d08] transition-colors duration-300">
            Lainnya
          </button>
        </Link>
      </div>
    </section>
  );
}
