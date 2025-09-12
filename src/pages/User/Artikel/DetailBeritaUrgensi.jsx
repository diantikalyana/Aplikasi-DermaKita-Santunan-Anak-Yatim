import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../../components/NavbarUser";
import Sidebar from "../../../components/SidebarUser";
import stunting5 from "../../../images/stunting5.png";
import stunting4 from "../../../images/stunting4.png";
import stunting6 from "../../../images/stunting6.png";
import stunting7 from "../../../images/stunting7.png";
import stunting8 from "../../../images/stunting8.png";
import stunting9 from "../../../images/stunting9.png";
import stunting10 from "../../../images/stunting10.png";
import FotoLima from "../../../images/FotoLima.png";
import FotoEnam from "../../../images/FotoEnam.png";
import SendIcon from "../../../images/SendIcon.png";

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

// Data Berita Urgensi
const dataBeritaUrgensi = [
  {
    id: 1,
    gambar: FotoLima,
    judul: "Mimpi Sekolah di Tengah Keterbatasan: Harapan Seorang Anak Yatim",
    konten: `Di balik senyum polos seorang anak yatim, tersimpan harapan besar: bisa duduk di bangku sekolah seperti teman-temannya. Tanpa ayah sebagai penopang hidup, dan dengan ibu yang bekerja serabutan, sekolah seringkali menjadi impian yang mahal.`,
    deskripsiTambahan: `Di sebuah sudut desa, di rumah sederhana yang dindingnya mulai lapuk, seorang anak duduk menatap buku bekas yang disumbangkan oleh tetangga. Namanya Rafi, usianya baru 10 tahun...`,
    terkumpul: 4500000,
    target: 10000000,
    tanggal: "1 Agustus 2025",
  },
  {
    id: 2,
    gambar: stunting10,
    judul: "Mimpi Sekolah di Tengah Keterbatasan: Harapan Seorang Anak Yatim",
    konten: `Di balik senyum polos seorang anak yatim, tersimpan harapan besar: bisa duduk di bangku sekolah seperti teman-temannya. Tanpa ayah sebagai penopang hidup, dan dengan ibu yang bekerja serabutan, sekolah seringkali menjadi impian yang mahal.`,
    deskripsiTambahan: `Di sebuah sudut desa, di rumah sederhana yang dindingnya mulai lapuk, seorang anak duduk menatap buku bekas yang disumbangkan oleh tetangga. Namanya Rafi, usianya baru 10 tahun...`,
    terkumpul: 223330502,
    target: 230450600,
    tanggal: "1 Agustus 2025",
  },
  {
    id: 3,
    gambar: stunting5,
    judul: "Mimpi Sekolah di Tengah Keterbatasan: Harapan Seorang Anak Yatim",
    konten: `Di balik senyum polos seorang anak yatim, tersimpan harapan besar: bisa duduk di bangku sekolah seperti teman-temannya. Tanpa ayah sebagai penopang hidup, dan dengan ibu yang bekerja serabutan, sekolah seringkali menjadi impian yang mahal.`,
    deskripsiTambahan: `Di sebuah sudut desa, di rumah sederhana yang dindingnya mulai lapuk, seorang anak duduk menatap buku bekas yang disumbangkan oleh tetangga. Namanya Rafi, usianya baru 10 tahun...`,
    terkumpul: 223330502,
    target: 230450600,
    tanggal: "1 Agustus 2025",
  },
  {
    id: 4,
    gambar: stunting4,
    judul: "Mimpi Sekolah di Tengah Keterbatasan: Harapan Seorang Anak Yatim",
    konten: `Di balik senyum polos seorang anak yatim, tersimpan harapan besar: bisa duduk di bangku sekolah seperti teman-temannya. Tanpa ayah sebagai penopang hidup, dan dengan ibu yang bekerja serabutan, sekolah seringkali menjadi impian yang mahal.`,
    deskripsiTambahan: `Di sebuah sudut desa, di rumah sederhana yang dindingnya mulai lapuk, seorang anak duduk menatap buku bekas yang disumbangkan oleh tetangga. Namanya Rafi, usianya baru 10 tahun...`,
    terkumpul: 223330502,
    target: 230450600,
    tanggal: "1 Agustus 2025",
  },
  {
    id: 5,
    gambar: stunting9,
    judul: "Mimpi Sekolah di Tengah Keterbatasan: Harapan Seorang Anak Yatim",
    konten: `Di balik senyum polos seorang anak yatim, tersimpan harapan besar: bisa duduk di bangku sekolah seperti teman-temannya. Tanpa ayah sebagai penopang hidup, dan dengan ibu yang bekerja serabutan, sekolah seringkali menjadi impian yang mahal.`,
    deskripsiTambahan: `Di sebuah sudut desa, di rumah sederhana yang dindingnya mulai lapuk, seorang anak duduk menatap buku bekas yang disumbangkan oleh tetangga. Namanya Rafi, usianya baru 10 tahun...`,
    terkumpul: 223330502,
    target: 230450600,
    tanggal: "1 Agustus 2025",
  },
  {
    id: 6,
    gambar: stunting8,
    judul: "Mimpi Sekolah di Tengah Keterbatasan: Harapan Seorang Anak Yatim",
    konten: `Di balik senyum polos seorang anak yatim, tersimpan harapan besar: bisa duduk di bangku sekolah seperti teman-temannya. Tanpa ayah sebagai penopang hidup, dan dengan ibu yang bekerja serabutan, sekolah seringkali menjadi impian yang mahal.`,
    deskripsiTambahan: `Di sebuah sudut desa, di rumah sederhana yang dindingnya mulai lapuk, seorang anak duduk menatap buku bekas yang disumbangkan oleh tetangga. Namanya Rafi, usianya baru 10 tahun...`,
    terkumpul: 223330502,
    target: 230450600,
    tanggal: "1 Agustus 2025",
  },
  {
    id: 7,
    gambar: FotoEnam,
    judul: "Mimpi Sekolah di Tengah Keterbatasan: Harapan Seorang Anak Yatim",
    konten: `Di balik senyum polos seorang anak yatim, tersimpan harapan besar: bisa duduk di bangku sekolah seperti teman-temannya. Tanpa ayah sebagai penopang hidup, dan dengan ibu yang bekerja serabutan, sekolah seringkali menjadi impian yang mahal.`,
    deskripsiTambahan: `Di sebuah sudut desa, di rumah sederhana yang dindingnya mulai lapuk, seorang anak duduk menatap buku bekas yang disumbangkan oleh tetangga. Namanya Rafi, usianya baru 10 tahun...`,
    terkumpul: 223330502,
    target: 230450600,
    tanggal: "1 Agustus 2025",
  },
  {
    id: 8,
    gambar: stunting7,
    judul: "Mimpi Sekolah di Tengah Keterbatasan: Harapan Seorang Anak Yatim",
    konten: `Di balik senyum polos seorang anak yatim, tersimpan harapan besar: bisa duduk di bangku sekolah seperti teman-temannya. Tanpa ayah sebagai penopang hidup, dan dengan ibu yang bekerja serabutan, sekolah seringkali menjadi impian yang mahal.`,
    deskripsiTambahan: `Di sebuah sudut desa, di rumah sederhana yang dindingnya mulai lapuk, seorang anak duduk menatap buku bekas yang disumbangkan oleh tetangga. Namanya Rafi, usianya baru 10 tahun...`,
    terkumpul: 223330502,
    target: 230450600,
    tanggal: "1 Agustus 2025",
  },
  {
    id: 9,
    gambar: stunting6,
    judul: "Mimpi Sekolah di Tengah Keterbatasan: Harapan Seorang Anak Yatim",
    konten: `Di balik senyum polos seorang anak yatim, tersimpan harapan besar: bisa duduk di bangku sekolah seperti teman-temannya. Tanpa ayah sebagai penopang hidup, dan dengan ibu yang bekerja serabutan, sekolah seringkali menjadi impian yang mahal.`,
    deskripsiTambahan: `Di sebuah sudut desa, di rumah sederhana yang dindingnya mulai lapuk, seorang anak duduk menatap buku bekas yang disumbangkan oleh tetangga. Namanya Rafi, usianya baru 10 tahun...`,
    terkumpul: 223330502,
    target: 230450600,
    tanggal: "1 Agustus 2025",
  },
];

