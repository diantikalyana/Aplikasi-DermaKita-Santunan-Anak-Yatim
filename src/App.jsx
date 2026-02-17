import React from "react";
import ProtectedRoute from "./routes/ProtectedRoute";

// ================= LOGIN =================
import LoginPage from "./pages/User/Autentifikasi/LoginPage";
import SignupPage from "./pages/User/Autentifikasi/SignupPage";

// ================= ADMIN =================
import DashboardAdmin from "./pages/Admin/DashboardAdmin";
import NotifikasiAdmin from "./pages/Admin/Notifikasi";
import DetailAnakAdmin from "./pages/Admin/data-anak-yatim/Detail";
import DonasiAdmin from "./pages/Admin/Donasi";
import DetailAnakByIdAdmin from "./pages/Admin/data-anak-yatim/Detailanak";
import EditDetailAnakAdmin from "./pages/Admin/data-anak-yatim/Editdetailanak";
import PengajuanAdmin from "./pages/Admin/data-anak-yatim/Pengajuan";
import PengajuanDetailAdmin from "./pages/Admin/data-anak-yatim/PengajuanDetail";
import LaporanAdmin from "./pages/Admin/Laporan/Laporan";
import DataPenyaluranAdmin from "./pages/Admin/Laporan/Datapenyaluran";
import RekapPenyaluranAdmin from "./pages/Admin/Laporan/Rekappenyaluran";
import DataAdmin from "./pages/Admin/DataAdmin";
import EditDataAdmin from "./pages/Admin/Editdataadmin";
import ArtikelAdmin from "./pages/Admin/Artikel/Artikel";
import DetailArtikelAdmin from "./pages/Admin/Artikel/DetailArtikel";
import EditArtikelAdmin from "./pages/Admin/Artikel/EditArtikel";
import UploadArtikelAdmin from "./pages/Admin/Artikel/Uploadartikel";
import DokumentasiAdmin from "./pages/Admin/Dokumentasi/Dokumentasi";
import DokumentasiUmumAdmin from "./pages/Admin/Dokumentasi/DokumentasiUmum";
import DokumentasiKhususAdmin from "./pages/Admin/Dokumentasi/DokumentasiKhusus";
import DetailDokumentasiKhusus from "./pages/Admin/Dokumentasi/DetailDokumentasiKhusus";
import DetailDokumentasiUmum from "./pages/Admin/Dokumentasi/DetailDokumentasiUmum";


// ================= RELAWAN =================
import DashboardRelawan from "./pages/Relawan/DashboardRelawan/DashboardRelawan";
import ArtikelRelawan from "./pages/Relawan/ArtikelRelawan/ArtikelRelawan";
import DetailArtikelRelawan from "./pages/Relawan/ArtikelRelawan/DetailArtikelRelawan";
import DetailRelawan from "./pages/Relawan/data-anak-yatimRelawan/DetailRelawan";
import DetailAnakRelawan from "./pages/Relawan/data-anak-yatimRelawan/DetailanakRelawan";
import DokumentasiRelawan from "./pages/Relawan/DokumentasiRelawan/DokumentasiRelawan";
import DokumentasiUmumRelawan from "./pages/Relawan/DokumentasiRelawan/DokumentasiUmumRelawan";
import DokumentasiKhususRelawan from "./pages/Relawan/DokumentasiRelawan/DokumentasiKhususRelawan";
import EditDokumentasiUmumRelawan from "./pages/Relawan/DokumentasiRelawan/EditDokumentasiUmumRelawan.jsx";
import EditDokumentasiKhususRelawan from "./pages/Relawan/DokumentasiRelawan/EditDokumentasiKhususRelawan.jsx";
import UploadDokumentasiUmumRelawan from "./pages/Relawan/DokumentasiRelawan/UploadDokumentasiUmumRelawan.jsx";
import UploadDokumentasiKhususRelawan from "./pages/Relawan/DokumentasiRelawan/UploadDokumentasiUrgensiRelawan.jsx";
import DetailDokumentasiKhususRelawan from "./pages/Relawan/DokumentasiRelawan/DetailDokumentasiKhususRelawan";
import DetailDokumentasiUmumRelawan from "./pages/Relawan/DokumentasiRelawan/DetailDokumentasiUmumRelawan";
import LaporanRelawan from "./pages/Relawan/LaporanRelawan/LaporanRelawan";
import DataPenyaluranRelawan from "./pages/Relawan/LaporanRelawan/DatapenyaluranRelawan";
import RekapPenyaluranRelawan from "./pages/Relawan/LaporanRelawan/RekappenyaluranRelawan";
import UploadDataRelawan from "./pages/Relawan/LaporanRelawan/UploadDataRelawan";
import UploadRekapRelawan from "./pages/Relawan/LaporanRelawan/UploadRekapRelawan";
import EditDataPenyaluranRelawan from "./pages/Relawan/LaporanRelawan/EditDataPenyaluranRelawan";
import EditRekapPenyaluranRelawan from "./pages/Relawan/LaporanRelawan/EditRekapPenyaluranRelawan";
import DataRelawan from "./pages/Relawan/DataRelawan/DataRelawan";
import NotifikasiRelawan from "./pages/Relawan/NotifikasiRelawan/NotifikasiRelawan";


