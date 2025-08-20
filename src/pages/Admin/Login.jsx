import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/logo.png";
import anak from "../../assets/anak.png";

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
  .font-raleway { font-family: 'Raleway', sans-serif; }
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setErrorMsg("");
    setLoading(true);

    try {
      const res = await axios.post("http://192.168.103.100:8000/api/login", {
        username,
        email,
        password,
      });

      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", res.data.role);

        if (res.data.role === "admin") navigate("/admin/dashboard");
        else if (res.data.role === "relawan") navigate("/relawan/dashboard");
        else navigate("/dashboard");
      } else {
        setErrorMsg(res.data?.message || "Login gagal.");
      }
    } catch (err) {
      setErrorMsg(err.response?.data?.message || "Terjadi kesalahan saat login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 to-purple-600">
      <style>{fontStyle}</style>
      <div className="flex w-full max-w-5xl bg-transparent p-6 gap-10 font-raleway">
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-center w-full max-w-md">
          <div className="flex flex-col items-center mb-6">
            <img src={logo} alt="Logo" className="h-24 w-24 rounded-full" />
            <h1 className="text-3xl font-bold text-[#493953] mt-2">DermaKita</h1>
          </div>

          <input
            type="text"
            placeholder="Nama Pengguna"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            disabled={loading}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            disabled={loading}
          />

          <input
            type="password"
            placeholder="Kata Sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            disabled={loading}
          />

          {errorMsg && <p className="text-red-600 text-center mb-4">{errorMsg}</p>}

          <button
            onClick={handleLogin}
            className="bg-[#493953] text-white py-2 rounded-md hover:bg-[#3b2f45] transition"
            disabled={loading}
          >
            {loading ? "Memproses..." : "Masuk Sekarang"}
          </button>

          <p className="text-xs text-center mt-4 text-gray-500">
            Akses dimulai di sini, kebaikan tersebar dari sini. Terima kasih telah menjadi bagian dari perubahan.
          </p>
        </div>

        <div className="hidden md:flex items-center justify-center w-full">
          <img src={anak} alt="anak" className="max-h-[1000px] rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Login;
