import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-up/sign-in-sign-up.component';
// import { auth } from './firebase/firebase.utils';
import {connect} from 'react-redux'

function App() {
  // const [userGoogleAuth, setUserGoogleAuth] = useState({ currentUser: null });
  // console.log('-> ', userGoogleAuth);

  // useEffect(() => {
  //   auth.onAuthStateChanged(user => {
  //     setUserGoogleAuth({ currentUser: user });
  //     // console.log(user);
  //   });
  //   return 'ok';
  // }, []);

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}



export default connect()(App);
