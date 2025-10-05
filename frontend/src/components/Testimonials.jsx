import React from 'react';
import { Card, CardContent } from './ui/card';
import { gymData } from '../data/mock';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const { testimonials } = gymData;

  return (
    <section id="testimonials" className="py-24 bg-gym-page">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4 text-gym-primary">
            What Our Members Say
          </h2>
          <p className="body-large text-gym-secondary max-w-2xl mx-auto">
            Real stories from real people who transformed their lives at our gym
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="team-card bg-gym-card border-gym-border-medium"
            >
              <CardContent className="team-card-content">
                <div className="flex-1">
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <Star
                        key={index}
                        size={20}
                        className="fill-gym-primary text-gym-primary"
                      />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="body-medium text-gym-primary mb-6">
                    "{testimonial.content}"
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="border-t border-gym-border-light pt-4">
                  <div className="text-center">
                    <h4 className="heading-6 text-gym-primary mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="caption text-gym-secondary">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};