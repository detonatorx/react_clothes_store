import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-up/sign-in-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { useSelector } from 'react-redux';

function App() {
  const currentUser = useSelector(state => state.user.currentUser);

  return (
    <>
      <div className="root-container">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
            }
          />
        </Switch>
      </div>
      <div id="detonatorx">detonatorx ©, 2021</div>
    </>
  );
}

export default App;
