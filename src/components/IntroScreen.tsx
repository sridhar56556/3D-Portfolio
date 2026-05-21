import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface IntroScreenProps {
  onEnter: () => void;
}

export default function IntroScreen({ onEnter }: IntroScreenProps) {
  const [countdown, setCountdown] = useState(15); // Auto-transition in 15s

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      onEnter();
    }
  }, [countdown, onEnter]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-transparent text-white select-none">




      {/* Hero Content Section */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 h-screen max-w-5xl mx-auto">
        {/* Cinematic Header */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl leading-[0.95] tracking-[-2.46px] max-w-4xl font-normal text-white animate-fade-rise"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Building <em className="not-italic text-muted-foreground">scalable backends</em> <br />
          <em className="not-italic text-white">&amp; immersive web experiences.</em>
        </h1>

        {/* Cinematic Subtext */}
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mt-10 leading-relaxed font-normal animate-fade-rise-delay">
          I am a Full Stack Developer specializing in crafting robust Java backend systems, seamless data architectures, and visually stunning digital environments.
        </p>

        {/* Big Entry Button */}
        <div className="animate-fade-rise-delay-2 mt-12 flex flex-col items-center gap-4">
          <button
            onClick={onEnter}
            className="liquid-glass rounded-full px-16 py-6 sm:px-20 sm:py-7 xl:px-24 xl:py-8 text-lg sm:text-2xl xl:text-3xl text-white font-medium hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center gap-3 cursor-pointer group shadow-lg shadow-black/10"
          >
            Explore My Journey
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>

          {/* Quick loading timer indicator for ambient auto-entry */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground/80 mt-2 font-mono">
            <Sparkles size={12} className="animate-spin text-white/40" />
            <span>Auto-revealing portfolio in {countdown}s</span>
          </div>
        </div>
      </main>

      {/* Floating interactive hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-center animate-pulse pointer-events-none">
        <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-white/50">
          Curated Digital Canvas
        </span>
      </div>
    </div>
  );
}
