import React, { useContext } from "react";
import { ProductContext } from "../SpendMoney";

function CollectionItems(props) {
  const { item } = props;
  const { handlePlusItem, handleMinusItem, cartItems } =
    useContext(ProductContext);

  const itemQuantity = cartItems.find((cart) => item.id === cart.id);

  return (
    <div className="collection-items">
      <div className="product-img">
        <img src={item.image} />
      </div>

      <div className="product-info">
        <p className="product-name">{item.title}</p>
        <p className="product-price">${item.price}</p>
      </div>

      <div className="control">
        <button onClick={() => handleMinusItem(item)} className="minus">
          Interest
        </button>
        <span className="product-quantity">
          {itemQuantity ? itemQuantity.quantity : 0}
        </span>
        <button onClick={() => handlePlusItem(item)} className="plus">
          Add
        </button>
      </div>
    </div>
  );
}

export default CollectionItems;
