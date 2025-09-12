import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../../components/NavbarRelawan";
import Sidebar from "../../../components/SidebarRelawan";
import Artikel1 from "../../../assets/Artikel1.png";
import Artikel2 from "../../../assets/Artikel2.png";
import arrowIcon from "../../../assets/Arrow.png";

const dummyArtikelList = [
  {
    id: 1,
    judul:
      "Kegiatan Santunan Anak Yatim di Kajoran: Merajut Harapan, Menebar Kebaikan",
    deskripsi1: `Kajoran, 12 Juli 2025 — Dalam suasana penuh haru dan kebahagiaan, kegiatan santunan anak yatim digelar di Masjid wilayah Kajoran sebagai bagian dari program "Berbagi di Masjid". Acara ini diinisiasi oleh saudara Beni bersama tim DermaSAPA, relawan lokal, tokoh masyarakat, dan para donatur.`,
    deskripsi2: `Santunan berupa alat tulis dan kebutuhan pokok senilai Rp5.000.000,- disalurkan kepada anak-anak yatim sebagai bentuk kepedulian sosial dan solidaritas masyarakat terhadap mereka yang membutuhkan.

Kegiatan santunan dimulai pukul 09.00 WIB dan diawali dengan pembacaan doa bersama. Anak-anak yatim dari berbagai dusun di wilayah Kajoran hadir dengan wajah ceria. Mereka disambut hangat oleh panitia dan relawan.`,
    rangkaian: [
      "Pembacaan tilawah Al-Qur’an",
      "Sambutan dari perwakilan panitia dan tokoh masyarakat",
      "Motivasi singkat untuk anak-anak",
      "Penyerahan santunan dan bingkisan",
      "Makan siang bersama dan sesi foto",
    ],
    foto: Artikel1,
    updated_at: "2025-07-12T10:00:00Z",
  },
  {
    id: 2,
    judul: "Donasi Bencana Alam",
    deskripsi1: "Bencana alam telah melanda daerah X.",
    deskripsi2: "Mereka sangat membutuhkan bantuan logistik.",
    rangkaian: [],
    foto: Artikel2,
    updated_at: "2025-08-28T14:30:00Z",
  },
];

const dummyComments = [
  {
    id: 1,
    nama: "Pak Beni",
    isi: "Saya sangat mendukung program ini! Semoga semakin banyak anak yang terbantu.",
  },
  {
    id: 2,
    nama: "Pak Vira",
    isi: "Mari kita bersama-sama terus berbagi kebahagiaan dengan mereka yang membutuhkan.",
  },
  {
    id: 3,
    nama: "Pak Vina",
    isi: "Kegiatan ini bukan hanya bantuan materi, tapi juga menyentuh hati kami.",
  },
];

const DetailArtikelRelawan = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const artikel = dummyArtikelList.find((item) => item.id === parseInt(id));
  const [comments, setComments] = useState(dummyComments);
  const [newComment, setNewComment] = useState("");
  const [showFullText, setShowFullText] = useState(false);

  if (!artikel) return <div className="p-4">Artikel tidak ditemukan.</div>;

  const handleCommentSubmit = () => {
    if (!newComment.trim()) return;
    const newEntry = {
      id: comments.length + 1,
      nama: "Anda",
      isi: newComment,
    };
    setComments([...comments, newEntry]);
    setNewComment("");
  };

  const textPreview = artikel.deskripsi2.slice(0, 200);

  // ✅ Tambahin persentase biar progress bar gak error
  const persentase = 65; // contoh: 65%, bisa diganti dinamis nanti

  return (
    <div className="flex min-h-screen bg-white text-[#111827] font-raleway relative">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />

        {/* Tombol Back */}
        <button
          onClick={() => navigate("/admin/artikel")}
          className="absolute top-6 left-6 text-purple-600 hover:text-gray-800"
        >
          <img src={arrowIcon} alt="Kembali" className="w-6 h-6" />
        </button>

        {/* Box Utama */}
        <main className="p-8 my-8 max-w-6xl mx-auto w-full bg-[#F0F0F0] rounded-xl shadow">
          {/* Layout Artikel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <img
                src={artikel.foto}
                alt={artikel.judul}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <div className="md:col-span-2 flex flex-col">
              <h1 className="text-lg md:text-xl font-bold mb-2">
                {artikel.judul}
              </h1>
              <p className="text-sm text-gray-600 mb-3">
                {new Date(artikel.updated_at).toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p className="text-gray-700 text-justify">{artikel.deskripsi1}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white rounded-full h-2 overflow-hidden mb-2 mt-4">
            <div
              className="h-2 rounded-full transition-all duration-500 bg-[#25E02E]/50"
              style={{ width: `${persentase}%` }}
            ></div>
          </div>

          {/* Teks 2 */}
          <div className="mt-6">
            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
              {showFullText ? artikel.deskripsi2 : `${textPreview}...`}
            </p>

            <button
              onClick={() => setShowFullText(!showFullText)}
              className="text-sm text-[#493953] hover:underline"
            >
              {showFullText ? "Tutup" : "Baca Selengkapnya..."}
            </button>

            {artikel.rangkaian.length > 0 && (
              <div className="mt-4">
                <h2 className="font-semibold mb-2">Rangkaian Acara</h2>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {artikel.rangkaian.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Komentar */}
          <div className="mt-8">
            {comments.map((c) => (
              <div key={c.id} className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">
                  {c.nama.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm">{c.nama}</p>
                  <p className="text-sm text-gray-700">{c.isi}</p>
                </div>
              </div>
            ))}

            {/* Form Komentar */}
            <div className="flex items-center gap-2 mt-4">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Tulis komentar..."
                className=" border border-[#5A4A6B] rounded-lg w-160 px-3 py-2 text-sm focus:outline-none  shadow-md shadow-gray-200"
              />
              <button
                onClick={handleCommentSubmit}
                className="bg-[#493953] text-white px-6 py-2 rounded-lg text-sm hover:bg-[#5f4a66] shadow-xl shadow-purple-300"
              >
                Kirim
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DetailArtikelRelawan;
