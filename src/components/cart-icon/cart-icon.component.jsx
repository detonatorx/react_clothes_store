import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useSelector, useDispatch } from 'react-redux';

const CartIcon = () => {
  const cartQuantity = useSelector(state => {
    return state.cart.cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);
  });

  const dispatch = useDispatch();

  const toggleCartHidden = () => {
    dispatch({ type: 'TOGGLE_CART_HIDDEN' });
  };

  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartQuantity}</span>
    </div>
  );
};

export default CartIcon;
