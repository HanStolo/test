import React from 'react';

const Input = (props) => {
  return (
    <div className="mb-4 w-6/12">
      <label htmlFor={props.id} className="block text-lg mb-2">
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        className="shadow appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default Input;
