import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/NavbarRelawan";
import Sidebar from "../../../components/SidebarRelawan";
import axios from "axios";

const fontStyle = `
  @font-face {
    font-family: 'Raleway';
    src: url('/fonts/Raleway-Regular.woff2') format('woff2');
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'Raleway';
    src: url('/fonts/Raleway-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-display: swap;
  }
  @font-face {
    font-family: 'Raleway';
    src: url('/fonts/Raleway-Bold.woff2') format('woff2');
    font-weight: 700;
    font-display: swap;
  }
  .font-raleway {
    font-family: 'Raleway', sans-serif;
  }
`;

const Detail = () => {
  const navigate = useNavigate();
  const [dataAnakYatim, setDataAnakYatim] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleClick = (id) => {
    navigate(`/data-anak-yatim/Detailanak/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://192.168.100.129:8000/api/anak");

        let data = [];
        if (Array.isArray(res.data)) {
          data = res.data;
        } else if (Array.isArray(res.data.data)) {
          data = res.data.data;
        }

        if (!data.length) {
          data = [
            {
              id: 1,
              nama_lengkap: "Arello Mahesa Kynan",
              tempat_TanggalLahir: "Kajoran, 14 Februari 2011",
              alamat: "Kajoran, Kajoran, Magelang",
              wali: "Fulanah",
              status: "Aktif",
            },
            {
              id: 2,
              nama_lengkap: "Elara Vionella Marisse",
              tempat_TanggalLahir: "Sidowangi, 25 Juni 2007",
              alamat: "Sidowangi, Kajoran, Magelang",
              wali: "Fulanah",
              status: "Tidak Aktif",
            },
          ];
        }

        setDataAnakYatim(data);
      } catch (err) {
        setError("Gagal mengambil data: " + err.message);
        setDataAnakYatim([
          {
            id: 1,
            nama_lengkap: "Arello Mahesa Kynan",
            tempat_TanggalLahir: "Kajoran, 14 Februari 2011",
            alamat: "Kajoran, Kajoran, Magelang",
            wali: "Fulanah",
            status: "Aktif",
          },
          {
            id: 2,
            nama_lengkap: "Elara Vionella Marisse",
            tempat_TanggalLahir: "Sidowangi, 25 Juni 2007",
            alamat: "Sidowangi, Kajoran, Magelang",
            wali: "Fulanah",
            status: "Tidak Aktif",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen font-raleway">
      <style>{fontStyle}</style>

      <Sidebar />

      <div className="flex-1 flex flex-col bg-gray-50">
        <Navbar />

        <main className="p-6">
          <div className="bg-[#493953] text-white p-4 w-[250px] rounded-lg shadow relative mb-6">
            <h2 className="text-base font-semibold">Data Anak Yatim</h2>
          </div>

          {loading ? (
            <p className="text-blue-500">Memuat data...</p>
          ) : error && !dataAnakYatim.length ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="overflow-hidden shadow rounded-lg bg-white border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-white text-gray-700 border-b border-gray-300">
                  <tr>
                    <th className="py-3 px-4 text-left font-semibold">No.</th>
                    <th className="py-3 px-4 text-left font-semibold">Nama Lengkap</th>
                    <th className="py-3 px-4 text-left font-semibold">Tempat, Tanggal Lahir</th>
                    <th className="py-3 px-4 text-left font-semibold">Alamat</th>
                    <th className="py-3 px-4 text-left font-semibold">Wali</th>
                    <th className="py-3 px-4 text-left font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {dataAnakYatim.map((anak, index) => (
                    <tr
                      key={anak.id || index}
                      onClick={() => handleClick(anak.id)}
                      className="hover:bg-gray-100 cursor-pointer border-b border-gray-200"
                    >
                      <td className="py-2 px-4">{index + 1}</td>
                      <td className="py-2 px-4">{anak.nama_lengkap}</td>
                      <td className="py-2 px-4">{anak.tempat_TanggalLahir}</td>
                      <td className="py-2 px-4">{anak.alamat}</td>
                      <td className="py-2 px-4">{anak.wali}</td>
                      <td className="py-2 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-white text-xs ${
                            anak.status === "Aktif" ? "bg-green-500" : "bg-red-500"
                          }`}
                        >
                          {anak.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Detail;
