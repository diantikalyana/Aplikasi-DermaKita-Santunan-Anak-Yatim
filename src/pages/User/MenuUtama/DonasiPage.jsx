import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/SidebarUser";
import ModalDonasi from "../../../components/Modal/ModalDonasi"; // Import modal donasi

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

function DonasiPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nominal: "",
    metode: "",
    nama: "",
    tanggal: new Date().toISOString().split("T")[0], // default tanggal hari ini
    anonim: false,
    dukungan: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState(""); // ⬅️ state pesan error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nominalValue = Number(formData.nominal);

    // Validasi semua field wajib
    if (!formData.nominal || !formData.metode || !formData.nama) {
      setErrorMsg("Harap mengisi semua data di atas terlebih dahulu");
      return;
    }

    // Validasi minimal nominal
    if (nominalValue < 10000) {
      setErrorMsg("Nominal minimal 10.000 untuk berdonasi");
      return;
    }

    setErrorMsg(""); // reset error kalau valid
    console.log("Donasi berhasil (dummy):", formData);
    setShowModal(true); // buka modal
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-raleway">
      {/* Inject font style */}
      <style>{fontStyle}</style>

      {/* Sidebar */}
      <Sidebar />

      {/* Konten Donasi */}
      <div className="flex-1 p-10 overflow-auto">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8 border border-black/40">
          <h2 className="text-center text-2xl text-[#977dff] mb-6">
            MASUKKAN NOMINAL
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="number"
                name="nominal"
                placeholder="Rp.---.---"
                className="w-full border border-gray-300 rounded-full px-6 py-2 text-sm outline-purple-300"
                value={formData.nominal}
                onChange={handleChange}
              />
            </div>

           <div>
  <label className="block text-sm font-semibold text-[#977dff] mb-1">
    PILIH METODE PEMBAYARAN
  </label>
  <div className="relative w-50">
    <select
      name="metode"
      className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm outline-purple-300 appearance-none pr-10"
      value={formData.metode}
      onChange={handleChange}
    >
      <option value=""></option>
      <option value="transfer">Transfer Bank</option>
      <option value="ewallet">e-Wallet</option>
    </select>

    {/* Ikon segitiga ▼ */}
    <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
      ▼
    </span>
  </div>
</div>


            <div>
              <label className="block text-sm font-semibold text-[#977dff] mb-1">
                LENGKAPI PROFIL
              </label>
              <input
                type="text"
                name="nama"
                placeholder="Masukkan nama"
                className="w-full mb-3 border border-gray-300 rounded-full px-4 py-2 text-sm outline-purple-300 text-black"
                value={formData.nama}
                onChange={handleChange}
              />
          
              <div className="flex items-center mt-2 gap-2">
                <input
                  type="checkbox"
                  name="anonim"
                  checked={formData.anonim}
                  onChange={handleChange}
                  className="accent-[#5A4B6B] h-4 w-4"
                />
                <label htmlFor="anonim" className="text-sm text-gray-500">
                  Tampilkan sebagai donatur anonim
                </label>
              </div>
            </div>


            {/* Pesan error global */}
            {errorMsg && (
              <p className="text-red-500 text-center text-sm">{errorMsg}</p>
            )}

            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-[#5A4B6B] text-white px-6 py-2 rounded-full hover:opacity-90 transition"
              >
                LANJUTKAN PEMBAYARAN
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal Donasi */}
     <ModalDonasi open={showModal} onClose={() => setShowModal(false)} data={formData} jenis="umum" />

    </div>
  );
}

export default DonasiPage;
