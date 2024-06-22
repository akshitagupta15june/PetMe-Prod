import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero/Sample';
import About from '../components/About';
import OurService from '../components/OurService';
import Love from '../components/Love';
import AnimalsCard from '../components/AnimalsCard';
import Contributors from '../components/Contributors';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">
        <Hero />
        <About />
        <OurService />
        <Love />
        <AnimalsCard />
        <Contributors />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
