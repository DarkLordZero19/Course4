const ShoppingCart = ({ items, onRemoveItem }) => {
 return (
  <div className="shopping-cart">
   <h2>Корзина</h2>
    {items.length === 0 ? (
     <p>Корзина пуста</p>
    ) : (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
           {item.name} — {item.price} ₽ x {item.quantity} ={" "}
           {item.price * item.quantity} ₽
           <button onClick={() => onRemoveItem(item.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    )}
  </div>
 );
};

export default ShoppingCart;
