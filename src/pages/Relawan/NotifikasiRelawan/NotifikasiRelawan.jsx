import React, { useEffect, useState } from "react";
import Navbar from "../../../components/NavbarRelawan";
import Sidebar from "../../../components/SidebarRelawan";

// Import icon gambar manual
import successIcon from "../../../images/success-icon.png";
import warningIcon from "../../../images/warning-icon.png";

// ✅ Inject font Raleway langsung
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

const dummyNotifikasi = [
  {
    id: 1,
    type: "warning",
    pesan: "Pengajuan baru data anak yatim dari Fulan",
  },
  {
    id: 2,
    type: "success",
    pesan: "Donasi Rp200.000 dari Donatur B diterima",
  },
];

const NotifikasiRelawan = () => {
  const [notifList, setNotifList] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifList(dummyNotifikasi);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen font-raleway bg-gray-100">
      {/* ✅ Inject font */}
      <style>{fontStyle}</style>

      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          {notifList.length === 0 ? (
            <p className="text-gray-500 italic">Memuat notifikasi...</p>
          ) : (
            <ul className="space-y-3">
              {notifList.map((notif) => (
                <li
                  key={notif.id}
                  className="bg-white rounded-md shadow-sm p-3 flex items-start gap-3"
                >
                  {/* Icon sesuai type (pakai gambar) */}
                  <img
                    src={notif.type === "success" ? successIcon : warningIcon}
                    alt={notif.type}
                    className="w-8 h-8 mt-1"
                  />

                  {/* Isi notifikasi */}
                  <div className="flex-1">
                    <p className="text-gray-800 text-sm">{notif.pesan}</p>
                    <button className="text-sm text-gray-400 italic hover:underline">
                      Lihat detail
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotifikasiRelawan;
