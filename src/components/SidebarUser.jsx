import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import LogoText from "../assets/logotext.png";

function SidebarUser() {
  const location = useLocation();

  const isUserPage =
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/profil");

  const links = [
    { path: "/user/menuutama/donasipage", label: "Donasi" },
    { path: "/user/menuutama/riwayatpage", label: "Riwayat" },
    { path: "/user/menuutama/pengajuanpage", label: "Pengajuan data" },
    { path: "/user/artikel/beritaurgensi", label: "Artikel" },
    { path: "/user/penyaluran/buktitersalurkan", label: "Bukti tersalurkan" },
  ];

  return (

    <aside className="w-72 bg-gradient-to-b from-[#B091D1] to-[#5A4B6B] text-white px-6 py-10 flex flex-col items-center">
      {/* Logo + LogoText */}
      <div className="mb-8 flex items-center gap-3">
        <div className="relative w-16 h-16">
          <img
            src={Logo}
            alt="Logo DermaKita"
            className="w-full h-full object-contain relative z-10"
          />
          <div className="absolute inset-0 rounded-full bg-purple-200/60 backdrop-blur-xl border border-purple-200/15 shadow-lg"></div>
        </div>
        <img src={LogoText} alt="Logo Text" className="h-10 object-contain font-bold" />
      </div>

      {/* Navigasi Link */}
      <nav className="flex flex-col w-full space-y-3">
        {links.map((link, idx) => (
          <Link
            key={idx}
            to={link.path}
            className={`block text-xl font-raleway w-full px-4 py-2 rounded-l-full transition-all text-left ${
              location.pathname === link.path
                ? "bg-white text-purple-700 shadow"
                : "text-white hover:bg-gray-200 hover:text-purple-700"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Tombol Keluar */}
      <div className="mt-22 w-full text-center">
        <hr className="border-t border-white/50 my-3" />
        <Link
          to="/keluar"
          className="bg-white text-purple-600 text-sm font-semibold px-6 py-1 rounded-full hover:bg-gray-100 transition"
        >
          Keluar
        </Link>
      </div>
    </aside>
  );
}

export default SidebarUser;
