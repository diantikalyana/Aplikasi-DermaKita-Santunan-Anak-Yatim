import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import { FiCheckCircle } from "react-icons/fi";
import axios from "axios";

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
  const [errorMsg, setErrorMsg] = useState("");
  const [unauthorized, setUnauthorized] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setErrorMsg("");
      setUnauthorized(false);
      setLoading(true);

      try {
        let token = localStorage.getItem("token");
        const role = localStorage.getItem("role");

        if (!token) return navigate("/login");
        if (role !== "admin") return setUnauthorized(true);

        const { data, headers } = await axios.get(
          "http://192.168.103.223:8000/api/dokumentasi",
          { headers: { Authorization: `Bearer ${token}` } }
        );

        // Simpan token baru jika ada di response header
        const newToken = headers['authorization']?.replace('Bearer ', '');
        if (newToken && newToken !== token) {
          localStorage.setItem("token", newToken);
          token = newToken;
        }

        setDataPenyaluran(data?.data || []);
      } catch (err) {
        const status = err.response?.status;
        if (status === 401) navigate("/login");
        else if (status === 403) setUnauthorized(true);
        else setErrorMsg(err.response?.data?.message || "Gagal memuat data penyaluran.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  if (unauthorized) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5f5f5] font-raleway">
        <div className="text-center p-6 bg-white shadow-md rounded">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Akses Ditolak</h2>
          <p className="text-gray-700 mb-4">
            Anda tidak memiliki izin untuk melihat halaman ini.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="bg-[#493953] hover:bg-[#836f8f] text-white px-4 py-2 rounded shadow"
          >
            ← Kembali
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#f5f5f5] text-[#111827] font-raleway">
      <style>{fontStyle}</style>
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-6 max-w-6xl mx-auto w-full">
          <h1 className="text-2xl font-bold text-[#493953] mb-6">
            Dokumentasi Penyaluran Khusus
          </h1>

          {loading && <p>Loading data...</p>}
          {errorMsg && (
            <p className="text-red-500 bg-red-100 p-2 rounded">{errorMsg}</p>
          )}

          {!loading && !errorMsg && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataPenyaluran.length > 0 ? (
                dataPenyaluran.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => navigate(`/detaildokumentasi/${item.id}`)}
                    className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <img
                      src={item.foto_url}
                      alt={`Dokumentasi ${item.nama_anak}`}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <p className="text-sm text-gray-600 mb-1">Tanggal: {item.tanggal}</p>
                    <h2 className="text-lg font-semibold text-[#493953] mb-1">
                      {item.nama_anak} - {item.desa}
                    </h2>
                    <p className="text-sm text-gray-600 mb-1">
                      Penyalur: {Array.isArray(item.penyalur) ? item.penyalur.join(", ") : item.penyalur}
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      Target Donasi: Rp {item.target.toLocaleString("id-ID")}
                    </p>
                    <div className="mb-2 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-semibold">
                        <FiCheckCircle className="text-green-600" />
                        Tersalurkan: Rp {item.nominal.toLocaleString("id-ID")}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mt-2">{item.keterangan}</p>
                  </div>
                ))
              ) : (
                <p>Tidak ada data penyaluran khusus.</p>
              )}
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

export default DokumentasiKhusus;
