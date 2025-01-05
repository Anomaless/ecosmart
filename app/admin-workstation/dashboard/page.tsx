"use client";
import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "@/lib/firebaseConfig"; // Pastikan Anda sudah mengonfigurasi Firebase
import { useRouter } from "next/navigation"; // Untuk redirect halaman
import ProductPage from "@/pages/productpage";
import NewsPage from "@/pages/newspage";
import CountDashboard from "@/pages/countdashboard";

export default function Page() {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Cek jika email pengguna sesuai dengan admin yang diizinkan
        checkIfUserIsAdmin(user.email);
      } else {
        setLoading(false);
        router.push("/login"); // Redirect ke halaman login jika tidak ada pengguna
      }
    });

    return () => unsubscribe();
  }, []);

  const checkIfUserIsAdmin = (userEmail: string | null) => {
    // Ambil email admin dari variabel lingkungan
    const allowedAdminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

    if (userEmail && userEmail === allowedAdminEmail) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
      router.push("/not-authorized"); // Redirect jika bukan admin
    }

    setLoading(false);
  };

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (!isAdmin) {
    return <div>Access Denied</div>; // Akses ditolak jika bukan admin
  }

  return (
    <div>
      <CountDashboard />
      <ProductPage />
      <NewsPage />
    </div>
  );
}
