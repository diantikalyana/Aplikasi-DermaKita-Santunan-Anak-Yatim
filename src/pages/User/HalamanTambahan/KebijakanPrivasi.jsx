import React from "react";
import Sidebar from "../../../components/SidebarUser";
import Navbar from "../../../components/NavbarUser";

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

function KebijakanPrivasi() {
  const username = " Hai (user)!"; // bisa diganti dengan state/dari login nanti
  
  return (
    <div className="flex min-h-screen font-raleway">
      {/* Inject font style */}
      <style>{fontStyle}</style>
      
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar username={username} />
        <div className="flex-1 bg-gray-100 p-10 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-6 text-[#5b4b99]">Kebijakan Privacy Dermakita</h1>
          <div className="bg-white p-6 rounded-xl shadow text-gray-800 space-y-4">
            <p>
              Kami menghargai privasi kamu. Informasi yang kamu berikan kepada aplikasi ini hanya digunakan untuk kepentingan donasi dan tidak akan dibagikan ke pihak ketiga tanpa izin.
            </p>
            <p>
              DermaKita berkomitmen untuk melindungi dan menghargai privasi pengguna aplikasi kami...
            </p>
            <p className="font-semibold">1. Informasi yang Kami Kumpulkan</p>
            <ul className="list-disc list-inside ml-4">
              <li>Nama</li>
              <li>Nomor telepon</li>
              <li>Alamat email</li>
              <li>Identitas pengguna (ID pengguna)</li>
              <li>Informasi transaksi donasi</li>
              <li>Data yang berkaitan dengan kebutuhan anak yatim</li>
              <li>Foto atau dokumen yang digunakan dalam aplikasi</li>
              <li>Lokasi/Alamat</li>
            </ul>
            <p className="font-semibold">Tujuan Pengumpulan Data</p>
            <p>Data Anda dikumpulkan untuk:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Memproses dan mengelola donasi dan santunan kepada anak yatim</li>
              <li>Memberikan layanan dan membantu koordnasi pendistribusian santunan</li>
              <li>Mengelola akun pengguna dalam aplikasi dan personalisasi pengalaman pengguna</li>
              <li>Komunikasi terkait transaksi dan informasi penting aplikasi</li>
              <li>Meningkatkan kualitas layanan aplikasi</li>
              <li>Memenuhi kewajiban hukum dan peraturan yang berlaku</li>
            </ul>
            <p className="font-semibold">3. Penggunaan dan Penyimpanan Data</p>
            <p>
              Data pribadi Anda akan kami gunakan secara terbatas sesuai dengan tujuan kami di atas...
            </p>
            <p className="font-semibold">4. Pengungkapan Data Kepada Pihak Ketiga</p>
            <p>
              Kami tidak akan membagikan data pribadi Anda kepada pihak ketiga tanpa persetujuan...
            </p>
            <p className="font-semibold">5. Hak Pengguna</p>
            <p>
              Anda berhak mengakses, memperbaiki, atau meminta penghapusan data pribadi Anda...
            </p>
            <p className="font-semibold">6. Keamanan Data</p>
            <p>
              Kami menggunakan enkripsi saat mentransmisikan data dan langkah-langkah teknis lainnya...
            </p>
            <p className="font-bold mt-6">TERMS OF SERVICE DermaKita (Syarat dan Ketentuan)</p>
            <p className="font-semibold">Tanggal Berlaku:</p>
            <p className="font-semibold">1. Penerimaan Syarat</p>
            <p>
              Dengan menggunakan aplikasi DermaKita, Anda menyetujui syarat dan ketentuan ini sepenuhnya...
            </p>
            <p className="font-semibold">2. Layanan</p>
            <p>
              DermaKita menyediakan platform digital untuk menyalurkan santunan anak yatim...
            </p>
            <p className="font-semibold">3. Akun Pengguna</p>
            <p>
              Untuk menggunakan fitur aplikasi, Anda mungkin harus mendaftar...
            </p>
            <p className="font-semibold">4. Penggunaan Data</p>
            <p>
              Data yang Anda berikan akan digunakan sesuai dengan Kebijakan Privacy kami...
            </p>
            <p className="font-semibold">5. Tanggung Jawab Pengguna</p>
            <p>
              Anda tidak diperkenankan menggunakan aplikasi untuk tujuan melanggar hukum...
            </p>
            <p className="font-semibold">6. Batasan Tanggung Jawab</p>
            <p>
              DermaKita tidak bertanggung jawab atas kerugian tidak langsung...
            </p>
            <p className="font-semibold">7. Perubahan Syarat</p>
            <p>
              Kami berhak mengubah syarat dan ketentuan ini kapan saja dengan pemberitahuan...
            </p>
            <p className="font-semibold">8. Hubungi Kami</p>
            <p>
              Jika Anda memiliki pertanyaan atau keluhan terkait layanan, silakan hubungi support@DermaKita.id
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KebijakanPrivasi;