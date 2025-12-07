import { useState, useMemo } from 'react';
/**
 * useProducts — хук для управления товарами и фильтрацией
 * @param {Array} initialProducts — массив начальных товаров
 * @returns {Object} { filters, setFilters, filteredProducts, products, setProducts }
 */
export function useProducts(initialProducts) {
  const [products, setProducts] = useState(initialProducts);
  const maxInitialPrice = Math.max(...initialProducts.map(p => p.price), 0);
  const [filters, setFilters] = useState({
    category: 'all',
    maxPrice: maxInitialPrice,
  });

  const filteredProducts = useMemo(() => {
    console.log('!!! ФИЛЬТРАЦИЯ ЗДЕСЬ ЗАПУЩЕНА !!!');
    const { category, maxPrice } = filters;
    return products.filter(product => {
      const categoryMatch = category === 'all' || product.category === category;
      const priceMatch = product.price <= maxPrice;
      return categoryMatch && priceMatch;
    });
  }, [products, filters]);
  return {
    products,
    setProducts,
    filters,
    setFilters,
    filteredProducts,
  };
}