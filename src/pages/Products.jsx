import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// ✅ IMAGE IMPORTS
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

// ✅ PRODUCTS DATA
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

// ✅ PRODUCT CARD
function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.name}
        style={{
          height: "150px",
          width: "100%",
          objectFit: "cover",
          borderRadius: "10px"
        }}
      />

      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      <button onClick={() => addToCart(product)}>Add to Cart</button>

      <Link to={`/product/${product.id}`}>
        <button style={{ marginTop: "10px" }}>View Details</button>
      </Link>
    </div>
  );
}

// ✅ PROP VALIDATION
ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired
};

// ✅ MAIN COMPONENT
function Products() {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center" }}>Our Products</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "40px",
          flexWrap: "wrap"
        }}
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Products;