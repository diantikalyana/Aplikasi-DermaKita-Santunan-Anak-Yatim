import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../../components/NavbarRelawan";
import Sidebar from "../../../components/SidebarRelawan";

// Import gambar dummy
import dokumentasi1 from "../../../images/FotoSatu.png";
import dokumentasi2 from "../../../images/FotoDua.png";
import dokumentasi3 from "../../../images/FotoTiga.png";

// Inject font Raleway
const fontStyle = `
  @font-face { font-family: 'Raleway'; src: url('/fonts/Raleway-Regular.woff2') format('woff2'); font-weight: 400; }
  @font-face { font-family: 'Raleway'; src: url('/fonts/Raleway-SemiBold.woff2') format('woff2'); font-weight: 600; }
  @font-face { font-family: 'Raleway'; src: url('/fonts/Raleway-Bold.woff2') format('woff2'); font-weight: 700; }
  .font-raleway { font-family: 'Raleway', sans-serif; }
`;

const dummyDokumentasi = [
  {
    id: 1,
    tanggal: "2025-08-01",
    judul: "Bocah Penderita Kanker Butuh Bantuan Dana Rp35 Juta untuk Pengobatan",
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

const EditDokumentasiKhususRelawan = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  useEffect(() => {
    const found = dummyDokumentasi.find((d) => d.id === parseInt(id));
    if (found) setData(found);
  }, [id]);

  if (!data) {
    return (
      <div className="flex min-h-screen font-raleway">
        <style>{fontStyle}</style>
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <div className="p-6">
            <p className="text-red-500 font-semibold">Data tidak ditemukan.</p>
          </div>
        </div>
      </div>
    );
  }

  const handleSave = () => {
    alert("Dummy: Dokumentasi berhasil disimpan!");
    navigate("/relawan/dokumentasi/khusus");
  };

  return (
    <div className="flex min-h-screen bg-[#f5f5f5] text-[#111827] font-raleway">
      <style>{fontStyle}</style>
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />

        <main className="p-6 max-w-5xl mx-auto w-full">
          <div className="bg-white shadow rounded-xl p-6 space-y-6">
            <h1 className="text-xl font-bold text-[#493953]">
              Edit Dokumentasi
            </h1>

            {/* Layout Utama */}
            <div className="flex gap-6">
              {/* Foto */}
              <div className="w-1/3">
                <img
                  src={data.foto}
                  alt="Dokumentasi"
                  className="rounded-lg shadow w-full object-cover"
                />
                <input
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setData({
                        ...data,
                        foto: URL.createObjectURL(file),
                      });
                    }
                  }}
                  className="mt-2 text-sm"
                />
              </div>

              {/* Konten */}
              <div className="flex-1 space-y-3">
                <input
                  type="text"
                  value={data.judul}
                  onChange={(e) => setData({ ...data, judul: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 font-bold text-lg"
                />

                <input
                  type="date"
                  value={data.tanggal}
                  onChange={(e) => setData({ ...data, tanggal: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                />

                <textarea
                  value={data.keterangan}
                  onChange={(e) =>
                    setData({ ...data, keterangan: e.target.value })
                  }
                  rows={6}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    value={data.nominal}
                    onChange={(e) =>
                      setData({ ...data, nominal: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    placeholder="Nominal"
                  />
                  <input
                    type="text"
                    value={data.metode}
                    onChange={(e) =>
                      setData({ ...data, metode: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    placeholder="Metode"
                  />
                  <input
                    type="number"
                    value={data.rekening}
                    onChange={(e) =>
                      setData({ ...data, rekening: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    placeholder="Jumlah Rekening"
                  />
                </div>
              </div>
            </div>

            {/* Tombol Simpan */}
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="bg-[#6d4e9e] hover:bg-[#5c3f89] text-white px-5 py-2 rounded-lg text-sm"
              >
                Simpan Perubahan
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditDokumentasiKhususRelawan;
