import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../../components/NavbarRelawan";
import Sidebar from "../../../components/SidebarRelawan";
import api from "../../../utils/axios";

const fontStyle = `
  @font-face { font-family: 'Raleway'; src: url('/fonts/Raleway-Regular.woff2') format('woff2'); font-weight: 400; }
  @font-face { font-family: 'Raleway'; src: url('/fonts/Raleway-SemiBold.woff2') format('woff2'); font-weight: 600; }
  @font-face { font-family: 'Raleway'; src: url('/fonts/Raleway-Bold.woff2') format('woff2'); font-weight: 700; }
  .font-raleway { font-family: 'Raleway', sans-serif; }
`;

const DokumentasiRelawan = () => {
  const navigate = useNavigate();
  const { jenis } = useParams(); // "umum" atau "khusus"
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [dokData, setDokData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setErrorMsg("");
      try {
        let endpoint = "/dokumentasi-relawan";
        if (jenis) endpoint = `/dokumentasi-relawan/filter?jenis=${jenis}`;

        const res = await api.get(endpoint);
        setDokData(res.data?.data || []);
      } catch (error) {
        console.error("Gagal memuat data dokumentasi:", error);
        if (error.response?.status === 401) {
          localStorage.clear();
          navigate("/login");
        } else if (error.response?.status === 403) {
          setErrorMsg("Anda tidak memiliki akses ke dokumentasi.");
        } else {
          setErrorMsg("Terjadi kesalahan saat memuat data dokumentasi.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate, jenis]);

  const handleNavigate = (tujuan) => navigate(tujuan);

  const getImageUrl = (filename) =>
    `${process.env.REACT_APP_API_BASE_URL.replace("/api", "")}/uploads/${filename}`;

  return (
    <div className="flex min-h-screen bg-gray-100 font-raleway">
      <style>{fontStyle}</style>
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6 flex flex-col items-center justify-center gap-10">
          <h1 className="text-3xl font-semibold text-gray-700">Dokumentasi Penyaluran</h1>
          {loading && <p>Loading data...</p>}
          {errorMsg && <p className="text-red-500 bg-red-100 p-2 rounded">{errorMsg}</p>}

          {!loading && !errorMsg && (
            <>
              <p className="text-md text-gray-600 text-justify max-w-xl">
                Klik salah satu untuk melihat dokumentasi. <br />
                <strong>Dokumentasi Khusus</strong> berisi penyaluran dana kepada anak-anak dengan kebutuhan <strong>urgensi</strong>. <br />
                <strong>Dokumentasi Umum</strong> mencakup seluruh dokumentasi penyaluran secara <strong>menyeluruh</strong>.
              </p>

              <div className="flex flex-col md:flex-row gap-8 mt-6">
                <button
                  onClick={() => handleNavigate("/relawan/dokumentasirelawan/umum")}
                  className="relative w-72 h-32 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700 text-white rounded-2xl text-2xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300 group"
                >
                  <span className="relative z-10">Dokumentasi Donasi Umum</span>
                  <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition duration-300"></div>
                </button>

                <button
                  onClick={() => handleNavigate("/relawan/dokumentasirelawan/khusus")}
                  className="relative w-72 h-32 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700 text-white rounded-2xl text-2xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300 group"
                >
                  <span className="relative z-10">Dokumentasi Khusus</span>
                  <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition duration-300"></div>
                </button>
              </div>

              <div className="mt-8 w-full max-w-4xl grid gap-6">
                {dokData.length > 0 ? dokData.map(item => (
                  <div key={item.id_dokumentasi} className="p-4 bg-white rounded-xl shadow-md flex flex-col md:flex-row gap-4">
                    {item.upload_foto && (
                      <img
                        src={getImageUrl(item.upload_foto)}
                        alt={item.tempat}
                        className="w-full md:w-48 h-32 object-cover rounded-lg"
                      />
                    )}
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-purple-700">{item.tempat}</h2>
                      <p className="text-gray-600">{item.keterangan}</p>
                      <p className="text-sm text-gray-500 mt-2">
                        📅 {item.tanggal} • <span className="italic">{item.jenis_dokumentasi}</span>
                      </p>
                      {item.nominal && (
                        <p className="text-sm text-gray-700 mt-1">
                          💰 Rp {parseFloat(item.nominal).toLocaleString("id-ID")}
                        </p>
                      )}
                    </div>
                  </div>
                )) : <p className="text-gray-500 italic">Belum ada dokumentasi</p>}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DokumentasiRelawan;
