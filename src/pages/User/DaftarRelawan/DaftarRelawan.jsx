import React from "react";
import { useNavigate } from "react-router-dom";

function DaftarRelawan() {
  const navigate = useNavigate();

  // Inject font langsung
  const fontStyle = `
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap');
    * {
      font-family: 'Raleway', sans-serif;
    }
  `;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-6">
      {/* Inject Font */}
      <style>{fontStyle}</style>

      {/* Header gradasi */}
      <div className="w-full max-w-6xl bg-gradient-to-r from-[#5a4a68] via-[#b091d1] to-[#b091d1] rounded-t-2xl p-6 text-white shadow-md">
        <h1 className="text-2xl font-bold">Jadilah Relawan DermaKita</h1>
      </div>

      {/* Card konten */}
      <div className="w-full max-w-6xl bg-[#f5f5f5] rounded-b-2xl shadow-md p-6">
        {/* Tombol back */}
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-600 mb-4 hover:underline"
        >
          &lt;&lt; Beranda
        </button>

        {/* Isi */}
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Mengapa menjadi relawan Dermakita?
        </h2>

        <p className="text-gray-700 mb-4 leading-relaxed">
          Relawan DermaKita berperan sebagai penyalur bantuan, mendukung
          kegiatan sosial dan menyebarkan semangat kebaikan.
        </p>

        <p className="text-gray-700 mb-2 leading-relaxed">
          Untuk mendaftar sebagai relawan DermaKita silahkan hubungi operator
          dengan mengirim permohonan ke email :
        </p>

        <p className="text-gray-800 font-semibold">Dermakita@gmail.com</p>
      </div>
    </div>
  );
}

export default DaftarRelawan;
