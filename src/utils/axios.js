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

// interceptor request → selalu kirim token kalau ada
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// interceptor response
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;

      // 401 → token invalid/expired → auto logout
      if (status === 401) {
        localStorage.clear();
        window.location.href = "/login";
      }

      // 403 → biarkan dilempar ke komponen
      if (status === 403) {
        console.warn("403 Forbidden: akses ditolak oleh server.");
      }
    }

    // lempar error ke komponen biar bisa ditangani
    return Promise.reject(error);
  }
);

export default api;
