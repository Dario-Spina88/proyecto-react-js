import React from 'react';
import { useCartContext } from '../../Context/CartContext';

export const CartWidget = () => {
  const {totalEntradas} = useCartContext();

  return (
    <div>
      <i className="bi bi-cart"></i>
      <span>({totalEntradas() || ""})</span>
    </div>
  );
};

export default CartWidget;