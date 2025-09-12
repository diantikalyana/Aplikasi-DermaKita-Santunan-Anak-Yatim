import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";

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

export default function Detailanak() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Data anak dummy
  const dataAnakYatim = [
    { id: "1", nama: "Ahmad Fauzi", umur: 12, alamat: "Jl. Mawar No. 10", sekolah: "SDN 1 Kajoran" },
    { id: "2", nama: "Budi Santoso", umur: 14, alamat: "Jl. Melati No. 15", sekolah: "SMPN 2 Kajoran" },
    { id: "3", nama: "Citra Dewi", umur: 13, alamat: "Jl. Kenanga No. 7", sekolah: "SMPN 1 Kajoran" },
  ];

  const anak = dataAnakYatim.find((item) => item.id === id);

  // Data grafik dummy
  const dataChart = [
    { bulan: "Jan", donasi: 5000000 },
    { bulan: "Feb", donasi: 7000000 },
    { bulan: "Mar", donasi: 9000000 },
    { bulan: "Apr", donasi: 11000000 },
    { bulan: "Mei", donasi: 8500000 },
    { bulan: "Jun", donasi: 10000000 },
    { bulan: "Jul", donasi: 9500000 },
    { bulan: "Agt", donasi: 12000000 },
    { bulan: "Sep", donasi: 11000000 },
    { bulan: "Okt", donasi: 8000000 },
    { bulan: "Nov", donasi: 6000000 },
    { bulan: "Des", donasi: 13000000 },
  ];

  return (
    <div className="flex min-h-screen font-raleway bg-gray-100">
      <style>{fontStyle}</style>
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-8 flex-1">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-8">
  {/* Card 1 */}
  <div className="bg-[#5a4b6b] text-white p-4 w-[250px] h-[120px] rounded-lg shadow flex flex-col justify-center items-center">
    <h3 className="text-xl font-medium">Total Donasi Masuk</h3>
    <p className="text-3xl font-bold">Rp10.000.000</p>
  </div>

  {/* Card 2 */}
  <div className="bg-[#5a4b6b] text-white w-[250px] h-[120px] rounded-lg shadow flex flex-col justify-center items-center">
    <h3 className="text-xl font-medium">Jumlah Anak Terbantu</h3>
    <p className="text-3xl font-bold">120</p>
  </div>

  {/* Card 3 */}
  <div className="bg-[#5a4b6b] text-white p-4 w-[250px] h-[120px] rounded-lg shadow flex flex-col justify-center items-center">
    <h3 className="text-xl font-medium">Jumlah Donatur</h3>
    <p className="text-3xl font-bold">50</p>
  </div>
</div>




        {/* Grafik Per Bulan */}
<div className="relative z-0 mb-10">
  <ResponsiveContainer width="90%" height={300}>
    <BarChart data={dataChart} margin={{ top: 20, right: 30, left: 50, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bulan" />
      <YAxis tickFormatter={(value) => `Rp${(value / 1000000).toFixed(1)}jt`} />
      <Tooltip formatter={(value) => `Rp${value.toLocaleString()}`} />
      <Bar dataKey="donasi" fill="#5a4b6b" barSize={85} />
    </BarChart>
  </ResponsiveContainer>
</div>

  {/* Tombol Lanjut */}
          <div className="flex justify-right">
            <button
              onClick={() => navigate("/admin/laporan/datapenyaluran")}
              className="inline-flex items-center px-6 py-2 bg-[#5a4b6b] hover:bg-[#47366e] text-white rounded-lg transition"
            >
              Lihat Rekap Penyaluran →
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
