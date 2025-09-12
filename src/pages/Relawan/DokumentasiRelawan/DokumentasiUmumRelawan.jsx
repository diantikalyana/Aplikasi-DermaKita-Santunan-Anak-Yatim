import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/NavbarRelawan";
import Sidebar from "../../../components/SidebarRelawan";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import editIcon from "../../../assets/edit.png";
import trashIcon from "../../../assets/trash.png";

// ✅ Import gambar langsung dari folder images
import dokumentasi1 from "../../../images/FotoSatu.png";
import dokumentasi2 from "../../../images/FotoDua.png";
import dokumentasi3 from "../../../images/FotoTiga.png";

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

// ✅ Dummy data pakai hasil import
const dummyDokumentasi = [
  {
    id: 1,
    tanggal: "2025-08-01",
    judul:
      "Bocah Penderita Kanker Butuh Bantuan Dana Rp35 Juta untuk Pengobatan",
    nominal: 10000000,
    metode: "Bank Syariah Indonesia",
    rekening: 3,
    keterangan:
      "Dana sebesar 10 juta telah ditasarufkan melalui Bank Syariah Indonesia ke 3 rekening anak yatim di Desa Sugihan.",
    foto: dokumentasi1,
  },
  {
    id: 2,
    tanggal: "2025-08-03",
    judul: "Penyaluran Donasi di Desa Sidowangi",
    nominal: 7500000,
    metode: "Bank Syariah Indonesia",
    rekening: 2,
    keterangan:
      "Donasi senilai 7,5 juta ditransfer ke 2 rekening penerima di Desa Sidowangi untuk kebutuhan pendidikan.",
    foto: dokumentasi2,
  },
  {
    id: 3,
    tanggal: "2025-08-04",
    judul: "Santunan Anak Yatim di Desa Sangen",
    nominal: 5000000,
    metode: "Bank Syariah Indonesia",
    rekening: 1,
    keterangan:
      "Penyaluran dana sebesar 5 juta telah dilakukan ke 1 rekening anak yatim di Desa Sangen melalui transfer bank.",
    foto: dokumentasi3,
  },
];

const DokumentasiUmumRelawan = () => {
  const navigate = useNavigate();
  const [dokList, setDokList] = useState(dummyDokumentasi);
  const [openMenu, setOpenMenu] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    if (selectedItem) {
      setDokList((prev) => prev.filter((item) => item.id !== selectedItem.id));
      setShowModal(false);
      setSelectedItem(null);
    }
  };

  return (
    <div className="flex min-h-screen bg-white text-[#111827] font-raleway relative">
      <style>{fontStyle}</style>

      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />

        <main className="p-6 max-w-8xl mx-auto w-full">
          <div className="bg-[#f0f0f0] rounded-2xl shadow p-6">
            {/* Header Box */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold text-gray-800">
                Dokumentasi Umum
              </h1>
              <button
                onClick={() => navigate("/relawan/dokumentasi/uploaddokumentasiumumrelawan")}
                className="bg-[#493953] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#5f4a66] transition"
              >
                + Tambah Baru
              </button>
            </div>

            {/* Grid Dokumentasi */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dokList.map((item) => {
                const isOpen = openMenu === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() =>
                      navigate(`/relawan/dokumentasi/detailumum/${item.id}`)
                    }
                    className="relative bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer"
                  >
                    {/* Toggle Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenMenu(isOpen ? null : item.id);
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
                      <button
                        onClick={() =>
                          navigate(`/relawan/dokumentasi/editdokumentasiumumrelawan/${item.id}`)
                        }
                      >
                        <img
                          src={editIcon}
                          alt="Edit"
                          className="w-8 h-8 cursor-pointer"
                        />
                      </button>

                      <button
                        onClick={() => {
                          setSelectedItem(item);
                          setShowModal(true);
                        }}
                      >
                        <img
                          src={trashIcon}
                          alt="Hapus"
                          className="w-8 h-8 cursor-pointer"
                        />
                      </button>
                    </div>

                    {/* Image */}
                    <img
                      src={item.foto}
                      alt={`Dokumentasi ${item.judul}`}
                      className="w-full h-44 object-cover"
                    />

                    {/* Content */}
                    <div className="p-4">
                      <p className="text-xs text-gray-600 mb-1">
                         {item.tanggal}
                      </p>
                      <h2 className="font-bold text-lg text-[#111827] mb-2 leading-snug">
                        {item.judul}
                      </h2>

                      <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-lg inline-block mb-3">
                        Tersalurkan: Rp {item.nominal.toLocaleString("id-ID")}
                      </div>

                      <p className="text-sm text-gray-700 leading-relaxed">
                        {item.keterangan}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>

      {/* Modal Konfirmasi Hapus */}
      {showModal && selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-70">
          <div className="bg-[#493953] text-white rounded-xl p-6 shadow-lg w-[420px] h-[280px] text-center">
            <p className="text-lg font-semibold mb-6">
              Yakin ingin hapus dokumentasi ini?
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

export default DokumentasiUmumRelawan;
