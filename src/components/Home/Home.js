import Input from '../UI/Input';
import React from 'react';
import Layout from '../UI/Layout.js';
import AllTweets from './AllTweets.js';
import Card from '../UI/Card.js';

const Home = (props) => {
  return (
    <Layout>
      <ul>
        <AllTweets className="flex items-center" />
      </ul>
    </Layout>
  );
};

export default Home;
