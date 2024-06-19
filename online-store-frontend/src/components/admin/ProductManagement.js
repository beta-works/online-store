import React, { useState, useEffect } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../../services/productService';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError('Error fetching products');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleCreateProduct = async (productData) => {
    try {
      await createProduct(productData);
      // Refresh the product list or show a success message
    } catch (err) {
      console.error('Error creating product:', err);
    }
  };

  const handleUpdateProduct = async (productId, updatedData) => {
    try {
      await updateProduct(productId, updatedData);
      // Refresh the product list or show a success message
    } catch (err) {
      console.error('Error updating product:', err);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await deleteProduct(productId);
      // Refresh the product list or show a success message
    } catch (err) {
      console.error('Error deleting product:', err);
    }
  };

  return (
    <div>
      <h2>Product Management</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <div>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <p>Name: {product.name}</p>
                <p>Price: ${product.price}</p>
                {/* Add additional product details */}
                <button onClick={() => handleUpdateProduct(product.id, { /* updated data */ })}>
                  Update
                </button>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </li>
            ))}
          </ul>
          <button onClick={() => handleCreateProduct({ /* new product data */ })}>
            Create Product
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
