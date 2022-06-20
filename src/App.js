import Nav from '../src/components/Nav/Nav';
import Login from '../src/components/Login/Login';
import { useState } from 'react';
import Post from './components/Post/Post';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';

function App(props) {
  const [isLoggedIn, setLogedIn] = useState(false);

  const handleLogin = () => {
    setLogedIn(true);
    console.log('logedin');
  };

  const handleLogout = () => {
    setLogedIn(false);
  };

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/post">
          <Post />
        </Route>
      </Switch>
    </>
  );
}

export default App;
