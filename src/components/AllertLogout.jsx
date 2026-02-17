import React from "react";
import { useNavigate } from "react-router-dom";

function LogoutAlert({ isVisible, onClose }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    onClose();
    navigate("/");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-[999]">
      <div className="bg-gradient-to-r from-[#a079da] to-[#5A4B6B] text-white rounded-2xl shadow-xl px-10 py-8 text-center w-[350px]">
        <h2 className="text-2xl font-semibold mb-3 animate-pulse">
          Anda yakin ingin logout?
        </h2>
        <p className="text-sm opacity-90 mb-6">Semua sesi akan diakhiri.</p>

        <div className="flex justify-center space-x-4">
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-white text-[#5A4B6B] font-semibold rounded-full hover:bg-gray-100 transition"
          >
            Ya, Logout
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-transparent border border-white rounded-full hover:bg-white/20 transition"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutAlert;
