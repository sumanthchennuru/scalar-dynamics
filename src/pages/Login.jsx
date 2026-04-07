import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email.trim() !== "" && password.trim() !== "") {
      localStorage.setItem("user", email);
window.location.href = "/";
      alert("Login successful ✅");
      
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Login</h1>

      <input
        value={email}
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: "10px" }}
      />

      <input
        value={password}
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: "10px" }}
      />

      <button
        onClick={handleLogin}
        style={{ padding: "10px 20px", marginTop: "10px" }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;