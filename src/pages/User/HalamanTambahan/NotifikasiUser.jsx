// Notifikasi.jsx
import React from "react";
import Sidebar from "../../../components/SidebarUser"; // ganti path sesuai struktur projectmu
import Navbar from "../../../components/NavbarUser";   // ganti path sesuai struktur projectmu

function Notifikasi() {
  const dataNotif = [
    {
      id: 1,
      judul: "Donasimu Telah Tersalurkan",
      deskripsi:
        "Terima kasih atas kebaikanmu. Donasi sebesar Rp50.000 telah tersalurkan kepada anak-anak yatim melalui program Derma Umum. Semoga jadi amal jariyah, ya!",
    },
    {
      id: 2,
      judul: "Bantuanmu Sangat Dibutuhkan",
      deskripsi:
        "Ada pengajuan bantuan dengan status URGENT yang sedang menunggu donasi. Bantu sekarang dan jadi bagian dari kebaikan darurat ini.",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar dari dashboard-mu */}
      <Sidebar />

      {/* Konten utama */}
      <div className="flex-1 flex flex-col">
        {/* Navbar dari dashboard-mu */}
        <Navbar title="Notifikasi" />

        {/* Isi halaman */}
        <div className="p-8">
          <div className="space-y-4">
            {dataNotif.map((notif) => (
              <div
                key={notif.id}
                className="bg-purple-100 p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h2 className="font-semibold text-purple-800">
                  {notif.judul}
                </h2>
                <p className="text-gray-700 text-sm">{notif.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifikasi;
