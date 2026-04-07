import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ProductDetail from "./pages/ProductDetail";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import About from "./pages/About"; // ✅ NEW

function AnimatedRoutes() {
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem("user");

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.4 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} /> {/* ✅ NEW */}
	  <Route path="/product/:id" element={<ProductDetail />} />

          {/* 🔐 Protected Routes */}
          <Route
            path="/cart"
            element={isLoggedIn ? <Cart /> : <Navigate to="/login" />}
          />
          <Route
            path="/orders"
            element={isLoggedIn ? <Orders /> : <Navigate to="/login" />}
          />

          <Route path="/login" element={<Login />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const isLoggedIn = !!localStorage.getItem("user");

  // 🔥 LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("orders");
    localStorage.removeItem("hasOrdered");

    alert("Logged out successfully 👋");

    window.location.href = "/login";
  };

  return (
    <Router>
      {/* 🔝 NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "15px",
          background: "#020617",
        }}
      >
        <Link to="/" style={{ color: "cyan" }}>Home</Link>
        <Link to="/products" style={{ color: "cyan" }}>Products</Link>
        <Link to="/about" style={{ color: "cyan" }}>About</Link> {/* ✅ NEW */}
        <Link to="/cart" style={{ color: "cyan" }}>Cart</Link>
        <Link to="/orders" style={{ color: "cyan" }}>Orders</Link>

        {/* 🔐 Show Logout only if logged in */}
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            style={{
              padding: "8px 14px",
              background: "#ef4444",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        )}
      </nav>

      <AnimatedRoutes />
    </Router>
  );
}

export default App;