// ================= SHARED =================
import DetailDokumentasi from "./pages/Shared/Dokumentasi/DetailDokumentasiRelawan";

// ================= USER =================
import LandingPage from "./pages/User/Landing/LandingPage";
import DashboardUser from "./pages/User/DashboardUser/DashboardUser";
import DonasiPage from "./pages/User/MenuUtama/DonasiPage";
import PengajuanPage from "./pages/User/MenuUtama/PengajuanPage";
import DonasiUrgensi from "./pages/User/MenuUtama/DonasiUrgensi";
import SuksesDonasi from "./pages/User/MenuUtama/SuksesDonasiPage.jsx";
import RiwayatPage from "./pages/User/MenuUtama/RiwayatPage";
import BuktiDonasi from "./pages/User/Bukti/BuktiDonasi";
import KonfirmasiBukti from "./pages/User/Bukti/KonfirmasiBukti";
import KonfirmasiPengajuan from "./pages/User/Bukti/KonfirmasiPengajuan";
import BuktiTersalurkan from "./pages/User/Penyaluran/BuktiTersalurkan";
import BuktiPenyaluranUrgensi from "./pages/User/Penyaluran/BuktiPenyaluranUrgensi";
import BuktiPenyaluranUmum from "./pages/User/Penyaluran/BuktiPenyaluranUmum";
import DetailPenyaluranUmum from "./pages/User/Penyaluran/DetailPenyaluranUmum";
import DetailPenyaluranUrgensi from "./pages/User/Penyaluran/DetailPenyaluranUrgensi";
import BeritaUrgensi from "./pages/User/Artikel/BeritaUrgensi";
import DetailBeritaUrgensi from "./pages/User/Artikel/DetailBeritaUrgensi";
import DaftarRelawan from "./pages/User/DaftarRelawan/DaftarRelawan";
import FAQ from "./pages/User/HalamanTambahan/FAQ";
import KebijakanPrivasi from "./pages/User/HalamanTambahan/KebijakanPrivasi";
import KelolaAkun from "./pages/User/HalamanTambahan/KelolaAkun";
import NotifikasiUser from "./pages/User/HalamanTambahan/NotifikasiUser";
import ProfilPage from "./pages/User/HalamanTambahan/ProfilPage";
import SearchPage from "./pages/User/HalamanTambahan/SearchPage";
import SearchResultsPage from "./pages/User/SearchResultsPage";


// ================= UNAUTHORIZED & FALLBACK =================
const Unauthorized = () => <h1>403 - Unauthorized</h1>;
const FallbackApi = () => <h1>Fallback Route Aktif (cek API endpoint Anda)</h1>;

