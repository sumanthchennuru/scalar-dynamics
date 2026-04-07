import React from "react";

function Services() {
  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h1>Our Services</h1>

      <h3 style={{ marginTop: "20px" }}>🔧 PCB Designing</h3>
      <p style={{ color: "#94a3b8" }}>
        We design high-performance printed circuit boards optimized for efficiency,
        durability, and compact layout.
      </p>

      <h3 style={{ marginTop: "20px" }}>🖨️ 3D Printing</h3>
      <p style={{ color: "#94a3b8" }}>
        Our 3D printing services enable rapid prototyping and custom manufacturing
        with high precision.
      </p>

      <h3 style={{ marginTop: "20px" }}>📐 CAD Designing</h3>
      <p style={{ color: "#94a3b8" }}>
        We provide accurate CAD models for mechanical and electronic systems.
      </p>

      <h3 style={{ marginTop: "20px" }}>🤖 Automation</h3>
      <p style={{ color: "#94a3b8" }}>
        Smart automation systems to improve productivity and reduce manual effort.
      </p>
    </div>
  );
}

export default Services;