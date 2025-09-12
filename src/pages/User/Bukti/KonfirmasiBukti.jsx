import React from "react";
import { useNavigate } from "react-router-dom";

function KonfirmasiBukti() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#5A4B6B] to-[#B091D1] text-white text-center px-4">
      {/* Avatar Bulat */}
      <div className="w-24 h-24 rounded-full bg-white mb-6" />

      {/* Nama Brand */}
      <h1 className="text-3xl font-bold mb-4">DermaKita</h1>

      {/* Tombol Klik */}
      <button
        onClick={handleClick}
        className=" text-white px-6 py-2 rounded-full shadow mb-10 hover:bg-[#8a71a3] transition"
      >
        Lampiran bukti terkirim!!
      </button>

      {/* Garis */}
      <div className="w-full max-w-sm border-t border-white mb-6"></div>

      {/* Ucapan Terima Kasih */}
      <p className="italic text-sm leading-relaxed">
        Terima kasih telah menjadi bagian dari kebaikan hari ini. <br />
        Sampai jumpa kembali.
      </p>
    </div>
  );
}

export default KonfirmasiBukti;
