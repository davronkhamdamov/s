import { Route } from 'react-router-dom';
import Home from './home/Home';
import Login from './login/Login';
import SignUp from './signup/SignUp';
import CustomerService from './customer-service/CustomerServices';
import Seemore from './seemore/Seemore';
import Product from './product/Product';
import ProductItem from './ProductItem/ProductItem';
import Shop from '../components/Shop/Shop';

const Routes = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/customer-service">
        <CustomerService />
      </Route>
      <Route exact path="/seemore">
        <Seemore />
      </Route>
      <Route exact path="/seemore/product">
        <Product />
      </Route>
      <Route path="/seemore/product/:productid">
        <ProductItem />
      </Route>
      <Route path="/shop">
        <Shop />
      </Route>
    </>
  );
};

export default Routes;
