
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

// This is a simple password protection component.
// For a real application, you should use a proper authentication system.
const AdminAuth = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // In a real app, you'd check a token from localStorage or a cookie
    const storedAuth = sessionStorage.getItem("isAdminAuthenticated");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
    setIsChecking(false);
  }, []);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fetch the password from environment variables
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    if (password === adminPassword) {
      sessionStorage.setItem("isAdminAuthenticated", "true");
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (isChecking) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return children;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Admin Access</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter Admin Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminAuth;
