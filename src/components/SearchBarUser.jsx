import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBarUser() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center w-full max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cari sesuatu..."
        className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
      >
        Cari
      </button>
    </form>
  );
}

export default SearchBarUser;