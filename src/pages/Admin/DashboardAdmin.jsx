import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
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
    // === sementara pakai dummy data ===
    const dummyDashboard = {
      jumlah_anak: 42,
      total_donasi: 12500000,
      jumlah_penyalur: 15,
    };

    setJumlahAnak(dummyDashboard.jumlah_anak);
    setTotalDonasi(dummyDashboard.total_donasi);
    setPenyalurAktif(dummyDashboard.jumlah_penyalur);

    // === kalau BE sudah siap, balikin ke sini ===
    /*
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("jwt_token");
        if (!token) {
          navigate("/login");
          return;
        }

        const res = await api.get("/dashboard");
        setJumlahAnak(res.data.jumlah_anak || 0);
        setTotalDonasi(res.data.total_donasi || 0);
        setPenyalurAktif(res.data.jumlah_penyalur || 0);
      } catch (error) {
        console.error("Gagal memuat data dashboard:", error.response?.data || error.message);
      }
    };

    fetchDashboardData();
    */
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
            <Link to="/admin/data-anak-yatim">
              <div className="bg-[#493953] text-white p-6 rounded-xl shadow hover:scale-105 active:scale-95 transition-transform">
                <p className="font-semibold text-sm text-gray-200">Jumlah Anak</p>
                <h2 className="text-3xl font-bold mt-2">{jumlahAnak}</h2>
              </div>
            </Link>

            <Link to="/admin/donasi">
              <div className="bg-[#493953] text-white p-6 rounded-xl shadow hover:scale-105 active:scale-95 transition-transform">
                <p className="font-semibold text-sm text-gray-200">Donasi Terkumpul</p>
                <h2 className="text-3xl font-bold mt-2">
                  {totalDonasi.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
                </h2>
              </div>
            </Link>

            <Link to="/admin/donasi">
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
