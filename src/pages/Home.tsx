import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
//import IntegrationPartners from '../components/home/IntegrationPartners';
import FAQSection from '../components/home/FAQSection';
import CallToAction from '../components/home/CallToAction';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />

      <FAQSection />
      <CallToAction />
    </>
  );
};

export default Home;