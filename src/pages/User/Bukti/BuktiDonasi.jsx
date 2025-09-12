import React from "react";
import { useNavigate } from "react-router-dom";

const BuktiDonasi = () => {
  const navigate = useNavigate();

  const handleKirim = () => {
    navigate("/konfirmasi-bukti");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-sans">
      <div className="flex rounded-xl overflow-hidden shadow-lg max-w-6xl w-full">
        {/* PANEL KIRI */}
        <div className="w-1/2 bg-gradient-to-b from-[#B091D1] to-[#5A4B6B] text-white p-10 flex flex-col justify-center items-center">
          <div className="bg-[#B091D1] rounded-xl px-6 py-8 shadow-lg flex flex-col items-center text-center">
            <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow">
              <span className="text-[#B091D1] text-4xl">✔️</span>
            </div>
            <h2 className="text-xl font-bold mb-1">DONASI BERHASIL--!!</h2>
            <p className="text-xs text-white mb-4 px-2">
              Kebaikan Anda adalah harapan bagi sesama. <br /> Terima kasih!
            </p>
            <p className="text-sm text-white font-semibold mb-1">TOTAL DONASI</p>
            <p className="text-lg font-bold text-white">Rp.---.---</p>
          </div>
        </div>

        {/* PANEL KANAN */}
        <div className="w-1/2 bg-white p-10 flex flex-col justify-start items-center">
          <h2 className="text-xl font-bold text-[#6B4B9A] mb-5">LAMPIRAN BUKTI</h2>

          <div className="border border-gray-300 rounded-xl p-5 text-sm text-gray-700 w-full max-w-md shadow-md">
            <div className="text-center mb-3">
              <span className="font-bold text-[#0066b3] text-base">BRI</span>
              <span className="text-[#FF6600] font-semibold text-base ml-0.5">mo</span>
              <p className="text-sm font-semibold text-gray-800 mt-1">Transaksi Berhasil</p>
            </div>

            <hr className="my-2 border-gray-300" />

            <p><strong>Tanggal</strong>: 2021-01-06 08:34:48 WIB</p>
            <p><strong>Nomor Referensi</strong>: 216858198936</p>

            <div className="mt-2">
              <p><strong>Sumber Dana</strong>: CEPTARINA PELAWI 3274 **** 537</p>
              <p><strong>Jenis Transaksi</strong>: Transfer Bank BRI</p>
              <p><strong>Bank Tujuan</strong>: BANK BRI</p>
              <p><strong>Nomor Tujuan</strong>: 530601043435333</p>
              <p><strong>Nama Tujuan</strong>: CEPTARINA PELAWI</p>
              <p><strong>Keterangan</strong>: Aku</p>
              <p className="font-bold mt-2"><strong>Nominal</strong>: Rp5.000.000</p>
            </div>
          </div>

          <button
            onClick={handleKirim}
            className="mt-6 bg-[#B091D1] hover:bg-[#a684cc] text-white font-semibold py-2 px-10 rounded-full shadow-md transition"
          >
            KIRIM BUKTI
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuktiDonasi;
