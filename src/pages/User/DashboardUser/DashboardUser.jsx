import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/NavbarUser";
import Sidebar from "../../../components/SidebarUser";
import ikonkoin from "../../../images/ikonkoin.png";
import ikontangan from "../../../images/ikontangan.png";
import empeng from "../../../images/empeng.png";
import kanker from "../../../images/kanker.png";
import kanak from "../../../images/kanak.png";
import panah from "../../../assets/panah.png";

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

function Dashboard() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const beritaUrgensi = [
    {
      img: empeng,
      judul: "Selagi kita bisa makan kenyang, ada anak yatim yang bertahan hidup dengan sisa nasi kemarin. ",
      tanggal: "1 Agustus 2025",
      terkumpul: 4500000,
      target: 10000000,
    },
    {
      img: kanker,
      judul: "Tangis mereka bukan karena nakal, tapi karena kehilangan. Mari bantu ringankan luka anak-anak korban bencana.",
      tanggal: "30 Juli 2025",
      terkumpul: 2500000,
      target: 8000000,
    },
    {
      img: kanak,
      judul: "Tak ada anak yang pantas dibuang—mereka hanya butuh kasih sayang, perhatian, dan uluran tangan kita.",
      tanggal: "28 Juli 2025",
      terkumpul: 6000000,
      target: 12000000,
    },
  ];

  const scrollRight = () => {
    navigate("/user/artikel/beritaurgensi");
  };

  return (
    <div className="flex min-h-screen font-raleway">
      <style>{fontStyle}</style>
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-50 overflow-y-auto">
        {/* Navbar */}
        <Navbar title="Welcome to DermaKita" />

        <main className="flex-1 px-12 py-10">
          {/* Statistik */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-md p-6 flex items-center gap-6">
              <img src={ikonkoin} alt="dana" className="w-20 h-20" />
              <p className="text-[20px] text-black">
                <b className="text-[#5A4B6B] font-semibold text-[22px]">
                  Rp.234.567,00
                </b>{" "}
                telah tersalurkan
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-md p-6 flex items-center gap-6">
              <img src={ikontangan} alt="anak" className="w-[88px] h-[88px]" />
              <p className="text-[20px] text-black">
                <b className="text-[#5A4B6B] font-semibold text-[22px]">
                  500+
                </b>{" "}
                anak terbantu
              </p>
            </div>
          </div>

          {/* Berita Urgensi */}
          <h2 className="text-[28px] font-bold text-[#5A4B6B] mb-6">
            BERITA URGENSI
          </h2>
          <div className="relative w-fit">
            <div className="bg-white rounded-xl shadow-xl shadow-gray-300 p-4 flex items-center gap-6">
              {/* Grid artikel */}
              <div className="grid grid-cols-3 gap-8">
                {beritaUrgensi.map((item, idx) => (
                  <div
                    key={idx}
                 className="w-[255px] cursor-pointer hover:shadow-lg hover:shadow-gray-300 transition rounded-lg overflow-hidden"
                  >
                    {/* Gambar artikel */}
                    <div className="w-[255px] h-[174px] overflow-hidden rounded-md">
                      <img
                        src={item.img}
                        alt={item.judul}
                        className="w-[255px] h-[174px] object-cover"
                      />
                    </div>

                    {/* Konten artikel */}
                    <div className="p-2 flex flex-col gap-1">
                      <p className="font-semibold text-sm text-black leading-tight">
                        {item.judul}
                      </p>
                     

                      {/* Progress bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div
                          className="bg-[#5A4B6B] h-2 rounded-full"
                          style={{
                            width: `${(item.terkumpul / item.target) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <p className="text-[10px] text-[#5A4B6B]">
                        Terkumpul: Rp{item.terkumpul.toLocaleString()} / Rp
                        {item.target.toLocaleString()}
                      </p>

                      {/* Link baca selengkapnya */}
                      <button
                        onClick={() => navigate(`/berita-detail/${idx}`)}
                        className="text-xs text-gray-600 hover:underline text-left"
                      >
                        Baca selengkapnya →
                      </button>

                      <p className="text-[9px] italic text-gray-400 text-right">
                        {item.tanggal}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            {/* Tombol panah kanan */}
<button
  onClick={scrollRight}
  className="ml-2 transform transition-transform duration-200 active:scale-110"
>
  <img src={panah} alt="Panah kanan" className="w-32 h-auto" />
</button>

            </div>
          </div>

          {/* Catatan bawah */}
          <div className="mt-10 bg-purple-50 rounded-xl p-6 border border-purple-100">
            <p className="text-center text-sm italic text-[#5A4B6B]">
              Menyalurkan kebaikan bukan hanya tugas, tapi panggilan hati.
              Selamat datang, (user)!
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
