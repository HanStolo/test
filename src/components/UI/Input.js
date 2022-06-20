import React, { useState } from 'react';

const Input = (props) => {
  return (
    <>
      <div className="block items-center w-max">
        <label htmlFor={props.id} className="block text-lg  mb-2">
          {props.label}
        </label>
        <input
          type={props.type}
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          className="shadow appearance-none border rounded mb-4 w-6/12 w-max py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </>
  );
};

export default Input;
