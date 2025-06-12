import React, { useState } from 'react';
import ProductCard from './ProductCard';

// import { products } from './data';
const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleViewDetails = (product) => {
    console.log('View details for:', product.name);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    console.log('Added to cart:', product.name);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = priceFilter === 'all' || (priceFilter === 'low' && product.price < 50) || (priceFilter === 'high' && product.price >= 50);
    const matchesRating = ratingFilter === 'all' || (ratingFilter === 'high' && product.rating >= 4) || (ratingFilter === 'low' && product.rating < 4);
    return matchesSearch && matchesPrice && matchesRating;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
          <option value="all">All Prices</option>
          <option value="low">Under $50</option>
          <option value="high">$50+</option>
        </select>
        <select value={ratingFilter} onChange={(e) => setRatingFilter(e.target.value)}>
          <option value="all">All Ratings</option>
          <option value="high">4+ Stars</option>
          <option value="low">Below 4 Stars</option>
        </select>
      </div>
      <div className="cards-container">
        {currentItems.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={() => handleViewDetails(product)}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      {/* Ensure cart summary is rendered */}
      <div className="cart-summary">
        <h3>Cart ({cart.length} items)</h3>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ${item.price}</li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;

