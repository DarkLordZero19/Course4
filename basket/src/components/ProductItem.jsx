const ProductItem = ({ product, onAddToCart }) => {
return (
 <div className="product-card">
 <img src={product.image} alt={product.name} width="150" />
 <h3>{product.name}</h3>
 <p>{product.price} ₽</p>
 <button onClick={() => onAddToCart(product)}>Добавить в корзину</button>
 </div>
 );
};

export default ProductItem;