import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Import your main App component
import './index.css';    // If you're using any global CSS or Tailwind

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // This links with the div in index.html
);
