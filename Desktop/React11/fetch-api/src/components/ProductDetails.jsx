import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
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
    <div style={{ flex: '2', minWidth: '500px' }}>
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
          <p><strong>SKU:</strong> {product.sku}</p>
          <p><strong>Weight:</strong> {product.weight}g</p>
          <p><strong>Status:</strong> {product.availabilityStatus}</p>
        </div>
      </div>

      {/* Reviews Section */}
      <div style={{ marginTop: '30px' }}>
        <h3 style={{ color: '#007bff' }}>Customer Reviews</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {product.reviews?.map((review, index) => (
            <div key={index} style={{ 
              backgroundColor: 'white',
              padding: '15px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong>{review.reviewerName}</strong>
                <span>{'⭐'.repeat(review.rating)}</span>
              </div>
              <p style={{ margin: '10px 0' }}>{review.comment}</p>
              <small style={{ color: '#666' }}>
                {new Date(review.date).toLocaleDateString()}
              </small>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div style={{ marginTop: '30px' }}>
        <h3 style={{ color: '#007bff' }}>Additional Information</h3>
        <div style={{ 
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '8px'
        }}>
          <p><strong>Shipping Information:</strong> {product.shippingInformation}</p>
          <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
          <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
          <p><strong>Minimum Order:</strong> {product.minimumOrderQuantity} units</p>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default ProductDetails;
