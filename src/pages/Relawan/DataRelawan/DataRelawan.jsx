import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import Sidebar from "../../../components/SidebarRelawan";
import Navbar from "../../../components/NavbarRelawan";

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
  body, .font-raleway {
    font-family: 'Raleway', sans-serif;
  }
`;

const dummyRelawans = [
  {
    id: 0,
    username: "Relawan_01",
    password: "12345678",
    status: "Aktif",
    lastLogin: "12:30:52, 12 Desember 2025",
  },
  {
    id: 1,
    username: "Relawan_02",
    password: "87654321",
    status: "Aktif",
    lastLogin: "09:30:52, 12 Desember 2025",
  },
];

const DataRelawan = () => {
  const [relawans, setRelawan] = useState(dummyRelawans);
  const [selectedRelawan, setSelectedRelawan] = useState(null);
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleEditClick = (relawan) => {
    setSelectedRelawan(relawan);
    setFormData({ username: relawan.username, password: relawan.password });
  };

  const handleCloseModal = () => {
    setSelectedRelawan(null);
  };

  const handleSaveChanges = () => {
    setRelawan((prev) =>
      prev.map((relawan) =>
        relawan.id === selectedRelawan.id
          ? { ...relawan, username: formData.username, password: formData.password }
          : relawan
      )
    );
    handleCloseModal();
  };

  return (
    <div className="flex min-h-screen bg-white font-raleway relative">
      <style>{fontStyle}</style>

      <Sidebar />

      <div className="flex flex-col flex-1 relative">
        <Navbar />

        <main className="p-6 bg-[#f5f5f5] overflow-y-auto relative z-10">
          <div className="bg-gray-200 rounded-xl p-6 shadow-md max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[#493953] mb-6">Data Relawan</h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relawans.map((relawan) => (
                <div
                  key={relawan.id}
                  className="bg-white rounded-xl p-5 shadow hover:shadow-md transition-all border border-gray-100"
                >
                  <div className="text-sm text-gray-700 mb-4 space-y-1">
                    <p><span className="font-semibold">Username:</span> {relawan.username}</p>
                    <p><span className="font-semibold">Password:</span> {relawan.password}</p>
                    <p><span className="font-semibold">Status:</span> {relawan.status}</p>
                    <p><span className="font-semibold">Last Login:</span> {relawan.lastLogin}</p>
                  </div>
                  <button
                    onClick={() => handleEditClick(relawan)}
                    title="Edit data relawan"
                    className="mt-2 bg-gradient-to-r from-[#8673A1] to-[#A084CA] text-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-2"
                  >
                    <FiEdit size={16} />
                    Edit
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Modal Edit */}
        {selectedRelawan && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-sm">
            <div className="bg-white p-6 rounded-2xl shadow-2xl w-[90vw] max-w-md border border-purple-300">
              <h3 className="text-xl font-semibold mb-4 text-[#493953] text-center">Edit Relawan</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                    type="text"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <input
                    type="text"
                    value={selectedRelawan.status}
                    disabled
                    className="w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    onClick={handleCloseModal}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition"
                  >
                    Batal
                  </button>
                  <button
                    onClick={handleSaveChanges}
                    className="px-4 py-2 bg-gradient-to-r from-[#8673A1] to-[#A084CA] text-white rounded-lg shadow-md hover:shadow-lg transition"
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataRelawan;
