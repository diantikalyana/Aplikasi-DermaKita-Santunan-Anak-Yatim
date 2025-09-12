import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import notifIcon from "../assets/notif-icon.svg"; // path ikon notif
import userIcon from "../assets/user-icon.svg";   // path ikon user

const NavbarUser = ({ title }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [notifClicked, setNotifClicked] = useState(false);
  const navigate = useNavigate();

  // Data dummy dengan path
  const data = [
    { name: "Donasi Anak Yatim", path: "/donasi" },
    { name: "Bantuan Bencana Alam", path: "/donasi/bencana" },
    { name: "Donasi Pendidikan", path: "/donasi/pendidikan" },
    { name: "Donasi Kesehatan", path: "/donasi/kesehatan" },
    { name: "Penggalangan Dana Masjid", path: "/donasi/masjid" },
  ];

  const handleSearch = () => {
    if (searchTerm.trim() === "") return;

    const found = data.find((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (found) {
      navigate(found.path); // langsung redirect
      setSearchTerm("");
    } else {
      alert(`Tidak ada hasil untuk "${searchTerm}"`);
    }
  };

 const handleNotifClick = () => {
  setNotifClicked(true);
  navigate("/user/halamantambahan/notifikasiuser"); // redirect ke halaman notifikasi
  setTimeout(() => setNotifClicked(false), 500); // animasi klik
};

  

  const handleProfileClick = () => {
    navigate("/profil"); // arahkan ke halaman profil
  };

  return (
    <div className="bg-white shadow-md rounded-t-lg">
      {/* Navbar utama */}
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#a399c9] to-[#5B4B99] bg-clip-text text-transparent">
  {title || "Hai, pengguna!"}
</h1>


        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Telusuri..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="pl-10 pr-4 py-2 rounded-md bg-[#EAE6F3] text-gray-700 placeholder-gray-500 focus:outline-none"
            />
            <Search
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={handleSearch}
            />
          </div>

          {/* Notifikasi & Profil */}
          <div className="flex items-center gap-4">
            <img
              src={notifIcon}
              alt="Notifikasi"
              onClick={handleNotifClick}
              className={`w-10 h-10 cursor-pointer transform transition-transform duration-300 ${
                notifClicked ? "scale-110" : ""
              }`}
            />

            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleProfileClick}
            >
              <img
                src={userIcon}
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarUser;
