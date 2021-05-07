import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const CartDropdown = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      {cartItems.length > 0 ? (
        <CustomButton
          onClick={() => {
            dispatch({ type: 'TOGGLE_CART_HIDDEN' });
            history.push('/checkout');
          }}
        >
          GO TO CHECKOUT
        </CustomButton>
      ) : null}
    </div>
  );
};

export default CartDropdown;
