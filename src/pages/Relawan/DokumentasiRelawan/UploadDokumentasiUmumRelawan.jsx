import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/NavbarRelawan";
import Sidebar from "../../../components/SidebarRelawan";

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

const UploadDokumentasiUmumRelawan = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    judul: "",
    tanggal: "",
    nominal: "",
    keterangan: "",
    foto: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "", type: "success" });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "foto") {
      setForm((prev) => ({ ...prev, foto: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const newDokumentasi = {
        id: Date.now(),
        ...form,
        nominal: parseInt(form.nominal, 10),
        foto: form.foto ? URL.createObjectURL(form.foto) : null,
      };

      const existing = JSON.parse(localStorage.getItem("dokumentasiUmum")) || [];
      const updated = [newDokumentasi, ...existing];
      localStorage.setItem("dokumentasiUmum", JSON.stringify(updated));

      // ✅ tampilkan alert sukses di tengah
      setAlert({ show: true, message: "Dokumentasi berhasil ditambahkan!", type: "success" });
      setTimeout(() => {
        setAlert({ show: false, message: "", type: "success" });
        navigate("/relawan/dokumentasi/umum");
      }, 2000);
    } catch (error) {
      console.error("Gagal upload dokumentasi:", error);
      setAlert({ show: true, message: "Gagal menambahkan dokumentasi.", type: "error" });
      setTimeout(() => setAlert({ show: false, message: "", type: "error" }), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white text-[#111827] font-raleway relative">
      <style>{fontStyle}</style>
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />

        {/* ✅ Alert custom di tengah */}
        {alert.show && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className={`px-10 py-6 rounded-2xl shadow-2xl text-white font-bold text-lg max-w-md text-center transition-all duration-300 ${
                alert.type === "success" ? "bg-[#5a4b6b]" : "bg-red-500"
              }`}
            >
              {alert.message}
            </div>
          </div>
        )}

        <main className="p-6 max-w-5xl mx-auto w-full">
          <div className="bg-[#f7f7f7] rounded-xl shadow p-6 border border-gray-200">
            <h1 className="text-xl font-bold mb-6 text-[#493953]">
              Tambah Dokumentasi Umum
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Judul */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Judul Dokumentasi
                </label>
                <input
                  type="text"
                  name="judul"
                  value={form.judul}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#e9e9e9] px-3 py-2 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-[#8673A1]"
                />
              </div>

              {/* Tanggal */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Tanggal Penyaluran
                </label>
                <input
                  type="date"
                  name="tanggal"
                  value={form.tanggal}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#e9e9e9] px-3 py-2 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-[#8673A1]"
                />
              </div>

              {/* Nominal */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Nominal (Rp)
                  </label>
                  <input
                    type="number"
                    name="nominal"
                    value={form.nominal}
                    onChange={handleChange}
                    min="1000"
                    required
                    className="w-full bg-[#e9e9e9] px-3 py-2 rounded-md shadow-inner"
                  />
                </div>
              </div>

              {/* Keterangan */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Keterangan
                </label>
                <textarea
                  name="keterangan"
                  value={form.keterangan}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="w-full bg-[#e9e9e9] px-3 py-2 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-[#8673A1]"
                />
              </div>

              {/* Upload Foto */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Upload Foto
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
                  {form.foto && (
                    <span className="text-sm text-gray-600 italic truncate max-w-[200px]">
                      {form.foto.name}
                    </span>
                  )}
                </div>
              </div>

              {/* Tombol Submit */}
              <div className="flex justify-end">
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
    </div>
  );
};

export default UploadDokumentasiUmumRelawan;
