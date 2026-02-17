import React from "react";
import { Link, useNavigate }  from "react-router-dom";
import { Search } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Logo from "../../../assets/logo.png";
import FotoEnam from "../../../images/FotoEnam.png";
import FotoTiga from "../../../images/FotoTiga.png";
import FotoEmpat from "../../../images/FotoEmpat.png";
import FotoLima from "../../../images/FotoLima.png";
import FotoDua from "../../../images/FotoDua.png";
import FotoSatu from "../../../images/FotoSatu.png";
import FotoTujuh from "../../../images/FotoTujuh.png";
import DonasiIcon from "../../../images/donasi-icon.png";
import IconDonasi from "../../../images/icon-donasi.png";
import IconCentang from "../../../images/centang.png";
import IconHandphone from "../../../images/Handphone.png";
import IconHati from "../../../images/Hati.png";
import LogoText from "../../../assets/LogoText.png";
import Panah from "../../../assets/Panah.png";
import BgImage from "../../../images/bg.png";
import dermakita from "../../../images/dermakita-kids.png"
import PhoneIcon from "../../../images/Phone.png";
import EmailIcon from "../../../images/Email.png";
import LocationIcon from "../../../images/Place Marker.png";
import Kanker from "../../../images/Kanker.png";
import Mata from "../../../images/Mata.png";



// Custom font face
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

