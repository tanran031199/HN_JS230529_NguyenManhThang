import React, { useContext } from "react";
import { ProductContext } from "../SpendMoney";

function FixedCount() {
  const { cartItems } = useContext(ProductContext);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="fixedCount">
      <div className="container">
        <div className="fixed-count">
          <p>
            To Spend Money: <span className="spend-price">${totalPrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FixedCount;
