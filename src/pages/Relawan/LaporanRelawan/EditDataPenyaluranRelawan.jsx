import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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

const EditDataPenyaluranRelawan = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  const [formData, setFormData] = useState({
    tanggal: data?.tanggal || "",
    donasi_masuk: data?.donasi_masuk || "",
    donasi_keluar: data?.donasi_keluar || "",
    nama_penyalur: data?.nama_penyalur || "",
    no_rekening: data?.no_rekening || "",
  });

  const [foto, setFoto] = useState(null);
  const [preview, setPreview] = useState(data?.fotoUrl || "");
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = new FormData();
    Object.entries(formData).forEach(([key, val]) => payload.append(key, val));
    if (foto) payload.append("foto", foto);

    console.log("Data berhasil diperbarui:", Object.fromEntries(payload));

    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      navigate("/relawan/laporan/datapenyaluran");
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f0f0f0] font-raleway relative">
      <style>{fontStyle}</style>

      {/* Card Form */}
      <div className="bg-white rounded-xl shadow p-8 border border-gray-200 w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6 text-[#493953] text-center">
          Edit Data Penyaluran
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Tanggal */}
          <div>
            <label className="block text-sm font-semibold mb-1">Tanggal</label>
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
              Donasi Masuk
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
              Donasi Keluar
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
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="upload-foto"
                className="inline-block bg-[#493953] text-white px-4 py-2 rounded-md cursor-pointer hover:bg-[#6e5c8a] transition-all"
              >
                Pilih Foto
              </label>
              {foto && (
                <span className="text-sm text-gray-600 italic truncate max-w-[200px]">
                  {foto.name}
                </span>
              )}
            </div>
            {preview && (
              <div className="mt-3">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-80 h-40 object-cover rounded-lg border"
                />
              </div>
            )}
          </div>

          {/* Tombol */}
          <div className="flex justify-center gap-4 pt-4">
            <button
              type="submit"
              className="bg-[#493953] hover:bg-[#6a5476] text-white px-6 py-2 rounded-lg shadow"
            >
              Simpan
            </button>
            <button
              type="button"
              onClick={() => navigate("/relawan/laporan/datapenyaluran")}
              className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-lg shadow"
            >
              Batal
            </button>
          </div>
        </form>
      </div>

      {/* Alert */}
      {showAlert && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="bg-white border border-gray-300 p-6 rounded-xl shadow-lg max-w-sm w-full text-center">
            <h2 className="text-lg font-bold mb-4 text-[#493953]">
              Data berhasil diperbarui!
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditDataPenyaluranRelawan;
