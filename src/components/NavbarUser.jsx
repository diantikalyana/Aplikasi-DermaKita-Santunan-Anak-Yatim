import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, AlertTriangle } from "lucide-react";
import notifIcon from "../assets/notif-icon.svg";
import userIcon from "../assets/user-icon.svg";

const NavbarUser = ({ title }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [notifClicked, setNotifClicked] = useState(false);
  const navigate = useNavigate();

  // Data dummy pencarian
  const data = [
    { name: "Donasi Anak Yatim", path: "/user/menuutama/donasipage" },
    { name: "Bantuan Anak Yatim", path: "/user/artikel/beritaurgensi" },
    { name: "Donasi Urgensi", path: "/user/artikel/beritaurgensi" },
    { name: "Artikel Anak Yatim", path: "/user/artikel/beritaurgensi" },
    { name: "Bukti Donasi", path: "/user/penyaluran/buktitersalurkan" },
    { name: "Riwayat", path: "/user/menuutama/riwayatpage" },
  ];

  // Update rekomendasi saat user mengetik
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredSuggestions([]);
      setErrorMessage("");
      return;
    }

    const matches = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (matches.length > 0) {
      setFilteredSuggestions(matches);
      setErrorMessage("");
    } else {
      setFilteredSuggestions([]);
      setErrorMessage("Kata kunci tidak ditemukan. Coba gunakan istilah lain.");
    }
  }, [searchTerm]);

  const handleSearch = () => {
    if (searchTerm.trim() === "") return;

    const found = data.find((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (found) {
      navigate(found.path);
      setSearchTerm("");
      setFilteredSuggestions([]);
      setErrorMessage("");
    } else {
      setErrorMessage("Kata kunci tidak cocok dengan data yang tersedia.");
    }
  };

  const handleSuggestionClick = (path) => {
    navigate(path);
    setSearchTerm("");
    setFilteredSuggestions([]);
  };

  const handleNotifClick = () => {
    setNotifClicked(true);
    navigate("/user/halamantambahan/notifikasiuser");
    setTimeout(() => setNotifClicked(false), 500);
  };

  const handleProfileClick = () => {
    navigate("/profil");
  };

  return (
    <div className="bg-white shadow-md rounded-t-lg relative">
      {/* Navbar utama */}
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#a399c9] to-[#5B4B99] bg-clip-text text-transparent">
          {title || "Hai, pengguna!"}
        </h1>

        <div className="flex items-center space-x-4 relative">
          {/* Search */}
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Telusuri donasi, artikel..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className={`pl-10 pr-4 py-2 rounded-md w-full bg-[#EAE6F3] text-gray-700 placeholder-gray-500 focus:outline-none ${
                errorMessage ? "border border-red-400" : ""
              }`}
            />
            <Search
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={handleSearch}
            />

            {/* Rekomendasi dropdown */}
            {filteredSuggestions.length > 0 && (
              <ul className="absolute left-0 right-0 bg-white border border-gray-200 rounded-lg mt-2 shadow-lg z-20 overflow-hidden">
                {filteredSuggestions.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(item.path)}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-[#EAE6F3] cursor-pointer transition"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}

            {/* Diagnosa / Error message */}
            {errorMessage && (
              <div className="absolute mt-2 flex items-center gap-2 text-yellow-600 bg-yellow-100 border border-yellow-300 rounded-lg px-3 py-2 text-sm z-10">
                <AlertTriangle size={16} />
                {errorMessage}
              </div>
            )}
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
