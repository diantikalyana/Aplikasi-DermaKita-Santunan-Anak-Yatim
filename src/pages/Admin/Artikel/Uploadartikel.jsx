import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";

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

const UploadArtikel = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    target: "",
    image: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm((prev) => ({ ...prev, image: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const newArtikel = {
        id: Date.now(), // ID unik
        title: form.title,
        excerpt: form.excerpt,
        content: form.content,
        target: parseInt(form.target, 10),
        image: form.image ? URL.createObjectURL(form.image) : null, // preview gambar
        mulai: new Date().toISOString(),
        terkumpul: 0,
      };

      // ambil artikel lama dari localStorage
      const existing = JSON.parse(localStorage.getItem("artikelList")) || [];

      // simpan artikel baru + lama
      const updated = [newArtikel, ...existing];
      localStorage.setItem("artikelList", JSON.stringify(updated));

      // pindah ke halaman daftar artikel
      navigate("/admin/artikel");
    } catch (error) {
      console.error("Gagal upload artikel:", error);
      alert("Gagal mengunggah artikel.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white text-[#111827] font-raleway">
      <style>{fontStyle}</style>
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />

        <main className="p-6 max-w-6xl mx-auto w-full">
          <div className="bg-[#f7f7f7] rounded-xl shadow p-6 border border-gray-200">
            {/* Header Form */}
            <h1 className="text-xl font-bold mb-6 text-[#493953]">
              Upload Artikel
            </h1>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Judul */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Judul Artikel
                </label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#e9e9e9] px-3 py-2 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-[#8673A1]"
                />
              </div>

              {/* Deskripsi Singkat */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Deskripsi Singkat
                </label>
                <textarea
                  name="excerpt"
                  value={form.excerpt}
                  onChange={handleChange}
                  rows="2"
                  required
                  className="w-full bg-[#e9e9e9] px-3 py-2 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-[#8673A1]"
                />
              </div>

              {/* Isi Artikel */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Isi Artikel
                </label>
                <textarea
                  name="content"
                  value={form.content}
                  onChange={handleChange}
                  rows="6"
                  required
                  className="w-full bg-[#e9e9e9] px-3 py-2 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-[#8673A1]"
                />
              </div>

              {/* Target Donasi */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Target Donasi
                </label>
                <input
                  type="number"
                  name="target"
                  value={form.target}
                  onChange={handleChange}
                  min="1000"
                  required
                  className="w-full bg-[#e9e9e9] px-3 py-2 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-[#8673A1]"
                />
              </div>

              {/* Upload Gambar */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Upload Gambar
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    id="upload-image"
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="upload-image"
                    className="inline-block bg-[#493953] text-white px-4 py-2 rounded-md cursor-pointer hover:bg-[#6e5c8a] transition-all"
                  >
                    Pilih Gambar
                  </label>
                  {form.image && (
                    <span className="text-sm text-gray-600 italic truncate max-w-[200px]">
                      {form.image.name}
                    </span>
                  )}
                </div>
              </div>

              {/* Submit */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#493953] text-white px-6 py-2 rounded-md shadow hover:bg-[#6e5c8a] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Mengunggah..." : "Upload"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UploadArtikel;
