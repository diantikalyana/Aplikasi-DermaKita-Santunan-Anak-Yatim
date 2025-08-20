import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../../components/NavbarRelawan";
import Sidebar from "../../../components/SidebarRelawan";

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

const Detailanak = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [anak, setAnak] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = fontStyle;
    document.head.appendChild(style);

    // Simulasi fetch data dummy
    const fetchDummyData = () => {
      const dummyData = {
        id,
        nama_pendamping: "Budi Santoso",
        nama_wali: "Siti Aminah",
        telp: "08123456789",
        rekening: "1234567890",
        nama_anak: "Ahmad Fauzi",
        tempat_tanggal_lahir: "Jakarta, 01 Januari 2010",
        jenis_kelamin: "Laki-laki",
        keterangan: "Anak yatim piatu",
        alamat: "Jl. Merdeka No.10, Jakarta",
        kartu_keluarga: "https://example.com/kartu_keluarga.pdf",
        surat_kematian: "https://example.com/surat_kematian.pdf"
      };
      setAnak(dummyData);
      setLoading(false);
    };

    fetchDummyData();

    return () => {
      document.head.removeChild(style);
    };
  }, [id]);

  if (loading) return <div className="p-6 text-gray-600">Memuat data...</div>;
  if (!anak) return <div className="p-6 text-red-600">Data tidak ditemukan</div>;

  return (
    <div className="flex min-h-screen font-raleway">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-white-100">
        <Navbar />
        <main className="p-6">
          <div className="bg-gray-200 rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-[#5C457E] mb-6">
              Detail Data Terverifikasi
            </h2>

            <table className="text-sm w-full font-raleway">
              <tbody>
                <tr><td className="py-2 w-1/4">Nama Pendamping</td><td className="py-2">{anak.nama_pendamping}</td></tr>
                <tr><td className="py-2">Nama Wali</td><td className="py-2">{anak.nama_wali}</td></tr>
                <tr><td className="py-2">No Telepon Pendamping/Wali</td><td className="py-2">{anak.telp}</td></tr>
                <tr><td className="py-2">No Rekening</td><td className="py-2">{anak.rekening}</td></tr>
                <tr><td className="py-2">Nama Anak</td><td className="py-2">{anak.nama_anak}</td></tr>
                <tr><td className="py-2">Tempat, Tanggal Lahir</td><td className="py-2">{anak.tempat_tanggal_lahir}</td></tr>
                <tr><td className="py-2">Jenis Kelamin</td><td className="py-2">{anak.jenis_kelamin}</td></tr>
                <tr><td className="py-2">Keterangan</td><td className="py-2">{anak.keterangan}</td></tr>
                <tr><td className="py-2">Alamat</td><td className="py-2">{anak.alamat}</td></tr>
                <tr>
                  <td className="py-2">Kartu Keluarga</td>
                  <td className="py-2">
                    <a
                      href={anak.kartu_keluarga}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="italic underline text-blue-500 hover:text-blue-700"
                    >
                      Open File
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-2">Surat Kematian</td>
                  <td className="py-2">
                    <a
                      href={anak.surat_kematian}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="italic underline text-blue-500 hover:text-blue-700"
                    >
                      Open File
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="mt-6">
              <button
                onClick={() => navigate(`/data-anak-yatim`)}
                className="bg-[#493953] hover:bg-[#836f8f] text-white px-4 py-2 rounded shadow"
              >
                ← Kembali
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Detailanak;
