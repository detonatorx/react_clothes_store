import './header.styles.scss';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { auth } from '../../firebase/firebase.utils';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={logo} alt="logo" />
      </Link>
      {/* <div>{console.log(currentUser)}</div> */}
      <div className="options">
        <Link className="option" to="/shop">
          loglog SHOP
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
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

// const mapStateToProps = state => ({
//   currentUser: state.user.currentUser,
// });

// export default connect(mapStateToProps)(Header);
export default Header;
