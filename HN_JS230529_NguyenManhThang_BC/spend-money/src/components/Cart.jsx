import React, { useContext } from "react";
import { ProductContext } from "../SpendMoney";
import CartItem from "./CartItem";

function Cart() {
  const { cartItems, showCart, handleShowCart } = useContext(ProductContext);

  return (
    <div className="cart">
      <div
        style={{ display: showCart ? "block" : "none" }}
        className="show-cart-items"
      >
        {cartItems.length === 0 ? (
          <div className="empty-item">
            <img src="https://t3.ftcdn.net/jpg/05/18/30/90/240_F_518309087_lKKdYZpxZYK4jO5PWpfCuYB7ZFYA1hTr.jpg" />
            <p>Empty Item</p>
          </div>
        ) : (
          <ul className="item-list">
            {cartItems.map((item, i) => (
              <CartItem key={i} item={item} />
            ))}
          </ul>
        )}
      </div>

      <div className="cart-icon">
        <p onClick={handleShowCart}>🛒</p>
      </div>
    </div>
  );
}

export default Cart;