// ================= APP =================
const App = () => {
  return (
    <Router>
      <Routes>
        {/* LOGIN */}
        <Route path="/user/autentifikasi" element={<LoginPage />} />
        <Route path="/user/autentifikasi/signup" element={<SignupPage />} />

        {/* ================= ADMIN ================= */}
        <Route path="/admin/dashboard" element={<ProtectedRoute allowedRoles={["admin"]}><DashboardAdmin /></ProtectedRoute>} />
        <Route path="/admin/notifikasi" element={<ProtectedRoute allowedRoles={["admin"]}><NotifikasiAdmin /></ProtectedRoute>} />

        <Route path="/admin/data-anak-yatim" element={<ProtectedRoute allowedRoles={["admin"]}><DetailAnakAdmin /></ProtectedRoute>} />
        <Route path="/admin/donasi" element={<ProtectedRoute allowedRoles={["admin"]}><DonasiAdmin /></ProtectedRoute>} />
        <Route path="/admin/data-anak-yatim/detailanak/:id" element={<ProtectedRoute allowedRoles={["admin"]}><DetailAnakByIdAdmin /></ProtectedRoute>} />
        <Route path="/admin/data-anak-yatim/edit/:id" element={<ProtectedRoute allowedRoles={["admin"]}><EditDetailAnakAdmin /></ProtectedRoute>} />
        <Route path="/admin/data-anak-yatim/pengajuan" element={<ProtectedRoute allowedRoles={["admin"]}><PengajuanAdmin /></ProtectedRoute>} />
        <Route path="/admin/data-anak-yatim/pengajuan/:id" element={<ProtectedRoute allowedRoles={["admin"]}><PengajuanDetailAdmin /></ProtectedRoute>} />
        <Route path="/admin/laporan" element={<ProtectedRoute allowedRoles={["admin"]}><LaporanAdmin /></ProtectedRoute>} />
        <Route path="/admin/laporan/datapenyaluran" element={<ProtectedRoute allowedRoles={["admin"]}><DataPenyaluranAdmin /></ProtectedRoute>} />
        <Route path="/admin/laporan/rekap/:id" element={<ProtectedRoute allowedRoles={["admin"]}><RekapPenyaluranAdmin /></ProtectedRoute>} />
        <Route path="/admin/dataadmin" element={<ProtectedRoute allowedRoles={["admin"]}><DataAdmin /></ProtectedRoute>} />
        <Route path="/admin/dataadmin/edit/:id" element={<ProtectedRoute allowedRoles={["admin"]}><EditDataAdmin /></ProtectedRoute>} />
        <Route path="/admin/artikel" element={<ProtectedRoute allowedRoles={["admin"]}><ArtikelAdmin /></ProtectedRoute>} />
        <Route path="/admin/detailartikel/:id" element={<ProtectedRoute allowedRoles={["admin"]}><DetailArtikelAdmin /></ProtectedRoute>} />
        <Route path="/admin/artikel/edit/:id" element={<ProtectedRoute allowedRoles={["admin"]}><EditArtikelAdmin /></ProtectedRoute>} />
        <Route path="/admin/artikel/upload" element={<ProtectedRoute allowedRoles={["admin"]}><UploadArtikelAdmin /></ProtectedRoute>} />
        <Route path="/admin/dokumentasi" element={<ProtectedRoute allowedRoles={["admin"]}><DokumentasiAdmin /></ProtectedRoute>} />
        <Route path="/admin/dokumentasi/umum" element={<ProtectedRoute allowedRoles={["admin"]}><DokumentasiUmumAdmin /></ProtectedRoute>} />
        <Route path="/admin/dokumentasi/khusus" element={<ProtectedRoute allowedRoles={["admin"]}><DokumentasiKhususAdmin /></ProtectedRoute>} />
        <Route path="/admin/dokumentasi/umum/:id" element={<ProtectedRoute allowedRoles={["admin"]}><DetailDokumentasiUmum /></ProtectedRoute>}/>
        <Route path="/admin/dokumentasi/khusus/:id" element={<ProtectedRoute allowedRoles={["admin"]}> <DetailDokumentasiKhusus /></ProtectedRoute> }/>
        
        {/* ================= RELAWAN ================= */}
        <Route path="/relawan/dashboard" element={<ProtectedRoute allowedRoles={["relawan"]}><DashboardRelawan /></ProtectedRoute>} />
        <Route path="/relawan/artikel" element={<ProtectedRoute allowedRoles={["relawan"]}><ArtikelRelawan /></ProtectedRoute>} />
        <Route path="/relawan/artikel/:id" element={<ProtectedRoute allowedRoles={["relawan"]}><DetailArtikelRelawan /></ProtectedRoute>} />
        <Route path="/relawan/data-anak-yatim" element={<ProtectedRoute allowedRoles={["relawan"]}><DetailRelawan /></ProtectedRoute>} />
        <Route path="/relawan/data-anak-yatim/detailanak/:id" element={<ProtectedRoute allowedRoles={["relawan"]}><DetailAnakRelawan /></ProtectedRoute>} />
        <Route path="/relawan/dokumentasi" element={<ProtectedRoute allowedRoles={["relawan"]}><DokumentasiRelawan /></ProtectedRoute>} />
        <Route path="/relawan/dokumentasi/umum" element={<ProtectedRoute allowedRoles={["relawan"]}><DokumentasiUmumRelawan /></ProtectedRoute>} />
        <Route path="/relawan/dokumentasi/khusus" element={<ProtectedRoute allowedRoles={["relawan"]}><DokumentasiKhususRelawan /></ProtectedRoute>} />
        <Route path="/relawan/dokumentasi/:type/:id" element={<ProtectedRoute allowedRoles={["relawan"]}><DetailDokumentasi /></ProtectedRoute>} />
        <Route path="/relawan/dokumentasi/editdokumentasikhususrelawan/:id" element={<ProtectedRoute allowedRoles={["relawan"]}><EditDokumentasiKhususRelawan/></ProtectedRoute>} />
        <Route path="/relawan/dokumentasi/editdokumentasiumumrelawan/:id" element={<ProtectedRoute allowedRoles={["relawan"]}><EditDokumentasiUmumRelawan/></ProtectedRoute>} />
        <Route path="/relawan/dokumentasi/uploaddokumentasiumumrelawan" element={<ProtectedRoute allowedRoles={["relawan"]}><UploadDokumentasiUmumRelawan /></ProtectedRoute>} />
        <Route path="/relawan/dokumentasi/uploaddokumentasikhususrelawan" element={<ProtectedRoute allowedRoles={["relawan"]}><UploadDokumentasiKhususRelawan /></ProtectedRoute>} />
        <Route path="/relawan/dokumentasi/detailkhusus/:id" element={<ProtectedRoute allowedRoles={["relawan"]}><DetailDokumentasiKhususRelawan /></ProtectedRoute>}/>
        <Route path="/relawan/dokumentasi/detailumum/:id" element={<ProtectedRoute allowedRoles={["relawan"]}><DetailDokumentasiUmumRelawan /> </ProtectedRoute>}/>
        <Route path="/relawan/laporan" element={<ProtectedRoute allowedRoles={["relawan"]}><LaporanRelawan /></ProtectedRoute>} />
        <Route path="/relawan/laporan/:id" element={<ProtectedRoute allowedRoles={["relawan"]}><DataPenyaluranRelawan /></ProtectedRoute>} />
        <Route path="/relawan/laporan/rekap/:id" element={<ProtectedRoute allowedRoles={["relawan"]}><RekapPenyaluranRelawan /></ProtectedRoute>} />
        <Route path="/relawan/laporan/uploaddatarelawan" element={<ProtectedRoute allowedRoles={["relawan"]}><UploadDataRelawan /></ProtectedRoute> }/>
        <Route path="/relawan/laporan/uploadrekaprelawan" element={<ProtectedRoute allowedRoles={["relawan"]}><UploadRekapRelawan /></ProtectedRoute> }/>
        <Route path="/relawan/laporan/edit/:id" element={<EditDataPenyaluranRelawan />} />
        <Route path="/relawan/laporan/editrekap/:id" element={<EditRekapPenyaluranRelawan />} />
        <Route path="/relawan/data" element={<ProtectedRoute allowedRoles={["relawan"]}><DataRelawan /></ProtectedRoute>} />
        <Route path="/relawan/notifikasi" element={<ProtectedRoute allowedRoles={["relawan"]}><NotifikasiRelawan /></ProtectedRoute>} />
       

        {/* ================= USER ================= */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/user/dashboard" element={<ProtectedRoute allowedRoles={["user"]}><DashboardUser /></ProtectedRoute>} />
        <Route path="/user/bukti/buktidonasi" element={<ProtectedRoute allowedRoles={["user"]}><BuktiDonasi /></ProtectedRoute>} />
        <Route path="/user/bukti/konfirmasibukti" element={<ProtectedRoute allowedRoles={["user"]}><KonfirmasiBukti /></ProtectedRoute>} />
        <Route path="/user/bukti/konfirmasipengajuan" element={<ProtectedRoute allowedRoles={["user"]}><KonfirmasiPengajuan /></ProtectedRoute>} />
        <Route path="/user/penyaluran/buktitersalurkan" element={<ProtectedRoute allowedRoles={["user"]}><BuktiTersalurkan /></ProtectedRoute>} />
        <Route path="/user/penyaluran/buktipenyaluranurgensi" element={<ProtectedRoute allowedRoles={["user"]}><BuktiPenyaluranUrgensi /></ProtectedRoute>} />
        <Route path="/user/penyaluran/buktipenyaluranumum" element={<ProtectedRoute allowedRoles={["user"]}><BuktiPenyaluranUmum /></ProtectedRoute>} />
        <Route path="/user/penyaluran/detailpenyaluranumum/:id" element={<ProtectedRoute allowedRoles={["user"]}><DetailPenyaluranUmum /></ProtectedRoute>} />
        <Route path="/user/penyaluran/detailpenyaluranurgensi/:id" element={<ProtectedRoute allowedRoles={["user"]}><DetailPenyaluranUrgensi /></ProtectedRoute>} />
        <Route path="/user/menuutama/donasipage" element={<ProtectedRoute allowedRoles={["user"]}><DonasiPage /></ProtectedRoute>} />
        <Route path="/user/menuutama/pengajuanpage" element={<ProtectedRoute allowedRoles={["user"]}><PengajuanPage /></ProtectedRoute>} />
        <Route path="/user/menuutama/donasiurgensi" element={<ProtectedRoute allowedRoles={["user"]}><DonasiUrgensi /></ProtectedRoute>} />
        <Route path="/user/menuutama/suksesdonasipage" element={<ProtectedRoute allowedRoles={["user"]}><SuksesDonasi /></ProtectedRoute>} />
        <Route path="/user/menuutama/riwayatpage" element={<ProtectedRoute allowedRoles={["user"]}><RiwayatPage /></ProtectedRoute>} />
        <Route path="/user/artikel/beritaurgensi" element={<ProtectedRoute allowedRoles={["user"]}><BeritaUrgensi /></ProtectedRoute>} />
        <Route path="/user/artikel/detailberitaurgensi/:id" element={<ProtectedRoute allowedRoles={["user"]}><DetailBeritaUrgensi /></ProtectedRoute>} />
       <Route path="/user/daftarrelawan/daftarrelawan" element={<DaftarRelawan />} />

        <Route path="/faq" element={<FAQ />} />
        <Route path="/kebijakan-privasi" element={<KebijakanPrivasi />} />
        <Route path="/kelola-akun" element={<KelolaAkun />} />
        <Route path="/user/halamantambahan/notifikasiuser" element={<NotifikasiUser />} />
        <Route path="/profil" element={<ProfilPage />} />
        <Route path="/user/halamantambahan" element={<SearchPage />} />
        <Route path="/user" element={<SearchResultsPage />} />

        {/* ================= UNAUTHORIZED & FALLBACK ================= */}
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/fallback" element={<FallbackApi />} />

        {/* CATCH ALL */}
        <Route path="*" element={<h1>404 - Halaman tidak ditemukan</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
