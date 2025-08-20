// src/pages/Dashboard/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../utils/axios"; 
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

export default function Dashboard() {
  const navigate = useNavigate();
  const [jumlahAnak, setJumlahAnak] = useState(0);
  const [totalDonasi, setTotalDonasi] = useState(0);
  const [jumlahPenyalur, setJumlahPenyalur] = useState(0);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login"); // ✅ kalau belum login langsung ke login
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await api.get("/dashboard-relawan"); // ✅ pakai instance

        setJumlahAnak(res.data.jumlah_anak ?? 0);
        setTotalDonasi(res.data.total_donasi ?? 0);
        setJumlahPenyalur(res.data.jumlah_penyalur ?? 0);
      } catch (error) {
        console.error("Gagal memuat data dashboard:", error);

        if (error.response?.status === 401) {
          setErrorMsg("Sesi login sudah habis, silakan login ulang.");
          localStorage.removeItem("token");
          navigate("/login");
        } else if (error.response?.status === 403) {
          setErrorMsg("Anda tidak memiliki akses ke data dashboard.");
        } else if (error.message === "Network Error") {
          setErrorMsg("Gagal terhubung ke server. Pastikan backend berjalan.");
        } else {
          setErrorMsg("Terjadi kesalahan saat memuat data dashboard.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div className="flex min-h-screen font-raleway">
      <style>{fontStyle}</style>

      <Sidebar />

      <div className="flex-1 flex flex-col bg-white">
        <Navbar />

        <main className="p-6 bg-gray-100 flex-1">
          <p className="italic text-sm mb-4 text-gray-700">
            Menyalurkan kebaikan bukan hanya tugas, tapi panggilan hati. Selamat datang, Relawan!
          </p>

          {loading && <p>Loading data...</p>}
          {errorMsg && (
            <p className="text-red-500 bg-red-100 p-2 rounded mb-4">{errorMsg}</p>
          )}

          {!loading && !errorMsg && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/data-anak-yatim">
                <div className="bg-[#493953] text-white p-6 rounded-xl shadow cursor-pointer transform transition-transform duration-300 hover:scale-105 active:scale-95">
                  <p className="font-semibold text-sm text-gray-200">Jumlah Anak Yatim</p>
                  <h2 className="text-3xl font-bold mt-2">{jumlahAnak}</h2>
                </div>
              </Link>

              <Link to="/Laporan">
                <div className="bg-[#493953] text-white p-6 rounded-xl shadow cursor-pointer transform transition-transform duration-300 hover:scale-105 active:scale-95">
                  <p className="font-semibold text-sm text-gray-200">Donasi Terkumpul</p>
                  <h2 className="text-3xl font-bold mt-2">
                    {totalDonasi.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
                  </h2>
                </div>
              </Link>

              <Link to="/Laporan">
                <div className="bg-[#493953] text-white p-6 rounded-xl shadow cursor-pointer transform transition-transform duration-300 hover:scale-105 active:scale-95">
                  <p className="font-semibold text-sm text-gray-200">Penyalur Aktif</p>
                  <h2 className="text-3xl font-bold mt-2">{jumlahPenyalur}</h2>
                </div>
              </Link>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
