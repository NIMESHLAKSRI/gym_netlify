import React from 'react';
import { Button } from './ui/button';
import { gymData } from '../data/mock';
import { CheckCircle } from 'lucide-react';

export const Services = () => {
  const { services } = gymData;

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-gym-page">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4 text-gym-primary">
            {services.title}
          </h2>
          <p className="body-large text-gym-secondary max-w-2xl mx-auto">
            {services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="pixel-pushers-grid">
          {services.items.map((service, index) => (
            <div
              key={service.id}
              className={`event-card ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
            >
              {/* Service Content */}
              <div className="event-card-content">
                <div>
                  <h3 className="event-card-title mb-4">
                    {service.name}
                  </h3>
                  <p className="body-medium text-gym-primary mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle size={20} className="text-gym-primary flex-shrink-0" />
                        <span className="body-small text-gym-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  onClick={scrollToContact}
                  className="btn-primary"
                >
                  Learn More
                </Button>
              </div>

              {/* Service Image */}
              <div className="event-card-image">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};