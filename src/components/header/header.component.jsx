import './header.styles.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { auth } from '../../firebase/firebase.utils';
import { useSelector, useDispatch } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const cartHidden = useSelector(state => state.cart.hidden);
  // const state = useSelector(({ user: { currentUser }, cart: { hidden } }) => ({
  //   currentUser,
  //   cart,
  // }));

  const dispatch = useDispatch();

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>

        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut();
              dispatch({ type: 'USER_NULL' });
              // window.localStorage.removeItem('app_state');
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}

        <CartIcon />
      </div>

      {cartHidden ? null : <CartDropdown />}
    </div>
  );
};

// const mapStateToProps = state => ({
//   currentUser: state.user.currentUser,
// });

// export default connect(mapStateToProps)(Header);
export default Header;
