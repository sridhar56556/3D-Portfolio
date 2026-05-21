import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import IntroScreen from './components/IntroScreen';
import PortfolioScreen from './components/PortfolioScreen';

export default function App() {
  const [entered, setEntered] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#030a13] select-none overflow-x-hidden relative">
      {/* Global Cinematic Looping Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={() => setVideoLoaded(true)}
        className={`fixed inset-0 w-full h-full object-cover z-0 pointer-events-none transition-all duration-1000 ${
          !videoLoaded ? 'opacity-0' : entered ? 'opacity-75' : 'opacity-85'
        }`}
        style={{ filter: entered ? 'brightness(0.7) contrast(1.05) saturate(0.9)' : 'brightness(0.65) contrast(1.1) saturate(0.95)' }}
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Ambient background grid overlay or vignette */}
      <div className="fixed inset-0 bg-radial-gradient from-transparent via-black/20 to-black/65 pointer-events-none z-0" />

      <AnimatePresence mode="wait">
        {!entered ? (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              filter: 'blur(30px) brightness(1.5)',
              transform: 'scale(1.15)',
              y: -50
            }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="w-full h-screen relative z-10"
          >
            <IntroScreen onEnter={() => setEntered(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="w-full min-h-screen relative z-10"
          >
            <PortfolioScreen />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

