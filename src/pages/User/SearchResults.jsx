import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q"); // ambil keyword dari URL
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      // Panggil API backend kamu untuk cari data
      axios
        .get(`http://localhost:8000/api/search?q=${encodeURIComponent(query)}`)
        .then((res) => {
          setResults(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching search results:", err);
          setLoading(false);
        });
    }
  }, [query]);

  if (loading) {
    return <p className="p-4">🔍 Sedang mencari "{query}"...</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">
        Hasil pencarian untuk: <span className="text-[#6B3FA0]">"{query}"</span>
      </h2>

      {results.length === 0 ? (
        <p>Tidak ada hasil ditemukan.</p>
      ) : (
        <ul className="space-y-4">
          {results.map((item, index) => (
            <li
              key={index}
              className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg">{item.nama || "Tanpa Nama"}</h3>
              <p className="text-gray-600">{item.deskripsi || "Tidak ada deskripsi"}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;