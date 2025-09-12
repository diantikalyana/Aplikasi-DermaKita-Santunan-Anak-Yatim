import React, { useState } from "react";
import Sidebar from "../../../components/SidebarUser";
import Navbar from "../../../components/NavbarUser";
import { Check } from "lucide-react"; 
import { useNavigate } from "react-router-dom";
import FotoLapan from "../../../images/FotoLapan.png";
import FotoEmpat from "../../../images/FotoEmpat.png";

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

function BuktiPenyaluranUrgensi() {
  const [urutan, setUrutan] = useState("Terbaru");
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-white font-raleway">
      <style>{fontStyle}</style>

      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar title="Bukti Tersalurkan" />

        <main className="px-10 py-6 overflow-y-auto flex-1">
          <h2 className="text-2xl font-bold text-[#5A4B6B] mb-1">URGENSI</h2>
          <p className="text-sm text-gray-600 max-w-4xl leading-relaxed border-b border-gray-200 pb-3 mb-6">
            Berikut adalah bukti penyaluran dana umum untuk anak yatim. Dana ini
            disalurkan secara merata sebagai bagian dari program bantuan rutin,
            tanpa mempertimbangkan kondisi darurat atau urgensi tertentu.
          </p>

          {/* Urutkan */}
          <div className="flex items-center space-x-2 justify-end mb-6">
            <span className="text-sm font-semibold text-gray-600">Urutkan</span>
            <div className="relative">
              <select
                value={urutan}
                onChange={(e) => setUrutan(e.target.value)}
                className="bg-[#D9D9D9] rounded-full px-3 py-1 pr-8 shadow-sm text-sm font-semibold text-gray-800 appearance-none cursor-pointer"
              >
                <option value="Terbaru">Terbaru</option>
                <option value="Terlama">Terlama</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <svg
                  className="w-3 h-3 text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path d="M31.1 192h257.9c28.4 0 42.8 34.5 22.6 54.6l-128.9 128c-12.5 
                  12.5-32.8 12.5-45.3 0l-128.9-128C-11.7 226.5 2.7 192 31.1 192z" />
                </svg>
              </div>
            </div>
          </div>

          {/* List Bukti */}
          <div className="flex flex-col gap-6">
            {dataPenyaluran.map((item) => {
              const progress =
                Math.min((item.terkumpul / item.total) * 100, 100) || 0;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md p-4 flex flex-col md:flex-row gap-4 relative"
                >
                  {/* Lihat Detail */}
                  <button
                    onClick={() => navigate(`/user/penyaluran/detailpenyaluranurgensi/${item.id}`)}
                    className="absolute top-3 right-4 text-xs font-semibold text-[#5A4B6B] hover:underline"
                  >
                    Lihat Detail →
                  </button>

                  {/* Gambar */}
                  <img
                    src={item.gambar}
                    alt={item.nama}
                    className="w-full md:w-[200px] h-[150px] object-cover rounded-lg"
                  />

                  {/* Isi */}
                  <div className="flex-1 flex flex-col justify-between">
                    <h3 className="font-semibold text-gray-800 text-base">
                      {item.nama} — {item.lokasi}
                    </h3>
                    <span className="text-xs text-gray-500">
                      {item.tanggal}
                    </span>

                    <p className="text-sm text-gray-600 mt-1">{item.status}</p>

                    {/* Progress + Centang sejajar */}
                    <div className="mt-2">
                      <div className="flex items-center">
                        <div className="w-70 bg-gray-200 h-2 rounded-full relative">
                          <div
                            className="bg-[#5A4B6B] h-2 rounded-full"
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                        <div className="bg-[#5A4B6B] rounded-full p-1 flex items-center justify-center ml-1">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <p className="text-indigo-700 font-bold text-sm mt-2">
                        {formatRupiah(item.terkumpul)}/
                        {formatRupiah(item.total)}
                      </p>
                    </div>

                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      {item.deskripsi}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tombol kembali */}
          <div className="mt-10">
            <button
              onClick={() => navigate("/user/penyaluran/buktitersalurkan")}
              className="text-sm font-semibold text-[#5A4B6B] hover:underline"
            >
              ← Kembali
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default BuktiPenyaluranUrgensi;
