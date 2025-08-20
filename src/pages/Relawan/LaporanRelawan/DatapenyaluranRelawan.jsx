import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEdit, FiTrash } from "react-icons/fi";
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

const DataPenyaluran = () => {
  const navigate = useNavigate();
  const [dataPenyaluran, setDataPenyaluran] = useState([
    {
      id: 1,
      tanggal: "30-06-2025",
      donasi_masuk: "Rp2.000.000",
      donasi_keluar: "Rp500.000",
      nama_penyalur: "Admin 1",
      no_rekening: "087987621787",
      fotoUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      tanggal: "30-06-2025",
      donasi_masuk: "Rp800.000",
      donasi_keluar: "Rp200.000",
      nama_penyalur: "Admin 2",
      no_rekening: "087987621789",
      fotoUrl: "https://via.placeholder.com/150",
    },
  ]);

  const handleLihatFoto = (e, fotoUrl) => {
    e.stopPropagation();
    window.open(fotoUrl, "_blank");
  };

  const handleEdit = (e, id) => {
    e.stopPropagation();
    alert(`Edit data ID: ${id}`);
   
  };

  const handleDelete = (e, id) => {
    e.stopPropagation();
    if (window.confirm("Yakin ingin menghapus data ini?")) {
      setDataPenyaluran(dataPenyaluran.filter((item) => item.id !== id));
      alert("Data berhasil dihapus!");
    }
  };

  const handleRowClick = (id) => {
    navigate(`/laporan/rekappenyaluran/${id}`); // langsung navigate ke detail
  };

  return (
    <div className="flex min-h-screen font-raleway bg-white text-gray-800">
      <style>{fontStyle}</style>
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-6 overflow-auto">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold text-white bg-[#493953] px-6 py-2 rounded-lg">
              Data Penyaluran
            </h1>
            <button
              onClick={() => navigate("/laporan/tambah-penyaluran")}
              className="bg-[#6B4E71] hover:bg-[#5a3f5f] text-white px-4 py-2 rounded-lg shadow"
            >
              + Tambah Baru
            </button>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md">
            <table className="min-w-full text-sm text-left text-gray-700">
              <thead className="bg-gray-100 text-[#493953] font-semibold">
                <tr>
                  <th className="px-4 py-3">No</th>
                  <th className="px-4 py-3">Tanggal</th>
                  <th className="px-4 py-3">Donasi Masuk</th>
                  <th className="px-4 py-3">Donasi Keluar</th>
                  <th className="px-4 py-3">Penyalur</th>
                  <th className="px-4 py-3">No Rekening</th>
                  <th className="px-4 py-3">Bukti Tasaruf</th>
                  <th className="px-4 py-3 text-center">Opsi</th>
                </tr>
              </thead>
              <tbody>
                {dataPenyaluran.map((item, index) => (
                  <tr
                    key={item.id}
                    className="bg-gray-200 hover:bg-gray-300 transition cursor-pointer"
                    onClick={() => handleRowClick(item.id)}
                  >
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">{item.tanggal}</td>
                    <td className="px-4 py-3">{item.donasi_masuk}</td>
                    <td className="px-4 py-3">{item.donasi_keluar}</td>
                    <td className="px-4 py-3">{item.nama_penyalur}</td>
                    <td className="px-4 py-3">{item.no_rekening}</td>
                    <td className="px-4 py-3">
                      <button
                        className="bg-[#8673A1] hover:bg-[#6e5c8a] text-white text-xs px-4 py-2 rounded-lg shadow-sm transition"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLihatFoto(e, item.fotoUrl);
                        }}
                      >
                        Lihat Foto
                      </button>
                    </td>
                    <td className="px-4 py-3 flex justify-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEdit(e, item.id);
                        }}
                        className="text-yellow-500 hover:text-yellow-600"
                      >
                        <FiEdit size={18} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(e, item.id);
                        }}
                        className="text-red-500 hover:text-red-600"
                      >
                        <FiTrash size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6">
            <button
              onClick={() => navigate("/laporan")}
              className="bg-[#493953] hover:bg-[#836f8f] text-white px-4 py-2 rounded shadow"
            >
              ← Kembali
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DataPenyaluran;
