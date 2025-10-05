import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { gymData } from '../data/mock';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

export const Contact = () => {
  const { contact } = gymData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours. Welcome to FitCore!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-gym-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4 text-gym-primary">
            {contact.title}
          </h2>
          <p className="body-large text-gym-secondary max-w-2xl mx-auto">
            {contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="team-card bg-gym-page border-gym-border-medium">
              <CardHeader>
                <CardTitle className="heading-4 text-gym-primary">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-gym-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="heading-6 text-gym-primary mb-1">Address</h4>
                    <p className="body-small text-gym-secondary">{contact.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="text-gym-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="heading-6 text-gym-primary mb-1">Phone</h4>
                    <p className="body-small text-gym-secondary">{contact.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="text-gym-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="heading-6 text-gym-primary mb-1">Email</h4>
                    <p className="body-small text-gym-secondary">{contact.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="text-gym-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="heading-6 text-gym-primary mb-1">Hours</h4>
                    <p className="body-small text-gym-secondary">
                      Weekdays: {contact.hours.weekdays}
                    </p>
                    <p className="body-small text-gym-secondary">
                      Weekends: {contact.hours.weekends}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="team-card bg-gym-page border-gym-border-medium">
            <CardHeader>
              <CardTitle className="heading-4 text-gym-primary">Start Your Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-gym-card border-gym-border-medium text-gym-primary placeholder-gym-secondary"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-gym-card border-gym-border-medium text-gym-primary placeholder-gym-secondary"
                  />
                </div>
                
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone (Optional)"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-gym-card border-gym-border-medium text-gym-primary placeholder-gym-secondary"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your fitness goals..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-gym-card border-gym-border-medium text-gym-primary placeholder-gym-secondary resize-none"
                  />
                </div>
                
                <Button type="submit" className="btn-primary w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};