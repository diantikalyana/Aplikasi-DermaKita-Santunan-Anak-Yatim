import React, { useState, useRef, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import NavbarUser from "../../../components/NavbarUser";
import NavbarAdmin from "../../../components/Navbar";
import NavbarRelawan from "../../../components/NavbarRelawan";
import SidebarUser from "../../../components/SidebarUser";
import SidebarAdmin from "../../../components/Sidebar";
import SidebarRelawan from "../../../components/SidebarRelawan";
import defaultAvatar from "../../../images/default-avatar.png";

// ✅ Definisi font Raleway
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

function KelolaAkun() {
  const [role, setRole] = useState("");
  const [avatar, setAvatar] = useState(defaultAvatar);
  const [showPassword, setShowPassword] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole) setRole(storedRole);
    else setRole("user");
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setAvatar(URL.createObjectURL(file));
  };

  const handleSave = () => {
    alert("Perubahan berhasil disimpan! 🚀");
  };

  // Navbar & Sidebar dinamis
  const renderNavbar = () => {
    if (role === "admin") return <NavbarAdmin title="Hai, Admin!" />;
    if (role === "relawan") return <NavbarRelawan title="Hai, Relawan!" />;
    return <NavbarUser title="Hai, Pengguna!" />;
  };

  const renderSidebar = () => {
    if (role === "admin") return <SidebarAdmin />;
    if (role === "relawan") return <SidebarRelawan />;
    return <SidebarUser />;
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-raleway">
      <style>{fontStyle}</style>

      {renderSidebar()}

      <div className="flex-1 flex flex-col">
        {renderNavbar()}

        <div className="flex-1 p-10">
          <div className="bg-white/90 rounded-3xl shadow-lg max-w-2xl mx-auto px-10 py-10">
            {/* Header Profil */}
            <div className="flex flex-col items-center mb-8">
              <div
                className="w-36 h-36 rounded-full overflow-hidden shadow-md cursor-pointer hover:opacity-80 transition"
                onClick={() => fileInputRef.current.click()}
              >
                <img
                  src={avatar}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 text-sm mt-3 mb-1">
                Klik gambar untuk ganti foto profil
              </p>
              <h2 className="text-lg font-semibold capitalize">
                Akun {role}
              </h2>

              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            {/* Form */}
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="bg-[#b091d1]/10 p-3 rounded-xl w-full focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-[#b091d1]/10 p-3 rounded-xl w-full focus:outline-none"
              />

              {/* Password dengan mata */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Kata Sandi"
                  className="bg-[#b091d1]/10 p-3 rounded-xl w-full focus:outline-none pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#5a4b6b]"
                >
                  {showPassword ? (
                    <EyeOff size={20} strokeWidth={1.8} />
                  ) : (
                    <Eye size={20} strokeWidth={1.8} />
                  )}
                </button>
              </div>
            </form>

            {/* Tombol Simpan */}
            <div className="mt-8">
              <button
                onClick={handleSave}
                className="w-full py-3 bg-[#5a4b6b] text-white rounded-xl font-semibold hover:bg-[#4e3f5e] transition"
              >
                Simpan Perubahan
              </button>
            </div>

            {/* Footer */}
            <p className="text-center text-xs text-gray-500 mt-10">
              © 2025{" "}
              <span className="font-semibold text-[#5a4b6b]">DermaKita.</span>{" "}
              Seluruh hak cipta dilindungi undang-undang.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KelolaAkun;
