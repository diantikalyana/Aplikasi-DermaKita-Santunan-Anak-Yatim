import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import PanahKiri from "../../../assets/Arrow.png";

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

const UploadDataPenyaluran = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    tanggal: "",
    donasi_masuk: "",
    donasi_keluar: "",
    nama_penyalur: "",
    no_rekening: "",
    foto: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState(null); // { type, message }

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "foto") {
      setFormData({ ...formData, foto: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Data disimpan:", formData);
      setAlert({ type: "success", message: "Data berhasil disimpan!" });
    } catch (err) {
      console.error("Gagal simpan data:", err);
      setAlert({ type: "error", message: "Terjadi kesalahan, coba lagi." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setAlert({ type: "info", message: "Aksi dibatalkan." });
  };

  const closeAlert = () => {
    // setelah pencet OK langsung navigate
    navigate("/relawan/laporan/1");
  };

  return (
    <div className="flex min-h-screen bg-white text-[#111827] font-raleway relative">
      <style>{fontStyle}</style>
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />

        <main className="p-6 max-w-6xl mx-auto w-full">
          {/* Panah balik */}
          <div className="mb-4">
            <button
              onClick={() => navigate("/relawan/laporan/1")}
            >
              <img
                src={PanahKiri}
                alt="Kembali"
                className="w-10 h-10 hover:opacity-80 transition"
              />
            </button>
          </div>

          <div className="bg-[#f7f7f7] rounded-xl shadow p-6 border border-gray-200">
            {/* Header */}
            <h1 className="text-xl font-bold mb-6 text-[#493953]">
              Tambah Data Penyaluran
            </h1>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Tanggal */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Tanggal
                </label>
                <input
                  type="date"
                  name="tanggal"
                  value={formData.tanggal}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#e9e9e9] px-3 py-2 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-[#8673A1]"
                />
              </div>

              {/* Donasi Masuk */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Donasi Masuk (Rp)
                </label>
                <input
                  type="number"
                  name="donasi_masuk"
                  value={formData.donasi_masuk}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#e9e9e9] px-3 py-2 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-[#8673A1]"
                />
              </div>

              {/* Donasi Keluar */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Donasi Keluar (Rp)
                </label>
                <input
                  type="number"
                  name="donasi_keluar"
                  value={formData.donasi_keluar}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#e9e9e9] px-3 py-2 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-[#8673A1]"
                />
              </div>

              {/* Nama Penyalur */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Nama Penyalur
                </label>
                <input
                  type="text"
                  name="nama_penyalur"
                  value={formData.nama_penyalur}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#e9e9e9] px-3 py-2 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-[#8673A1]"
                />
              </div>

              {/* No Rekening */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  No Rekening
                </label>
                <input
                  type="text"
                  name="no_rekening"
                  value={formData.no_rekening}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#e9e9e9] px-3 py-2 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-[#8673A1]"
                />
              </div>

              {/* Upload Foto */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Upload Foto Bukti
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    id="upload-foto"
                    type="file"
                    name="foto"
                    accept="image/*"
                    onChange={handleChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="upload-foto"
                    className="inline-block bg-[#493953] text-white px-4 py-2 rounded-md cursor-pointer hover:bg-[#6e5c8a] transition-all"
                  >
                    Pilih Foto
                  </label>
                  {formData.foto && (
                    <span className="text-sm text-gray-600 italic truncate max-w-[200px]">
                      {formData.foto.name}
                    </span>
                  )}
                </div>
              </div>

              {/* Tombol Aksi */}
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-md shadow transition-all"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#493953] text-white px-6 py-2 rounded-md shadow hover:bg-[#6e5c8a] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Menyimpan..." : "Simpan"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>

      {/* ALERT BOX TENGAH LAYAR */}
{alert && (
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-sm">
    <div
      className={`rounded-lg shadow-lg p-6 text-center ${
        alert.type === "success"
          ? "bg-[#5a4b6b] text-[#ffff] border border-[#736386]"
          : alert.type === "error"
          ? "bg-[#5a4b6b] text-[#ffff] border border-[#736386]"
          : "bg-[#5a4b6b] text-[#fff] border border-[#736386]"
      }`}
    >
      <h2 className="font-semibold mb-2">
        {alert.type === "success"
          ? "Berhasil"
          : alert.type === "error"
          ? "Error"
          : "Info"}
      </h2>
      <p className="mb-4">{alert.message}</p>
      <button
        onClick={closeAlert}
        className="bg-gray-200 text-[#5a4b6b] px-5 py-2 rounded-md shadow hover:bg-gray-300 transition-all"
      >
        OK
      </button>
    </div>
  </div>
)}


    </div>
  );
};

export default UploadDataPenyaluran;
