import './header.styles.scss';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

export default function Header() {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={logo} alt='logo'/>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
      </div>
    </div>
  );
}
