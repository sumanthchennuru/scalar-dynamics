import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, increaseQty, decreaseQty, removeItem } =
    useContext(CartContext);

  const total = cart.reduce((sum, item) => {
    return sum + item.price * (item.qty || 1);
  }, 0);

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center" }}>Your Cart</h2>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>No items in cart</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>

              <img
                src={item.image || "https://picsum.photos/100"}
                alt={item.name}
              />

              <div>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>

                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span style={{ margin: "10px" }}>
                  {item.qty || 1}
                </span>
                <button onClick={() => increaseQty(item.id)}>+</button>

                <br /><br />

                <button onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>

            </div>
          ))}

          <h3 style={{ textAlign: "center" }}>
            Total: ₹{total}
          </h3>
        </>
      )}
    </div>
  );
}

export default Cart;