import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import axios from "axios";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

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
  const [jumlahAnak, setJumlahAnak] = useState(0);
  const [totalDonasi, setTotalDonasi] = useState(0);
  const [penyalurAktif, setPenyalurAktif] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        const res = await axios.get("http://192.168.102.100:8000/api/dashboard", {
          headers: { Authorization: `Bearer ${token}` }
        });

        setJumlahAnak(res.data.jumlah_anak);
        setTotalDonasi(res.data.total_donasi);
        setPenyalurAktif(res.data.jumlah_penyalur);
      } catch (error) {
        console.error("Gagal memuat data dashboard:", error.response?.data || error.message);
        if (error.response?.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      }
    };

    fetchDashboardData();
  }, [navigate]);

  return (
    <div className="flex min-h-screen font-raleway">
      <style>{fontStyle}</style>
      <Sidebar />
      <div className="flex-1 flex flex-col bg-white">
        <Navbar />
        <main className="p-6 bg-gray-100 flex-1">
          <p className="italic text-sm mb-4 text-gray-700">
            Menyalurkan kebaikan bukan hanya tugas, tapi panggilan hati. Selamat datang, Admin!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/data-anak">
              <div className="bg-[#493953] text-white p-6 rounded-xl shadow hover:scale-105 active:scale-95 transition-transform">
                <p className="font-semibold text-sm text-gray-200">Jumlah Anak</p>
                <h2 className="text-3xl font-bold mt-2">{jumlahAnak}</h2>
              </div>
            </Link>

            <Link to="/laporan-donasi">
              <div className="bg-[#493953] text-white p-6 rounded-xl shadow hover:scale-105 active:scale-95 transition-transform">
                <p className="font-semibold text-sm text-gray-200">Donasi Terkumpul</p>
                <h2 className="text-3xl font-bold mt-2">
                  {totalDonasi.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
                </h2>
              </div>
            </Link>

            <Link to="/data-penyalur">
              <div className="bg-[#493953] text-white p-6 rounded-xl shadow hover:scale-105 active:scale-95 transition-transform">
                <p className="font-semibold text-sm text-gray-200">Donatur Aktif</p>
                <h2 className="text-3xl font-bold mt-2">{penyalurAktif}</h2>
              </div>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
