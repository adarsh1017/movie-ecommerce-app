// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import ProductScreen from './ProductScreen';
import AboutUs from './AboutUs'; // Import the AboutUs component
import CartPopup from './CartPopup'; // Assuming you have a CartPopup component
import './styles.css';

function App() {
  // Define state to manage cart visibility and cart items
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Function to add product to cart
  const addToCart = (product) => {
    // Check if the product already exists in the cart
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      // Product already exists, update quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      // Product does not exist, add to cart
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    // Open the cart popup when a product is added to the cart
    setIsCartOpen(true);
  };

  // Calculate total quantity of products in the cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav>
          <ul>
            <li>
              {/* Link to navigate to the Home page */}
              <NavLink to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              {/* Link to navigate to the About Us page */}
              <NavLink to="/about" activeClassName="active">About Us</NavLink>
            </li>
          </ul>
        </nav>

        {/* Define routes */}
        <Routes>
          {/* Route for the Home page */}
          <Route path="/" element={<ProductScreen addToCart={addToCart} />} />
          {/* Route for the About Us page */}
          <Route path="/about" element={<AboutUs />} />
        </Routes>

        {/* Render CartPopup conditionally based on isCartOpen state */}
        {isCartOpen && <CartPopup onClose={() => setIsCartOpen(false)} />}

        {/* Display total quantity of products in cart */}
        <div>Total Items in Cart: {totalQuantity}</div>
      </div>
    </Router>
  );
}

export default App;
