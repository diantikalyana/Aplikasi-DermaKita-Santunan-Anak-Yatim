import React from "react";

const AllertPengajuan = ({ isOpen, type = "success", title, message, onSend, onClose }) => {
  if (!isOpen) return null;

  // arah & warna gradasi sesuai type
  const gradientClass =
    type === "success"
      ? "bg-gradient-to-r from-[#5A4A6B] to-[#B091D1]" // nyamping (success)
      : "bg-gradient-to-b from-[#F23F27] to-[#C3B5B5]"; // atas → bawah (error)

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className={`${gradientClass} text-white rounded-xl shadow-lg p-6 w-full max-w-sm text-center`}
      >
        {/* Judul */}
        <h2 className="text-lg font-bold mb-2">{title}</h2>

        {/* Pesan */}
        <p className="italic text-sm mb-6">{message}</p>

        {/* Tombol */}
        <div className="flex justify-center">
          <button
            onClick={onSend}
            className="bg-white text-gray-800 font-semibold px-4 py-2 rounded-md shadow hover:bg-gray-100"
          >
            Kirim ke User
          </button>
        </div>

        {/* Tombol tutup opsional */}
        <div className="mt-3">
          <button
            onClick={onClose}
            className="text-xs text-gray-200 hover:underline"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllertPengajuan;
