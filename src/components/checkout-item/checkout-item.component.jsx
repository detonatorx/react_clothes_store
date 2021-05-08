import './checkout-item.styles.scss';

import { useDispatch } from 'react-redux';
import {
  clearItemAC,
  addItemAC,
  removeItemAC,
} from '../../redux/cart/cart.reducer';

const CheckoutItem = ({
  cartItem,
  cartItem: { imageUrl, name, quantity, price },
}) => {
  const dispatch = useDispatch();

  return (
    <div className="checkout-item" key={cartItem.id}>
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItemAC(cartItem))}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItemAC(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span
        className="remove-button"
        onClick={() => dispatch(clearItemAC(cartItem))}
      >
        &#10006;
      </span>
    </div>
  );
};

export default CheckoutItem;
