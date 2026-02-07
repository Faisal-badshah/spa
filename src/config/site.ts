export const siteConfig = {
  businessName: "Serenity Spa & Wellness",
  tagline: "Your sanctuary for relaxation and renewal",
  description: "Premium spa services in a tranquil environment. Expert therapists, personalized treatments, and complete rejuvenation.",

  meta: {
    title: "Serenity Spa & Wellness | Premium Spa Services",
    description: "Experience luxury spa treatments in a peaceful environment. Professional massage, facials, body treatments and wellness services.",
    keywords: "spa, massage, facial, wellness, relaxation, beauty treatments"
  },

  contact: {
    phone: "+1 (555) 123-4567",
    whatsapp: "15551234567",
    email: "hello@serenityspa.com",
    address: {
      street: "123 Wellness Boulevard",
      city: "Beverly Hills",
      state: "CA",
      zip: "90210",
      country: "USA"
    }
  },

  hours: {
    weekday: "Monday - Friday: 9:00 AM - 8:00 PM",
    weekend: "Saturday - Sunday: 10:00 AM - 6:00 PM"
  },

  social: {
    instagram: null,
    facebook: null
  },

  map: {
    embedUrl: ""
  }
} as const;
