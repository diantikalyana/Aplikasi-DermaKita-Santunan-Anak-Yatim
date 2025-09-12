import React, { useState } from "react";
import Sidebar from "../../../components/SidebarUser";
import Navbar from "../../../components/NavbarUser";
import DonasiIcon from "../../../images/Sharing.png"; // sesuaikan path

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

function RiwayatPage() {
  const [filter, setFilter] = useState("bulan-ini");
  const [showDropdown, setShowDropdown] = useState(false);

  const data = [
    { jenis: "Donasi Umum", nominal: 500000, tanggal: "2025-08-02", bulan: "bulan-lalu" },
    { jenis: "Donasi Umum", nominal: 100000, tanggal: "2025-08-01", bulan: "bulan-lalu" },
    { jenis: "Donasi Urgensi", nominal: 900000, tanggal: "2025-09-02", bulan: "bulan-ini" },
    { jenis: "Donasi Urgensi", nominal: 300000, tanggal: "2025-09-02", bulan: "bulan-ini" },
  ];

  const filterOptions = [
    { value: "bulan-ini", label: "Bulan Ini" },
    { value: "bulan-lalu", label: "Bulan Lalu" },
    { value: "semua", label: "Semua" }
  ];

  const filteredData = data.filter(item => {
    if (filter === "semua") return true;
    return item.bulan === filter;
  });

  const formatRupiah = (angka) =>
    angka.toLocaleString("id-ID", { style: "currency", currency: "IDR" });

  const formatTanggal = (tgl) =>
    new Date(tgl).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

  return (
    <div className="flex h-screen bg-gray-50 font-raleway">
      <style>{fontStyle}</style>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto">
        <Navbar title="Riwayat Transaksi" />

        <div className="p-6 sm:p-8">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Riwayat Transaksi Terakhir
            </h2>
            <hr className="border-gray-300 mb-6" />

            {/* Filter Dropdown */}
            <div className="relative mb-4">
              <button
                className="text-sm text-gray-600 font-medium flex items-center"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {filterOptions.find(opt => opt.value === filter)?.label}
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${showDropdown ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {showDropdown && (
                <div className="absolute z-10 mt-1 w-32 bg-white shadow-lg rounded-md py-1">
                  {filterOptions.map((option) => (
                    <button
                      key={option.value}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setFilter(option.value);
                        setShowDropdown(false);
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Transaksi List */}
            <div className="space-y-4">
              {filteredData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-gray-100 p-4 rounded-xl hover:bg-gray-200 transition"
                >
                  <img src={DonasiIcon} alt="Donasi Icon" className="w-22 h-auto" />
                  <div>
                    <p className="text-xl font-regular">
                      {item.jenis} sebesar {formatRupiah(item.nominal)}
                    </p>
                    <p className="text-xs text-gray-500">
                      Donasi pada {formatTanggal(item.tanggal)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RiwayatPage;
