// src/pages/user/DetailPenyaluranUrgensi.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../../../components/SidebarUser";
import Navbar from "../../../components/NavbarUser";
import { ArrowLeft } from "lucide-react";

import FotoLapan from "../../../images/FotoLapan.png";
import FotoEmpat from "../../../images/FotoEmpat.png";

// Dataset sama kayak di list
const dataPenyaluran = [
  {
    id: 1,
    gambar: FotoLapan,
    nama: "Yves Heirson",
    lokasi: "Sidney, Kajoran",
    tanggal: "28/09/2025",
    status: "Sukses tersalurkan",
    terkumpul: 223330502,
    total: 230450600,
    deskripsi:
      "Yves Heirson terus bisa memperbaiki masa depan mereka berkat pendidikan. Didukung keluarga, ia tetap semangat untuk terus belajar demi kehidupan yang lebih baik.",
  },
  {
    id: 2,
    gambar:  FotoEmpat,
    nama: "Gibran Niaga",
    lokasi: "Boston, Kajoran",
    tanggal: "27/09/2025",
    status: "Sukses tersalurkan",
    terkumpul: 223330502,
    total: 230450600,
    deskripsi:
      "Gibran Niaga tetap bahagia saat menerima bantuan baru. Senyum tulus tercetak jelas meski kondisi sulit. Dana digunakan untuk kebutuhan pokok agar kehidupan lebih stabil.",
  },
];

function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(angka);
}

export default function DetailPenyaluranUrgensi() {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = dataPenyaluran.find((x) => x.id === Number(id));

  if (!item) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-600">Data tidak ditemukan</p>
      </div>
    );
  }

  const progress = Math.min((item.terkumpul / item.total) * 100, 100);

  return (
    <div className="flex min-h-screen bg-gray-50 font-raleway">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar title="Bukti Tersalurkan" />

        <div className="flex-1 px-10 py-8 max-w-5xl mx-auto w-full">
          {/* Tombol Kembali */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-700 hover:text-[#5a4b6b] mb-6"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            <span className="font-semibold">Kembali</span>
          </button>

          {/* Kategori */}
          <h2
            className="text-2xl font-bold tracking-wide mb-4 
                       bg-gradient-to-r from-[#5a4b6b] to-[#af92d1] 
                       bg-clip-text text-transparent inline-block"
          >
            UMUM
          </h2>

          {/* Konten Detail */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={item.gambar}
                alt={item.nama}
                className="w-full md:w-72 h-48 object-cover rounded-xl"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800">
                  {item.nama}{" "}
                  <span className="font-medium text-gray-600">– {item.lokasi}</span>
                </h3>
                <p className="text-sm text-gray-500 mt-1">{item.tanggal}</p>
                <p className="mt-4 text-gray-700 leading-relaxed">{item.deskripsi}</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">{item.status}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-[#af92d1] h-3 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-[#5a4b6b] font-semibold mt-2 text-sm">
                {formatRupiah(item.terkumpul)} / {formatRupiah(item.total)}
              </p>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-gray-500 mt-10">
            © 2025 <span className="font-semibold text-[#5a4b6b]">DermaKita.</span>{" "}
            Seluruh hak cipta dilindungi undang-undang.
          </p>
        </div>
      </div>
    </div>
  );
}
