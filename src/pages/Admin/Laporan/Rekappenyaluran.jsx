import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import PanahKiri from "../../../assets/Arrow.png";
// import axios from "axios"; // sementara di-comment kalau nggak dipakai

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

const Rekappenyaluran = () => {
  const navigate = useNavigate();
  const [dataPenyaluran, setDataPenyaluran] = useState([]);

  useEffect(() => {
    // Dummy data sementara
    const dummyData = [
      {
        id: 1,
        tanggal: "2025-09-01",
        nama_anak: "Budi Santoso",
        nominal: "Rp500.000",
        nama_penyalur: "Donatur A",
        no_rekening: "1234567890",
        foto: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        tanggal: "2025-09-01",
        nama_anak: "Siti Aminah",
        nominal: "Rp750.000",
        nama_penyalur: "Donatur B",
        no_rekening: "9876543210",
        foto: "https://via.placeholder.com/150",
      },
    ];
    setDataPenyaluran(dummyData);
  }, []);

  return (
    <div className="flex min-h-screen font-raleway bg-white text-gray-800">
      <style>{fontStyle}</style>
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-4 overflow-auto">
          {/* Header */}
           <div className="mb-4">
                      <button onClick={() => navigate("/admin/laporan/datapenyaluran")}>
                        <img
                          src={PanahKiri}
                          alt="Kembali"
                          className="w-10 h-10 hover:opacity-80 transition"
                        />
                      </button>
                    </div>

          <div className="bg-[#f0f0f0] rounded-xl shadow-md overflow-hidden">
            <div className="bg-[#f0f0f0] p-3 flex items-center">
              <button
                className="text-lg font-bold text-white bg-[#493953] hover:bg-[#836f8f] px-6 py-2 rounded-lg shadow transition"
                disabled
              >
                Rekap Penyaluran
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left text-gray-700">
                <thead className="bg-[#f0f0f0] border-b border-gray-300 text-xs uppercase text-gray-800">
                  <tr>
                    <th className="px-4 py-2">No</th>
                    <th className="px-4 py-2">Tanggal</th>
                    <th className="px-4 py-2">Nama Anak</th>
                    <th className="px-4 py-2">Nominal</th>
                    <th className="px-4 py-2">Penyalur</th>
                    <th className="px-4 py-2">No Rekening</th>
                    <th className="px-4 py-2">Bukti Donasi</th>
                  </tr>
                </thead>
                <tbody>
                  {dataPenyaluran.map((item, index) => (
                    <tr
                      key={item.id || index}
                      className="hover:bg-gray-200 cursor-pointer"
                    >
                      <td className="px-4 py-2">{index + 1}</td>
                      <td className="px-4 py-2">{item.tanggal}</td>
                      <td className="px-4 py-2">{item.nama_anak}</td>
                      <td className="px-4 py-2">{item.nominal}</td>
                      <td className="px-4 py-2">{item.nama_penyalur}</td>
                      <td className="px-4 py-2">{item.no_rekening}</td>
                      <td className="px-4 py-2">
                        <a
                          href={item.foto}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#8673A1] hover:bg-[#6e5c8a] text-white text-xs px-4 py-1.5 rounded-lg shadow-sm transition"
                        >
                          Lihat Foto
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Rekappenyaluran;
