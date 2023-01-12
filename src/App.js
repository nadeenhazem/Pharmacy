import './App.css';
import Login from './pages/Login';
import { BrowserRouter, Route} from 'react-router-dom';
import { Switch
 } from 'react-router-dom';
 import Signup from './pages/SignUp'
 import Home from './pages/Home';
// import TooglePage from './pages/TooglePage';
// import test1 from './pages/Test';
// import SignUpBridge from './pages/SignUpBridge';
function App() {
  return (
    <>
      <BrowserRouter>

        <Switch>
        <Route exact path={"/"} component={Home} />
          <Route exact path={"/signup"} component={Signup} />
          <Route exact path={"/login"} component={Login} />
          {/* <Route exact path={"/signup2"} component={SignUpBridge}/> */}
          {/* <Route exact path={"/test"} component={test1}/> */}
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;
