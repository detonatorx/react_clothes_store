import './checkout.styles.scss';
import { useSelector } from 'react-redux';

const CheckoutPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);

  const summTotal = useSelector(state => {
    return state.cart.cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.price;
    }, 0);
  });

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems && cartItems.map(cartItem => cartItem.name)}

      <div className="total">TOTAL: ${summTotal}</div>
    </div>
  );
};

export default CheckoutPage;
