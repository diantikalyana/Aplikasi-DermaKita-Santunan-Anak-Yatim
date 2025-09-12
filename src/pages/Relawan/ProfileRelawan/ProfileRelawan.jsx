import React, { useState } from "react";
import Navbar from "../../../components/NavbarRelawan";
import Sidebar from "../../../components/SidebarRelawan";
import defaultAvatar from "../../../images/default-avatar.png"; // avatar default

// ✅ Inject font Raleway langsung di file
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

const ProfileRelawan = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    status: "",
    avatar: defaultAvatar,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        avatar: URL.createObjectURL(file), // langsung render preview
      });
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-raleway">
      {/* ✅ Inject style font */}
      <style>{fontStyle}</style>

      {/* Sidebar */}
      <Sidebar />

      {/* Konten utama */}
      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="flex-grow flex items-center justify-center p-6">
          {/* Box utama */}
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl p-10 flex flex-col items-center">
            {/* Avatar */}
            <div className="mb-8 flex flex-col items-center">
              <img
                src={formData.avatar}
                alt="Avatar"
                className="w-28 h-28 rounded-full object-cover border-4 border-purple-700"
              />
              <label
                htmlFor="avatarUpload"
                className="mt-3 text-sm text-purple-700 cursor-pointer hover:underline"
              >
                Ganti Foto
              </label>
              <input
                id="avatarUpload"
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
            </div>

            {/* Form */}
            <div className="space-y-5 w-full">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Nama Pengguna"
                className="w-full px-4 py-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Kata Sandi"
                className="w-full px-4 py-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="text"
                name="status"
                value={formData.status}
                onChange={handleChange}
                placeholder="Status"
                className="w-full px-4 py-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileRelawan;
