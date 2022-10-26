import React from 'react';
import { Navbar } from 'components/navbar';
import { PopularPosts } from 'components/popularPosts';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: '64px', height: '1000px' }}>
        <div style={{ height: '100px' }}></div>
        <PopularPosts />
      </div>
    </div>
  );
};

export default Home;
