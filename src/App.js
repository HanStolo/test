import Nav from '../src/components/Nav/Nav';
import Login from '../src/components/Login/Login';
import Home from '../src/components/Home/Home';
import { useState } from 'react';
import axios from 'axios';

function App(props) {
  const [isLoggedIn, setLogedIn] = useState(false);

  const handleLogin = () => {
    setLogedIn(true);
    console.log('klik');
  };

  const handleLogout = () => {
    setLogedIn(false);
    console.log('klik');
  };

  return (
    <>
      <Nav onClick={handleLogout} />
      {!isLoggedIn && <Login onClick={handleLogin} />}
      {isLoggedIn && <Home />}
    </>
  );
}

export default App;
