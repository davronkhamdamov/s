import Home from "./routes/home/Home";
import Login from "./routes/login/Login";
import SignUp from "./routes/signup/SignUp";
import { Route } from 'react-router-dom';

// https://pngimg.com/uploads/amazon/amazon_PNG25.png
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
    </div>
  );
}

export default App;
