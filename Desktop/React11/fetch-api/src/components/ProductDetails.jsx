import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate('/');
      return;
    }

    setLoading(true);
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
        setError(null);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
        setError('Failed to load product details');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, navigate]);

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '200px' 
      }}>
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        padding: '20px' 
      }}>
        <p style={{ color: 'red' }}>{error}</p>
        <button 
          onClick={() => navigate('/')}
          style={{
            padding: '10px 20px',
            marginTop: '20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Back to Products
        </button>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>{product.title}</h2>
      
      <div style={{ display: 'flex', flexDirection: 'row', gap: '30px', marginTop: '20px', flexWrap: 'wrap' }}>
        {/* Left column - Image */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img 
            src={product.thumbnail} 
            alt={product.title} 
            style={{ 
              width: '100%', 
              height: 'auto', 
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }} 
          />
        </div>

        {/* Right column - Details */}
        <div style={{ flex: '2', minWidth: '300px' }}>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#007bff' }}>Description</h3>
            <p>{product.description}</p>
          </div>

          <div style={{ 
            display: 'flex', 
            gap: '20px',
            backgroundColor: '#f8f9fa',
            padding: '20px',
            borderRadius: '8px',
            flexWrap: 'wrap'
          }}>
            <div style={{ flex: '1', minWidth: '200px' }}>
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Rating:</strong> {product.rating} ⭐</p>
              <p><strong>Brand:</strong> {product.brand}</p>
              <p><strong>Category:</strong> {product.category}</p>
            </div>
            <div style={{ flex: '1', minWidth: '200px' }}>
              <p><strong>Stock:</strong> {product.stock}</p>
              <p><strong>Discount:</strong> {product.discountPercentage}%</p>
            </div>
          </div>

          <button 
            onClick={() => navigate('/')}
            style={{
              padding: '10px 20px',
              marginTop: '20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Back to Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
