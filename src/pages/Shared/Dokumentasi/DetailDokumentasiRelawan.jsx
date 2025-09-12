import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import api from "../../../utils/axios";

import Artikel1 from "../../../assets/Artikel1.png";

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

const DetailDokumentasiRelawan  = () => {
  const { id, type } = useParams(); // type bisa "khusus" atau "umum"
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        let endpoint = "";

        // bedakan endpoint berdasarkan type dokumentasi
        if (type === "khusus") {
          endpoint = `/dokumentasi-relawan/${id}`;
        } else {
          endpoint = `/dokumentasi-umum/${id}`;
        }

        const response = await api.get(endpoint);
        setData(response.data);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
        setData(null);
      }
    };

    getData();
  }, [id, type]);

  if (!data) {
    return <p className="p-6">Data tidak ditemukan.</p>;
  }

  const persentase =
    data.nominal && data.target
      ? Math.round((data.nominal / data.target) * 100)
      : 0;

  return (
    <div className="flex min-h-screen bg-[#f5f5f5] text-[#111827] font-raleway">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-6 max-w-4xl mx-auto w-full">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 text-blue-600 hover:underline"
          >
            ← Kembali
          </button>

          <div className="bg-white shadow-md rounded-lg p-6">
            <img
              src={Artikel1}
              alt="Dokumentasi"
              className="w-full h-64 object-cover rounded-md mb-6"
            />

            {/* Judul bisa pakai nama anak (khusus) atau judul artikel (umum) */}
            <h1 className="text-2xl font-bold mb-2">
              {data.namaAnak ?? data.judul}
            </h1>
            <p className="text-sm text-gray-600 mb-2">Tanggal: {data.tanggal}</p>
            <p className="text-sm text-gray-600 mb-2">Penyalur: {data.penyalur}</p>

            {/* Kalau khusus → tampilkan progress donasi */}
            {type === "khusus" && (
              <>
                <p className="text-sm text-gray-600 mb-2">
                  Tersalurkan: Rp{parseInt(data.nominal).toLocaleString("id-ID")}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  Target: Rp{parseInt(data.target).toLocaleString("id-ID")}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  Persentase: {persentase}%
                </p>
              </>
            )}

            {/* Kalau umum → tampilkan deskripsi */}
            {type === "umum" && (
              <p className="text-sm text-gray-600">Deskripsi: {data.deskripsi}</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DetailDokumentasiRelawan;
