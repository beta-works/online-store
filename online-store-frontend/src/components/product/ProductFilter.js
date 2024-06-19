import React, { useState } from 'react';

const ProductFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: "",
    priceRange: "",
    // Add more filter options as needed
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleApplyFilters = () => {
    onFilterChange(filters);
  };

  return (
    <div className="product-filter">
      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          {/* Add options for product categories */}
        </select>
      </div>
      <div>
        <label htmlFor="priceRange">Price Range:</label>
        <select
          id="priceRange"
          name="priceRange"
          value={filters.priceRange}
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          {/* Add options for price ranges */}
        </select>
      </div>
      {/* Add more filter options as needed */}
      <button type="button" onClick={handleApplyFilters}>
        Apply Filters
      </button>
    </div>
  );
};

export default ProductFilter;
