// Direct content export - no JSON import issues
export const content = {
  en: {
    hero: {
      title: "Transform your body, change your life",
      subtitle: "Premium equipment • Certified coaches • Motivating community",
      cta_trial: "Start Free Trial",
      cta_visit: "Take a Tour"
    },
    features: {
      title: "Why choose us",
      items: [
        {
          title: "World-Class Equipment",
          description: "State-of-the-art machines and free weights for every fitness level"
        },
        {
          title: "Expert Coaches",
          description: "Certified personal trainers ready to guide your fitness journey"
        },
        {
          title: "Community Focus",
          description: "Join thousands of members in a supportive, motivating environment"
        }
      ]
    },
    equipment: {
      title: "Premium Equipment",
      subtitle: "Everything you need to reach your fitness goals",
      items: [
        { name: "Cardio Zone", description: "Latest treadmills, bikes, and ellipticals" },
        { name: "Strength Training", description: "Complete collection of dumbbells and barbells" },
        { name: "Functional Area", description: "CrossFit boxes, kettlebells, and TRX systems" },
        { name: "Recovery Zone", description: "Stretching space, massage chairs, and sauna" }
      ]
    },
    coaches: {
      title: "Meet our coaches",
      subtitle: "Certified professionals dedicated to your success",
      items: [
        { name: "Alex Johnson", specialty: "Strength & Conditioning", image: "Coach 1" },
        { name: "Maria Rodriguez", specialty: "HIIT & Cardio", image: "Coach 2" },
        { name: "David Chen", specialty: "Yoga & Flexibility", image: "Coach 3" }
      ]
    },
    schedule: {
      title: "Class Schedule",
      subtitle: "New classes every day",
      items: [
        { time: "6:00 - 7:00", name: "Morning Cardio", capacity: "20 / 25" },
        { time: "12:00 - 13:00", name: "Strength Training", capacity: "18 / 20" },
        { time: "18:00 - 19:30", name: "Evening HIIT", capacity: "25 / 25" },
        { time: "19:00 - 20:00", name: "Yoga & Relaxation", capacity: "15 / 20" }
      ]
    },
    pricing: {
      title: "Simple, transparent pricing",
      subtitle: "Choose a plan that's right for you",
      items: [
        {
          name: "Basic",
          price: "$29",
          period: "/month",
          features: [
            "Access to all equipment",
            "5 group classes/month",
            "1 free consultation"
          ]
        },
        {
          name: "Pro",
          price: "$79",
          period: "/month",
          popular: true,
          features: [
            "Unlimited class access",
            "Personal trainer (1x/week)",
            "Nutrition guidance",
            "Priority booking"
          ]
        },
        {
          name: "Elite",
          price: "$129",
          period: "/month",
          features: [
            "Everything in Pro",
            "Personal trainer (3x/week)",
            "Monthly fitness assessment",
            "Recovery services included"
          ]
        }
      ]
    },
    testimonials: {
      title: "What our members say",
      items: [
        {
          name: "Sarah M.",
          text: "This gym changed my life! The coaches are incredibly supportive and the community is amazing.",
          rating: 5
        },
        {
          name: "James T.",
          text: "Best equipment I've seen in a gym. Highly recommended!",
          rating: 5
        },
        {
          name: "Emma L.",
          text: "Great classes and staff. Worth every penny!",
          rating: 5
        }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Do I need to sign a membership contract?",
          answer: "No, all memberships are month-to-month with no long-term commitment."
        },
        {
          question: "Are personal training options available?",
          answer: "Yes! Pro and Elite plans include personal training sessions."
        },
        {
          question: "What are your hours?",
          answer: "Mon-Fri 5:30-22:00, Sat 7:00-20:00, Sun 8:00-18:00."
        },
        {
          question: "Can I freeze my membership?",
          answer: "Yes, you can freeze up to 3 months per year at no extra charge."
        }
      ]
    },
    contact: {
      title: "Join us today",
      subtitle: "Start your transformation journey",
      cta: "Get Started",
      address: "123 Fitness Street, Sports City, SC 12345",
      phone: "+1 (555) 123-4567",
      email: "hello@gympro.com"
    }
  }
};

// Return content for given locale with English fallback
export function getContent(locale: string = 'en') {
  return content[locale as keyof typeof content] || content.en;
}
