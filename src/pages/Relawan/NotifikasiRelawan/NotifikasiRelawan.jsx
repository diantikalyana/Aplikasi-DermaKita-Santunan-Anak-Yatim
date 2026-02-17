import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/NavbarRelawan";
import Sidebar from "../../../components/SidebarRelawan";
import { Check, Info } from "lucide-react"; // 🎨 ikon simpel dari lucide-react

// ✅ Font Raleway
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

// ✅ Data notifikasi
const dummyNotifikasi = [
  {
    id: 1,
    type: "success",
    pesan: "Donasi Rp500.000 baru saja diterima dari Donatur A",
    redirectTo: "/relawan/laporan",
  },
  {
    id: 2,
    type: "info",
    pesan: "Artikel baru: 'Kegiatan Bakti Sosial Bersama Anak Yatim' telah diposting",
    redirectTo: "/relawan/artikel",
  },
  {
    id: 3,
    type: "info-yellow", // 🔸 tipe info tapi warna kuning
    pesan: "Data anak yatim baru telah diperbarui oleh admin",
    redirectTo: "/relawan/data-anak-yatim",
  },
];

const NotifikasiRelawan = () => {
  const [notifList, setNotifList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifList(dummyNotifikasi);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClickNotif = (notif) => {
    setNotifList((prev) =>
      prev.map((n) => (n.id === notif.id ? { ...n, terbaca: true } : n))
    );
    navigate(notif.redirectTo);
  };

  // ✅ Komponen Icon solid bulat
  const getIcon = (type) => {
    const baseStyle =
      "w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0";

    switch (type) {
      case "success":
        return (
          <div className={`${baseStyle} bg-green-500`}>
            <Check size={18} />
          </div>
        );
      case "info-yellow":
        return (
          <div className={`${baseStyle} bg-yellow-500`}>
            <Info size={18} />
          </div>
        );
      default:
        return (
          <div className={`${baseStyle} bg-blue-500`}>
            <Info size={18} />
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen font-raleway bg-gray-100">
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
                  onClick={() => handleClickNotif(notif)}
                  className={`bg-white rounded-md shadow-sm p-3 flex items-start gap-3 cursor-pointer transition
                    border-l-4 ${
                      notif.type === "success"
                        ? "border-green-400 hover:bg-green-50"
                        : notif.type === "info-yellow"
                        ? "border-yellow-400 hover:bg-yellow-50"
                        : "border-blue-400 hover:bg-blue-50"
                    } ${notif.terbaca ? "opacity-60" : ""}`}
                >
                  {getIcon(notif.type)}
                  <p className="text-gray-800 text-sm leading-snug">{notif.pesan}</p>
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
