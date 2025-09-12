import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import qrisImg from "../../assets/qris.png";
import logoText from "../../assets/LogoText.png";

const ModalDonasi = ({ open, onClose, data, jenis = "umum" }) => {
  const [bukti, setBukti] = useState(null);
  const [showUploadAlert, setShowUploadAlert] = useState(false);
  const navigate = useNavigate();

  if (!open) return null;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = qrisImg;
    link.download = "qris-donasi.png";
    link.click();
  };

  const handleUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setBukti(file);
        setShowUploadAlert(false); // hilangkan alert kalau sudah upload
        console.log("File dipilih:", file.name);
      }
    };
    input.click();
  };

  const handleSelesai = () => {
    if (!bukti) {
      setShowUploadAlert(true);
      return;
    }

    navigate("/user/menuutama/suksesdonasipage", {
      state: {
        nominal: data.nominal,
        status: "success",
        jenis: jenis,
      },
    });
  };

  const judul = jenis === "urgensi" ? "DONASI URGENSI" : "DONASI UMUM";

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
      {/* Background */}
      <div className="fixed inset-0 bg-black/40" onClick={onClose}></div>

      {/* Modal Donasi */}
      <div className="relative bg-white rounded-2xl shadow-lg border border-gray-200 w-[90%] max-w-[600px]">
        {/* Header */}
        <div className="bg-[#5A4B6B] text-white px-4 py-3 flex justify-between items-center">
          <img src={logoText} alt="DermaKita" className="h-8 object-contain" />
          <button onClick={onClose} className="text-5xl">&times;</button>
        </div>

        {/* Body */}
        <div className="p-6 text-center">
          <h3 className="bg-gradient-to-r from-[#5a4b6b] to-[#d6c0f0] bg-clip-text text-transparent font-bold text-4xl mb-2">
            {judul}
          </h3>

          <p className="text-[#5a4b6b] mb-6 text-xl font-semibold">
            Konfirmasi Pembayaran
          </p>
          <p className="text-sm text-center text-[#5a4b6b] mb-1">
            Anda akan melakukan pembayaran sebesar:
          </p>
          <p className="text-4xl text-center text-[#5a4b6b] font-semibold mb-4">
            Rp. {Number(data.nominal || 0).toLocaleString("id-ID")}
          </p>

          {/* eWallet / Transfer */}
          {data.metode === "ewallet" ? (
            <>
              <p className="text-sm text-[#5a4b6b] mb-2">
                Untuk melanjutkan pembayaran silakan scan kode QR di bawah
              </p>

              <div className="flex justify-center mb-3">
                <button
                  onClick={handleDownload}
                  className="bg-[#5A4B6B] text-white px-3 py-1 rounded-lg text-xl hover:bg-[#463859] transition"
                >
                  Download QRIS
                </button>
              </div>

              <div className="flex justify-center mb-2">
                <img src={qrisImg} alt="QR Code" className="w-50 h-auto" />
              </div>
              <p className="text-xs text-gray-500 mb-4">
                NMID : 2021065207775 <br /> A01
              </p>
            </>
          ) : (
            <>
              <p className="text-sm text-gray-500 mb-2">
                Silakan transfer ke rekening berikut:
              </p>
              <div className="bg-gray-100 p-3 rounded-lg mb-4">
                <p className="font-semibold">BCA</p>
                <p className="text-lg font-bold">1234 5678 999</p>
                <p className="text-sm text-gray-500">a.n Yayasan DermaKita</p>
              </div>
            </>
          )}

          {/* Tombol Upload + Selesai */}
          <div className="flex flex-col gap-2">
            <button
              onClick={handleUpload}
              className="bg-[#5A4B6B] text-white px-4 py-2 rounded-full text-sm"
            >
              UPLOAD BUKTI PEMBAYARAN
            </button>
            <button
              onClick={handleSelesai}
              className="bg-[#5A4B6B] text-white px-4 py-2 rounded-full text-sm"
            >
              SELESAI
            </button>
          </div>

          {/* Alert wajib upload */}
          {showUploadAlert && !bukti && (
            <p className="text-red-600 mt-4 font-medium">
              Harap upload bukti terlebih dulu.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalDonasi;
