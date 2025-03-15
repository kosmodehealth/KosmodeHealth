import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Founders from './Founders';
import Technologies from './Technologies';
import Industries from './Industries';
import Products from './Products';
import Footer from './Footer';

const Main = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Founders />
      <Technologies />
      <Industries />
      <Products />
      <Footer />
    </div>
  );
};

export default Main;