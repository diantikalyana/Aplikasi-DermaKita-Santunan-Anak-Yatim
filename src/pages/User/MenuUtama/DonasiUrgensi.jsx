import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/SidebarUser";

// Import gambar pakai {}
import berita1 from "../../../images/FotoLima.png";
import ModalDonasi from "../../../components/Modal/ModalDonasi";

function DonasiUrgensi() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nominal: "",
    nama: "",
    anonim: false,
    doa: "",
    metode: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true); // munculkan modal dulu
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten */}
      <div className="flex-1 flex justify-center items-start p-14 overflow-auto">
        {/* Card Campaign + Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 rounded-2xl shadow-md w-full max-w-6xl overflow-hidden"
        >
          {/* Header Campaign */}
          <div className="flex border-b border-gray-200 p-4 mb-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            {/* Gambar */}
            <div className="w-60 h-34 rounded-lg overflow-hidden shadow-sm">
              <img
                src={berita1}
                alt="Campaign"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Info */}
            <div className="flex-1 pl-4 text-left">
              <p className="text-xs text-purple-600 font-medium mb-1">
                Kamu akan berdonasi untuk campaign:
              </p>
              <p className="text-lg font-bold text-gray-800 leading-snug mb-1">
                Yuk, Sedekah Jariyah! Bantu Anak Yatim Untuk Kembali Bersekolah
              </p>
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <MapPin size={12} className="text-gray-400" />
                Edindugh Kajoran, Magelang
              </p>
            </div>
          </div>

          {/* Form Isi Donasi */}
          <div className="p-8 space-y-6">
            {/* Nominal */}
            <div className="text-center w-full">
              <label className="block text-2xl font-semibold text-purple-600 mb-2">
                MASUKKAN NOMINAL
              </label>
              <input
                type="number"
                name="nominal"
                placeholder="Rp...-,-"
                value={formData.nominal}
                onChange={handleChange}
                className="w-full p-3 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 text-center"
                required
              />
            </div>

            {/* Metode Pembayaran */}
            <div className="max-w-sm">
              <label className="block text-sm font-semibold text-[#977dff] mb-2">
                PILIH METODE PEMBAYARAN
              </label>
              <div className="relative w-full">
                <select
                  name="metode"
                  className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm outline-purple-300 appearance-none pr-10"
                  value={formData.metode}
                  onChange={handleChange}
                >
                  <option value="">-- Pilih --</option>
                  <option value="transfer">Transfer Bank</option>
                  <option value="ewallet">e-Wallet</option>
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  ▼
                </span>
              </div>
            </div>

            {/* Lengkapi Profil */}
            <div className="max-w-xl">
              <h3 className="text-base font-semibold text-purple-600 mb-3">
                LENGKAPI PROFIL
              </h3>
              <input
                type="text"
                name="nama"
                placeholder="Masukkan nama"
                value={formData.nama}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            {/* Checkbox Anonim */}
            <div className="flex items-center max-w-lg">
              <input
                id="anonim"
                name="anonim"
                type="checkbox"
                checked={formData.anonim}
                onChange={handleChange}
                className="h-5 w-5 text-purple-600 focus:ring-purple-500"
              />
              <label htmlFor="anonim" className="ml-2 text-gray-700 text-sm">
                Tampilkan sebagai donatur anonim
              </label>
            </div>

            {/* Tombol */}
            <div className="max-w-lg">
              <button
                type="submit"
                className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-full text-base font-semibold shadow-md transition"
              >
                LANJUTKAN PEMBAYARAN
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Modal Donasi */}
      <ModalDonasi
        open={showModal}
        onClose={() => setShowModal(false)}
        data={formData}
        jenis="urgensi"
      />
    </div>
  );
}

export default DonasiUrgensi;
