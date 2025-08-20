import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Komponen Login (misal di folder Admin)
import Login from "./pages/Admin/Login";

// Protected Route untuk proteksi halaman berdasar role
const ProtectedRoute = ({ allowedRoles, children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

// --- Import halaman Admin ---
import Dashboard from "./pages/Admin/DashboardAdmin";
import Notifikasi from "./pages/Admin/Notifikasi";
import ProfileAdmin from "./pages/Admin/ProfileAdmin";
import Detail from "./pages/Admin/data-anak-yatim/Detail";
import Donasi from "./pages/Admin/Donasi";
import Detailanak from "./pages/Admin/data-anak-yatim/Detailanak";
import Editdetailanak from "./pages/Admin/data-anak-yatim/Editdetailanak";
import Pengajuan from "./pages/Admin/data-anak-yatim/Pengajuan";
import PengajuanDetail from "./pages/Admin/data-anak-yatim/PengajuanDetail";
import Laporan from "./pages/Admin/Laporan/Laporan";
import Datapenyaluran from "./pages/Admin/Laporan/Datapenyaluran";
import Rekappenyaluran from "./pages/Admin/Laporan/Rekappenyaluran";
import DataAdmin from "./pages/Admin/DataAdmin";
import Editdataadmin from "./pages/Admin/Editdataadmin";
import Artikel from "./pages/Admin/Artikel/Artikel";
import DetailArtikel from "./pages/Admin/Artikel/DetailArtikel";
import EditArtikel from "./pages/Admin/Artikel/EditArtikel";
import Uploadartikel from "./pages/Admin/Artikel/Uploadartikel";
import Dokumentasi from "./pages/Admin/Dokumentasi/Dokumentasi";
import DokumentasiUmum from "./pages/Admin/Dokumentasi/DokumentasiUmum";
import DetailDokumentasiUmum from "./pages/Admin/Dokumentasi/DetailDokumentasiUmum";
import DokumentasiKhusus from "./pages/Admin/Dokumentasi/DokumentasiKhusus";
import DetailDokumentasikhusus from "./pages/Admin/Dokumentasi/DetailDokumentasikhusus";

// --- Import halaman Relawan ---
import DashboardRelawan from "./pages/Relawan/DashboardRelawan/DashboardRelawan";
import ArtikelRelawan from "./pages/Relawan/ArtikelRelawan/ArtikelRelawan";
import DetailArtikelRelawan from "./pages/Relawan/ArtikelRelawan/DetailArtikelRelawan";
import DetailRelawan from "./pages/Relawan/data-anak-yatimRelawan/DetailRelawan";
import DetailanakRelawan from "./pages/Relawan/data-anak-yatimRelawan/DetailanakRelawan";
import DokumentasiRelawan from "./pages/Relawan/DokumentasiRelawan/DokumentasiRelawan";
import DokumentasiKhususRelawan from "./pages/Relawan/DokumentasiRelawan/DokumentasiKhususRelawan";
import DokumentasiUmumRelawan from "./pages/Relawan/DokumentasiRelawan/DokumentasiUmumRelawan";
import DetailDokumentasiRelawan from "./pages/Relawan/DokumentasiRelawan/DetailDokumentasiRelawan";
import LaporanRelawan from "./pages/Relawan/LaporanRelawan/LaporanRelawan";
import DatapenyaluranRelawan from "./pages/Relawan/LaporanRelawan/DatapenyaluranRelawan";
import RekappenyaluranRelawan from "./pages/Relawan/LaporanRelawan/RekappenyaluranRelawan";
import DataRelawan from "./pages/Relawan/DataRelawan/DataRelawan";
import NotifikasiRelawan from "./pages/Relawan/NotifikasiRelawan/NotifikasiRelawan";

// Halaman Unauthorized (opsional)
const Unauthorized = () => <h1>403 - Unauthorized</h1>;

// Tambahan Fallback untuk test API
const FallbackApi = () => <h1>Fallback Route Aktif (cek API endpoint Anda)</h1>;

const App = () => {
  return (
    <Router>
      <Routes>
      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Admin */}
      <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notifikasi"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Notifikasi />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profileadmin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <ProfileAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/data-anak-yatim"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Detail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donasi"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Donasi />
            </ProtectedRoute>
          }
        />
        <Route
          path="/data-anak-yatim/detailanak/:id"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Detailanak />
            </ProtectedRoute>
          }
        />
        <Route
          path="/data-anak-yatim/Editdetailanak/:id"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Editdetailanak />
            </ProtectedRoute>
          }
        />
        <Route
          path="/data-anak-yatim/pengajuan"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Pengajuan />
            </ProtectedRoute>
          }
        />
        <Route
          path="/data-anak-yatim/pengajuandetail/:id"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <PengajuanDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/laporan"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Laporan />
            </ProtectedRoute>
          }
        />
        <Route
          path="/laporan/datapenyaluran"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Datapenyaluran />
            </ProtectedRoute>
          }
        />
        <Route
          path="/laporan/rekappenyaluran/:id"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Rekappenyaluran />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dataadmin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <DataAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dataadmin/edit/:id"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Editdataadmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/artikel"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Artikel />
            </ProtectedRoute>
          }
        />
        <Route
          path="/artikel/:id"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <DetailArtikel />
            </ProtectedRoute>
          }
        />
        <Route
          path="/artikel/edit/:id"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <EditArtikel />
            </ProtectedRoute>
          }
        />
        <Route
          path="/artikel/upload"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Uploadartikel />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dokumentasi"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Dokumentasi />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dokumentasi/dokumentasiumum"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <DokumentasiUmum />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dokumentasi/dokumentasikhusus"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <DokumentasiKhusus />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detaildokumentasi/:id"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <DetailDokumentasikhusus />
            </ProtectedRoute>
          }
        />

        {/* Relawan Routes */}
        <Route
          path="/relawan/dashboard"
          element={
            <ProtectedRoute allowedRoles={["relawan"]}>
              <DashboardRelawan />
            </ProtectedRoute>
          }
        />
        <Route
          path="/relawan/artikelrelawan"
          element={
            <ProtectedRoute allowedRoles={["relawan"]}>
              <ArtikelRelawan />
            </ProtectedRoute>
          }
        />
        <Route
          path="/relawan/detailartikelrelawan/:id"
          element={
            <ProtectedRoute allowedRoles={["relawan"]}>
              <DetailArtikelRelawan />
            </ProtectedRoute>
          }
        />
        <Route
          path="/relawan/data-anak-yatimrelawan"
          element={
            <ProtectedRoute allowedRoles={["relawan"]}>
              <DetailRelawan />
            </ProtectedRoute>
          }
        />
        <Route
          path="/relawan/data-anak-yatimrelawan/detailanak/:id"
          element={
            <ProtectedRoute allowedRoles={["relawan"]}>
              <DetailanakRelawan />
            </ProtectedRoute>
          }
        />
       {/* Dokumentasi Relawan */}
