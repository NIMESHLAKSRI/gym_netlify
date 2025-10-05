import React from 'react';
import { Button } from './ui/button';
import { gymData } from '../data/mock';

export const Hero = () => {
  const { hero } = gymData;

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Image with Overlay */}
      <div className="hero-background">
        <img 
          src={hero.heroImage}
          alt="Gym hero background"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="hero-content">
          <h1 className="hero-title mb-6">
            {hero.title}
          </h1>
          
          <div className="mb-8">
            <h2 className="body-large mb-4 text-gym-primary">
              {hero.subtitle}
            </h2>
            <p className="body-medium max-w-lg text-gym-secondary">
              {hero.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md">
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="btn-primary flex-1"
            >
              {hero.primaryCTA}
            </Button>
            <Button 
              onClick={() => scrollToSection('#services')}
              className="btn-secondary flex-1"
            >
              {hero.secondaryCTA}
            </Button>
          </div>
        </div>
      </div>

      {/* Creative Ribbon Elements */}
      <div className="creative-ribbon">
        <span className="button-text">Build Strength • Gain Confidence • Transform Life</span>
      </div>
      <div className="creative-ribbon-back">
        <span className="button-text">Professional Training • Modern Equipment • Results</span>
      </div>
    </section>
  );
};