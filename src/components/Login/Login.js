import React, { useState } from 'react';
import Card from '../UI/Card';
import '../../index.css';
import Input from '../UI/Input';
import Layout from '../UI/Layout';
import { Redirect, useHistory } from 'react-router-dom';
import Home from '../Home/Home';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formIsValid, setFormIsValid] = useState(true);
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    setFormIsValid(false);

    if (username.trim() === '' || password.trim().length < 6) return;
    setFormIsValid(true);

    history.push('/home');
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  return (
    <Layout>
      <Card>
        <form
          onSubmit={submitHandler}
          className="block p-12 flex flex-col items-center"
        >
          <Input
            label="Username"
            type="text"
            name="username"
            onChange={handleUsernameChange}
            className="items-start"
          />
          {!formIsValid && (
            <p className="text-red-600">Username is required!</p>
          )}
          <Input
            label="Password"
            type="password"
            name="password"
            onChange={handlePasswordChange}
          />
          {!formIsValid && (
            <p className="text-red-600">Password is required!</p>
          )}
          <button type="submit">Login</button>
        </form>
      </Card>
    </Layout>
  );
};

export default Login;