const DetailBeritaUrgensi = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [komentar, setKomentar] = useState("");
  const [listKomentar, setListKomentar] = useState([]);

  const berita = dataBeritaUrgensi.find((b) => b.id === parseInt(id));

  if (!berita) {
    return (
      <div className="flex min-h-screen bg-gray-50 font-raleway">
        <style>{fontStyle}</style>
        <Sidebar />
        <div className="flex-1 p-10">
          <p className="text-red-500 text-center py-10 font-semibold">
            Berita tidak ditemukan.
          </p>
        </div>
      </div>
    );
  }

  const progressPercent = Math.min(
    (berita.terkumpul / berita.target) * 100,
    100
  ).toFixed(0);

  const handleDonasiClick = () => {
    navigate("/user/menuutama/donasiurgensi");
  };

  const handleKomentarSubmit = (e) => {
    e.preventDefault();
    if (komentar.trim()) {
      const newKomentar = {
        text: komentar,
        tanggal: new Date().toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      };
      setListKomentar([...listKomentar, newKomentar]);
      setKomentar("");
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen font-raleway">
      <style>{fontStyle}</style>
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar title="BERITA URGENSI" />

        <div className="flex-1 p-6 md:p-10">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
            {/* Header Gambar & Judul */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/5">
                <img
                  src={berita.gambar}
                  alt={berita.judul}
                  className="w-full h-48 md:h-56 object-cover rounded-xl shadow-md"
                />
              </div>

              <div className="md:w-3/5 flex flex-col justify-center">
  {/* Judul + Tanggal di kanan atas */}
  <div className="flex justify-between items-start mb-2">
    <h2 className="text-2xl md:text-3xl font-bold text-[#61378D]">
      {berita.judul}
    </h2>
    <span className="text-sm text-gray-500 ml-4 whitespace-nowrap">
      {berita.tanggal}
    </span>
  </div>
                <p className="text-gray-700 leading-relaxed text-left">
                  {berita.konten}
                </p>
              </div>
            </div>

            {/* Deskripsi */}
            <div className="mt-8">
              <p className="text-gray-700 whitespace-pre-line leading-relaxed text-justify">
                {berita.deskripsiTambahan}
              </p>
            </div>

            {/* Progress & Donasi */}
            <div className="mt-8">
              <div className="text-sm text-gray-600 mb-1">Terkumpul</div>

              <div className="w-120 bg-gray-200 rounded-full h-4">
                <div
                  className="bg-[#AF92D1] h-4 rounded-full transition-all"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>

              <div className="text-sm font-semibold text-purple-700 mt-1">
                Rp {berita.terkumpul?.toLocaleString("id-ID")} / Rp{" "}
                {berita.target?.toLocaleString("id-ID")}
              </div>
            </div>

            {/* Komentar + Donasi */}
            <div className="mt-8 flex items-center justify-between gap-4">
              <form onSubmit={handleKomentarSubmit} className="flex-1">
                <div className="flex items-center bg-gray-100 rounded-md px-4 py-2 shadow-sm">
                  <input
                    type="text"
                    value={komentar}
                    onChange={(e) => setKomentar(e.target.value)}
                    placeholder="Tambahkan Komentar..."
                    className="flex-1 bg-transparent text-sm focus:outline-none"
                  />

                  <button
                    type="submit"
                    className="ml-2 text-white p-2 rounded-full flex items-center justify-center 
                               transition-transform duration-200 active:scale-110"
                  >
                    <img src={SendIcon} alt="Kirim" className="w-7 h-7" />
                  </button>
                </div>
              </form>

              <button
                onClick={handleDonasiClick}
                className="bg-[#5a4b6b] hover:bg-[#af92d1] text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transition duration-300 transform hover:scale-105"
              >
                DONASI SEKARANG
              </button>
            </div>

            {/* List Komentar */}
            <div className="mt-4 space-y-3">
              {listKomentar.length === 0 ? (
                <p className="text-gray-500 text-sm italic">
                  Belum ada komentar
                </p>
              ) : (
                listKomentar.map((c, i) => (
                  <div
                    key={i}
                    className="bg-gray-100 p-3 rounded-lg shadow-sm text-sm text-gray-800"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-[#61378D]">
                        User {i + 1}
                      </span>
                      <span className="text-xs text-gray-500">{c.tanggal}</span>
                    </div>
                    <p>{c.text}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBeritaUrgensi;
