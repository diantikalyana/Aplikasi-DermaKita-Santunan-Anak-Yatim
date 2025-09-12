import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "../../../assets/Arrow.png"; // import panah

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

const Pengajuan = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const dummyData = [
      { id: 1, nama_anak: "Ahmad Fauzi", tempat_lahir: "Jakarta", tanggal_lahir: "2010-05-12", alamat: "Jl. Melati No. 45, Jakarta", nama_wali: "Budi Santoso" },
      { id: 2, nama_anak: "Siti Aminah", tempat_lahir: "Bandung", tanggal_lahir: "2011-09-23", alamat: "Jl. Kenanga No. 12, Bandung", nama_wali: "Sulastri" },
      { id: 3, nama_anak: "Dewi Lestari", tempat_lahir: "Surabaya", tanggal_lahir: "2009-11-03", alamat: "Jl. Mawar No. 8, Surabaya", nama_wali: "Slamet Riyadi" },
    ];
    setData(dummyData);
  }, []);

  return (
    <div className="flex min-h-screen font-raleway">
      <style>{fontStyle}</style>
      <Sidebar />
      <div className="flex-1 flex flex-col bg-white">
        <Navbar showNotif={data.length > 0} />

        <main className="p-6 flex-1">
{/* Tombol Kembali */}
<div className="mt-2 flex justify-start"> {/* dikurangi margin-top */}
  <button
    onClick={() => navigate(-1)}
    className="inline-flex items-center gap-2 px-5 py-2 text-white font-semibold -translate-y-2"
  >
    <img src={ArrowLeft} alt="Kembali" className="w-10 h-auto" />
  </button>
</div>

          {/* Box utama list + tombol */}
          <div className="bg-[#f0f0f0] shadow-md rounded-lg overflow-hidden p-6">
            
            {/* Header */}
            <div className="bg-[#493953] text-white px-6 py-4 rounded-lg shadow mb-6 w-70">
              <h1 className="text-lg font-semibold">Data Pengajuan Verifikasi</h1>
            </div>

            {/* Table list langsung di box utama */}
            <table className="w-full text-sm text-left bg-[#f0f0f0] rounded-lg">
              <thead className="bg-[#f0f0f0] text-gray-700 text-bold border-b border-[#bdb1c5]">
                <tr>
                  <th className="px-4 py-3">No.</th>
                  <th className="px-4 py-3">Nama Lengkap</th>
                  <th className="px-4 py-3">Tempat, Tanggal Lahir</th>
                  <th className="px-4 py-3">Alamat</th>
                  <th className="px-4 py-3">Wali</th>
                  <th className="px-4 py-3">Operasi</th>
                </tr>
              </thead>
              <tbody className="text-black">
                {data.map((anak, index) => (
                  <tr
                    key={anak.id}
                    className="hover:bg-gray-100 transition cursor-pointer"
                    onClick={() =>
                      navigate(`/admin/data-anak-yatim/pengajuan/:id${anak.id}`)
                    }
                  >
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">{anak.nama_anak}</td>
                    <td className="px-4 py-3">
                      {anak.tempat_lahir}, {anak.tanggal_lahir}
                    </td>
                    <td className="px-4 py-3">{anak.alamat || "-"}</td>
                    <td className="px-4 py-3">{anak.nama_wali || "-"}</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-[#493953] text-white">
                        Verifikasi
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>


          </div>
        </main>
      </div>
    </div>
  );
};

export default Pengajuan;
