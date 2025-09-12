import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png";
import logotext from "../../../assets/LogoText.png";

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

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const params = new URLSearchParams(location.search);
  const redirect = params.get("redirect") || "dashboard";

  const dummyUsers = [
    { email: "admin@example.com",
       username: "admin",
        password: "123456", 
        role: "admin", 
        token: "dummy-token-admin" },

    {  email: "user@example.com",
       username: "user", 
       password: "123456",
       role: "user",
       token: "dummy-token-user" },

    {  email: "relawan@example.com",
       username: "relawan",
       password: "123456",
       role: "relawan", 
       token: "dummy-token-relawan" },
  ];

  const handleLogin = () => {
    const foundUser = dummyUsers.find(
      (u) => u.email === email && u.username === username && u.password === password
    );

    if (foundUser) {
      localStorage.setItem("token", foundUser.token);
      localStorage.setItem("role", foundUser.role);
      alert(`Login berhasil sebagai ${foundUser.role}!`);

      if (foundUser.role === "admin") navigate("/admin/dashboard");
      else if (foundUser.role === "user") navigate("/user/dashboard");
      else if (foundUser.role === "relawan") navigate("/relawan/dashboard");
      else navigate("/dashboard");
    } else {
      alert("Login gagal: Email/Username/Password salah");
    }
  };

  return (
    <div className="h-screen w-full font-raleway bg-gradient-to-b from-[#ba9cda] to-[#5A4B6B] flex">
      <style>{fontStyle}</style>

      {/* BOX PUTIH BESAR */}
      <div className="h-full w-[45%] bg-white ml-10 flex items-center justify-center relative shadow-lg">
        {/* Tombol Beranda */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-6 left-6 text-sm text-gray-600 hover:text-purple-700"
        >
          &lt;&lt; Beranda
        </button>

       {/* CARD LOGIN (di atas box putih besar) */}
<div
  className="bg-white p-8 rounded-xl w-[300px]"
  style={{
    boxShadow: "8px 8px 16px rgba(0,0,0,0.2)" // bayangan kiri doang
  }}
>
  <h2 className="text-[#897DFF] text-3xl font-regular mb-1">Hi Again!</h2>
  <p className="text-gray-600 mb-5 text-sm">Welcome back!</p>

  <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full border border-gray-300 rounded-full px-4 py-3 mb-4 outline-purple-300 focus:border-purple-400"
  />
  <input
    type="text"
    placeholder="Username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    className="w-full border border-gray-300 rounded-full px-4 py-3 mb-4 outline-purple-300 focus:border-purple-400"
  />
  <input
    type="password"
    placeholder="Kata Sandi"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full border border-gray-300 rounded-full px-4 py-3 mb-6 outline-purple-300 focus:border-purple-400"
  />

  <p
    onClick={() => navigate("/user/autentifikasi/signup")}
    className="text-xs italic text-[#0084ff] mb-6 text-center cursor-pointer hover:underline"
  >
    Belum punya akun? Daftar
  </p>

  <button
    onClick={handleLogin}
    className="w-full py-3 rounded-3xl text-white font-semibold bg-[#5A4B6B] hover:bg-[#4a3a57] transition"
  >
    Login
  </button>
</div>

      </div>

     {/* KANAN - Branding */}
<div className="flex-1 flex flex-col justify-center items-center text-white text-center">
  {/* Lingkaran untuk logo */}
  <div className="w-36 h-36 rounded-full mb-6 bg-[#D9D9D9] flex items-center justify-center shadow-lg">
    <img
      src={logo}
      alt="Logo"
      className="w-34 h-34 object-contain"
    />
  </div>

  {/* Teks logo */}
  <img
    src={logotext}
    alt="DermaKita"
    className="h-26 object-contain mb-4"
  />

  {/* Quote */}
  <p className="text-2xl font-semibold">
    "Berbagi takkan membuatmu kurang."
  </p>
</div>
        </div>
  );
}

export default LoginPage;
