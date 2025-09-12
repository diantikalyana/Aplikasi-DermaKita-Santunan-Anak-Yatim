import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import FotoEnam from "../../../images/FotoEnam.png";
import FotoDua from "../../../images/FotoDua.png";
import FotoTiga from "../../../images/FotoTiga.png";

// Font injection
const fontStyle = `
  @font-face {
    font-family: 'Raleway';
    src: url('/fonts/Raleway-Regular.woff2') format('woff2');
    font-weight: 400;
  }
  .font-raleway {
    font-family: 'Raleway', sans-serif;
  }
`;

const DetailDokumentasiUmum = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dummy data sama persis dengan DokumentasiUmum
  const dummyData = [
    {
      id: 1,
      foto: FotoEnam,
      tanggal: "2025-06-30",
      nama_anak: "Bayu Pratama",
      desa: "Desa Sugihan",
      nominal: 35000000,
      target: 35000000,
      deskripsi:
        "Pada kesempatan yang penuh makna ini, DermaKita dengan penuh kepedulian menyalurkan bantuan sebesar Rp35.000.000 untuk mendukung perjuangan seorang anak yatim yang saat ini tengah berjuang melawan penyakit kanker otak.",
    },
    {
      id: 2,
      foto: FotoDua,
      tanggal: "2025-06-30",
      nama_anak: "Bayu Pratama",
      desa: "Desa Sugihan",
      nominal: 35000000,
      target: 35000000,
      deskripsi:
        "Bayu adalah seorang anak yatim yang saat ini sedang berjuang melawan sakit dan membutuhkan perawatan medis lanjutan.",
    },
    {
      id: 3,
      foto: FotoTiga,
      tanggal: "2025-06-30",
      nama_anak: "Bayu Pratama",
      desa: "Desa Sugihan",
      nominal: 35000000,
      target: 35000000,
      deskripsi:
        "Bayu adalah seorang anak yatim yang saat ini sedang berjuang melawan sakit dan membutuhkan perawatan medis lanjutan.",
    },
  ];

  // Cari data sesuai id
  const detail = dummyData.find((item) => item.id === parseInt(id, 10));

  if (!detail) {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 bg-[#f5f5f5]">
          <Navbar />
          <div className="p-6 text-center">
            <h1 className="text-2xl font-semibold text-red-600">
              Dokumentasi tidak ditemukan
            </h1>
            <button
              onClick={() => navigate(-1)}
              className="mt-4 bg-gray-600 hover:bg-gray-800 text-white px-4 py-2 rounded"
            >
              ← Kembali
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-white text-[#111827] font-raleway">
      <style>{fontStyle}</style>
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-6 max-w-6xl mx-auto w-full">
          {/* Tombol kembali */}
          <button
            onClick={() => navigate(-1)}
            className="mb-6 bg-gray-600 hover:bg-gray-800 text-white px-4 py-2 rounded"
          >
            ← Kembali
          </button>

          <div className="bg-white p-6 rounded-xl shadow flex flex-col md:flex-row gap-6">
            {/* Gambar */}
            <div className="md:w-1/3">
              <img
                src={detail.foto}
                alt={detail.nama_anak}
                className="w-full h-72 object-cover rounded-lg"
              />
            </div>

            {/* Info */}
            <div className="md:w-2/3">
              <h1 className="text-2xl font-bold mb-3">
                {detail.nama_anak} - {detail.desa}
              </h1>

              <p className="text-sm text-gray-600 mb-2">
                Tanggal: {detail.tanggal}
              </p>

              <span className="inline-block bg-[#25E02E]/37 text-black text-sm font-medium px-3 py-1 rounded-full mb-4">
                Tersalurkan: Rp{detail.nominal.toLocaleString("id-ID")}
              </span>

              <p className="text-gray-700 leading-relaxed">{detail.deskripsi}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DetailDokumentasiUmum;
