import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/SidebarUser";
import Navbar from "../../../components/NavbarUser";

// ✅ font Raleway
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

function Notifikasi() {
  const navigate = useNavigate();

  // ✅ Data notifikasi + rute tujuan
  const dataNotif = [
    {
      id: 1,
      judul: "Donasimu Telah Tersalurkan",
      deskripsi:
        "Terima kasih atas kebaikanmu. Donasi sebesar Rp50.000 telah tersalurkan kepada anak-anak yatim melalui program Derma Umum. Semoga jadi amal jariyah, ya!",
      link: "/user/menuutama/riwayatpage", // 🔗 tujuan halaman
    },
    {
      id: 2,
      judul: "Bantuanmu Sangat Dibutuhkan",
      deskripsi:
        "Ada pengajuan bantuan dengan status URGENT yang sedang menunggu donasi. Bantu sekarang dan jadi bagian dari kebaikan darurat ini.",
      link: "/user/artikel/beritaurgensi", // 🔗 menuju halaman donasi
    },
    {
      id: 3,
      judul: "Artikel Baru Telah Terbit",
      deskripsi:
        "Yuk baca artikel terbaru tentang kisah inspiratif anak-anak yatim dan bagaimana bantuanmu membawa perubahan besar!",
      link: "/user/artikel/beritaurgensi", // 🔗 menuju halaman artikel
    },
  ];

  // ✅ handle klik notifikasi
  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <>
      <style>{fontStyle}</style>
      <div className="flex min-h-screen bg-gray-100 font-raleway">
        {/* Sidebar */}
        <Sidebar />

        {/* Konten utama */}
        <div className="flex-1 flex flex-col">
          <Navbar title="Notifikasi" />

          {/* Isi halaman */}
          <div className="p-8">
            <div className="space-y-4">
              {dataNotif.map((notif) => (
                <div
                  key={notif.id}
                  onClick={() => handleClick(notif.link)}
                  className="bg-purple-100 p-4 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer hover:bg-purple-200 active:scale-[0.98]"
                >
                  <h2 className="font-semibold text-purple-800 text-lg">
                    {notif.judul}
                  </h2>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {notif.deskripsi}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notifikasi;
