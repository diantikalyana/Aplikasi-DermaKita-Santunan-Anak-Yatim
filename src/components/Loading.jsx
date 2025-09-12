// src/components/Loading.jsx
import React from "react";


const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
      <div className="relative w-16 h-16">
        {/* Lingkaran abu-abu tipis background */}
        <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>

        {/* Lingkaran gradasi muter */}
        <div
          className="absolute inset-0 rounded-full  animate-spin"
          style={{
            borderImage: "conic-gradient(#8673A1, #7C83FD, #5EDFFF, #8673A1) 1",
            borderStyle: "solid",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
