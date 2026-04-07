import React from "react";
import { useParams } from "react-router-dom";

// ✅ SAME PRODUCTS DATA (IMPORTANT)
import fc from "../assets/flight-controller.jpg";
import motor from "../assets/brushless-motor.jpg";
import esc from "../assets/esc.jpg";
import battery from "../assets/battery.jpg";
import frame from "../assets/frame.jpg";
import camera from "../assets/fpv-camera.jpg";
import transmitter from "../assets/transmitter.jpg";
import receiver from "../assets/receiver.jpg";
import gps from "../assets/gps.jpg";
import propeller from "../assets/propeller.jpg";

const products = [
  { id: 1, name: "Flight Controller F4", price: 4500, image: fc },
  { id: 2, name: "Drone Brushless Motor", price: 2200, image: motor },
  { id: 3, name: "ESC Speed Controller", price: 1800, image: esc },
  { id: 4, name: "LiPo Battery 2200mAh", price: 3500, image: battery },
  { id: 5, name: "Drone Frame Kit", price: 5200, image: frame },
  { id: 6, name: "FPV Camera Module", price: 2800, image: camera },
  { id: 7, name: "RC Transmitter", price: 6500, image: transmitter },
  { id: 8, name: "Receiver Module", price: 2100, image: receiver },
  { id: 9, name: "GPS Module", price: 3000, image: gps },
  { id: 10, name: "Propeller Set", price: 900, image: propeller }
];

function ProductDetail() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Product not found ❌</h2>;
  }

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>{product.name}</h2>

      <img
        src={product.image}
        alt={product.name}
        style={{ width: "300px", borderRadius: "10px" }}
      />

      <h3 style={{ marginTop: "20px" }}>₹{product.price}</h3>

      <p style={{ marginTop: "20px", maxWidth: "600px", margin: "auto" }}>
        This is a high-quality {product.name} designed for advanced drone
        systems. It ensures reliability, performance, and precision for your
        projects.
      </p>
    </div>
  );
}

export default ProductDetail;