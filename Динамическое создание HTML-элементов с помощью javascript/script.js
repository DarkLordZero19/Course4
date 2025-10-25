const products = [
    {
        name: "Ноутбук Asus",
        price: 154634,
        isAvailable: true,
        isOnSale: true,
    },
    {
        name: "Смартфон Samson",
        price: 64634,
        isAvailable: true,
        isOnSale: false,
    },
    {
        name: "Наушники Launch",
        price: 15763,
        isAvailable: false,
        isOnSale: false,
    },
    {
        name: "Монитор Apple",
        price: 45678,
        isAvailable: true,
        isOnSale: true
    }
]

const productsContainer = document.getElementById('products-container');

const renderProducts = (productsData) => {
    const productsHtml = productsData.map(product => {
        const { name, price, isAvailable, isOnSale} = product;
        const statusText = isAvailable ? "В наличии" : "Нет в наличии";
        const statusClass = isAvailable ? "status-available" : "status-unavailable";
        return `
                <div class="product-card">
                    <h3>${name}</h3>
                    <p class="price">${price} ₽</p>
                    <div class="status ${statusClass}">${statusText}</div>
                    ${isOnSale ? '<span>Скидка!</span>' : ''}
                </div>
        `;
    });
    productsContainer.innerHTML = productsHtml.join('')
}
renderProducts(products);