// src/pages/FAQ.jsx
import React, { useState } from "react";
import Sidebar from "../../../components/SidebarUser";
import Navbar from "../../../components/NavbarUser";
import { ChevronDown } from "lucide-react";

// Definisi font Raleway
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
  .font-raleway {
    font-family: 'Raleway', sans-serif;
  }
`;

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Data FAQ
  const faqData = [
    {
      id: 1,
      question: "Apa itu DermaKita?",
      answer:
        "DermaKita merupakan platform donasi yang bertujuan untuk membantu sesama dengan cara yang mudah dan aman.",
    },
    {
      id: 2,
      question: "Bagaimana cara berdonasi di DermaKita?",
      answer:
        "Pilih program donasi yang ingin kamu bantu, lalu klik tombol \"Donasi Sekarang\". Ikuti petunjuk untuk melakukan pembayaran dan upload bukti transfer.",
    },
    {
      id: 3,
      question: "Apakah data saya aman?",
      answer:
        "Ya, data pribadi kamu akan kami jaga dengan baik sesuai dengan kebijakan privasi yang berlaku.",
    },
    {
      id: 4,
      question: "Kapan bantuan akan disalurkan?",
      answer:
        "Bantuan akan disalurkan secara berkala sesuai dengan jadwal yang telah ditentukan oleh tim DermaKita.",
    },
  ];

  // Komponen FAQCard mirip di landing
  const FAQCard = ({ item, isOpen, onClick }) => (
    <div className="bg-[#D9D9D9]/30 shadow-lg shadow-gray-600/30 rounded-xl mb-6 transition-all">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full text-left p-4 
                 rounded-2xl shadow-md shadow-gray-500/70 
                 hover:bg-gray-100/60 transition"
      >
        <div className="flex gap-3 items-center">
          <span className="text-gray-600 font-bold">{item.id}.</span>
          <h4 className="font-bold text-gray-800">{item.question}</h4>
        </div>
        <ChevronDown
          className={`text-gray-600 w-8 h-8 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-700 font-medium px-6 pt-4 pb-6 pl-14">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50 font-raleway">
      <style>{fontStyle}</style>
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar title="Hai, pengguna!" />

        <div className="flex-1 px-10 py-8 max-w-5xl mx-auto w-full">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-8 
                         bg-gradient-to-r from-[#AF92D1] to-[#5B4B99] 
                         bg-clip-text text-transparent">
            FAQ
          </h1>

          {faqData.map((faq, index) => (
            <FAQCard
              key={faq.id}
              item={faq}
              isOpen={openFAQ === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}

          <p className="text-center text-xs text-gray-500 pt-10">
            © 2025{" "}
            <span className="font-semibold text-[#5a4b6b]">DermaKita.</span> Seluruh hak cipta dilindungi undang-undang.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
