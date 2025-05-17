import React, { useEffect } from 'react';
import HeroBanner from '../components/HeroBanner';
import VideoSection from '../components/VideoSection';
import Impact from '../components/Impact';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  return (
    <main>
      <HeroBanner />
      <Impact />
      <VideoSection />
    </main>
  );
};

export default HomePage;