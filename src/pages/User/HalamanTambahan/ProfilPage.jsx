import React from "react";
import Sidebar from "../../../components/SidebarUser";
import Navbar from "../../../components/NavbarUser";
import { useNavigate } from "react-router-dom";

function ProfilPage() {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten utama */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar title="Hai, Pengguna!" />

        {/* Isi Halaman */}
        <div className="flex-1 p-10">
          <div className="bg-white rounded-2xl shadow-md p-8 max-w-xl mx-auto">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleClick("/kelola-akun")}
                className="bg-[#5a4b6b] text-white py-4 rounded-xl hover:bg-[#4e3f5e] transition w-full text-base font-semibold"
              >
                Kelola Akun
              </button>

              <button
                onClick={() => handleClick("/faq")}
                className="bg-[#5a4b6b] text-white py-4 rounded-xl hover:bg-[#4e3f5e] transition w-full text-base font-semibold"
              >
                FAQ
              </button>

              <button
                onClick={() => handleClick("/kebijakan-privasi")}
                className="bg-[#5a4b6b] text-white py-4 rounded-xl hover:bg-[#4e3f5e] transition w-full text-base font-semibold"
              >
                Kebijakan Privasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilPage;
