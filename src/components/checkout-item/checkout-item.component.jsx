import './checkout-item.styles.scss';

import React from 'react';

const CheckoutItem = ({ cartItem: { imageUrl, name, quantity, price } }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span className="remove-button">&#10006;</span>
    </div>
  );
};

export default CheckoutItem;
