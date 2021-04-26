import './header.styles.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src="https://i.ibb.co/5v31w8h/logo.png" alt='logo'/>
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
