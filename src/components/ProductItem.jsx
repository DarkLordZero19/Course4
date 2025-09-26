import React from "react";

function ProductItem({ product, onRemove }) {
  return (
    <li className="product-item">
      <span className={product.important ? "important" : ""}>
        {product.important && "⭐ "}
        {product.title} ({product.category})
      </span>
      <button onClick={() => onRemove(product.id)}>Удалить</button>
    </li>
  );
}

export default ProductItem;