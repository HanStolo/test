import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Input from '../UI/Input';
const AllTweets = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const getData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => getData(), []);

  const handleRemove = (id) => {
    const newList = data.filter((item) => item.id !== id);
    setData(newList);
  };

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (title) => {
    const newList = data.filter((item) => item.title === search);
    setData(newList);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-start w-10/12">
          <Input
            label="search"
            type="text"
            name="username"
            onChange={handleSearchInput}
          />
          <button
            className="flex border mt-3 px-10 w-max bg-orange-600  text-white "
            onClick={() => {
              handleSearch(handleSearchInput);
            }}
          >
            Search
          </button>
        </div>
        {data.map((data) => {
          return (
            <li
              key={data.id}
              className=" flex flex-col w-10/12  p-10  border-2 border-black rounded-lg my-2 items-start"
            >
              <h1 className="text-lg font-medium">Title: </h1>
              {data.title}
              <p className="text-centar pt-5 text-lg font-medium">Content: </p>
              {data.body}
              <button
                onClick={() => {
                  handleRemove(data.id);
                }}
                className="border mt-3 px-10 bg-orange-600  text-white "
              >
                Delete
              </button>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default AllTweets;
