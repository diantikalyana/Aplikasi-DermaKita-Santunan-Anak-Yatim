import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import Artikel1 from "../../../assets/Artikel1.png";
import axios from "axios";

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

const Artikel = () => {
  const navigate = useNavigate();
  const [artikelList, setArtikelList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ambil artikel dari API
  useEffect(() => {
    const fetchArtikel = async () => {
      try {
        setLoading(true);
        setError(null);

        const token = localStorage.getItem("token");
        if (!token) {
          setError("Token tidak ditemukan, silakan login ulang.");
          setLoading(false);
          return;
        }

        const res = await axios.get("http://192.168.102.100:8000/api/artikel", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data && res.data.data) {
          setArtikelList(res.data.data);
        } else {
          setArtikelList([]);
        }
      } catch (err) {
        console.error("Gagal mengambil artikel:", err);
        setError("Gagal mengambil data artikel.");
      } finally {
        setLoading(false);
      }
    };

    fetchArtikel();
  }, []);

  return (
    <div className="flex min-h-screen bg-[#f5f5f5] text-[#111827] font-raleway">
      <style>{fontStyle}</style>
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-6 max-w-5xl mx-auto w-full">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-[#493953]">Donasi Urgensi</h1>
            <button
              onClick={() => navigate("/artikel/upload")}
              className="bg-[#493953] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#5f4a66]"
            >
              Upload Artikel
            </button>
          </div>

          {/* Kondisi loading / error / data */}
          {loading ? (
            <p className="text-center text-gray-500 mt-10">Memuat artikel...</p>
          ) : error ? (
            <p className="text-center text-red-500 mt-10">{error}</p>
          ) : artikelList.length > 0 ? (
            <div className="space-y-6">
              {artikelList.map((artikel) => {
                const terkumpul = artikel.terkumpul || 0;
                const target = artikel.target || 1;
                const persentase = Math.min(
                  Math.round((terkumpul / target) * 100),
                  100
                );

                return (
                  <div
                    key={artikel.id}
                    className="bg-white rounded-xl shadow p-4 flex border border-white max-w-3xl mx-auto"
                  >
                    <img
                      src={artikel.foto || Artikel1}
                      alt="Artikel"
                      className="w-32 h-24 object-cover rounded-lg mr-4"
                    />
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 mb-1">
                        Terakhir diubah{" "}
                        {artikel.updated_at
                          ? new Date(artikel.updated_at).toLocaleDateString(
                              "id-ID",
                              {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                              }
                            )
                          : "-"}
                      </p>
                      <h2 className="font-bold text-lg text-[#111827]">
                        {artikel.judul}
                      </h2>
                      <p className="text-sm mt-1 text-gray-700">
                        {artikel.deskripsi}
                      </p>

                      <div className="w-full mt-3 bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className="h-3 rounded-full transition-all duration-500 bg-gradient-to-r from-[#ae9dc2] via-[#b998ec] to-[#c2dfeb]"
                          style={{ width: `${persentase}%` }}
                        ></div>
                      </div>

                      <div className="flex justify-between text-xs mt-1 text-gray-600">
                        <span>
                          Terkumpul: Rp{terkumpul.toLocaleString("id-ID")}
                        </span>
                        <span>
                          Target: Rp{target.toLocaleString("id-ID")}
                        </span>
                      </div>

                      <div className="mt-2">
                        <button
                          disabled
                          className="px-3 py-1 bg-gradient-to-b from-[#b286ce] to-[#a97bc5] text-white font-semibold rounded-full text-xs shadow-sm cursor-default"
                        >
                          {persentase}% Tercapai
                        </button>
                      </div>

                      <Link
                        to={`/artikel/${artikel.id}`}
                        className="text-xs text-[#493953] font-semibold mt-3 inline-block"
                      >
                        Baca Selengkapnya...
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-10">
              Belum ada artikel donasi urgensi.
            </p>
          )}
        </main>
      </div>
    </div>
  );
};

export default Artikel;
