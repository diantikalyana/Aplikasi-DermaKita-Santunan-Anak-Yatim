import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import FotoEnam from "../../../images/FotoEnam.png";
import FotoDua from "../../../images/FotoDua.png";
import FotoTiga from "../../../images/FotoTiga.png";

// Font injection
const fontStyle = `
  @font-face {
    font-family: 'Raleway';
    src: url('/fonts/Raleway-Regular.woff2') format('woff2');
    font-weight: 400;
  }
  .font-raleway {
    font-family: 'Raleway', sans-serif;
  }
`;

const DokumentasiKhusus = () => {
  const navigate = useNavigate();
  const [dataPenyaluran, setDataPenyaluran] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dummy sesuai gambar
    const dummyData = [
      {
        id: 1,
        foto: FotoEnam,
        tanggal: "2025-06-30",
        nama_anak: "Bayu Pratama",
        desa: "Desa Sugihan",
        nominal: 35000000,
        target: 35000000,
        deskripsi:
          "Pada kesempatan yang penuh makna ini, DermaKita dengan penuh kepedulian menyalurkan bantuan sebesar Rp35.000.000 untuk mendukung perjuangan seorang anak yatim yang saat ini tengah berjuang melawan penyakit kanker otak.",
      },
      {
        id: 2,
        foto: FotoDua,
        tanggal: "2025-06-30",
        nama_anak: "Bayu Pratama",
        desa: "Desa Sugihan",
        nominal: 35000000,
        target: 35000000,
        deskripsi:
          "Bayu adalah seorang anak yatim yang saat ini sedang berjuang melawan sakit dan membutuhkan perawatan medis lanjutan. Kondisinya memerlukan penanganan intensif, sementara sang ibu mengalami keterbatasan dalam membiayai pengobatan.",
      },
      {
        id: 3,
        foto: FotoTiga,
        tanggal: "2025-06-30",
        nama_anak: "Bayu Pratama",
        desa: "Desa Sugihan",
        nominal: 35000000,
        target: 35000000,
        deskripsi:
          "Bayu adalah seorang anak yatim yang saat ini sedang berjuang melawan sakit dan membutuhkan perawatan medis lanjutan.",
      },
    ];

    setTimeout(() => {
      setDataPenyaluran(dummyData);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="flex min-h-screen bg-white text-[#111827] font-raleway">
      <style>{fontStyle}</style>
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-6 max-w-7xl mx-auto w-full">
          <h1 className="text-2xl font-bold text-[#111827] mb-6">
            Dokumentasi Khusus
          </h1>

          {loading && <p className="text-gray-500">Loading data...</p>}

          {!loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataPenyaluran.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#B091D1]/29 rounded-2xl shadow-md p-4 hover:shadow-lg transition cursor-pointer"
                  onClick={() =>
                    navigate(`/admin/dokumentasi/khusus/${item.id}`, {
                      state: { item },
                    })
                  }
                >
                  {/* Foto */}
                  <img
                    src={item.foto}
                    alt={item.nama_anak}
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />

                  {/* Tanggal */}
                  <p className="text-xs text-gray-600 mb-1">
                    Tanggal: {item.tanggal}
                  </p>

                  {/* Judul */}
                  <h2 className="text-lg font-bold text-[#111827] mb-2">
                    {item.nama_anak} - {item.desa}
                  </h2>

                  {/* Badge Tersalurkan */}
                  <span className="inline-block bg-[#25E02E]/37 text-black text-sm font-medium px-3 py-1 rounded-full mb-3">
                    Tersalurkan: Rp{item.nominal.toLocaleString("id-ID")}
                  </span>

                  {/* Deskripsi */}
                  <p className="text-sm text-gray-700 line-clamp-3">
                    {item.deskripsi}
                  </p>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default DokumentasiKhusus;
