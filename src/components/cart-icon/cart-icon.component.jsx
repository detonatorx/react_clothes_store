import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useDispatch } from 'react-redux';

const CartIcon = () => {
  const dispatch = useDispatch();

  const toggleCartHidden = () => {
    dispatch({ type: 'TOGGLE_CART_HIDDEN' });
  };

  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
