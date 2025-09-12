import React from "react";
import { useLocation } from "react-router-dom";

function SearchResultsPage() {
  const location = useLocation();

  // Ambil query dari URL (?q=...)
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q");

  // Dummy data contoh
  const data = [
    { id: 1, title: "Donasi Pendidikan", desc: "Bantu anak-anak sekolah." },
    { id: 2, title: "Donasi Kesehatan", desc: "Bantu pasien membutuhkan." },
    { id: 3, title: "Donasi Sosial", desc: "Program santunan warga." },
    { id: 4, title: "Berita Urgensi Banjir", desc: "Info darurat banjir." },
  ];

  // Filter hasil berdasarkan query
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes((query || "").toLowerCase())
  );

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Hasil Pencarian</h1>
      {query ? (
        filteredData.length > 0 ? (
          <ul className="space-y-4">
            {filteredData.map((item) => (
              <li
                key={item.id}
                className="p-4 bg-white shadow rounded-md border border-gray-200"
              >
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600">{item.desc}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Tidak ada hasil untuk "{query}"</p>
        )
      ) : (
        <p className="text-gray-500">Masukkan kata kunci untuk mencari.</p>
      )}
    </div>
  );
}

export default SearchResultsPage;