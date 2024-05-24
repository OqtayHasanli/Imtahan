import React from 'react'
import Menu from './components/MenuSection/Menu'
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Hero from './components/Hero/Hero';
import Jacket from './components/jacket/Jacket';
import Coat from './components/coat/Coat';
import Mycollection from './components/collection/Mycollection';

const Home = () => {
  return (
   <>
   <HelmetProvider>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
  </HelmetProvider>

  <Hero/>
   <Menu/>
   <Jacket/>
   <Mycollection/>
   <Coat/>
   
   </>
  )
}

export default Home