export default function LandingPage() {
  const navigate = useNavigate();
   const [openGeneral, setOpenGeneral] = useState(null);
  const [openDonasi, setOpenDonasi] = useState(null);
const [sortBy, setSortBy] = useState("terbaru");
  const handleClick = (mode) => {
    // redirect ke login, kirim query string "mode"
    navigate(`/login?redirect=/artikel&mode=${mode}`);
  };
    
    const menus = ["Beranda", "Layanan Kami", "Donasi", "Tentang kami", "Masuk", "Daftar"];

    const dataDonasi = [
  {
    id: 1,
    gambar: Kanker,
    judul: "Yuk, Sedekah Jariyah! Bantu Anak Yatim Mengidap Kanker Paru-Paru",
    dana_terkumpul: 233350652,
    target_dana: 300000000,
    tanggal: "1 Agustus 2025",
  },
  {
    id: 2,
    gambar: Mata,
    judul: "Ulurkan Tanganmu! Bantu Anak Yatim Pengidap Xerophthalmia ini mendapat pengobatan",
    dana_terkumpul: 230459600,
    target_dana: 500000000,
    tanggal: "25 Juli 2025",
  },
  // bisa tambahin lagi donasi lain biar panjang
];

// SORTING LOGIC
const sortedDonasi = [...dataDonasi].sort((a, b) => {
  if (sortBy === "terkumpul") {
    return b.dana_terkumpul - a.dana_terkumpul; // urutkan berdasarkan dana terbesar
  }
  if (sortBy === "terbaru") {
    return b.id - a.id; // urutkan berdasarkan id terbaru
  }
  return 0;
});

  const generalFAQ = [
    {
      id: 1,
      question: "Bagaimana cara melakukan donasi di dermaKita?",
      answer:
        "Donasi bisa dilakukan dengan mudah melalui aplikasi. Cukup login dengan email, pilih program donasi yang ingin kamu bantu, tentukan nominal, lalu ikuti instruksi pembayaran yang tersedia.",
    },
    {
      id: 2,
      question: " Apakah donasi saya benar-benar sampai kepada anak yatim?",
      answer:
        "Ya. dermaSAPA berkomitmen untuk menjaga transparansi dan akuntabilitas. Setiap donasi dicatat dalam sistem, disalurkan langsung kepada anak-anak yatim yang membutuhkan, dan dilengkapi dengan laporan penyaluran berkala.",
    },
    
    {
      id: 3,
      question: " Apakah saya bisa berdonasi secara rutin?",
      answer:
        "Tentu bisa. dermaSAPA menyediakan fitur donasi berkala (bulanan) agar kamu bisa berbagi secara konsisten. Kamu juga dapat mengatur atau menghentikan donasi rutin kapan saja melalui pengaturan akun.",
    },
  ];

  const donasiFAQ = [
    {
      id: 1,
      question: "Bagaimana cara melakukan donasi di DermaKita?",
      answer:
        "Donasi bisa dilakukan dengan mudah melalui aplikasi. Pilih program donasi, tentukan nominal, lalu ikuti instruksi pembayaran.",
    },
    {
      id: 2,
      question: "Apakah donasi saya benar-benar sampai kepada anak yatim?",
      answer:
        "Ya, DermaKita berkomitmen menjaga transparansi dan akuntabilitas. Semua donasi disalurkan langsung kepada anak-anak yatim yang membutuhkan.",
    },
    {
      id: 3,
      question: "Apakah saya bisa berdonasi secara rutin?",
      answer:
        "Tentu bisa. DermaKita menyediakan fitur donasi rutin bulanan agar kamu bisa konsisten berbagi kebaikan.",
    },
  ];

  const FAQCard = ({ item, isOpen, onClick }) => (
  <div className="bg-[#D9D9D9]/30 shadow-lg shadow-gray-600/30 rounded-xl mb-6 transition-all">
    {/* Bagian Question */}
    <button
      onClick={onClick}
className="flex justify-between items-center w-full text-left p-4 
           rounded-2xl shadow-md shadow-gray-500/70 
           hover:bg-gray-100/60 transition"
    >
      <div className="flex gap-3 items-center">
       <span className="text-gray-600 font-bold">
  {item.id}.
</span>
        <h4 className="font-bold text-gray-800">{item.question}</h4>
      </div>
      <ChevronDown
        className={`text-gray-600 w-10 h-10 transform transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>

    {/* Bagian Answer */}
    <div
      className={`grid transition-all duration-300 ease-in-out ${
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">
       <p className="text-gray-700 font-medium px-6 pt-4 pb-6 pl-14">
  {item.answer}
</p>

      </div>
    </div>
  </div>
);




  
  const photos = [FotoEnam, FotoTiga, FotoEmpat, FotoLima];

  return (
    <div className="font-raleway">
      <style>{fontStyle}</style>

   <div
  className="w-full min-h-screen bg-cover bg-center"
  style={{
    backgroundImage: `url(${BgImage})`,
    backgroundAttachment: "fixed"
  }}
>


<nav className="px-10 py-6 flex items-right justify-between gap-[#16px]">
  {/* Search kiri */}
  <div className="flex items-center bg-[#F2E6EE]/40 rounded-full px-6 py-2 w-72 shadow-inner">
    <input
      type="text"
      placeholder="Telusuri....."
      className="flex-grow text-sm text-white placeholder-white/70 bg-transparent focus:outline-none"
    />
    <Search size={18} className="text-white" />
  </div>

  {/* Menu kanan */}
<div className="hidden md:flex bg-[#F2E6EE]/40 rounded-full px-[60px] py-2 space-x-8 shadow-inner ml-6">

    {menus.map((menu, i) => {
      if (menu === "Masuk") {
        return (
          <Link
            key={i}
            to="/user/autentifikasi"
            className="px-3 py-1 rounded-full text-sm text-white font-normal transition hover:bg-purple-300"
          >
            {menu}
          </Link>
        );
      }
      if (menu === "Daftar") {
        return (
          <Link
            key={i}
            to="/user/autentifikasi/signup"
            className="px-3 py-1 rounded-full text-sm text-white font-normal transition hover:bg-purple-300"
          >
            {menu}
          </Link>
        );
      }
      if (menu === "Beranda") {
        return (
          <a
            key={i}
            href="#layanan"
            className="px-3 py-1 rounded-full text-sm text-white font-normal transition hover:bg-purple-300"
          >
            {menu}
          </a>
        );
      }
      if (menu === "Layanan Kami") {
        return (
          <a
            key={i}
            href="#layanankami"
            className="px-3 py-1 rounded-full text-sm text-white font-normal transition hover:bg-purple-300"
          >
            {menu}
          </a>
        );
      }
      if (menu === "Donasi") {
        return (
          <a
            key={i}
            href="#donasi"
            className="px-3 py-1 rounded-full text-sm text-white font-normal transition hover:bg-purple-300"
          >
            {menu}
          </a>
        );
      }
      if (menu === "Tentang kami") {
        return (
          <a
            key={i}
            href="#tentang"
            className="px-3 py-1 rounded-full text-sm text-white font-normal transition hover:bg-purple-300"
          >
            {menu}
          </a>
        );
      }
      return null;
    })}
  </div>
</nav>




{/* ===== HERO ===== */}
<section id="layanan" className="max-w-7xl mx-auto px-8 pt-2 pb-20 flex flex-col md:flex-row items-center justify-center gap-10">

  {/* Kiri: Logo + Quotes */}
  <div className="flex-1 flex flex-col items-center text-center gap-8">
    {/* Atas: Logo bulat + teks */}
    <div className="flex flex-row items-center gap-6 justify-center">
      {/* Logo bulat glasmorph */}
      <div className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full flex items-center justify-center 
          bg-purple-200/60 backdrop-blur-xl border border-purple-200/15 shadow-lg">
        <img
          src={Logo}
          alt="Logo DermaKita"
          className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] object-contain"
        />
      </div>

      {/* Logo teks (gambar) */}
      <img
        src={LogoText}
        alt="DermaKita Text"
        className="h-[120px] md:h-[140px] object-contain drop-shadow-lg"
      />
    </div>

    {/* Tengah: Quotes Box */}
    <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-8 max-w-2xl text-white text-center shadow-xl">
      <p className="leading-relaxed text-lg md:text-2xl">
        dermaKita hadir sebagai wujud kepedulian terhadap anak-anak yatim,
        agar mereka merasakan kasih sayang setiap hari.
        <br />
        Kami mengajak semua untuk berbagi kebaikan dengan mudah.{" "}
        <span className="font-semibold">Tulus, di mana pun dan kapan pun.</span>
      </p>
    </div>
  </div>

{/* Kanan: Foto */}
<div className="w-full md:w-[340px] bg-white rounded-2xl shadow-xl p-4 flex flex-col gap-4">
  {photos.map((img, i) => (
    <div
      key={i}
      className="bg-gray-200 rounded-xl overflow-hidden shadow-[6px_6px_12px_rgba(128,128,128,0.4)]"
    >
      <img
        src={img}
        alt={`Penyaluran ${i + 1}`}
        className="w-full h-48 object-cover rounded-xl"
      />
    </div>
  ))}
</div>


</section>


{/* ===== SECTION: MELALUI DERMAKITA ===== */}
<section id="pelayanan" className="bg-white py-16 border-t-[16px] border-[#B091D1]">
  <div className="max-w-6xl mx-auto px-4 ">
    <h2
      className="text-5xl md:text-6xl font-extrabold mb-3 
                 bg-gradient-to-r from-[#AF92D1] to-[#5B4B99] 
                 bg-clip-text text-transparent"
    >
      MELALUI DERMAKITA
    </h2>

    <p className="text-[#5B4B99] font-bold text-xl mb-12">
      Donasi anda kami salurkan. Aman, nyata, dan transparan.
    </p>

    {/* 3 Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Card 1 */}
      <div className="flex flex-col items-center">
        <button className="rounded-xl shadow-lg overflow-hidden border border-purple-200 w-full">
          <img
            src={FotoDua}
            alt="donasi 1"
            className="w-full h-48 object-cover"
          />
        </button>
        <p className="mt-3 font-bold  text-[#5A4B6B]">
          Dukungan Pendidikan telah diberikan kepada ananda Rumi setelah
          sempat 5 tahun tak bisa bersekolah.
        </p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center">
        <button className="rounded-xl shadow-lg overflow-hidden border border-purple-200 w-full">
          <img
            src={FotoSatu}
            alt="donasi 2"
            className="w-full h-48 object-cover"
          />
        </button>
        <p className="mt-3 font-bold text-[#5A4B6B]">
          Donasi sudah diterima ananda Bikka kini sudah mendapatkan perawatan
          untuk penyakit autoimunnya.
        </p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center">
        <button className="rounded-xl shadow-lg overflow-hidden border border-purple-200 w-full">
          <img
            src={FotoTujuh}
            alt="donasi 3"
            className="w-full h-48 object-cover"
          />
        </button>
        <p className="mt-3 font-bold text-[#5A4B6B]">
          Donasi anda telah tersalurkan! ananda Hira kini mendapatkan gizi
          yang cukup!
        </p>
      </div>
    </div>
  </div>
</section>




{/* ===== SECTION: LAYANAN KAMI ===== */}
<section className="bg-gray-50 py-16 border-t-[16px] border-[#B091D1]">
  <div className="max-w-5xl mx-auto px-4 text-center">
    <h2 
      className="text-5xl md:text-6xl font-extrabold mb-3 
                 bg-gradient-to-r from-[#AF92D1] to-[#5B4B99] 
                 bg-clip-text text-transparent"
    >
      LAYANAN KAMI
    </h2>


    {/* Ilustrasi */}
    <div className="flex justify-center mb-6">
      <img
        src={DonasiIcon}
        alt="ilustrasi donasi"
        className="w-40 h-40 object-contain"
      />
    </div>

    <p className="text-5xl font-bold text-[#5A4B6B] max-w-5xl mx-auto mb-8">
      Ulurkan tangan anda untuk meringankan beban mereka, ayo donasi!
    </p>

    {/* Tombol */}
    <div className="flex items-center justify-center space-x-4">
      <button
        onClick={() => navigate("/user/autentifikasi")}
        className="px-6 py-2 rounded-full bg-gradient-to-b from-[#AF92D1] to-[#5B4B99]  text-white font-semibold shadow-md hover:bg-purple-400 transition"
      >
        Masuk
      </button>
      <span className="text-gray-600">atau</span>
      <button
        onClick={() => navigate("/user/autentifikasi/signup")}
        className="px-6 py-2 rounded-full bg-gradient-to-b from-[#AF92D1] to-[#5B4B99] text-white font-semibold shadow-md hover:bg-purple-400 transition"
      >
        Daftar
      </button>
    </div>
  </div>
</section>

{/* ===== SECTION: MENGAPA BERBAGI ===== */}


<section id="layanankami" className="bg-gradient-to-r from-[#5A4A6B] to-[#AF92D1] py-12 text-white w-full">
  <div className="max-w-6xl mx-auto px-6 ">
    <h2 className="text-5xl md:text-6xl font-bold">
      MENGAPA BERBAGI 
      <h2 className="text-5xl md:text-6xl font-bold">
      BERSAMA DERMAKITA?
      </h2>
    </h2>
  </div>
</section>


<section className="bg-white py-16">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      
      {/* Card 1 */}
      <div className="flex flex-col items-center">
        <img src={IconCentang} alt="Tepat Sasaran" className="w-44 h-44 mb-6" />
        <h3 className="font-bold text-xl md:text-xl mb-4 
                       text-[#5A4B6B]
                       bg-[#f1eded] /21 backdrop-blur-sm
                       px-6 py-2 rounded-full shadow-md">
  TEPAT SASARAN
</h3>

        <p className="text-[#5A4B6B] font-semibold text-sm">
          Donasi kamu akan langsung diberikan kepada anak-anak yang benar-benar membutuhkan.
        </p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center">
        <img src={IconHandphone} alt="Mudah dan Cepat" className="w-44 h-44 mb-6" />
        <h3 className="font-bold text-xl md:text-xl mb-4 
                       text-[#5A4B6B]
                       bg-[#f1eded] /21 backdrop-blur-sm
                       px-6 py-2 rounded-full shadow-md">
          MUDAH DAN CEPAT
        </h3>
        <p className="text-[#5A4B6B] font-semibold text-sm">
          Cukup lewat HP kamu sudah bisa berbagi kebaikan kapan saja dan di mana saja.
        </p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center">
        <img src={IconHati} alt="Kepedulian Kita" className="w-auto h-44 mb-6" />
        <h3 className="font-bold text-xl md:text-xl mb-4 
                       text-[#5A4B6B]
                       bg-[#f1eded] /21 backdrop-blur-sm
                       px-6 py-2 rounded-full shadow-md">
          KEPEDULIAN KITA
        </h3>
        <p className="text-[#5A4B6B] font-semibold text-sm">
          Donasimu bukan hanya untuk hari ini, tapi menjadi pendidikan dan kebahagiaan masa depan anak-anak yatim.
        </p>
      </div>

    </div>
  </div>
</section>




{/* ===== SECTION: DONASI ===== */}
<section id="donasi" className="bg-white py-16">
  <div className="max-w-6xl mx-auto px-6">
    {/* Header */}
    <h2 className="text-5xl md:text-6xl font-extrabold mb-3 
                 bg-gradient-to-r from-[#AF92D1] to-[#5B4B99] 
                 bg-clip-text text-transparent inline-block border-b-4 border-gray-500 pb-4">
      Mari Ulurkan Tangan Kita Untuk Membantu Mereka
    </h2>

    {/* Baris antara text & button */}
    <div className="flex items-center justify-between mb-10">
      {/* Text info */}
      <p className="text-gray-600 font-regular">
        Menampilkan {sortedDonasi.length} dari {dataDonasi.length} kabar mereka
      </p>

      {/* Button group */}
      <div className="flex space-x-3">
        <button
          className={`px-4 py-2 font-bold ${
            sortBy === "terkumpul"
              ? "text-purple-600 border-b-2 border-purple-600"
              : "text-gray-500 hover:underline"
          }`}
          onClick={() => setSortBy("terkumpul")}
        >
          Urutkan
        </button>
        <button
          className={`px-4 py-2 font-bold ${
            sortBy === "terbaru"
              ? "text-purple-600 border-b-2 border-purple-600"
              : "text-gray-800 hover:underline"
          }`}
          onClick={() => setSortBy("terbaru")}
        >
          Terbaru
        </button>
      </div>
    </div>

    {/* Grid Donasi + Panah */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      {sortedDonasi.slice(0, 2).map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition"
        >
          {/* Gambar */}
          <img
            src={item.gambar}
            alt={item.judul}
            className="w-full h-48 object-cover"
          />

          {/* Konten */}
          <div className="p-4 flex flex-col gap-2">
            <h3 className="font-semibold text-lg text-gray-800 leading-snug">
              {item.judul}
            </h3>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div
                className="bg-[#5A4B6B] h-2 rounded-full"
                style={{
                  width: `${(item.dana_terkumpul / item.target_dana) * 100}%`,
                }}
              ></div>
            </div>
            <p className="text-[10px] text-[#5A4B6B]">
              Terkumpul: Rp{item.dana_terkumpul.toLocaleString()} / Rp
              {item.target_dana.toLocaleString()}
            </p>

            {/* Baca selengkapnya */}
            <Link
              to={`/detaildonasi/${item.id}`}
              className="text-xs text-gray-600 hover:underline text-left"
            >
              Baca selengkapnya →
            </Link>

            {/* Tanggal di kiri bawah */}
            <p className="text-[9px] italic text-gray-400 text-right">
              {item.tanggal}
            </p>
          </div>
        </div>
      ))}

      {/* Panah ke Login */}
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/user/autentifikasi")}
          className="transition-transform duration-300 hover:scale-110"
        >
          <img
            src={Panah}
            alt="Lihat lebih banyak"
            className="w-40 h-40 cursor-pointer"
          />
        </button>
      </div>
    </div>
  </div>
</section>




{/* ===== SECTION: CTA DONATUR ===== */}
<section className="bg-gradient-to-r from-[#5A4B6B] to-[#AF92D1] py-16 text-center text-white">
  <div className="max-w-3xl mx-auto px-6">
    {/* Icon Donasi */}
    <img
      src={IconDonasi} // import dari assets
      alt="Donatur"
      className="mx-auto w-36 h-auto mb-6"
    />

    <h2 className="text-2xl md:text-3xl font-bold mb-3">
      JADILAH BAGIAN DARI DONATUR AKTIF DERMAKITA
    </h2>
    <p className="text-white/90 mb-6">
      "Berbagi takkan membuatmu kurang."
    </p>
<button 
 onClick={() => navigate("/user/daftarrelawan/daftarrelawan")}
className="bg-gradient-to-r from-[#5B4B99] via-[#7D68CC] to-[#977DFF] 
  bg-[length:200%_100%] text-white font-semibold 
  px-10 py-3 min-w-[350px] 
  rounded-full shadow hover:opacity-90 transition text-center">
  Daftar Sebagai Relawan 
  <span className="text-xl">&raquo;</span>
</button>





  </div>
</section>

{/* ===== SECTION: TENTANG KAMI ===== */}
<section id="tentang" className="relative h-[400px] md:h-[500px] flex items-center justify-center">
  {/* Background Image */}
  <img
    src={dermakita} // background image anak-anak
    alt="Tentang Kami"
    className="absolute inset-0 w-full h-full object-cover"
  />
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Text Centered */}
  <h2 className="relative text-white text-4xl md:text-5xl font-bold tracking-wide">
    TENTANG KAMI
  </h2>
</section>

{/* ===== SECTION: VISI MISI ===== */}
<section className="bg-gray-50 py-16">
  <div className="max-w-6xl mx-auto px-6 space-y-12">

    {/* Box 1: Tentang Kami (kanan) */}
    <div className="bg-[#FFEEF9] shadow-md rounded-xl p-6 md:p-10 font-bold text-[#5A4B6B] leading-relaxed max-w-[85%] ml-auto">
      <p>
        dermaKita adalah platform donasi digital yang didedikasikan untuk memberikan dukungan dan harapan
        bagi anak-anak yatim yang membutuhkan. Kami percaya setiap anak berhak tumbuh sehat, ceria, dan berpendidikan
        terlepas dari kondisi ekonomi maupun sosial mereka.
      </p>
    </div>

    {/* Box 2: VISI (kiri) */}
    <div className="max-w-[85%] mr-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-8">VISI-MISI</h2>
      <div className="bg-[#FFEEF9] shadow-md rounded-xl p-6 md:p-10 relative">
        {/* Tanda Petik Atas */}
        <div className="absolute -top-8 left-8 text-purple-400 text-8xl font-semibold font-serif">“</div>
        <p className="text-center text-lg md:text-lg font-bold text-[#5A4B6B] leading-relaxed">
          Menjadi platform utama berbagi kebaikan di mana setiap donasi mampu mengubah kehidupan anak-anak yatim
          menjadi lebih sehat, berdaya, dan penuh harapan.
        </p>
        {/* Tanda Petik Bawah */}
<div className="absolute bottom-0 right-8 translate-y-1/2 text-purple-400 text-8xl font-semibold font-serif">
    ”
  </div>
      </div>
    </div>

    {/* Box 3: MISI (kanan lagi) */}
    <div className="max-w-[85%] ml-auto">
      <h3 className="text-2xl md:text-3xl font-bold text-center text-purple-700 mb-6">MISI</h3>
      <div className="bg-gradient-to-b from-[#ebe8e8] to-[#d8d4d4] shadow-md rounded-xl p-6 md:p-10">
        <ol className="list-decimal list-inside space-y-3 font-bold text-[#5A4B6B] leading-relaxed">
          <li>Menjadi jembatan kebaikan antara para donatur dan anak-anak yang membutuhkan uluran tangan, baik dari sisi kesehatan, pendidikan, maupun kesejahteraan hidup.</li>
          <li>Memberikan kemudahan donasi yang aman, transparan, dan mudah diakses oleh semua kalangan.</li>
          <li>Meningkatkan kesadaran masyarakat akan pentingnya peduli dan berbagi dengan anak-anak yatim sehingga tercipta lingkungan sosial yang lebih berkeadilan dan berkesetaraan.</li>
          <li>Mendorong kolaborasi dengan berbagai pihak sosial dan komunitas dalam rangka memberikan dampak positif yang lebih luas kepada masyarakat menyeluruh.</li>
          <li>Menjaga transparansi dan akuntabilitas dalam setiap proses distribusi bantuan agar kepercayaan donatur tetap terjaga dan berkembang.</li>
        </ol>
      </div>
    </div>

  </div>
</section>

{/* ===== SECTION: HUBUNGI KAMI ===== */}
<section id="hubungi" className="bg-gradient-to-r from-[#5A4B6B] to-[#977DFF] py-10">
  <div className="max-w-6xl mx-auto px-6 ">
    <h2 className="text-2xl md:text-3xl font-bold text-white/70">
      kami senang mendengar masukan dan saran anda
    </h2>
  </div>
</section>

<section className="bg-white py-16">
  <div className="max-w-5xl mx-auto px-6">
    <h3 className="text-xl font-bold text-black mb-6">
      Hubungi Kami – <span className="text-[#5A4B6B] text-2xl font-bold">DermaKita</span>
    </h3>
    <p className="text-black font-bold text-xl mb-6">
      Kami siap mendengarkan Anda! <br />
      Untuk pertanyaan, saran, kerja sama, atau informasi lebih lanjut,
      silakan hubungi kami melalui:
    </p>

    {/* Kontak */}
<div className="space-y-5">
  {/* Alamat */}
  <div className="flex items-center space-x-3">
    <img src={LocationIcon} alt="location" className="w-12 h-auto " />
    <p className="text-black font-regular text-lg">Jl. KH.Ridwan, Kajoran, Indonesia</p>
  </div>

  {/* Telepon */}
  <div className="flex items-center space-x-3">
    <img src={PhoneIcon} alt="phone" className="w-12 h-auto " />
    <p className="text-black font-regular text-lg">+62 812-3456-7880</p>
  </div>

  {/* Email */}
  <div className="flex items-center space-x-3">
    <img src={EmailIcon} alt="email" className="w-12 h-auto " />
    <p className="text-black font-regular text-lg">dermaSAPakita@gmail.com</p>
  </div>
</div>

  </div>
</section>

{/* ===== SECTION: KEBIJAKAN PRIVASI ===== */}
<section id="privacy" className="bg-white">
  {/* Garis gradasi */}
  <div className="bg-gradient-to-r from-[#5A4B6B] to-[#AF92D1] h-[32px] w-full"></div>

  {/* Konten judul */}
  <div className="max-w-6xl mx-auto px-6 py-6">
<h2 className="text-2xl md:text-6xl font-bold bg-gradient-to-r from-[#AF92D1] to-[#5B4B99] bg-clip-text text-transparent">
  KEBIJAKAN PRIVACY

    </h2>
    <p className=" text-xl text-gray-600 mt-1">
      Beranda &gt;&gt; Tentang Kami
    </p>
  </div>
</section>


<section className="bg-white py-8">
  <div className="max-w-5xl mx-auto px-6 space-y-12 text-gray-800 leading-relaxed">

    {/* === PRIVACY POLICY === */}
    <p>
      DermaKita berkomitmen untuk melindungi dan menghargai privasi pengguna aplikasi kami.
      Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan,
      menyimpan, dan mengamankan informasi pribadi Anda saat Anda menggunakan aplikasi DermaKita.
    </p>

    <div>
      <h3 className="font-semibold text-lg mb-2">1. Informasi yang Kami Kumpulkan</h3>
      <ul className="list-disc pl-6 space-y-1">
        <li>Nama</li>
        <li>Nomor telepon</li>
        <li>Alamat email</li>
        <li>Identitas pengguna (ID pengguna)</li>
        <li>Informasi transaksi donasi</li>
        <li>Data yang berkaitan dengan kebutuhan anak yatim</li>
        <li>Foto atau dokumen yang digunakan dalam aplikasi</li>
        <li>Lokasi/Alamat</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-lg mb-2">2. Tujuan Pengumpulan Data</h3>
      <ul className="list-disc pl-6 space-y-1">
        <li>Memproses dan mengelola donasi serta santunan kepada anak yatim</li>
        <li>Memberikan layanan dan membantu koordinasi pendistribusian santunan</li>
        <li>Mengelola akun pengguna dalam aplikasi</li>
        <li>Komunikasi terkait transaksi dan informasi penting aplikasi</li>
        <li>Meningkatkan kualitas layanan aplikasi</li>
        <li>Memenuhi kewajiban hukum dan peraturan yang berlaku</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-lg mb-2">3. Penggunaan dan Penyimpanan Data</h3>
      <p>
        Data pribadi Anda hanya digunakan sesuai tujuan di atas. Kami menjaga data Anda dengan standar keamanan
        tinggi dan hanya dapat diakses oleh pihak berwenang.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-lg mb-2">4. Pengungkapan Data Kepada Pihak Ketiga</h3>
      <p>
        Kami tidak akan membagikan data pribadi Anda kepada pihak ketiga tanpa persetujuan,
        kecuali untuk kepentingan hukum.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-lg mb-2">5. Hak Pengguna</h3>
      <p>
        Anda berhak mengakses, memperbaiki, atau meminta penghapusan data pribadi Anda
        dengan menghubungi kami. Namun, penghapusan data dapat memengaruhi kemampuan Anda
        menggunakan aplikasi.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-lg mb-2">6. Keamanan Data</h3>
      <p>
        Kami menggunakan enkripsi saat mentransmisikan data dan langkah teknis lainnya
        untuk melindungi informasi Anda dari akses yang tidak sah.
      </p>
    </div>

    {/* === TERMS OF SERVICE === */}
    <div className="pt-10 border-t border-gray-300">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        TERMS OF SERVICE DermaKita (Syarat dan Ketentuan)
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">1. Penerimaan Syarat</h3>
          <p>
            Dengan menggunakan aplikasi DermaKita, Anda menyetujui syarat dan ketentuan ini sepenuhnya.
            Jika tidak setuju, harap jangan gunakan aplikasi ini.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">2. Layanan</h3>
          <p>
            DermaKita menyediakan platform digital untuk menyalurkan santunan anak yatim yang sudah terverifikasi.
            Layanan hanya digunakan untuk tujuan positif sesuai ketentuan berlaku.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">3. Akun Pengguna</h3>
          <p>
            Untuk menggunakan fitur aplikasi, Anda mungkin harus mendaftar dengan data benar dan lengkap.
            Anda bertanggung jawab menjaga kerahasiaan akun dan password.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">4. Penggunaan Data</h3>
          <p>
            Data yang Anda berikan digunakan sesuai Kebijakan Privasi. Anda wajib tidak memberikan
            informasi palsu atau menyesatkan.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">5. Tanggung Jawab Pengguna</h3>
          <p>
            Anda tidak diperkenankan menggunakan aplikasi untuk melanggar hukum, menyebar kebencian,
            atau menyalahgunakan layanan.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">6. Batasan Tanggung Jawab</h3>
          <p>
            DermaKita tidak bertanggung jawab atas kerugian akibat penggunaan aplikasi.
            Kami berusaha menyediakan layanan terbaik namun tidak menjamin bebas dari kesalahan.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">7. Perubahan Syarat</h3>
          <p>
            Kami berhak mengubah syarat kapan saja dengan pemberitahuan melalui aplikasi atau email.
            Penggunaan lanjutan dianggap sebagai persetujuan.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">8. Hubungi Kami</h3>
          <p>
            Jika ada pertanyaan atau keluhan, silakan hubungi support@DermaKita.id
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


{/* ===== Garis pembatas full width ===== */}
<div className="bg-gradient-to-r from-[#5A4B6B] to-[#AF92D1] h-[32px] w-full"></div>

{/* ===== SECTION: FAQ Donasi ===== */}
<section id="faq-donasi" className="bg-gray-50 py-16">
  <div className="max-w-6xl mx-auto px-6">
    {/* Header */}
    <h2 className="text-3xl md:text-4xl font-bold text-[#5A4B6B]">
      FAQ
    </h2>
    <p className="text-base text-[#5A4B6B]">
      Beranda &gt;&gt; Donasi
    </p>

    {/* List FAQ Donasi */}
    <div className="mt-8">
      {donasiFAQ.map((item, index) => (
        <FAQCard
          key={item.id}
          item={item}
          isOpen={openDonasi === index}
          onClick={() =>
            setOpenDonasi(openDonasi === index ? null : index)
          }
        />
      ))}
    </div>
  </div>
</section>

{/* ===== Garis pembatas full width ===== */}
<div className="bg-gradient-to-r from-[#5A4B6B] to-[#AF92D1] h-[32px] w-full"></div>

{/* ===== SECTION: FAQ Kabar Mereka ===== */}
<section id="faq-general" className="bg-gray-50 py-16">
  <div className="max-w-6xl mx-auto px-6">
    {/* Header */}
    <h2 className="text-3xl md:text-4xl font-bold text-[#5A4B6B]">
      FAQ
    </h2>
    <p className="text-base text-[#5A4B6B]">
      Beranda &gt;&gt; Kabar Mereka
    </p>

    {/* List FAQ Kabar Mereka (pakai generalFAQ) */}
    <div className="mt-8">
      {generalFAQ.map((item, index) => (
        <FAQCard
          key={item.id}
          item={item}
          isOpen={openGeneral === index}
          onClick={() =>
            setOpenGeneral(openGeneral === index ? null : index)
          }
        />
      ))}
    </div>
  </div>
</section>




{/* ===== SECTION: FOOTER LINK ===== */}
<section className="bg-[#5b4969] py-12">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
    {/* Kolom 1 */}
    <div>
      <h3 className="font-semibold text-white mb-3">DermaKita</h3>
      <ul className="space-y-2 text-gray-200">
        <li>
          <a 
            href="#layanankami" 
            className="hover:text-gray-100 hover:underline transition"
          >
            layanan kami
          </a>
        </li>
        <li>
          <a 
            href="#donasi" 
            className="hover:text-gray-100 hover:underline transition"
          >
            donasi
          </a>
        </li>
      </ul>
    </div>

    {/* Kolom 2 */}
    <div>
      <h3 className="font-semibold text-white mb-3">Tentang Kami</h3>
      <ul className="space-y-2 text-gray-200">
        <li><a href="#tentang" className="hover:text-gray-100 hover:underline transition">tentang kami</a></li>
        <li><a href="#hubungi" className="hover:text-gray-100 hover:underline transition">hubungi kami</a></li>
        <li><a href="#pelayanan" className="hover:text-gray-100 hover:underline transition">kabar mereka</a></li>
        <li><a href="#privacy" className="hover:text-gray-100 hover:underline transition">kebijakan privacy</a></li>
      </ul>
    </div>

    <div>
  <h3 className="font-semibold text-white mb-3">FAQ</h3>
  <ul className="space-y-2 text-gray-200 list-none">
    <li>
      <a href="#faq-donasi" className="hover:text-gray-100 hover:underline transition">
        donasi
      </a>
    </li>
    <li>
      <a href="#faq-general" className="hover:text-gray-100 hover:underline transition">
        kabar mereka
      </a>
    </li>
  </ul>
</div>

  </div>
</section>

      </div>
    </div>
  );

}