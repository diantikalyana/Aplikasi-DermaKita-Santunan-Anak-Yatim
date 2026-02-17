import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import LogoutAlert from "./AllertLogout"; // ⬅️ pakai alert yang sama dengan user

const fontStyle = `
  @font-face {
    font-family: 'Raleway'; 
    src: url('/fonts/Raleway-Regular.woff2') format('woff2');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Raleway';
    src: url('/fonts/Raleway-SemiBold.woff2') format('woff2');
    font-weight: 600;
  }
  @font-face {
    font-family: 'Raleway';
    src: url('/fonts/Raleway-Bold.woff2') format('woff2');
    font-weight: 700;
  }
  .font-raleway {
    font-family: 'Raleway', sans-serif;
  }
`;

const SidebarRelawan = () => {
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);

  const links = [
    { name: "Dashboard", to: "/relawan/dashboard" },
    { name: "Data Anak Yatim", to: "/relawan/data-anak-yatim" },
    { name: "Laporan", to: "/relawan/laporan" },
    { name: "Data Relawan", to: "/relawan/data" },
    { name: "Dokumentasi", to: "/relawan/dokumentasi" },
    { name: "Artikel", to: "/relawan/artikel" },
  ];

  return (
    <>
      {/* Sidebar */}
      <div className="w-60 min-h-screen bg-gradient-to-b from-[#493953] via-[#8c809c] to-[#cab6e4] text-white px-2 py-6 flex flex-col justify-between">
        {/* Logo */}
        <div>
          <div className="flex items-center justify-center mb-10 text-raleway font-bold text-2xl">
            <img src={logo} alt="logo" className="h-22 w-auto" />
          </div>

          {/* Navigasi */}
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `py-2 px-4 rounded-l-full transition shadow-md ${
                    isActive
                      ? "bg-white text-[#493953] font-semibold drop-shadow-2xl ring-1 ring-black/10"
                      : "hover:bg-white hover:text-[#493953] font-semibold"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Tombol Logout */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowLogoutAlert(true)}
            className="bg-white text-[#493953] py-3 px-8 rounded-xl shadow-xl hover:bg-purple-100 font-bold transition duration-300 hover:scale-105"
          >
            Log-out
          </button>
        </div>
      </div>

      {/* Alert Logout */}
      <LogoutAlert
        isVisible={showLogoutAlert}
        onClose={() => setShowLogoutAlert(false)}
      />
    </>
  );
};

export default SidebarRelawan;
