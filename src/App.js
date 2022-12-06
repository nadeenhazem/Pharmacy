import './App.css';
import Login from './pages/Login';
import { BrowserRouter, Route} from 'react-router-dom';
import { Switch
 } from 'react-router-dom';
 import Signup from './pages/SignUp'
 import Home from './pages/Home';
function App() {
  return (
    <>
      <BrowserRouter>

        <Switch>
        <Route exact path={"/"} component={Home} />
          <Route exact path={"/signup"} component={Signup} />
          <Route exact path={"/login"} component={Login} />
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;
