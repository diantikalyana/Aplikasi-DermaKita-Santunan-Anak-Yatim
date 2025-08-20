import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";

// Data dokumentasi
const dokumentasiData = [
  {
    id: 1,
    tanggal: "2025-08-01",
    lokasi: "Desa Sugihan",
    nominal: "Rp 10.000.000",
    metode: "Bank Syariah Indonesia",
    rekening: 3,
    keterangan:
      "Dana sebesar 10 juta telah ditasarufkan melalui Bank Syariah Indonesia ke 3 rekening anak yatim di Desa Sugihan.",
    foto: "/images/dokumentasi1.jpg",
  },
  {
    id: 2,
    tanggal: "2025-08-03",
    lokasi: "Desa Sidowangi",
    nominal: "Rp 7.500.000",
    metode: "Bank Syariah Indonesia",
    rekening: 2,
    keterangan:
      "Donasi senilai 7,5 juta ditransfer ke 2 rekening penerima di Desa Sidowangi untuk kebutuhan pendidikan.",
    foto: "/images/dokumentasi2.jpg",
  },
  {
    id: 3,
    tanggal: "2025-08-04",
    lokasi: "Desa Sangen",
    nominal: "Rp 5.000.000",
    metode: "Bank Syariah Indonesia",
    rekening: 1,
    keterangan:
      "Penyaluran dana sebesar 5 juta telah dilakukan ke 1 rekening anak yatim di Desa Sangen melalui transfer bank.",
    foto: "/images/dokumentasi3.jpg",
  },
];

const DetailDokumentasiUmum = () => {
  const { id } = useParams(); // ambil id dari URL
  const navigate = useNavigate();

  // Cari data berdasarkan ID
  const dokumentasi = dokumentasiData.find(
    (item) => item.id === parseInt(id, 10)
  );

  if (!dokumentasi) {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-[#f5f5f5] min-h-screen">
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
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-[#f5f5f5] min-h-screen">
        <Navbar />
        <div className="p-6">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">
            Detail Dokumentasi
          </h1>

          <div className="bg-white p-6 rounded-xl shadow">
            <img
              src={dokumentasi.foto}
              alt={`Foto ${dokumentasi.lokasi}`}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />

            <div className="space-y-3">
              <p className="text-gray-600">
                <strong>Tanggal:</strong> {dokumentasi.tanggal}
              </p>
              <p className="text-gray-600">
                <strong>Lokasi:</strong> {dokumentasi.lokasi}
              </p>
              <p className="text-gray-600">
                <strong>Nominal:</strong> {dokumentasi.nominal}
              </p>
              <p className="text-gray-600">
                <strong>Metode:</strong> {dokumentasi.metode}
              </p>
              <p className="text-gray-600">
                <strong>Jumlah Rekening:</strong> {dokumentasi.rekening}
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Keterangan:</strong> {dokumentasi.keterangan}
              </p>
            </div>

            <div className="mt-6">
              <button
                onClick={() => navigate(-1)}
                className="bg-[#493953] hover:bg-[#836f8f] text-white px-4 py-2 rounded shadow"
              >
                ← Kembali
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDokumentasiUmum;
