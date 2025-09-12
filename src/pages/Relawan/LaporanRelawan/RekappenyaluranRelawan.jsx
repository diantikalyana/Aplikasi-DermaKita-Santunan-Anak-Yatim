import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/NavbarRelawan";
import Sidebar from "../../../components/SidebarRelawan";
import PanahKiri from "../../../assets/Arrow.png";
import editIcon from "../../../assets/edit.png";
import trashIcon from "../../../assets/trash.png";

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

const RekappenyaluranRelawan = () => {
  const navigate = useNavigate();
  const [dataPenyaluran, setDataPenyaluran] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

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

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    setDataPenyaluran((prev) => prev.filter((item) => item.id !== selectedId));
    setShowConfirm(false);
    setSelectedId(null);
  };

  return (
    <div className="flex min-h-screen font-raleway bg-white text-gray-800 relative">
      <style>{fontStyle}</style>
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-4 overflow-auto relative">
          {/* Header */}
          <div className="mb-4 flex items-center justify-between">
            <button onClick={() => navigate("/relawan/laporan/1")}>
              <img
                src={PanahKiri}
                alt="Kembali"
                className="w-10 h-10 hover:opacity-80 transition"
              />
            </button>

            {/* Tombol Tambah */}
            <button
              onClick={() => navigate("/relawan/laporan/uploadrekaprelawan")}
              className="bg-[#493953] hover:bg-[#6e5c8a] text-white text-sm px-4 py-2 rounded-lg shadow transition flex items-center gap-2"
            >
              + Tambah Data
            </button>
          </div>

          {/* Tabel */}
          <div className="bg-[#f0f0f0] rounded-xl shadow-md overflow-hidden relative">
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
                    <th className="px-4 py-2">Operasi</th>
                  </tr>
                </thead>
                <tbody>
                  {dataPenyaluran.map((item, index) => (
                    <tr key={item.id || index} className="cursor-pointer">
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
                      <td className="px-4 py-2 flex gap-2">
                        <button
                          onClick={() =>
                            navigate(`/relawan/laporan/editrekap/${item.id}`)
                          }
                        >
                          <img
                            src={editIcon}
                            alt="Edit"
                            className="w-6 h-6 hover:opacity-75"
                          />
                        </button>
                        <button onClick={() => handleDeleteClick(item.id)}>
                          <img
                            src={trashIcon}
                            alt="Hapus"
                            className="w-6 h-6 hover:opacity-75"
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

           {/* ALERT KONFIRMASI */}
{showConfirm && (
  <div className="absolute inset-0 flex items-center justify-center z-20">
    <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
      <h2 className="text-lg font-bold mb-4">
        Yakin ingin menghapus data ini?
      </h2>
      <div className="flex justify-center gap-4">
        <button
          onClick={confirmDelete}
          className="bg-red-600 text-white px-6 py-2 rounded-md shadow hover:bg-red-700 transition"
        >
          Hapus
        </button>
        <button
          onClick={() => setShowConfirm(false)}
          className="bg-gray-300 text-gray-800 px-6 py-2 rounded-md shadow hover:bg-gray-400 transition"
        >
          Batal
        </button>
      </div>
    </div>
  </div>
)}


          </div>
        </main>
      </div>
    </div>
  );
};

export default RekappenyaluranRelawan;
