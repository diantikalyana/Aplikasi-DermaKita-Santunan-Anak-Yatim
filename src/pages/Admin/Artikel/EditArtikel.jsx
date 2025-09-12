import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import Artikel1 from "../../../assets/Artikel1.png";

const EditArtikelInline = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [artikel, setArtikel] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    // Dummy data
    const dummy = {
      id,
      judul: "Kegiatan Santunan Anak Yatim di Kajoran: Merajut Harapan, Menebar Kebaikan",
      tanggal: "2025-07-12",
      konten: `Kajoran, 12 Juli 2025 — Suasana haru dan kebahagiaan menyelimuti acara Santunan Anak Yatim yang diselenggarakan di wilayah Kajoran. 
Kegiatan ini merupakan bentuk kepedulian sosial kepada anak-anak yatim yang membutuhkan uluran tangan, sekaligus sebagai wujud nyata dari semangat kemanusiaan dan solidaritas masyarakat.`,
      foto: Artikel1,
    };
    setArtikel(dummy);
  }, [id]);

  const handleSave = () => {
    alert("Dummy: Artikel berhasil disimpan!");
    navigate("/admin/artikel");
  };

  const handleDelete = () => {
    if (window.confirm("Yakin ingin menghapus artikel ini?")) {
      alert("Dummy: Artikel berhasil dihapus!");
      navigate("/admin/artikel");
    }
  };

  if (!artikel) return <div>Loading...</div>;

  return (
    <div className="flex min-h-screen bg-[#f5f5f5] text-[#111827] font-raleway">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-6 max-w-5xl mx-auto w-full">
          <div className="bg-white shadow rounded-xl p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold text-[#493953]">Edit Artikel</h1>
              {!editing ? (
                <button
                  onClick={() => setEditing(true)}
                  className="bg-[#6d4e9e] hover:bg-[#5c3f89] text-white px-4 py-2 rounded-lg text-sm"
                >
                  Edit
                </button>
              ) : (
                <div className="flex gap-3">
                  <button
                    onClick={handleSave}
                    className="bg-[#6d4e9e] hover:bg-[#5c3f89] text-white px-4 py-2 rounded-lg text-sm"
                  >
                    Simpan Perubahan
                  </button>
                </div>
              )}
            </div>

            {/* Artikel Preview + Inline Edit */}
            <div className="flex gap-6">
              {/* Gambar */}
              <div className="w-1/3">
                <img
                  src={artikel.foto}
                  alt="Artikel"
                  className="rounded-lg shadow w-full object-cover"
                />
                {editing && (
                  <input
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setArtikel({
                          ...artikel,
                          foto: URL.createObjectURL(file),
                        });
                      }
                    }}
                    className="mt-2 text-sm"
                  />
                )}
              </div>

              {/* Konten */}
              <div className="flex-1 space-y-3">
                {editing ? (
                  <input
                    type="text"
                    value={artikel.judul}
                    onChange={(e) =>
                      setArtikel({ ...artikel, judul: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 font-bold text-lg"
                  />
                ) : (
                  <h2 className="font-bold text-lg">{artikel.judul}</h2>
                )}

                <p className="text-sm text-gray-500">
                  {new Date(artikel.tanggal).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>

                {editing ? (
                  <textarea
                    value={artikel.konten}
                    onChange={(e) =>
                      setArtikel({ ...artikel, konten: e.target.value })
                    }
                    rows={10}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  />
                ) : (
                  <p className="text-sm whitespace-pre-line">
                    {artikel.konten}
                  </p>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditArtikelInline;
