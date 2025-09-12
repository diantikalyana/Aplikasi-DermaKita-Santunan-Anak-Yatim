import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/SidebarUser";
import Navbar from "../../../components/NavbarUser";

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

function PengajuanPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Munculkan alert
    alert("Data sudah diajukan, silahkan tunggu konfirmasi berikutnya.");

    // Setelah alert, arahkan ke halaman konfirmasi
    navigate("/konfirmasi-pengajuan");
  };

  return (
    <div className="flex h-screen font-raleway">
      {/* Inject font style */}
      <style>{fontStyle}</style>

      <Sidebar />
      <div className="flex-1 bg-gray-50 flex flex-col overflow-auto">
        {/* Navbar dengan judul dinamis */}
        <Navbar title="Pengajuan Data" />

        {/* Konten */}
        <div className="p-6 sm:p-10 overflow-auto flex-1">
          <div className="bg-[#D9D9D9]/21 rounded-2xl shadow-md px-6 sm:px-10 py-8 max-w-4xl mx-auto">
            {/* Judul form */}
            <h2 className="text-2xl font-semibold text-center text-[#5A4B6B] mb-8">
              FORM PENGAJUAN DATA ANAK YATIM
            </h2>
            <div className="border-t border-black my-4"></div>
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nama Lengkap */}
              <div className="flex flex-col sm:flex-row sm:items-center">
                <label className="sm:w-1/3 sm:pr-4 text-sm font-medium text-gray-700">
                  Nama Lengkap :
                </label>
                <input
                  type="text"
                  className="w-full sm:w-2/3 border border-gray-300 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-300"
                  required
                />
              </div>

              {/* Alamat */}
              <div className="flex flex-col sm:flex-row sm:items-center">
                <label className="sm:w-1/3 sm:pr-4 text-sm font-medium text-gray-700">
                  Alamat :
                </label>
                <input
                  type="text"
                  className="w-full sm:w-2/3 border border-gray-300 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-300"
                  required
                />
              </div>

              {/* Tempat, Tanggal Lahir */}
              <div className="flex flex-col sm:flex-row sm:items-center">
                <label className="sm:w-1/3 sm:pr-4 text-sm font-medium text-gray-700">
                  Tempat, Tanggal Lahir :
                </label>
                <input
                  type="text"
                  className="w-full sm:w-2/3 border border-gray-300 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-300"
                  required
                />
              </div>

              {/* Jenis Kelamin */}
              <div className="flex flex-col sm:flex-row sm:items-center">
                <label className="sm:w-1/3 sm:pr-4 text-sm font-medium text-gray-700">
                  Jenis Kelamin :
                </label>
                <div className="relative w-full sm:w-2/3">
                  <select
                    className="appearance-none w-full border border-gray-300 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-300"
                    required
                  >
                    <option value="">Pilih</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none">
                    ▼
                  </span>
                </div>
              </div>

              {/* Status */}
              <div className="flex flex-col sm:flex-row sm:items-center">
                <label className="sm:w-1/3 sm:pr-4 text-sm font-medium text-gray-700">
                  Status :
                </label>
                <div className="relative w-full sm:w-2/3">
                  <select
                    className="appearance-none w-full border border-gray-300 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-300"
                    required
                  >
                    <option value="">Pilih</option>
                    <option value="Yatim">Yatim</option>
                    <option value="Piatu">Piatu</option>
                    <option value="Yatim Piatu">Yatim Piatu</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none">
                    ▼
                  </span>
                </div>
              </div>

              {/* Asal Sekolah */}
              <div className="flex flex-col sm:flex-row sm:items-center">
                <label className="sm:w-1/3 sm:pr-4 text-sm font-medium text-gray-700">
                  Asal Sekolah :
                </label>
                <input
                  type="text"
                  className="w-full sm:w-2/3 border border-gray-300 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>

              {/* Nama Wali */}
              <div className="flex flex-col sm:flex-row sm:items-center">
                <label className="sm:w-1/3 sm:pr-4 text-sm font-medium text-gray-700">
                  Nama Wali :
                </label>
                <input
                  type="text"
                  className="w-full sm:w-2/3 border border-gray-300 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>

              {/* Alamat Wali */}
              <div className="flex flex-col sm:flex-row sm:items-center">
                <label className="sm:w-1/3 sm:pr-4 text-sm font-medium text-gray-700">
                  Alamat Wali :
                </label>
                <input
                  type="text"
                  className="w-full sm:w-2/3 border border-gray-300 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>

              {/* Garis pemisah */}
              <div className="border-t border-black my-4"></div>

              {/* Nama Pendamping */}
              <div className="flex flex-col sm:flex-row sm:items-center">
                <label className="sm:w-1/3 sm:pr-4 text-sm font-medium text-gray-700">
                  Nama Pendamping :
                </label>
                <input
                  type="text"
                  className="w-full sm:w-2/3 border border-gray-300 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>

              {/* No Telp Pendamping */}
              <div className="flex flex-col sm:flex-row sm:items-center">
                <label className="sm:w-1/3 sm:pr-4 text-sm font-medium text-gray-700">
                  No Telp :
                </label>
                <input
                  type="tel"
                  className="w-full sm:w-2/3 border border-gray-300 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>

              {/* Nama Pengaju */}
              <div className="flex flex-col sm:flex-row sm:items-center">
                <label className="sm:w-1/3 sm:pr-4 text-sm font-medium text-gray-700">
                  Nama Pengaju :
                </label>
                <input
                  type="text"
                  className="w-full sm:w-2/3 border border-gray-300 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>

              {/* No Telp Pengaju */}
              <div className="flex flex-col sm:flex-row sm:items-center">
                <label className="sm:w-1/3 sm:pr-4 text-sm font-medium text-gray-700">
                  No Telp :
                </label>
                <input
                  type="tel"
                  className="w-full sm:w-2/3 border border-gray-300 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>

              {/* Lampiran Bukti (atas bawah) */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-2">
                    Lampiran Surat Keterangan
                  </label>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    className="w-50 text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-2">
                    Lampiran Kartu Keluarga
                  </label>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    className="w-50 text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Tombol submit */}
              <div className="flex justify-end pt-6">
                <button
                  type="submit"
                  className="bg-[#5A4B6b] shadow-[0_6px_0px_0px_rgba(0,0,0,0.3)] text-white px-10 py-3 rounded-full font-semibold text-sm hover:opacity-90 transitio"
                >
                  Ajukan Data
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PengajuanPage;
