// Mock data for gym landing page
export const gymData = {
  hero: {
    title: "Transform Your Body",
    subtitle: "Build Strength, Gain Confidence",
    description: "Join our state-of-the-art gym and start your fitness journey today. Professional trainers, modern equipment, and a supportive community await you.",
    primaryCTA: "Start Your Journey",
    secondaryCTA: "Book a Tour",
    heroImage: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxneW0lMjBmaXRuZXNzfGVufDB8fHx8MTc1OTY4MTExOHww&ixlib=rb-4.1.0&q=85"
  },
  
  services: {
    title: "Our Services",
    subtitle: "Everything you need to reach your fitness goals",
    items: [
      {
        id: 1,
        name: "Group Training",
        description: "Join our high-energy group classes led by certified trainers. Build strength together.",
        image: "https://images.unsplash.com/photo-1734668486909-4637ecd66408?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxneW0lMjBjbGFzc2VzfGVufDB8fHx8MTc1OTY4MTEzOHww&ixlib=rb-4.1.0&q=85",
        features: ["Small class sizes", "Expert trainers", "Variety of workouts"]
      },
      {
        id: 2,
        name: "Cardio Training",
        description: "State-of-the-art cardio equipment to help you burn calories and improve endurance.",
        image: "https://images.unsplash.com/photo-1571388072750-31a921b3d900?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxneW0lMjBjbGFzc2VzfGVufDB8fHx8MTc1OTY4MTEzOHww&ixlib=rb-4.1.0&q=85",
        features: ["Modern equipment", "Heart rate monitoring", "Custom programs"]
      },
      {
        id: 3,
        name: "Strength Training",
        description: "Build muscle and increase strength with our functional training and equipment.",
        image: "https://images.unsplash.com/photo-1710746904729-f3ad9f682bb9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw0fHxneW0lMjBjbGFzc2VzfGVufDB8fHx8MTc1OTY4MTEzOHww&ixlib=rb-4.1.0&q=85",
        features: ["Free weights", "Resistance training", "Functional movements"]
      },
      {
        id: 4,
        name: "Personal Training",
        description: "One-on-one sessions with certified personal trainers tailored to your goals.",
        image: "https://images.unsplash.com/photo-1584827387150-8ae4caebe906?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHx3b3Jrb3V0JTIwZXF1aXBtZW50fGVufDB8fHx8MTc1OTY4MTE0NHww&ixlib=rb-4.1.0&q=85",
        features: ["Personalized programs", "Goal tracking", "Nutrition guidance"]
      }
    ]
  },
  
  pricing: {
    title: "Membership Plans",
    subtitle: "Choose the perfect plan for your fitness journey",
    plans: [
      {
        id: 1,
        name: "Basic",
        price: "$29",
        period: "month",
        description: "Perfect for getting started",
        features: [
          "Gym access during off-peak hours",
          "Basic equipment usage",
          "Locker room access",
          "Free fitness assessment"
        ],
        popular: false
      },
      {
        id: 2,
        name: "Premium",
        price: "$49",
        period: "month",
        description: "Most popular choice",
        features: [
          "24/7 gym access",
          "All equipment and classes",
          "Guest passes (2 per month)",
          "Free personal training session",
          "Nutrition consultation"
        ],
        popular: true
      },
      {
        id: 3,
        name: "Elite",
        price: "$79",
        period: "month",
        description: "For serious fitness enthusiasts",
        features: [
          "All Premium benefits",
          "Unlimited guest passes",
          "Weekly personal training",
          "Priority class booking",
          "Meal planning service"
        ],
        popular: false
      }
    ]
  },
  
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      content: "This gym changed my life! The trainers are incredible and the equipment is top-notch. I've never felt stronger.",
      rating: 5
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Athlete",
      content: "The best gym in the city. Clean facilities, friendly staff, and results that speak for themselves.",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Busy Professional",
      content: "Perfect for my schedule with 24/7 access. The community here is so supportive and motivating.",
      rating: 5
    }
  ],
  
  contact: {
    title: "Get Started Today",
    subtitle: "Join our fitness community",
    address: "123 Fitness Street, Gym City, GC 12345",
    phone: "(555) 123-4567",
    email: "info@gymname.com",
    hours: {
      weekdays: "5:00 AM - 11:00 PM",
      weekends: "6:00 AM - 10:00 PM"
    }
  }
};