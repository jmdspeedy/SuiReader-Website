
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';
import VoxelScene from './components/VoxelScene';
import DevLog from './components/DevLog';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg selection:bg-suica-green selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <VoxelScene />
        <HowItWorks />
        <DevLog />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
