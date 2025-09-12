import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
// import axios from "axios"; // sementara dimatikan

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

const Dokumentasi = () => {
  const navigate = useNavigate();
  const [dokumenList, setDokumenList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dummy data
  const dummyDokumentasi = [
    { id: 1, judul: "Penyaluran Beasiswa A", tanggal: "2025-08-15" },
    { id: 2, judul: "Bantuan Dana Medis B", tanggal: "2025-08-20" },
    { id: 3, judul: "Santunan Anak Yatim C", tanggal: "2025-08-25" },
  ];

  // useEffect dummy
  useEffect(() => {
    const fetchDokumentasi = async () => {
      try {
        setLoading(true);
        setError(null);

        // axios versi asli (sementara di-comment)
        /*
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Token tidak ditemukan, silakan login ulang.");
          setLoading(false);
          return;
        }

        const res = await axios.get("http://192.168.102.100:8000/api/dokumentasi", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data && res.data.data) {
          setDokumenList(res.data.data);
        } else {
          setDokumenList([]);
        }
        */

        // dummy jalan dulu
        setTimeout(() => {
          setDokumenList(dummyDokumentasi);
          setLoading(false);
        }, 500);

      } catch (err) {
        console.error("Gagal mengambil dokumentasi:", err);
        setError("Gagal mengambil data dokumentasi.");
        setLoading(false);
      }
    };

    fetchDokumentasi();
  }, []);

  const handleNavigate = (tujuan) => {
    navigate(tujuan);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-raleway">
      <style>{fontStyle}</style>
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6 flex flex-col items-center justify-center gap-10">
          <h1 className="text-3xl font-semibold text-gray-700">
            Dokumentasi Penyaluran
          </h1>

          {/* Kondisi Loading / Error */}
          {loading ? (
            <p className="text-gray-500">Memuat dokumentasi...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : dokumenList.length === 0 ? (
            <p className="text-gray-500">Belum ada dokumentasi tersedia.</p>
          ) : (
            <p className="text-gray-600 text-sm">
              Tersedia {dokumenList.length} dokumentasi.
            </p>
          )}

          <p className="text-md text-gray-600 text-center max-w-xl">
            Klik salah satu untuk melihat dokumentasi. <br />
            <strong>Dokumentasi Khusus</strong> berisi penyaluran dana kepada anak-anak dengan kebutuhan{" "}
            <strong>urgensi</strong>. <br />
            <strong>Dokumentasi Umum</strong> mencakup seluruh dokumentasi penyaluran secara{" "}
            <strong>menyeluruh</strong>.
          </p>

          <div className="flex flex-col md:flex-row gap-8 mt-6">
            <button
              onClick={() => handleNavigate("/admin/dokumentasi/umum")}
              className="relative w-72 h-32 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700 text-white rounded-2xl text-2xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300 group"
            >
              <span className="relative z-10">Dokumentasi Donasi Umum</span>
              <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition duration-300"></div>
            </button>

            <button
              onClick={() => handleNavigate("/admin/dokumentasi/khusus")}
              className="relative w-72 h-32 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700 text-white rounded-2xl text-2xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300 group"
            >
              <span className="relative z-10">Dokumentasi Khusus</span>
              <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dokumentasi;
