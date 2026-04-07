import React from "react";

function Orders() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div style={{ padding: "40px" }}>
      <h2>🧾 Order History</h2>

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="order-card">
            <h4>Order ID: {order.id}</h4>
            <p>{order.date}</p>

            {order.items.map((item) => (
              <p key={item.id}>
                {item.name} × {item.qty || 1}
              </p>
            ))}

            <h3>Total: ₹{order.total}</h3>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;