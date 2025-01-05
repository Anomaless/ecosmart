"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MdDashboard } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from "@/lib/firebaseConfig"; // Pastikan import firebaseConfig Anda benar

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const pathname = usePathname();

  const shouldShowSidebar =
    pathname === "/admin-workstation/dashboard" ||
    pathname === "/admin-workstation/product" ||
    pathname === "/admin-workstation/news";

  useEffect(() => {
    const auth = getAuth(app);

    // Mendengarkan perubahan status autentikasi
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email); // Update email pengguna setelah login
      } else {
        setUserEmail(null); // Jika tidak ada pengguna, set ke null
      }
    });

    // Membersihkan listener saat komponen unmount
    return () => unsubscribe();
  }, []);

  if (!shouldShowSidebar) return null;

  const handleLogout = async () => {
    try {
      const auth = getAuth(app);
      await signOut(auth);
      // Redirect ke halaman login setelah logout
      window.location.href = "/login"; // Sesuaikan path sesuai kebutuhan
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <button
        className="md:hidden p-4 text-white font-bold bg-[#009539] fixed top-0 left-0 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 w-64 bg-[#009539] text-white h-screen fixed top-0 left-0 pt-5 transition-transform duration-300 z-40`}
      >
        <div className="flex pt-12 items-center font-bold gap-2 px-6 mb-5">
          <Link href="/">
            <img
              src="/assets/images/Logo.png"
              alt="Logo"
              className="w-20 h-10"
            />
          </Link>
        </div>

        {/* Display the welcome message */}
        {userEmail && (
          <div className="text-center text-lg font-bold text-white mb-6">
            Selamat datang, {userEmail}
          </div>
        )}

        <ul className="list-none p-0">
          <li className="flex py-4 px-6 hover:bg-[#f9d747] hover:text-[#8b2f31]">
            <MdDashboard className="text-3xl pr-2" />
            <Link
              href="/admin-workstation/dashboard"
              className="block font-bold"
            >
              DASHBOARD
            </Link>
          </li>
          <li className="py-4 flex px-6 hover:bg-[#f9d747] hover:text-[#8b2f31]">
            <FaUserPlus className="text-3xl pr-2" />
            <Link href="/admin-workstation/product" className="block font-bold">
              PRODUCT
            </Link>
          </li>
          <li className="py-4 flex px-6 hover:bg-[#f9d747] hover:text-[#8b2f31]">
            <FaDatabase className="text-2xl pr-2" />
            <Link href="/admin-workstation/news" className="block font-bold">
              NEWS
            </Link>
          </li>
        </ul>
        <div className="absolute bottom-5 left-0 right-0 p-6">
          <button
            onClick={handleLogout}
            className="w-full py-2 px-4 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
          >
            LOGOUT
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
