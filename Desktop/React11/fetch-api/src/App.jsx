import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home'; // Moved to separate file
import ProductDetails from './components/ProductDetails';
import ProductList from './components/Productlist';
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products); // extract products array
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p style={{ padding: '20px' }}>Loading...</p>;
  if (error) return <p style={{ padding: '20px' }}>Error: {error}</p>;

  return (
      <Router>
        <>
          <nav style={{ padding: '10px', background: '#f4f4f4', marginBottom: '20px' }}>
            <Link to="/" style={{ marginRight: '15px',fontSize:'60px',textDecoration: 'none', color: '#007bff' }}>Home</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </>
      </Router>
    );
}

export default App;