import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/SidebarUser";

// Definisi font Raleway
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

function BuktiPenyaluran() {
  return (
    <div className="flex h-screen font-raleway">
      {/* Inject font style */}
      <style>{fontStyle}</style>
      
      <Sidebar />
      <main className="flex-1 bg-gray-100 px-12 py-10 overflow-y-auto">
        {/* Judul Halaman */}
        <h1 className="text-4xl font-bold text-[#5A4B6B] mb-10">
          Bukti Penyaluran
        </h1>
        {/* Kotak pilihan */}
        <div className="flex justify-center items-center h-[70%]">
          <div className="bg-[#5A4B6B] text-white rounded-2xl px-10 py-8 text-center shadow-lg w-[420px]">
            <p className="text-lg mb-6 leading-relaxed">
              Silakan pilih jenis bukti penyaluran dana yang ingin Anda lihat:
            </p>
            <div className="flex justify-center gap-6">
              <Link to="/user/penyaluran/buktipenyaluranumum">
                <button className="bg-white text-[#5A4B6B] font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition">
                  Umum
                </button>
              </Link>
              <Link to="/user/penyaluran/buktipenyaluranurgensi">
                <button className="bg-white text-[#5A4B6B] font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition">
                  Urgensi
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BuktiPenyaluran;