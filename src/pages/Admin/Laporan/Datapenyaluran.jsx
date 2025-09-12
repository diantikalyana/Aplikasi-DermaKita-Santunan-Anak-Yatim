import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
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

const formatRupiah = (angka) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(angka);

const DataPenyaluran = () => {
  const navigate = useNavigate();
  const [dataPenyaluran, setDataPenyaluran] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dummyData = [
          {
            id: 1,
            tanggal: "2025-09-01",
            donasi_masuk: 5000000,
            donasi_keluar: 2000000,
            nama_penyalur: "Budi Santoso",
            no_rekening: "1234567890",
            fotoUrl: "https://via.placeholder.com/150",
          },
          {
            id: 2,
            tanggal: "2025-08-25",
            donasi_masuk: 7000000,
            donasi_keluar: 3000000,
            nama_penyalur: "Siti Aminah",
            no_rekening: "0987654321",
            fotoUrl: "https://via.placeholder.com/150",
          },
          {
            id: 3,
            tanggal: "2025-08-20",
            donasi_masuk: 4000000,
            donasi_keluar: 1500000,
            nama_penyalur: "Andi Wijaya",
            no_rekening: "1122334455",
            fotoUrl: "https://via.placeholder.com/150",
          },
        ];
        setDataPenyaluran(dummyData);
      } catch (error) {
        console.error("Gagal mengambil data penyaluran:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleRowClick = (item) => {
    navigate(`/admin/laporan/rekap/${item.id}`, { state: item });
  };

  const handleLihatFoto = (e, fotoUrl) => {
    e.stopPropagation();
    fotoUrl ? window.open(fotoUrl, "_blank") : alert("Foto tidak tersedia.");
  };

  return (
    <div className="flex min-h-screen font-raleway bg-white text-gray-800">
      <style>{fontStyle}</style>
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-4 overflow-auto">
          {/* Panah balik */}
          <div className="mb-4">
            <button onClick={() => navigate("/admin/laporan")}>
              <img
                src={PanahKiri}
                alt="Kembali"
                className="w-10 h-10 hover:opacity-80 transition"
              />
            </button>
          </div>

          <div className="bg-[#f0f0f0] rounded-xl shadow-md overflow-hidden">
            {/* Header judul */}
            <div className="bg-[#f0f0f0] p-3 flex items-center">
              <button
                className="text-lg font-bold text-white bg-[#493953] hover:bg-[#836f8f] px-6 py-2 rounded-lg shadow transition"
                disabled
              >
                Data Penyaluran
              </button>
            </div>

            {loading ? (
              <p className="p-4">Loading data...</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left text-gray-700">
                  <thead className="bg-[#f0f0f0] border-b border-[#c1b9ca]">
                    <tr>
                      <th className="px-4 py-2">No</th>
                      <th className="px-4 py-2">Tanggal</th>
                      <th className="px-4 py-2">Donasi Masuk</th>
                      <th className="px-4 py-2">Donasi Keluar</th>
                      <th className="px-4 py-2">Penyalur</th>
                      <th className="px-4 py-2">No Rekening</th>
                      <th className="px-4 py-2 text-center">Bukti Tasaruf</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataPenyaluran.map((item, index) => (
                      <tr
                        key={item.id}
                        className="hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleRowClick(item)}
                      >
                        <td className="px-4 py-2">{index + 1}</td>
                        <td className="px-4 py-2">{item.tanggal}</td>
                        <td className="px-4 py-2">
                          {formatRupiah(item.donasi_masuk)}
                        </td>
                        <td className="px-4 py-2">
                          {formatRupiah(item.donasi_keluar)}
                        </td>
                        <td className="px-4 py-2">{item.nama_penyalur}</td>
                        <td className="px-4 py-2">{item.no_rekening}</td>
                        <td className="px-4 py-2 text-center">
                          <button
                            className="bg-[#8673A1] hover:bg-[#6e5c8a] text-white text-xs px-4 py-1.5 rounded-lg shadow-sm transition"
                            onClick={(e) => handleLihatFoto(e, item.fotoUrl)}
                          >
                            Lihat Foto
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DataPenyaluran;
