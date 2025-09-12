import React, { useState, useRef } from "react";
import Sidebar from "../../../components/SidebarUser";
import Navbar from "../../../components/NavbarUser";
import defaultAvatar from "../../../images/default-avatar.png"; // siapkan gambar default

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

function KelolaAkun() {
  const [avatar, setAvatar] = useState(defaultAvatar);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };

  const handleSave = () => {
    alert("Perubahan berhasil disimpan! 🚀");
    // nanti bisa diganti API call ke backend
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-raleway">
      {/* Inject font style */}
      <style>{fontStyle}</style>

      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Navbar di atas */}
        <Navbar title="Hai, pengguna!" />
        {/* Konten utama */}
        <div className="flex-1 p-10">
          <div className="bg-[#d9d9d9]/49 rounded-3xl shadow-lg max-w-2xl mx-auto px-10 py-10">
            <div className="flex flex-col items-center mb-8">
              {/* Avatar */}
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
              <h2 className="text-lg font-semibold">Nama User</h2>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="bg-[#b091d1]/11 p-3 rounded-xl w-full focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-[#b091d1]/11 p-3 rounded-xl w-full focus:outline-none"
              />
              <input
                type="password"
                placeholder="Kata Sandi"
                className="bg-[#b091d1]/11 p-3 rounded-xl w-full focus:outline-none"
              />
            </form>

            {/* Tombol simpan */}
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
