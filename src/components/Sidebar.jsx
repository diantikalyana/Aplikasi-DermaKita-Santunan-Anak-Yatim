import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import AlertLogout from "./AllertLogout"; // ✅ gunakan komponen yang sama

const Sidebar = () => {
  const navigate = useNavigate();
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };

  const links = [
    { name: "Dashboard", to: "/admin/dashboard" },
    { name: "Data Anak Yatim", to: "/admin/data-anak-yatim" },
    { name: "Donasi", to: "/admin/donasi" },
    { name: "Laporan", to: "/admin/laporan" },
    { name: "Data Admin", to: "/admin/dataadmin" },
    { name: "Artikel", to: "/admin/artikel" },
    { name: "Dokumentasi", to: "/admin/dokumentasi" },
  ];

  return (
    <>
      <div className="w-62 min-h-screen bg-gradient-to-b from-[#493953] via-[#8c809c] to-[#cab6e4] text-white px-2 py-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-center mb-10 text-raleway font-bold text-2xl">
            <img src={logo} alt="Logo" className="h-20 w-auto" />
          </div>

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

        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowLogoutAlert(true)}
            className="bg-white text-[#493953] py-3 px-8 rounded-xl shadow-xl hover:bg-purple-100 font-bold transition duration-300 hover:scale-105"
          >
            Log-out
          </button>
        </div>
      </div>

      <AlertLogout
        isVisible={showLogoutAlert}
        onClose={() => setShowLogoutAlert(false)}
        onConfirm={handleLogout}
      />
    </>
  );
};

export default Sidebar;
