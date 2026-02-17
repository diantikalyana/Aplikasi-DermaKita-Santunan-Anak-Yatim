import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import Artikel1 from "../../../assets/Artikel1.png";
import Loading from "../../../components/Loading"; // ✅ Loader titik berjalan
import editIcon from "../../../assets/edit.png";
import trashIcon from "../../../assets/trash.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

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

const Artikel = () => {
  const navigate = useNavigate();
  const [artikelList, setArtikelList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openMenu, setOpenMenu] = useState(null);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [selectedArtikel, setSelectedArtikel] = useState(null);

  useEffect(() => {
    // Simulasi loading data
    setLoading(true);
    const dummyArtikel = [
      {
        id: 1,
        judul:
          "Kegiatan Santunan Anak Yatim di Kajoran: Senyum Mereka Adalah Hadiah Terindah",
        deskripsi:
          "Kajoran, 05 Juli 2025 — Hari Sabtu kemarin menjadi momen istimewa bagi puluhan anak yatim di wilayah Kajoran. Dalam kegiatan bertajuk 'Berbagi Kasih, Menyulam Harapan', tim DermaSAPA...",
        foto: Artikel1,
        terkumpul: 500000,
        target: 5000000,
        updated_at: "2025-07-15T10:00:00Z",
      },
      {
        id: 2,
        judul:
          "Kegiatan Santunan Anak Yatim di Kajoran: Merajut Harapan, Menebar Kebaikan",
        deskripsi:
          "Kajoran, 12 Juli 2025 — Suasana haru dan kebahagiaan menyelimuti acara Santunan Anak Yatim yang diselenggarakan di wilayah Kajoran...",
        foto: Artikel1,
        terkumpul: 800000,
        target: 1000000,
        updated_at: "2025-06-30T14:30:00Z",
      },
      {
        id: 3,
        judul: "Bayu Pratama - Desa Sugihan",
        deskripsi:
          "Bayu adalah seorang anak yatim yang sakit ini sedang berjuang melawan sakit dan membutuhkan perawatan medis lanjutan...",
        foto: Artikel1,
        terkumpul: 35000000,
        target: 35000000,
        updated_at: "2025-06-30T14:30:00Z",
      },
    ];

    setTimeout(() => {
      setArtikelList(dummyArtikel);
      setLoading(false);
    }, 1200);
  }, []);

  // Fungsi hapus artikel
  const handleDelete = () => {
    if (selectedArtikel) {
      setArtikelList((prev) =>
        prev.filter((item) => item.id !== selectedArtikel.id)
      );
      setShowModal(false);
      setSelectedArtikel(null);
    }
  };

  // ⛔ Kalau loading aktif → tampilkan blur + titik berjalan
  if (loading) return <Loading />;

  return (
    <div className="flex min-h-screen bg-white text-[#111827] font-raleway relative">
      <style>{fontStyle}</style>

      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        <main className="p-6 max-w-8xl mx-auto w-full">
          {artikelList.length > 0 ? (
            <div className="bg-[#f0f0f0] rounded-2xl shadow p-6">
              {/* Header Box */}
              <div className="flex justify-end items-center mb-6">
                <button
                  onClick={() => navigate("/admin/artikel/upload")}
                  className="bg-[#493953] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#5f4a66] transition"
                >
                  + Tambah Baru
                </button>
              </div>

              {/* Grid Artikel */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {artikelList.map((artikel) => {
                  const terkumpul = artikel.terkumpul || 0;
                  const target = artikel.target || 1;
                  const persentase = Math.min(
                    Math.round((terkumpul / target) * 100),
                    100
                  );

                  const isOpen = openMenu === artikel.id;

                  return (
                    <div
                      key={artikel.id}
                      onClick={() =>
                        navigate(`/admin/detailartikel/${artikel.id}`)
                      }
                      className="relative bg-[#B091D1]/29 rounded-xl shadow p-4 border border-[#e5dff0] transition duration-300 cursor-pointer hover:shadow-lg"
                    >
                      {/* Toggle Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenMenu(isOpen ? null : artikel.id);
                        }}
                        className="absolute top-3 left-3 bg-[#A99EB5] shadow rounded-full p-1"
                      >
                        {isOpen ? (
                          <ChevronLeftIcon className="h-5 w-5 text-white" />
                        ) : (
                          <ChevronRightIcon className="h-5 w-5 text-white" />
                        )}
                      </button>

                      {/* Action Menu */}
                      <div
                        className={`absolute top-3 left-12 flex items-center gap-2 transition-all duration-300 ${
                          isOpen
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-5 pointer-events-none"
                        }`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Edit */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/admin/artikel/edit/${artikel.id}`);
                          }}
                        >
                          <img src={editIcon} alt="Edit" className="w-8 h-8" />
                        </button>

                        {/* Hapus */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedArtikel(artikel);
                            setShowModal(true);
                          }}
                        >
                          <img
                            src={trashIcon}
                            alt="Hapus"
                            className="w-8 h-8"
                          />
                        </button>
                      </div>

                      {/* Gambar Artikel */}
                      <img
                        src={artikel.foto || Artikel1}
                        alt="Artikel"
                        className="w-full h-40 object-cover rounded-lg mb-3"
                      />

                      {/* Info */}
                      <p className="text-xs text-black mb-1">
                        Tanggal:{" "}
                        {artikel.updated_at
                          ? new Date(
                              artikel.updated_at
                            ).toLocaleDateString("id-ID", {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                            })
                          : "-"}
                      </p>

                      <h2 className="font-bold text-base text-[#111827] mb-2">
                        {artikel.judul}
                      </h2>

                      {/* Progress Bar */}
                      <div className="w-full bg-white rounded-full h-2 overflow-hidden mb-2">
                        <div
                          className="h-2 rounded-full transition-all duration-500 bg-[#25E02E]/50"
                          style={{ width: `${persentase}%` }}
                        ></div>
                      </div>

                      {/* Nominal */}
                      <div className="flex justify-between text-xs mb-4 text-black">
                        <span>
                          Terkumpul: Rp{terkumpul.toLocaleString("id-ID")}
                        </span>
                        <span>
                          Target: Rp{target.toLocaleString("id-ID")}
                        </span>
                      </div>

                      {/* Deskripsi */}
                      <p className="text-sm text-black line-clamp-3">
                        {artikel.deskripsi}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-10">
              Belum ada artikel donasi urgensi.
            </p>
          )}
        </main>
      </div>

      {/* Modal Konfirmasi Hapus */}
      {showModal && selectedArtikel && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[70]">
          <div className="bg-[#493953] text-white rounded-xl p-6 shadow-lg w-[420px] text-center">
            <p className="text-lg font-semibold mb-6">
              Yakin Ingin Hapus Artikel Ini?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-md bg-gray-300 text-gray-800 hover:bg-gray-400 transition"
              >
                Batal
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Artikel;
