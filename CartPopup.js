// CartPopup.js
import React from 'react';
import './CartPopup.css'; // Import CSS file for styling

const CartPopup = ({ isOpen, onClose }) => {
  return (
    <div className={`cart-popup ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="cart-content" onClick={(e) => e.stopPropagation()}>
        {/* Add your cart content here */}
        <h2>Shopping Cart</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CartPopup;
