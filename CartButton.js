import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const CartButton = () => {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to="/cart">
      <button>
        Cart ({totalItems})
      </button>
    </Link>
  );
};

export default CartButton;

