import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import Alertmodal from "../../../components/Modal/Alertmodal";
import PanahKiri from "../../../assets/Arrow.png";
import editIcon from "../../../assets/edit.png";
import trashIcon from "../../../assets/trash.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

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

const DetailAnak = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [anak, setAnak] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showActions, setShowActions] = useState(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = fontStyle;
    document.head.appendChild(style);

    const fetchAnak = async () => {
      const dummyData = {
        id,
        wali: "Jamal",
        pendamping: "Fulan",
        telpPendamping: "0856-7936-7284",
        telpPengaju: "0815-1234-5678",
        telpRekening: "0815-1234-5678",
        nama_anak: "Ahmad Rasyid",
        sekolah: "SMP Negeri Jakarta",
        ttl: "Kajoran, 12 Jan 2010",
        jenis_kelamin: "Laki-laki",
        keterangan: "Yatim",
        alamat_anak: "Dusun Kajoran RT 01 RW 01, Desa Kajoran, Kec. Kajoran",
        alamat_wali: "Dusun Sugihan RT 01 RW 01, Desa Kajoran, Kec. Kajoran",
        kartu_keluarga: "/dummy-files/kk.pdf",
        surat_kematian: "/dummy-files/sk.pdf",
      };
      setAnak(dummyData);
      setLoading(false);
    };

    fetchAnak();

    return () => {
      document.head.removeChild(style);
    };
  }, [id]);

  const handleDelete = () => setShowDeleteModal(true);

  const confirmDelete = async () => {
    setShowDeleteModal(false);
    setShowSuccessModal(true);
    setTimeout(() => {
      setShowSuccessModal(false);
      navigate("/data-anak-yatim");
    }, 2000);
  };

  if (loading) return <div className="p-6 text-gray-600">Memuat data...</div>;
  if (!anak) return <div className="p-6 text-red-600">Data tidak ditemukan</div>;

  return (
    <div className="flex min-h-screen font-raleway">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-white">
        <Navbar />
        <main className="p-6 relative">
          <button
            onClick={() => navigate(`/admin/data-anak-yatim`)}
            className="absolute top-6 left-6 flex items-center gap-2 text-[#493953] hover:text-[#836f8f]"
          >
            <img src={PanahKiri} alt="Kembali" className="w-10 h-10" />
          </button>

          <div className="bg-[#F0F0F0] rounded-xl shadow overflow-hidden relative mt-12">
            <div className="bg-[#5C457E] w-50 text-white px-6 py-3 rounded-md mt-4 mx-4 ">
              <h2 className="text-md font-semibold">Detail Data</h2>
            </div>

            {/* Tombol aksi kanan digeser lebih ke tengah dari tepi box */}
            <div className="absolute top-4 right-12 flex items-center">
              <div
                className={`flex gap-2 items-center transition-all duration-300 ${
                  showActions
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4 pointer-events-none"
                }`}
              >
                <button
                  title="Edit"
                  onClick={() => navigate(`/admin/data-anak-yatim/edit/:id`)}
                  className="p-2 bg-[#f0f0f0] rounded-full shadow"
                >
                  <img src={editIcon} alt="Edit" className="w-6 h-6" />
                </button>
                <button
                  title="Hapus"
                  onClick={handleDelete}
                  className="p-2 bg-[#f0f0f0] rounded-full shadow"
                >
                  <img src={trashIcon} alt="Hapus" className="w-6 h-6" />
                </button>
              </div>

              <button
                onClick={() => setShowActions(!showActions)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#A99EB5] shadow ml-2"
              >
                <ChevronRightIcon
                  className={`absolute w-5 h-5 text-white transform transition-transform duration-500 ease-in-out ${
                    showActions ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-75"
                  }`}
                />
                <ChevronLeftIcon
                  className={`absolute w-5 h-5 text-white transform transition-transform duration-500 ease-in-out ${
                    showActions ? "opacity-0 rotate-180 scale-75" : "opacity-100 rotate-0 scale-100"
                  }`}
                />
              </button>
            </div>

            <div className="p-6">
              <table className="text-sm w-full">
                <tbody>
                  <tr><td className="py-2 w-1/4">Wali</td><td className="py-2">{anak.wali}</td></tr>
                  <tr><td className="py-2">Pendamping</td><td className="py-2">{anak.pendamping}</td></tr>
                  <tr><td className="py-2">No Telepon Pendamping</td><td className="py-2">{anak.telpPendamping}</td></tr>
                  <tr><td className="py-2">No Telepon Pengaju</td><td className="py-2">{anak.telpPengaju}</td></tr>
                  <tr><td className="py-2">No Telepon Rekening</td><td className="py-2">{anak.telpRekening}</td></tr>
                  <tr><td className="py-2">Nama Anak</td><td className="py-2">{anak.nama_anak}</td></tr>
                  <tr><td className="py-2">Asal Sekolah</td><td className="py-2">{anak.sekolah}</td></tr>
                  <tr><td className="py-2">Tempat, Tanggal Lahir</td><td className="py-2">{anak.ttl}</td></tr>
                  <tr><td className="py-2">Jenis Kelamin</td><td className="py-2">{anak.jenis_kelamin}</td></tr>
                  <tr><td className="py-2">Keterangan</td><td className="py-2">{anak.keterangan}</td></tr>
                  <tr><td className="py-2">Alamat Anak</td><td className="py-2">{anak.alamat_anak}</td></tr>
                  <tr><td className="py-2">Alamat Wali</td><td className="py-2">{anak.alamat_wali}</td></tr>
                  <tr>
                    <td className="py-2">Kartu Keluarga</td>
                    <td className="py-2">
                      <a href={anak.kartu_keluarga} target="_blank" rel="noopener noreferrer" className="italic underline text-blue-500 hover:text-blue-700">Open file</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2">Surat Kematian</td>
                    <td className="py-2">
                      <a href={anak.surat_kematian} target="_blank" rel="noopener noreferrer" className="italic underline text-blue-500 hover:text-blue-700">Open file</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      <Alertmodal
        isOpen={showDeleteModal}
        title="Hapus Data"
        message={`Yakin ingin menghapus data atas nama ${anak.nama_anak}?`}
        confirmText="Hapus"
        cancelText="Batal"
        onConfirm={confirmDelete}
        onClose={() => setShowDeleteModal(false)}
      />

    </div>
  );
};

export default DetailAnak;
