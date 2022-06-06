import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllTweets = () => {
  const [data, setData] = useState([]);

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

  return (
    <div>
      {data.map((data) => {
        return (
          <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllTweets;
