import React from 'react';
import { gymData } from '../data/mock';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer = () => {
  const { contact } = gymData;

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gym-page border-t border-gym-border-light">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-bold text-gym-primary uppercase tracking-tight">
                FitCore
              </span>
            </div>
            <p className="body-small text-gym-secondary max-w-xs">
              Transform your body, build confidence, and join our supportive fitness community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="heading-6 text-gym-primary mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection('#home')}
                className="block body-small text-gym-secondary hover:text-gym-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('#services')}
                className="block body-small text-gym-secondary hover:text-gym-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('#pricing')}
                className="block body-small text-gym-secondary hover:text-gym-primary transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('#testimonials')}
                className="block body-small text-gym-secondary hover:text-gym-primary transition-colors"
              >
                Reviews
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="heading-6 text-gym-primary mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-gym-primary flex-shrink-0 mt-0.5" />
                <span className="body-small text-gym-secondary">{contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-gym-primary" />
                <span className="body-small text-gym-secondary">{contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-gym-primary" />
                <span className="body-small text-gym-secondary">{contact.email}</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="md:col-span-1">
            <h4 className="heading-6 text-gym-primary mb-4">Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-gym-primary flex-shrink-0" />
                <div>
                  <p className="body-small text-gym-secondary">Mon-Fri</p>
                  <p className="caption text-gym-secondary">{contact.hours.weekdays}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-gym-primary flex-shrink-0" />
                <div>
                  <p className="body-small text-gym-secondary">Sat-Sun</p>
                  <p className="caption text-gym-secondary">{contact.hours.weekends}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gym-border-light mt-8 pt-8 text-center">
          <p className="caption text-gym-secondary">
            © 2024 FitCore. All rights reserved. Transform your body, transform your life.
          </p>
        </div>
      </div>
    </footer>
  );
};