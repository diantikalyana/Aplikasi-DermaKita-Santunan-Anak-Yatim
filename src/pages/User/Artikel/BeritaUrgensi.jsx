import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/SidebarUser";
import Navbar from "../../../components/NavbarUser";
import stunting5 from "../../../images/stunting5.png";
import stunting4 from "../../../images/stunting4.png";
import stunting6 from "../../../images/stunting6.png";
import stunting7 from "../../../images/stunting7.png";
import stunting8 from "../../../images/stunting8.png";
import stunting9 from "../../../images/stunting9.png";
import stunting10 from "../../../images/stunting10.png";
import FotoLima from "../../../images/FotoLima.png";
import FotoEnam from "../../../images/FotoEnam.png";


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

const BeritaUrgensi = () => {
  const [sortBy, setSortBy] = useState("terbaru");

  // Data 10 artikel
  const dataBerita = [
    {
      id: 1,
      gambar: FotoLima,
      judul: "Mimpi Sekolah di Tengah Keterbatasan: Harapan Seorang Anak Yatim.",
      tanggal: "1 Agustus 2025",
      dana_terkumpul: 4500000,
      target_dana: 10000000,
    },
    {
      id: 2,
      gambar: stunting10,
      judul: "Mimpi Sekolah di Tengah Keterbatasan: Harapan Seorang Anak Yatim.",
      tanggal: "30 Juli 2025",
      dana_terkumpul: 2500000,
      target_dana: 8000000,
    },
    {
      id: 3,
      gambar: stunting5,
      judul: "Mimpi Sekolah di Tengah Keterbatasan: Harapan Seorang Anak Yatim.",
      tanggal: "28 Juli 2025",
      dana_terkumpul: 6000000,
      target_dana: 12000000,
    },
    {
      id: 4,
      gambar: stunting4,
      judul: "Mimpi Sekolah di Tengah Keterbatasan: Harapan Seorang Anak Yatim.",
      tanggal: "25 Juli 2025",
      dana_terkumpul: 7200000,
      target_dana: 15000000,
    },
    {
      id: 5,
      gambar: stunting9,
      judul: "Mimpi Sekolah di Tengah Keterbatasan: Harapan Seorang Anak Yatim.",
      tanggal: "20 Juli 2025",
      dana_terkumpul: 3200000,
      target_dana: 10000000,
    },
    {
      id: 6,
      gambar: stunting8,
      judul: "Mimpi Sekolah di Tengah Keterbatasan: Harapan Seorang Anak Yatim.",
      tanggal: "15 Juli 2025",
      dana_terkumpul: 8500000,
      target_dana: 20000000,
    },
    {
      id: 7,
      gambar: FotoEnam,
      judul: "Mimpi Sekolah di Tengah Keterbatasan: Harapan Seorang Anak Yatim.",
      tanggal: "10 Juli 2025",
      dana_terkumpul: 4100000,
      target_dana: 12000000,
    },
    {
      id: 8,
      gambar: stunting7,
      judul: "Mimpi Sekolah di Tengah Keterbatasan: Harapan Seorang Anak Yatim.",
      tanggal: "5 Juli 2025",
      dana_terkumpul: 9500000,
      target_dana: 25000000,
    },
    {
      id: 9,
      gambar: stunting6,
      judul: "Mimpi Sekolah di Tengah Keterbatasan: Harapan Seorang Anak Yatim.",
      tanggal: "1 Juli 2025",
      dana_terkumpul: 5800000,
      target_dana: 15000000,
    },
  ];

  // sorting
  const sortedBerita = [...dataBerita].sort((a, b) => {
    if (sortBy === "terbaru") {
      return new Date(b.tanggal) - new Date(a.tanggal);
    }
    if (sortBy === "terkumpul") {
      return b.dana_terkumpul - a.dana_terkumpul;
    }
    return 0;
  });

  return (
    <div className="flex min-h-screen bg-gray-50 font-raleway">
      <style>{fontStyle}</style>
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar title="BERITA URGENSI" />

        <div className="p-10">
          {/* Tombol sorting */}
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setSortBy("terkumpul")}
              className={`px-4 py-2 font-semibold ${
                sortBy === "terkumpul"
                  ? "border-b-2 border-purple-600 text-purple-600"
                  : "text-gray-600"
              }`}
            >
              Urutkan
            </button>
            <button
              onClick={() => setSortBy("terbaru")}
              className={`px-4 py-2 font-semibold ${
                sortBy === "terbaru"
                  ? "border-b-2 border-purple-600 text-purple-600"
                  : "text-gray-600"
              }`}
            >
              Terbaru
            </button>
          </div>

          {/* Grid Card ala Dashboard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedBerita.map((item) => (
              <div
                key={item.id}
                className="w-[255px] cursor-pointer hover:shadow-lg hover:shadow-gray-300 transition rounded-lg overflow-hidden"
              >
                {/* Gambar */}
                <div className="w-[255px] h-[174px] overflow-hidden rounded-md">
                  <img
                    src={item.gambar}
                    alt={item.judul}
                    className="w-[255px] h-[174px] object-cover"
                  />
                </div>

                {/* Konten */}
                <div className="p-2 flex flex-col gap-1">
                  <p className="font-semibold text-sm text-black leading-tight">
                    {item.judul}
                  </p>

                  {/* Progress bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-[#5A4B6B] h-2 rounded-full"
                      style={{
                        width: `${(item.dana_terkumpul / item.target_dana) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-[10px] text-[#5A4B6B]">
                    Terkumpul: Rp{item.dana_terkumpul.toLocaleString()} / Rp
                    {item.target_dana.toLocaleString()}
                  </p>

                  <Link
                    to={`/user/artikel/detailberitaurgensi/${item.id}`}
                    className="text-xs text-gray-600 hover:underline text-left"
                  >
                    Baca selengkapnya →
                  </Link>

                  <p className="text-[9px] italic text-gray-400 text-right">
                    {item.tanggal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeritaUrgensi;
