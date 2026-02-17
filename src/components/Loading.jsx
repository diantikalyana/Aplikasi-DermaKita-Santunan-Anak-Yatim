// src/components/Loading.jsx
import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#ba9cda] via-[#5A4B6B] to-[#5A4B6B] z-50">
      <div className="flex space-x-3">
        <span className="w-5 h-5 bg-white rounded-full animate-bounce"></span>
        <span
          className="w-5 h-5 bg-white rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></span>
        <span
          className="w-5 h-5 bg-white rounded-full animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></span>
      </div>
      <p className="mt-6 text-2xl text-white font-semibold tracking-wide">
        Memuat<span className="animate-pulse">...</span>
      </p>
    </div>
  );
};

export default Loading;
