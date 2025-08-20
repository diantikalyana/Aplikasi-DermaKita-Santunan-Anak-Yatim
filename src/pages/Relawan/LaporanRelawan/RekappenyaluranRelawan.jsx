import React, { useEffect, useState } from "react";
import axios from "axios";
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

const Rekappenyaluran = () => {
  const navigate = useNavigate();
  const [dataPenyaluran, setDataPenyaluran] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setErrorMsg("");

        const token = localStorage.getItem("token");
        if (!token) {
          setErrorMsg("Token tidak ditemukan. Silakan login terlebih dahulu.");
          setLoading(false);
          return;
        }

        const response = await axios.get("http://192.168.103.147:8000/api/rekap-penyalur", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setDataPenyaluran(response.data);
      } catch (error) {
        console.error("Gagal memuat data penyaluran dari backend:", error);
        if (error.response && error.response.status === 401) {
          setErrorMsg("Unauthorized. Token mungkin sudah kadaluarsa atau tidak valid.");
        } else {
          setErrorMsg("Gagal memuat data. Silakan coba lagi nanti.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen font-raleway bg-white text-gray-800">
      <style>{fontStyle}</style>
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-6 overflow-auto">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-xl font-bold text-white bg-[#493953] px-6 py-2 rounded-lg">
              Rekap Penyaluran
            </h1>
          </div>

          {loading && <p>Loading data...</p>}
          {errorMsg && <p className="text-red-600">{errorMsg}</p>}

          {!loading && !errorMsg && (
            <div className="rounded-xl overflow-hidden shadow-md">
              <table className="min-w-full text-sm text-left text-gray-700">
                <thead className="bg-gray-100 text-[#493953] font-semibold">
                  <tr>
                    <th className="px-4 py-3">No</th>
                    <th className="px-4 py-3">Tanggal</th>
                    <th className="px-4 py-3">Nama Anak</th>
                    <th className="px-4 py-3">Nominal</th>
                    <th className="px-4 py-3">Penyalur</th>
                    <th className="px-4 py-3">No Rekening</th>
                    <th className="px-4 py-3">Bukti Donasi</th>
                  </tr>
                </thead>
                <tbody>
                  {dataPenyaluran.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="text-center py-4">
                        Data kosong
                      </td>
                    </tr>
                  ) : (
                    dataPenyaluran.map((item, index) => (
                      <tr key={item.id || index} className="bg-gray-200">
                        <td className="px-4 py-3">{index + 1}</td>
                        <td className="px-4 py-3">{item.tanggal}</td>
                        <td className="px-4 py-3">{item.nama_anak}</td>
                        <td className="px-4 py-3">{item.nominal}</td>
                        <td className="px-4 py-3">{item.nama_penyalur}</td>
                        <td className="px-4 py-3">{item.no_rekening}</td>
                        <td className="px-4 py-3">
                          <a
                            href={item.foto}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#8673A1] hover:bg-[#6e5c8a] text-white text-xs px-4 py-2 rounded-lg shadow-sm transition"
                          >
                            Lihat Foto
                          </a>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-6">
            <button
              onClick={() => navigate(-1)}
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

export default Rekappenyaluran;
