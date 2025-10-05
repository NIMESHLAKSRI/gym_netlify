import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { gymData } from '../data/mock';
import { CheckCircle } from 'lucide-react';

export const Pricing = () => {
  const { pricing } = gymData;

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-gym-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4 text-gym-primary">
            {pricing.title}
          </h2>
          <p className="body-large text-gym-secondary max-w-2xl mx-auto">
            {pricing.subtitle}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.plans.map((plan) => (
            <Card
              key={plan.id}
              className={`team-card relative ${
                plan.popular 
                  ? 'border-gym-primary bg-gym-border-medium' 
                  : 'border-gym-border-medium bg-gym-page'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gym-primary text-gym-inverse px-4 py-1 button-text">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <h3 className="heading-4 text-gym-primary mb-2">
                  {plan.name}
                </h3>
                <p className="body-small text-gym-secondary mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="heading-1 text-gym-primary">
                    {plan.price}
                  </span>
                  <span className="body-small text-gym-secondary">
                    /{plan.period}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="team-card-content pt-0">
                <div className="flex-1">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-gym-primary flex-shrink-0 mt-0.5" />
                        <span className="body-small text-gym-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button
                  onClick={scrollToContact}
                  className={
                    plan.popular
                      ? "btn-primary w-full"
                      : "btn-secondary w-full"
                  }
                >
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};