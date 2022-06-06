import React from 'react';
import Card from '../UI/Card';
import '../../index.css';
import Input from '../UI/Input';

const Login = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card>
      <form
        onSubmit={submitHandler}
        className="p-12 flex flex-col items-center"
      >
        <Input label="Username" type="text" name="username" />
        <Input label="Password" type="password" name="password" />
        <button onClick={props.onClick}>Login</button>
      </form>
    </Card>
  );
};

export default Login;
