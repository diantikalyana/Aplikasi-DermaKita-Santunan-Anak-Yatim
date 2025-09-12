import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

const StatusBadge = ({ status }) => {
  const statusColors = {
    Aktif: "bg-[#52DE3D]",
    "Tidak Aktif": "bg-[#F23F27]",
  };

  const colorClass = statusColors[status] || "bg-gray-500";
  return (
  <span
  className={`flex items-center justify-center text-black text-xs font-medium px-3 py-1 rounded-md ${colorClass}`}
>
  {status}
</span>

  );
};

const Detail = () => {
  const navigate = useNavigate();
  const [dataAnakYatim, setDataAnakYatim] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dummyData = [
      {
        id_anak: 1,
        nama_lengkap: "Ahmad Fauzi",
        tempat_tanggallahir: "Jakarta, 12 Mei 2010",
        alamat: "Jl. Merdeka No. 10, Jakarta",
        nama_wali: "Bapak Fulan",
        status: "Aktif",
      },
      {
        id_anak: 2,
        nama_lengkap: "Siti Aminah",
        tempat_tanggallahir: "Bandung, 3 Maret 2011",
        alamat: "Jl. Braga No. 5, Bandung",
        nama_wali: "Ibu Fulanah",
        status: "Tidak Aktif",
      },
      {
        id_anak: 3,
        nama_lengkap: "Budi Santoso",
        tempat_tanggallahir: "Surabaya, 21 Januari 2012",
        alamat: "Jl. Kenjeran No. 7, Surabaya",
        nama_wali: "Pak Ahmad",
        status: "Tidak Aktif",
      },
    ];

    setTimeout(() => {
      setDataAnakYatim(dummyData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleClick = (id) => {
    navigate(`/relawan/data-anak-yatim/detailanak/${id}`);
  };

  return (
    <div className="flex min-h-screen font-raleway bg-white text-gray-800">
      <style>{fontStyle}</style>
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-4 overflow-auto">
          <div className="bg-[#f0f0f0] rounded-xl shadow-md overflow-hidden">
            {/* Header judul */}
            <div className="bg-[#f0f0f0] p-3 flex items-center">
              <button
                onClick={() => navigate("/admin/data-anak-yatim/pengajuan")}
                className="flex flex-col items-start text-left bg-[#493953] hover:bg-[#836f8f] px-6 py-3 rounded-lg shadow transition relative text-white w-70"
              >
                {/* Judul */}
                <span className="text-lg font-normal">Data Anak Yatim</span>
                {/* Subjudul italic */}
              </button>
            </div>

            {loading ? (
              <p className="p-4">Memuat data...</p>
            ) : dataAnakYatim.length === 0 ? (
              <p className="p-4 text-gray-500">Data tidak tersedia.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left text-gray-700">
                  <thead className="bg-[#f0f0f0] border-b w-70 border-[#c1b9ca]">
                    <tr>
                      <th className="px-4 py-2">No</th>
                      <th className="px-4 py-2">Nama Lengkap</th>
                      <th className="px-4 py-2">Tempat, Tanggal Lahir</th>
                      <th className="px-4 py-2">Alamat</th>
                      <th className="px-4 py-2">Wali</th>
                      <th className="px-4 py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataAnakYatim.map((anak, index) => (
                      <tr
                        key={anak.id_anak}
                        className="hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleClick(anak.id_anak)}
                      >
                        <td className="px-4 py-2">{index + 1}</td>
                        <td className="px-4 py-2">{anak.nama_lengkap}</td>
                        <td className="px-4 py-2">{anak.tempat_tanggallahir}</td>
                        <td className="px-4 py-2">{anak.alamat}</td>
                        <td className="px-4 py-2">{anak.nama_wali}</td>
                        <td className="px-4 py-2">
                          <StatusBadge status={anak.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Detail;
