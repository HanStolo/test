import React from 'react';
import '../../index.css';

const Nav = (props) => {
  return (
    <div className="bg-orange-500 px-40 py-3 flex flex-row justify-between ">
      <h1 className="text-2xl text-white lowercase font-mono  font-bold tracking-tighter">
        Projekat
      </h1>
      <button onClick={props.onClick}>Logout</button>
    </div>
  );
};

export default Nav;
