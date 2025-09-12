import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";

const KonfirmasiPengajuan = () => {
  const navigate = useNavigate();

  const handleKembali = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-[#5A4B6B] text-white p-6 rounded-2xl shadow-lg text-center w-[350px]">
          <p className="mb-4 text-sm">
            Data sudah diajukan! <br />
            Mohon tunggu notifikasi selanjutnya!
          </p>
          <button
            onClick={handleKembali}
            className="bg-gray-200 text-[#5A4B6B] font-semibold px-4 py-2 rounded-full hover:bg-gray-300"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default KonfirmasiPengajuan;
