import Input from '../UI/Input';
import React from 'react';
import Card from '../UI/Card';
import { useState } from 'react';
import Layout from '../UI/Layout';
import axios from 'axios';

const Post = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: { title },
        body: { text },
      })
      .then((response) => console.log(response));

    if (title.trim() === '' || text.trim() === '') return;

    e.target.reset();
  };

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const textChangeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <Layout>
      <Card>
        <form
          onSubmit={handleSubmit}
          className="p-12 flex flex-col items-center w-full"
        >
          <Input
            label="Title"
            type="text"
            value={title}
            onChange={titleChangeHandler}
            className="w-10/12"
          />

          <Input
            label="Text"
            type="text"
            value={text}
            onChange={textChangeHandler}
            className="shadow appearance-none border rounded mb-4 w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />

          <button type="submit">Send</button>
        </form>
      </Card>
    </Layout>
  );
};

export default Post;
