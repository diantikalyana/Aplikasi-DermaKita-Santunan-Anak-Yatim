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
    judul: "Kisah Anak Yatim yang Berjuang Melawan Sakit",
    nominal: 25000000,
    metode: "Bank Syariah Indonesia",
    rekening: 3,
    keteranganAwal: `Pada kesempatan yang penuh makna ini, DermaKita dengan penuh kepedulian menyalurkan bantuan sebesar Rp25.000.000 untuk mendukung perjuangan seorang anak yatim yang saat ini tengah berjuang melawan penyakit kanker otak. Perjalanan yang ia jalani bukanlah hal mudah. Selama lebih dari satu tahun terakhir, ia dan segenap keluarga merasakan hari yang penuh dengan rintangan; tampak banyak mengeluh, meski kondisi fisiknya semakin melemah dari hari ke hari. Namun, di balik tubuh kecilnya yang rapuh, tersimpan ketabahan luar biasa dan semangat juang yang begitu menginspirasi kita semua. Sikapnya menjadi pengingat akan arti sebuah kesabaran, keteguhan, serta nilai kehidupan yang sesungguhnya.`,
    keteranganLanjut: `Santunan yang diberikan ini bukan hanya sekadar dukungan dalam bentuk materi, tetapi juga merupakan wujud nyata kasih sayang, perhatian, serta kepedulian dari masyarakat yang tidak ingin membiarkan seorang anak kecil menghadapi perjalanan hidupnya sendirian. Harapannya, dana yang telah disalurkan dapat membantu meringankan beban biaya pengobatan yang besar, sekaligus membuka jalan agar ia mendapatkan perawatan yang lebih layak hingga tuntas, dan sesuai dengan dengan kebutuhannya.

Lebih dari sekadar aspek finansial, bantuan ini juga diharapkan menjadi sumber kekuatan baru, dorongan moral, dan motivasi agar ia tetap tegar menjalani setiap proses pengobatan yang berat. Setiap doa yang menyertai santunan ini menjadi penopang semangat, agar ia mampu bertahan, melewati masa-masa sulit, dan kelak dapat pulih sehingga bisa kembali menikmati masa kecilnya dengan keceriaan seperti anak-anak lainnya.

Tidak hanya dari DermaKita, kepedulian juga hadir melalui sosok Aqin Septianaji yang dengan tulus ikhlas ikut menyalurkan santunan secara langsung. Kehadiran beliau bukan hanya menghadirkan bantuan berupa materi, tetapi juga menghadirkan energi positif, dukungan moral, serta kasih sayang yang tulus. Sikap ini mencerminkan solidaritas masyarakat luas yang bahu-membahu untuk meringankan penderitaan anak yatim tersebut.

Momen penyerahan santunan ini begitu mengharukan. Tetesan air mata keluarga, ucapan syukur yang tak henti terucap, serta doa-doa yang dipanjatkan menjadi bukti betapa besar arti sebuah uluran tangan. Kehadiran yang sederhana namun sarat makna yang tidak hanya dirasakan anak dan keluarga, melainkan juga seluruh pihak yang terlibat. Inilah bukti nyata bahwa kasih sayang, kepedulian, serta harapan baru bisa dirasakan dalam momen menghadapi ujian ini.

Semoga setiap rupiah yang tersalurkan dapat menjadi jalan keberkahan, membawa keringanan, serta membuka pintu kesembuhan bagi anak yatim tersebut. DermaKita dan para donatur menyampaikan bahwa kebahagiaan adalah milik bersama. Dengan ikhlas, mereka akan menjadi penuntun bagi siapa saja yang sedang berjuang. Dengan kepedulian bersama, semoga ia dapat segera pulih dan menatap masa depan dengan senyum, kebenaran, serta kebahagiaan yang utuh.`,
    foto: dokumentasi1,
  },
  {
    id: 2,
    tanggal: "2025-08-03",
    judul: "Penyaluran Donasi di Desa Sidowangi",
    nominal: 7500000,
    metode: "Bank Syariah Indonesia",
    rekening: 2,
    keteranganAwal: "Donasi senilai 7,5 juta ditransfer ke 2 rekening penerima.",
    keteranganLanjut: "",
    foto: dokumentasi2,
  },
  {
    id: 3,
    tanggal: "2025-08-04",
    judul: "Santunan Anak Yatim di Desa Sangen",
    nominal: 5000000,
    metode: "Bank Syariah Indonesia",
    rekening: 1,
    keteranganAwal: "Penyaluran dana sebesar 5 juta telah dilakukan.",
    keteranganLanjut: "",
    foto: dokumentasi3,
  },
];

const DetailDokumentasiKhususRelawan = () => {
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

                <div className="bg-[#25e02e]/37  text-black text-base font-semibold px-4 py-2 rounded-lg inline-block mb-4">
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

export default DetailDokumentasiKhususRelawan;
