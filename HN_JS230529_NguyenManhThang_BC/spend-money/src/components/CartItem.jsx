import React, { useContext } from "react";
import { ProductContext } from "../SpendMoney";

function CartItem({ item }) {
  const { handlePlusItem, handleMinusItem, handleDelete } =
    useContext(ProductContext);

  return (
    <li className="cart-item">
      <div className="cart-item-img">
        <img src={item.image} />
      </div>
      <div className="cart-item-info">
        <p className="cart-item-name">{item.title}</p>

        <div className="cart-item-control">
          <div className="button-control">
            <button onClick={() => handleMinusItem(item)} className="btn-minus">
              ➖
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => handlePlusItem(item)} className="btn-plus">
              ➕
            </button>
          </div>
          <p className="cart-item-price">${item.price}</p>
        </div>
      </div>

      <div className="delete-button">
        <button onClick={() => handleDelete(item)} className="delete">
          ✖
        </button>
      </div>
    </li>
  );
}

export default CartItem;
