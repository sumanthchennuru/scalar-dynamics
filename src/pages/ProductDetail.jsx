import React from "react";
import { useParams } from "react-router-dom";

// ✅ IMPORT SAME IMAGES
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

// ✅ SAME PRODUCTS DATA (WITH DESCRIPTION)
const products = [
  { id: 1, name: "Flight Controller F4", price: 4500, image: fc, description: "High-performance flight controller for stable drone operation." },
  { id: 2, name: "Drone Brushless Motor", price: 2200, image: motor, description: "Efficient motor providing powerful thrust for drones." },
  { id: 3, name: "ESC Speed Controller", price: 1800, image: esc, description: "Controls motor speed with precision and reliability." },
  { id: 4, name: "LiPo Battery 2200mAh", price: 3500, image: battery, description: "High-capacity battery for longer flight time." },
  { id: 5, name: "Drone Frame Kit", price: 5200, image: frame, description: "Durable frame for custom drone builds." },
  { id: 6, name: "FPV Camera Module", price: 2800, image: camera, description: "Real-time video transmission for FPV flying." },
  { id: 7, name: "RC Transmitter", price: 6500, image: transmitter, description: "Advanced controller for precise drone navigation." },
  { id: 8, name: "Receiver Module", price: 2100, image: receiver, description: "Reliable signal receiver for RC systems." },
  { id: 9, name: "GPS Module", price: 3000, image: gps, description: "Accurate positioning system for drones." },
  { id: 10, name: "Propeller Set", price: 900, image: propeller, description: "High-efficiency propellers for smooth flight." }
];

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2 style={{ textAlign: "center" }}>Product not found</h2>;

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "300px",
          borderRadius: "12px",
          marginBottom: "20px"
        }}
      />

      <h2>{product.name}</h2>
      <p style={{ color: "#94a3b8" }}>{product.description}</p>
      <h3>₹{product.price}</h3>

      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;