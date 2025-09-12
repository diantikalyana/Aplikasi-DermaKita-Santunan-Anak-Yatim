import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../../components/NavbarRelawan";
import Sidebar from "../../../components/SidebarRelawan";

// ✅ Import gambar dummy
import dokumentasi1 from "../../../images/FotoSatu.png";
import dokumentasi2 from "../../../images/FotoDua.png";
import dokumentasi3 from "../../../images/FotoTiga.png";

// ✅ Import asset panah
import arrowLeft from "../../../assets/Arrow.png";

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

const dummyDokumentasi = [
  {
    id: 1,
    tanggal: "2025-08-01",
    judul:
      "Bocah Penderita Kanker Butuh Bantuan Dana Rp35 Juta untuk Pengobatan",
    nominal: 10000000,
    keteranganAwal:
      "Dana sebesar 10 juta telah ditasarufkan melalui Bank Syariah Indonesia ke 3 rekening anak yatim di Desa Sugihan.",
    keteranganLanjut: `Santunan ini diharapkan dapat meringankan beban anak-anak yatim serta memberi semangat baru bagi keluarga penerima. Dengan adanya dukungan ini, mereka dapat melanjutkan kehidupan dengan lebih baik.`,
    foto: dokumentasi1,
  },
  {
    id: 2,
    tanggal: "2025-08-03",
    judul: "Penyaluran Donasi di Desa Sidowangi",
    nominal: 7500000,
    keteranganAwal:
      "Donasi senilai 7,5 juta ditransfer ke 2 rekening penerima di Desa Sidowangi untuk kebutuhan pendidikan.",
    keteranganLanjut: "",
    foto: dokumentasi2,
  },
  {
    id: 3,
    tanggal: "2025-08-04",
    judul: "Santunan Anak Yatim di Desa Sangen",
    nominal: 5000000,
    keteranganAwal:
      "Penyaluran dana sebesar 5 juta telah dilakukan ke 1 rekening anak yatim di Desa Sangen melalui transfer bank.",
    keteranganLanjut: "",
    foto: dokumentasi3,
  },
];

const DetailDokumentasiUmumRelawan = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = dummyDokumentasi.find((d) => d.id === parseInt(id));

  if (!item) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-semibold text-gray-600">
          Dokumentasi tidak ditemukan.
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-white text-[#111827] font-raleway">
      <style>{fontStyle}</style>
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />

        <main className="p-6 max-w-6xl mx-auto w-full">
          {/* Tombol kembali pakai icon */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 mb-4 hover:opacity-80"
          >
            <img src={arrowLeft} alt="Kembali" className="w-12 h-12" />
          </button>

          {/* Atas: Foto + Judul + Nominal */}
          <div className="bg-[#a8a8a8]/50 rounded-2xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Foto kiri */}
              <img
                src={item.foto}
                alt={item.judul}
                className="w-full md:w-[340px] h-[220px] object-cover rounded-lg"
              />

              {/* Judul & nominal kanan */}
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-[#493953] mb-3 leading-snug">
                  {item.judul}
                </h1>

                <p className="text-sm text-gray-500 mb-2">
                  {new Date(item.tanggal).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>

                <div className="bg-[#25e02e]/37 text-black text-base font-semibold px-4 py-2 rounded-lg inline-block mb-4">
                  Tersalurkan: Rp {item.nominal.toLocaleString("id-ID")}
                </div>

                <p className="text-gray-700 text-base leading-relaxed">
                  {item.keteranganAwal}
                </p>
              </div>
            </div>

            {/* Paragraf panjang di bawah full width */}
            {item.keteranganLanjut && (
              <div className="mt-6">
                <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line text-justify">
                  {item.keteranganLanjut}
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DetailDokumentasiUmumRelawan;
