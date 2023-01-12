import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import { Switch
 } from 'react-router-dom';
 import Home from './pages/Home';
import Account from './pages/Account';
function App() {
  return (
    <>
      <BrowserRouter>

        <Switch>
        <Route exact path={"/"} component={Home} />
          <Route exact path={"/account/:name"} component={Account}/>
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;
