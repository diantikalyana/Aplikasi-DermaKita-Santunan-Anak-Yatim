import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import successIcon from "../../../images/success.png";
import failedIcon from "../../../images/failed.png";
import arrowIcon from "../../../assets/left.png"; // arrow custom dari asset

// Definisi font Raleway
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

const SuksesDonasiPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { nominal, status, tanggal } = location.state || {
    nominal: 10000,
    status: "success",
    tanggal: new Date().toISOString(),
  };

  const isSuccess = status === "success";

  // Format tanggal
  const formatTanggal = (tgl) =>
    new Date(tgl).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#b094d9] to-[#4b3b63] px-4 font-raleway">
      {/* inject font */}
      <style>{fontStyle}</style>

      {/* Tombol kembali */}
      <div className="absolute top-6 left-6">
        <button
          onClick={() => navigate("/user/dashboard")}
          className="flex items-center gap-2 text-white hover:opacity-80 transition"
        >
          <img src={arrowIcon} alt="Back" className="w-12 h-12" />
        </button>
      </div>

      {/* Box struk */}
      <div className="bg-[#f2e6ee] rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <img
            src={isSuccess ? successIcon : failedIcon}
            alt={isSuccess ? "Donasi berhasil" : "Donasi gagal"}
            className="w-40 h-auto"
          />
        </div>

        {/* Judul */}
        <h2
          className={`text-3xl font-semibold mb-4 underline decoration-black decoration-2 underline-offset-4 ${
            isSuccess ? "text-[#5a4b6b]" : "text-red-600"
          }`}
        >
          {isSuccess ? "DONASI BERHASIL -!!" : "DONASI PENDING / GAGAL"}
        </h2>

        {/* Pesan */}
        <p className="text-[#5a4b6b] mb-6">
          {isSuccess
            ? "Kebaikan Anda adalah harapan bagi sesama. Terima kasih!"
            : "Mohon dicoba kembali, transaksi Anda belum berhasil."}
        </p>

        {/* Total Donasi */}
        <div className="p-4 mb-6">
          <p className="text-xl font-semibold text-[#5a4b6b]">TOTAL DONASI</p>
          <p className="text-xl text-[#5a4b6b] font-semibold">
            Rp. {Number(nominal || 0).toLocaleString("id-ID")}
          </p>
        </div>

        {/* Tanggal Transaksi */}
        <p className="text-sm text-gray-600 mt-4">
          Tanggal Transaksi: {formatTanggal(tanggal)}
        </p>
      </div>
    </div>
  );
};

export default SuksesDonasiPage;
