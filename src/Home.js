import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import HowitWorks from './HowitWorks';
import Aboutus from './Aboutus';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';



function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <HowitWorks />
      <Aboutus />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