<Route
  path="/relawan/dokumentasirelawan/:jenis?" // :jenis? = optional → "umum" atau "khusus"
  element={
    <ProtectedRoute allowedRoles={["relawan"]}>
      <DokumentasiRelawan />
    </ProtectedRoute>
  }
/>


<Route
  path="/relawan/dokumentasirelawan/detail/:id"
  element={
    <ProtectedRoute allowedRoles={["relawan"]}>
      <DetailDokumentasiRelawan />
    </ProtectedRoute>
  }
/>

        <Route
          path="/laporanrelawan"
          element={
            <ProtectedRoute allowedRoles={["relawan"]}>
              <LaporanRelawan />
            </ProtectedRoute>
          }
        />
        <Route
          path="/relawan/laporanrelawan/:id"
          element={
            <ProtectedRoute allowedRoles={["relawan"]}>
              <DatapenyaluranRelawan />
            </ProtectedRoute>
          }
        />
        <Route
          path="/relawan/laporanrelawan/rekappenyaluran/:id"
          element={
            <ProtectedRoute allowedRoles={["relawan"]}>
              <RekappenyaluranRelawan />
            </ProtectedRoute>
          }
        />
        <Route
          path="/relawan/datarelawan"
          element={
            <ProtectedRoute allowedRoles={["relawan"]}>
              <DataRelawan />
            </ProtectedRoute>
          }
        />
        <Route
          path="/relawan/notifikasirelawan"
          element={
            <ProtectedRoute allowedRoles={["relawan"]}>
              <NotifikasiRelawan />
            </ProtectedRoute>
          }
        />

        {/* Unauthorized page */}
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Tambahan Fallback API (opsional cek root salah) */}
        <Route path="/fallback" element={<FallbackApi />} />

        {/* Catch All */}
        <Route path="*" element={<h1>404 - Halaman tidak ditemukan</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
