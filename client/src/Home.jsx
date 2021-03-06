import React from 'react'
import Nav from './Home/Nav';
import './App.css';
import Main from './Home/main';
import { PostProvider } from './contexts/PostContext';

function Home() {
  return (
    <PostProvider>
      <div className='main-container w-full fixed h-screen overflow-hidden'>
        <Nav active={`home`} />
        <Main />
      </div>
    </PostProvider>
  );
}

export default Home;
