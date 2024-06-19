import React, { useState, useEffect } from 'react';
import { getProducts } from '../../services/productService';
import ProductCard from './ProductCard';
import ProductFilter from './ProductFilter';
import Spinner from '../common/Spinner';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (filters) => {
    const filtered = products.filter((product) => {
      // Apply filter logic here
      return true; // Replace with your filter conditions
    });
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <ProductFilter onFilterChange={handleFilterChange} />
      {loading ? (
        <Spinner />
      ) : (
        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
