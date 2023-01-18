import { BrowserRouter, Route} from 'react-router-dom';
import { Switch
 } from 'react-router-dom';
 import Home from './pages/Home';
import Account from './pages/Account';
import AddClient from './components/AddClient';
function App() {
  return (
    
    <>
      <BrowserRouter>

        <Switch>
        <Route exact path={"/"} component={Home} />
          <Route exact path={"/account/:name"} component={Account}/>
          <Route exact path={"/Addclient"} component={AddClient}/>
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;
