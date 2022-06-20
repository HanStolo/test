import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../../index.css';

const Nav = (props) => {
  const history = useHistory();
  return (
    <div className="bg-orange-500 px-40 py-3 flex flex-row justify-between ">
      <h1 className="text-2xl text-white lowercase font-mono  font-bold tracking-tighter">
        Projekat
      </h1>
      <ul className="flex flex-row py-2">
        <li className=" px-2">
          <Link to="/home">Home</Link>
        </li>
        <li className="px-2">
          <Link to="/post">Post</Link>
        </li>
      </ul>

      <button
        onClick={() => {
          history.push('/login');
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Nav;
