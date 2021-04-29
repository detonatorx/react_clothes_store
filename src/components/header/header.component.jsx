import './header.styles.scss';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { auth } from '../../firebase/firebase.utils';
import {useEffect} from 'react'

export default function Header() {
  // const [curr, setCurr] = useState(currentUser);
  // useEffect(() => {
  //   console.log('ok');
  // }, [curr]);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={logo} alt="logo" />
      </Link>
      {/* <div>{console.log(currentUser)}</div> */}
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {/* {console.log(currentUser)}

        {currentUser !== 'null' ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )} */}
      </div>
    </div>
  );
}
