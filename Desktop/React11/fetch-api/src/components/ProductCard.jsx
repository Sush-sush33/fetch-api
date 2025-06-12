import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => setProducts(res.data.products))
      .catch(err => console.error('Failed to fetch products:', err));
  }, []);

  const handleCardClick = (productId) => {
    setExpandedId(expandedId === productId ? null : productId);
  };

  return (
    <div className="product-grid">
      {products.map(product => (
        <div 
          key={product.id}
          className={`product-card ${expandedId === product.id ? 'expanded' : ''}`}
          onClick={() => handleCardClick(product.id)}
        >
          <div className="product-image">
            <img src={product.thumbnail} alt={product.title} />
          </div>
          <div className="product-info">
            <h3>{product.title}</h3>
            <p className="price">${product.price}</p>
            <div className="rating">
              <span>⭐ {product.rating}</span>
            </div>
          </div>
          
          {expandedId === product.id && (
            <div className="product-details">
              <div className="details-section">
                <h4>Description</h4>
                <p>{product.description}</p>
              </div>
              
              <div className="details-grid">
                <div className="details-item">
                  <span>Brand:</span>
                  <span>{product.brand}</span>
                </div>
                <div className="details-item">
                  <span>Category:</span>
                  <span>{product.category}</span>
                </div>
                <div className="details-item">
                  <span>Stock:</span>
                  <span>{product.stock}</span>
                </div>
                <div className="details-item">
                  <span>Discount:</span>
                  <span>{product.discountPercentage}%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
