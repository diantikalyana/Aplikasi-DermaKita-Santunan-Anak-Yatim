import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import AllertPengajuan from "../../../components/Modal/AlertPengajuan";
import ArrowLeft from "../../../assets/Arrow.png";

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

const PengajuanDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [anak, setAnak] = useState(null);
  const [loading, setLoading] = useState(true);

  const [resultModal, setResultModal] = useState({
    isOpen: false,
    type: "success", // default
    title: "",
    message: "",
  });

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = fontStyle;
    document.head.appendChild(style);

    // Dummy data sementara
    const dummyData = {
      nama_pendamping: "Budi Santoso",
      nama_wali: "Ani Wijaya",
      no_pengaju: "081234567890",
      nama_pengaju: "Siti Rahma",
      nama_anak: "Rizky Ramadhan",
      tempat_lahir: "Jakarta",
      tanggal_lahir: "2009-05-12",
      jenis_kelamin: "Laki-laki",
      status: "Belum Diverifikasi",
      alamat: "Jl. Melati No. 123, Jakarta",
      foto_kk: "https://via.placeholder.com/150",
      surat_kematian: "https://via.placeholder.com/150",
    };

    setTimeout(() => {
      setAnak(dummyData);
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!anak) return <div>Data tidak ditemukan</div>;

  const handleVerifikasi = () => {
    setResultModal({
      isOpen: true,
      type: "success",
      title: "Berhasil Diverifikasi",
      message: `Data anak atas nama ${anak.nama_anak} telah berhasil diverifikasi.`,
    });
  };

  const handleTolak = () => {
    setResultModal({
      isOpen: true,
      type: "error",
      title: "Data Ditolak",
      message: `Data anak atas nama ${anak.nama_anak} telah ditolak dan dikembalikan ke pengaju.`,
    });
  };

  return (
    <div className="flex min-h-screen font-raleway">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-white-100">
        <Navbar />
        <main className="p-4 ">
          {/* Tombol Kembali */}
          <div className="flex justify-start mt-2">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 px-5 py-2 text-white font-semibold"
            >
              <img src={ArrowLeft} alt="Kembali" className="w-10 h-auto" />
            </button>
          </div>

          {/* Table + Box */}
          <div className="overflow-x-auto bg-gray-200 rounded-xl shadow p-8 mb-6">
            {/* Tombol Cek & Verifikasi Data */}
            <div className="flex justify-start mb-6">
              <button className="bg-[#5a4b6b] text-white px-4 py-2 rounded-md shadow">
                Cek & Verifikasi Data
              </button>
            </div>

            <table className="text-sm w-full font-raleway">
              <tbody>
                <tr>
                  <td className="py-2 w-1/4">Nama Pendamping</td>
                  <td className="py-2">{anak.nama_pendamping}</td>
                </tr>
                <tr>
                  <td className="py-2">Nama Wali</td>
                  <td className="py-2">{anak.nama_wali}</td>
                </tr>
                <tr>
                  <td className="py-2">No Telepon Pengaju</td>
                  <td className="py-2">{anak.no_pengaju}</td>
                </tr>
                <tr>
                  <td className="py-2">Nama Pengaju</td>
                  <td className="py-2">{anak.nama_pengaju}</td>
                </tr>
                <tr>
                  <td className="py-2">Nama Anak</td>
                  <td className="py-2">{anak.nama_anak}</td>
                </tr>
                <tr>
                  <td className="py-2">Tempat, Tanggal Lahir</td>
                  <td className="py-2">
                    {anak.tempat_lahir}, {anak.tanggal_lahir}
                  </td>
                </tr>
                <tr>
                  <td className="py-2">Jenis Kelamin</td>
                  <td className="py-2">{anak.jenis_kelamin}</td>
                </tr>
                <tr>
                  <td className="py-2">Status</td>
                  <td className="py-2">{anak.status}</td>
                </tr>
                <tr>
                  <td className="py-2">Alamat</td>
                  <td className="py-2">{anak.alamat}</td>
                </tr>
                <tr>
                  <td className="py-2">Kartu Keluarga</td>
                  <td className="py-2">
                    <a
                      href={anak.foto_kk}
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

            {/* Tombol Verifikasi / Tolak */}
            <div className="flex gap-3 justify-start mt-6">
              <button
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md shadow"
                onClick={handleVerifikasi}
              >
                Verifikasi
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md shadow"
                onClick={handleTolak}
              >
                Tolak
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Modal Hasil */}
      <AllertPengajuan
        isOpen={resultModal.isOpen}
        type={resultModal.type} // "success" atau "error"
        title={resultModal.title}
        message={resultModal.message}
        onSend={() => {
          console.log("Notif terkirim ke user 🚀");
          setResultModal({ ...resultModal, isOpen: false });
          navigate(-1);
        }}
        onClose={() => setResultModal({ ...resultModal, isOpen: false })}
      />
    </div>
  );
};

export default PengajuanDetail;
