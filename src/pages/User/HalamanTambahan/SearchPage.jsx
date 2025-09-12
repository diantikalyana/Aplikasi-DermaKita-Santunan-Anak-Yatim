import React, { useState } from "react";
import { Search } from "lucide-react";

const dataList = [
  { id: 1, title: "Donasi", path: "/donasi" },
  { id: 2, title: "Laporan", path: "/laporan" },
  { id: 3, title: "Pengajuan Anak Yatim", path: "/data-anak-yatim/detailanak" },
  { id: 4, title: "Profil Admin", path: "/profil" },
];

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const input = e.target.value;
    setValue(input);

    if (input.length > 0) {
      const filtered = dataList.filter((item) =>
        item.title.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (item) => {
    setValue("");
    setSuggestions([]);
    onSearch(item.path); // langsung navigasi ke path
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && value.trim() !== "") {
      const match = dataList.find((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      if (match) {
        handleSelect(match);
      } else {
        onSearch(`/search?q=${encodeURIComponent(value)}`); // fallback ke search page
      }
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Telusuri..."
        className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6B3FA0] text-sm"
      />
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
        size={18}
      />

      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 top-full mt-1 bg-white border rounded-lg shadow-lg max-h-52 overflow-y-auto z-50">
          {suggestions.map((item) => (
            <li
              key={item.id}
              onClick={() => handleSelect(item)}
              className="px-4 py-2 hover:bg-purple-100 cursor-pointer text-sm text-gray-700"
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
