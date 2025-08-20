import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");
    setIsLoggedIn(!!token);
    setRole(userRole);
    setLoading(false);
  }, []);

  if (loading) return null; // Bisa diganti spinner

  if (!isLoggedIn) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes(role)) return <Navigate to="/unauthorized" replace />;

  return children;
};

export default ProtectedRoute;
