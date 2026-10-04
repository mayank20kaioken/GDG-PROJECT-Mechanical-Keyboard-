'use client'; 

import Spline from '@splinetool/react-spline';
import { useEffect, useState } from 'react';

export default function Showcase() {
  const [scrollDepth, setScrollDepth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollDepth(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <div className="canvas-container">
<Spline scene="https://prod.spline.design/4Zb3XsXnjByxE2qR/scene.splinecode" />
      </div>

      <div className="scroll-layer">
        
        <section className="text-section">
          <h1>Aula F75</h1>
          <p>Scroll down to initiate the cinematic camera sequence and explore the hardware.</p>
        </section>

        <section className="text-section align-right">
          <h1 style={{ opacity: scrollDepth > 300 ? 1 : 0.1, transition: 'opacity 0.5s' }}>
            Acoustics
          </h1>
          <p style={{ opacity: scrollDepth > 300 ? 1 : 0.1, transition: 'opacity 0.5s' }}>
            Precision engineered dampening layers separating the PCB from the mounting plate for a thocky sound profile.
          </p>
        </section>

        <section className="text-section">
          <h1 style={{ opacity: scrollDepth > 1000 ? 1 : 0.1, transition: 'opacity 0.5s' }}>
            The Switch
          </h1>
          <p style={{ opacity: scrollDepth > 1000 ? 1 : 0.1, transition: 'opacity 0.5s' }}>
            Linear Matcha Latte switches with perfectly calibrated actuation force for optimal typing feedback.
          </p>
        </section>

      </div>
    </main>
  );
}