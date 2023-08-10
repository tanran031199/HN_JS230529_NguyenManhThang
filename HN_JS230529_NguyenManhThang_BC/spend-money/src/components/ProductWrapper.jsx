import React, { useContext } from "react";
import CollectionItems from "./CollectionItems";
import { ProductContext } from "../SpendMoney";

function ProductWrapper() {
  const { products } = useContext(ProductContext);

  return (
    <div className="productWrapper">
      <div className="container">
        <div className="product-box">
          {products.map((item) => (
            <CollectionItems key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductWrapper;
