import React from 'react';
     import { Link } from 'react-router-dom';
     import '../App';

     const Home = ({ products }) => {
       return (
         <div className="home-container">
           <h2>Product List</h2>
           <div className="product-grid">
             {products.map(product => (
               <div key={product.id} className="product-card">
                 <img src={product.thumbnail} alt={product.title} />
                 <h3>{product.title}</h3>
                 <p><strong>Price:</strong> ${product.price}</p>
                 <p><strong>Rating:</strong> {product.rating}</p>
                 <p>{product.description.slice(0, 100)}...</p>
                 {/* <Link to={`/product/${product.id}`}>View Details</Link> */}
                  <button onClick={() => console.log(`Added ${product.title} to cart`)}>Add to Cart</button>
               </div>
             ))}
           </div>
         </div>
       );
     };

     export default Home;