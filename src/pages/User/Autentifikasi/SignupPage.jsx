import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // 👁️ ikon mata dari lucide-react
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

  @keyframes bounceDelay {
    0%, 80%, 100% { transform: scale(0); }
    40% { transform: scale(1); }
  }
`;

function SignupPage() {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();

    if (!nama || !username || !email || !password) {
      setAlertMessage("Harap isi semua kolom terlebih dahulu!");
      setIsSuccess(false);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000);
      return;
    }
    if (!email.includes("@")) {
      setAlertMessage("Format email tidak valid!");
      setIsSuccess(false);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000);
      return;
    }
    if (password.length < 6) {
      setAlertMessage("Password minimal 6 karakter!");
      setIsSuccess(false);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000);
      return;
    }

    // simulasi signup sukses
    setIsSuccess(true);
    setAlertMessage("Selamat, akun kamu telah berhasil dibuat!");
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
      navigate("/user/autentifikasi"); // balik ke login
    }, 2000);
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="h-screen font-raleway relative">
      <style>{fontStyle}</style>

      {/* ALERT POPUP */}
      {showAlert && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-50">
          <div
            className={`${
              isSuccess
                ? "bg-gradient-to-r from-[#a079da] to-[#5A4B6B]"
                : "bg-gradient-to-r from-[#a079da] to-[#7e6699]"
            } text-white rounded-2xl shadow-xl px-10 py-8 text-center w-[350px]`}
          >
            <h2 className="text-2xl font-semibold mb-3 animate-pulse">
              {alertMessage}
            </h2>
            <div className="flex justify-center mt-4 space-x-1">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          </div>
        </div>
      )}

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
          {/* Logo + LogoText */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="bg-[#D9D9D9] rounded-full flex items-center justify-center p-2">
              <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
            </div>
            <img
              src={logotext}
              alt="DermaKita"
              className="h-30 object-contain self-center"
            />
          </div>

          {/* Form */}
          <form onSubmit={handleSignup} className="text-left relative">
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

            <div className="mb-6 relative">
              <label className="block text-sm font-regular mb-1 text-[#977DFF] font-poppins">
                PASSWORD
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm outline-purple-300 font-poppins pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[35px] text-gray-500 hover:text-[#977DFF]"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
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
