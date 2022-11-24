import React from 'react'
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

const Home = () => {
 
  return (
    <>
    <Layout/>
    <div>
      <h2>React Express</h2>
      <h5>What is React?-</h5>
      <h6>
      

React is a library for building user interfaces for the web and other platforms. 
This guide covers the fundamental aspects of React needed to build great web apps.
 If you're more interested in building mobile apps, consider checking out React Native Express instead.

How to use this guide
You should use this guide as a companion to the official Facebook 
documentation for getting started. While the official docs
 are great, this guide focuses on smaller, interactive examples 
 to illustrate React concepts. Additionally, this guide covers 
 important tools and projects in the React ecosystem which are
  outside the scope of the React docs.

This guide is intended for people who already know JavaScript.
 If you're new to JavaScript, or could use a refresher, consider
  first going through JavaScript Express. We'll assume a little
   knowledge of HTML and CSS, but even if you're not familiar
    with those, you should still be able to follow this guide.
      </h6>
    </div>
   


    </>
    
  )
}

export default Home;