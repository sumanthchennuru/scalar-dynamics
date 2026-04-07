import React from "react";

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";

import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import RCSystems from "./pages/RCSystems.jsx";
import PCB from "./pages/PCB.jsx";
import Printing from "./pages/Printing.jsx";
import CAD from "./pages/CAD.jsx";
import Login from "./pages/Login.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
const isLoggedIn = localStorage.getItem("user");
const handleLogout = () => {
  localStorage.removeItem("user");
  window.location.href = "/login";
};
  return (
    <Router>

      {/* NAVBAR */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/services">Services</Link>
        <Link to="/rc-systems">RC Systems</Link>
        <Link to="/about">About</Link>
	<Link to="/contact">Contact</Link>
	{localStorage.getItem("user") ? (
  <button onClick={handleLogout}>Logout</button>
) : (
  <Link to="/login">Login</Link>
)}
      </nav>

      {/* PAGE ANIMATION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
	  <Route
  path="/cart"
  element={isLoggedIn ? <Cart /> : <Navigate to="/login" />}
/>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/rc-systems" element={<RCSystems />} />
          <Route path="/about" element={<About />} />
          <Route path="/pcb" element={<PCB />} />
          <Route path="/printing" element={<Printing />} />
          <Route path="/cad" element={<CAD />} />
	  <Route path="/login" element={<Login />} />
	  <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>

    </Router>
  );
}

export default App;