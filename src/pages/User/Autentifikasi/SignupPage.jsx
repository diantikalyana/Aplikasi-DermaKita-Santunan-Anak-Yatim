import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import logotext from "../../../assets/LogoTextglas.png";

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
    font-family: 'Poppins';
    src: url('/fonts/Poppins-Regular.woff2') format('woff2');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Raleway';
    src: url('/fonts/Raleway-Bold.woff2') format('woff2');
    font-weight: 700;
  }
  .font-raleway {
    font-family: 'Raleway', sans-serif;
  }
  .font-poppins {
    font-family: 'Poppins', sans-serif;
  }
  .font-righteous {
    font-family: 'Righteous', cursive;
  }
`;

function SignupPage() {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (!nama || !username || !email || !password) {
      alert("Harap isi semua kolom terlebih dahulu!");
      return;
    }
    if (!email.includes("@")) {
      alert("Format email tidak valid!");
      return;
    }
    if (password.length < 6) {
      alert("Password minimal 6 karakter!");
      return;
    }
    navigate("/dashboard");
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="h-screen font-raleway">
      <style>{fontStyle}</style>

      <div className="flex items-center justify-center h-full bg-gradient-to-b from-[#B091D1] to-[#5A4B6B] relative">
        {/* Tombol kembali ke Home */} 
        <button
          onClick={handleHome}
          className="absolute top-6 left-6 flex items-center gap-2 text-white text-sm font-regular hover:text-purple-200 transition"
        >
          <span>&lt;&lt;</span>
          <span>Beranda</span>
        </button>

        <div className="bg-white rounded-3xl shadow-lg p-4 w-[410px] text-center">
          {/* Logo + LogoText sejajar */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="bg-[#D9D9D9] rounded-full flex items-center justify-center p-2">
              <img
                src={logo}
                alt="Logo"
                className="w-16 h-16 object-contain"
              />
            </div>
            <img
              src={logotext}
              alt="DermaKita"
              className="h-30 object-contain self-center"
            />
          </div>

          {/* Form */}
          <form onSubmit={handleSignup} className="text-left">
            <div className="mb-4">
              <label className="block text-sm font-regular mb-1 text-[#977DFF] font-poppins">
                NAMA LENGKAP
              </label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm outline-purple-300 font-poppins"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-regular mb-1 text-[#977DFF] font-poppins">
                USERNAME
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm outline-purple-300 font-poppins"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-regular mb-1 text-[#977DFF] font-poppins">
                EMAIL
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm outline-purple-300 font-poppins"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-regular mb-1 text-[#977DFF] font-poppins">
                PASSWORD
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm outline-purple-300 font-poppins"
              />
            </div>

            <button
              type="submit"
              className="w-28 py-2 mx-auto block rounded-full text-white font-regular bg-[#5A4B6B] hover:bg-[#B091D1] transition"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
