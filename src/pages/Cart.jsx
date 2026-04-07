import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";

function Cart() {
  const { cart, increaseQty, decreaseQty, removeItem } =
    useContext(CartContext);

  const [coupon, setCoupon] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");

  const hasOrdered = localStorage.getItem("hasOrdered");
  const isFirstOrder = !hasOrdered;

  const playSound = (type) => {
    const audio = new Audio(
      type === "success"
        ? "https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3"
        : "https://assets.mixkit.co/active_storage/sfx/2944/2944-preview.mp3"
    );
    audio.play();
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  const firstOrderDiscount = isFirstOrder ? total * 0.15 : 0;

  const applyCoupon = () => {
    if (coupon === "SAVE10") {
      setCouponDiscount(total * 0.1);
      setPopupMsg("Coupon Applied 🎉");
      playSound("success");
    } else {
      setCouponDiscount(0);
      setPopupMsg("Invalid Coupon ❌");
      playSound("error");
    }
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const gst = (total - firstOrderDiscount - couponDiscount) * 0.18;
  const delivery = total > 2000 ? 0 : 100;

  const finalTotal =
    total - firstOrderDiscount - couponDiscount + gst + delivery;

  return (
    <div style={{ padding: "40px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items</p>
      ) : (
        <>
          {cart.map((item) => (
            <motion.div
              className="cart-item"
              key={item.id}
              whileHover={{ scale: 1.03 }}
            >
              <img src={item.image} width="100" alt="" />

              <div>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>

                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.qty || 1}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>

                <button onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            </motion.div>
          ))}

          <h3>Total: ₹{total}</h3>

          {isFirstOrder && (
            <h4 style={{ color: "green" }}>
              First Order Discount: -₹{firstOrderDiscount.toFixed(0)}
            </h4>
          )}

          <h4>GST: ₹{gst.toFixed(0)}</h4>
          <h2>Final: ₹{finalTotal.toFixed(0)}</h2>

          <input
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Coupon"
          />
          <button onClick={applyCoupon}>Apply</button>

          <button
            onClick={() => {
              const order = {
                id: Date.now(),
                items: cart,
                total: finalTotal.toFixed(0),
              };

              const existing =
                JSON.parse(localStorage.getItem("orders")) || [];

              existing.push(order);

              localStorage.setItem("orders", JSON.stringify(existing));
              localStorage.setItem("hasOrdered", "true");

              setPopupMsg("Order Placed 🚀");
              playSound("success");
              setShowPopup(true);

              setTimeout(() => {
                window.location.href = "/orders";
              }, 2000);
            }}
          >
            Place Order
          </button>
        </>
      )}

      {showPopup && <div className="glass-popup">{popupMsg}</div>}
    </div>
  );
}

export default Cart;