import Home from "./routes/home/Home";
import Login from "./routes/login/Login";
import SignUp from "./routes/signup/SignUp";
import CustomerService from './routes/customer-service/CustomerServices'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/login">
          <Login/>
      </Route>
      <Route path="/signup">
          <SignUp/>
      </Route>
      <Route path="/customer-service">
        <CustomerService />
      </Route>
    </div>
  );
}

export default App;
