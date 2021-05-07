import './checkout-item.styles.scss';

import { useDispatch } from 'react-redux';
import { removeItemAC } from '../../redux/cart/cart.reducer';

const CheckoutItem = ({
  cartItem: { id, imageUrl, name, quantity, price },
}) => {
  const dispatch = useDispatch();

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span
        className="remove-button"
        onClick={() => dispatch(removeItemAC(id))}
      >
        &#10006;
      </span>
    </div>
  );
};

export default CheckoutItem;
