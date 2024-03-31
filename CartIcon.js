// CartIcon.js
import React from 'react';
import { useCart } from './CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const CartIcon = () => {
  const { cartItems } = useCart();

  // Calculate the total number of items in the cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <FaShoppingCart size={24} />
      <span>{totalItems}</span>
    </div>
  );
};

export default CartIcon;
