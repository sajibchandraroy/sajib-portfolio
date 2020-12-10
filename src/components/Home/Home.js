import React from 'react';
import About from './About/About';
import Blog from './Blog/Blog';
import Header from './Header/Header';
import './Home.css';
import Navbar from './Navbar/Navbar';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div className="home">
        <Navbar/>
          <Header/>
          <Projects/>
          <Blog/>
          <About/>
        </div>
    );
};

export default Home;