import { useState } from 'react';
import ScrollProgress from './components/animation/ScrollProgress';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import SportsGrid from './components/sections/SportsGrid';
import VideoSection from './components/sections/VideoSection';
import Reviews from './components/sections/Reviews';
import EnquiryCTA from './components/sections/EnquiryCTA';
import Footer from './components/layout/Footer';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-container" data-theme={theme}>
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Stats />
        <SportsGrid />
        <VideoSection />
        <Reviews />
        <EnquiryCTA />
      </main>
      <Footer />
    </div>
  );
}