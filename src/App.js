import { BrowserRouter, Route, Switch } from 'react-router-dom'

//pages & componants
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Load from './pages/load/Load';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar /> 
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/load">
            <Load />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
