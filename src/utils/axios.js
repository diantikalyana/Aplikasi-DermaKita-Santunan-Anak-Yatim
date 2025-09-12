import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://192.168.103.100:8000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Interceptor request → selalu kirim JWT kalau ada
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt_token"); // ganti biar jelas jwt
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor response → handle expired/invalid token
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;

      // 401 → token invalid/expired → auto logout
      if (status === 401) {
        console.warn("JWT expired atau invalid. Auto logout...");
        localStorage.removeItem("jwt_token");
        localStorage.removeItem("role");
        window.location.href = "/login";
      }

      // 403 → forbidden (misal role tidak sesuai)
      if (status === 403) {
        console.warn("403 Forbidden: akses ditolak oleh server.");
      }
    }

    return Promise.reject(error);
  }
);

export default api;
