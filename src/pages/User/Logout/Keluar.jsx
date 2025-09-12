import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";
import Navbar from "../../../components/Navbar";

const Keluar = () => {
  const navigate = useNavigate();

  const handleBatal = () => {
    navigate(-1); // kembali ke halaman sebelumnya
  };

  const handleKeluar = () => {
    // Hapus data sesi jika ada
    // localStorage.clear();
    navigate("/"); // arahkan ke halaman login
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten utama */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar title="Keluar" />

        {/* Isi halaman */}
        <div className="p-10 flex flex-col flex-1 justify-center items-center">
          <div className="bg-[#5A4B6B] text-white rounded-2xl p-12 max-w-xl w-full shadow-lg">
            <p className="text-center text-2xl font-semibold mb-10">
              Anda yakin ingin keluar?
            </p>
            <div className="flex justify-center gap-8">
              <button
                onClick={handleBatal}
                className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-3 px-8 rounded-lg text-lg"
              >
                Batal
              </button>
              <button
                onClick={handleKeluar}
                className="bg-[#B091D1] hover:bg-[#a17fc7] text-white font-semibold py-3 px-8 rounded-lg text-lg"
              >
                Ya
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keluar;
