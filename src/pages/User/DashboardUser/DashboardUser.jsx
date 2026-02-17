// src/pages/User/Dashboard/Dashboard.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/NavbarUser";
import Sidebar from "../../../components/SidebarUser";
import ikonkoin from "../../../images/ikonkoin.png";
import ikontangan from "../../../images/ikontangan.png";
import panah from "../../../assets/panah.png";

import FotoLima from "../../../images/FotoLima.png";
import FotoEnam from "../../../images/FotoEnam.png";
import stunting4 from "../../../images/stunting4.png";
import stunting5 from "../../../images/stunting5.png";
import stunting6 from "../../../images/stunting6.png";
import stunting7 from "../../../images/stunting7.png";
import stunting8 from "../../../images/stunting8.png";
import stunting9 from "../../../images/stunting9.png";
import stunting10 from "../../../images/stunting10.png";

// ✅ Data langsung di sini
const beritaUrgensiData = [
  {
    id: 1,
    gambar: FotoLima,
    judul:
      "Selagi kita bisa makan kenyang, ada anak yatim yang bertahan hidup dengan sisa nasi kemarin.",
    tanggal: "1 Agustus 2025",
    dana_terkumpul: 4500000,
    target_dana: 10000000,
  },
  {
    id: 2,
    gambar: stunting10,
    judul:
      "Tangis mereka bukan karena nakal, tapi karena kehilangan. Mari bantu ringankan luka anak-anak korban bencana.",
    tanggal: "30 Juli 2025",
    dana_terkumpul: 2500000,
    target_dana: 8000000,
  },
  {
    id: 3,
    gambar: stunting5,
    judul:
      "Tak ada anak yang pantas dibuang—mereka hanya butuh kasih sayang, perhatian, dan uluran tangan kita.",
    tanggal: "28 Juli 2025",
    dana_terkumpul: 6000000,
    target_dana: 12000000,
  },
  {
    id: 4,
    gambar: stunting4,
    judul:
      "Harapan untuk sekolah kembali: bantu anak-anak yang terancam putus sekolah.",
    tanggal: "25 Juli 2025",
    dana_terkumpul: 7200000,
    target_dana: 15000000,
  },
  {
    id: 5,
    gambar: stunting9,
    judul: "Bersama lawan stunting demi masa depan generasi Indonesia.",
    tanggal: "20 Juli 2025",
    dana_terkumpul: 3200000,
    target_dana: 10000000,
  },
  {
    id: 6,
    gambar: stunting8,
    judul:
      "Uluran tanganmu bisa jadi penyelamat bagi mereka yang kehilangan keluarga.",
    tanggal: "15 Juli 2025",
    dana_terkumpul: 8500000,
    target_dana: 20000000,
  },
  {
    id: 7,
    gambar: FotoEnam,
    judul:
      "Mimpi sederhana seorang anak: bisa makan tiga kali sehari tanpa khawatir besok.",
    tanggal: "10 Juli 2025",
    dana_terkumpul: 4100000,
    target_dana: 12000000,
  },
  {
    id: 8,
    gambar: stunting7,
    judul:
      "Harapan kecil di tengah reruntuhan: bantuanmu berarti bagi korban bencana.",
    tanggal: "5 Juli 2025",
    dana_terkumpul: 9500000,
    target_dana: 25000000,
  },
  {
    id: 9,
    gambar: stunting6,
    judul: "Bangkit bersama: bantu keluarga yang kehilangan tempat tinggal.",
    tanggal: "1 Juli 2025",
    dana_terkumpul: 5800000,
    target_dana: 15000000,
  },
];

// ✅ Font
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

function Dashboard() {
  const navigate = useNavigate();

  // Ambil 3 artikel terbaru
  const beritaTerbaru = [...beritaUrgensiData]
    .sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal))
    .slice(0, 3);

  return (
    <div className="flex min-h-screen font-raleway">
      <style>{fontStyle}</style>
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-50 overflow-y-auto">
        <Navbar title="Welcome to DermaKita" />

        <main className="flex-1 px-12 py-10">
          {/* Statistik */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-md p-6 flex items-center gap-6">
              <img src={ikonkoin} alt="dana" className="w-20 h-20" />
              <p className="text-[20px] text-black">
                <b className="text-[#5A4B6B] font-semibold text-[22px]">
                  Rp.234.567,00
                </b>{" "}
                telah tersalurkan
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-md p-6 flex items-center gap-6">
              <img src={ikontangan} alt="anak" className="w-[88px] h-[88px]" />
              <p className="text-[20px] text-black">
                <b className="text-[#5A4B6B] font-semibold text-[22px]">
                  500+
                </b>{" "}
                anak terbantu
              </p>
            </div>
          </div>

          {/* Berita Urgensi */}
          <h2 className="text-[28px] font-bold text-[#5A4B6B] mb-6">
            BERITA URGENSI
          </h2>

          <div className="bg-white rounded-xl shadow-xl p-4 flex items-center gap-6">
            <div className="grid grid-cols-3 gap-8">
              {beritaTerbaru.map((item) => (
                <div
                  key={item.id}
                  className="w-[255px] cursor-pointer hover:shadow-lg transition rounded-lg overflow-hidden"
                >
                  <div className="w-[255px] h-[174px] overflow-hidden rounded-md">
                    <img
                      src={item.gambar}
                      alt={item.judul}
                      className="w-[255px] h-[174px] object-cover"
                    />
                  </div>
                  <div className="p-2 flex flex-col gap-1">
                    <p className="font-semibold text-sm text-black leading-tight">
                      {item.judul}
                    </p>
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
                    <button
                      onClick={() =>
                        navigate(`/user/artikel/detailberitaurgensi/${item.id}`)
                      }
                      className="text-xs text-gray-600 hover:underline text-left"
                    >
                      Baca selengkapnya →
                    </button>
                    <p className="text-[9px] italic text-gray-400 text-right">
                      {item.tanggal}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate("/user/artikel/beritaurgensi")}
              className="ml-2 transform transition-transform duration-200 active:scale-110"
            >
              <img src={panah} alt="Panah kanan" className="w-32 h-auto" />
            </button>
          </div>

          <div className="mt-10 bg-purple-50 rounded-xl p-6 border border-purple-100">
            <p className="text-center text-sm italic text-[#5A4B6B]">
              Menyalurkan kebaikan bukan hanya tugas, tapi panggilan hati.
              Selamat datang, (user)!
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
