import { Shield, Users, Sparkles, Heart } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "Highest Hygiene Standards",
      description: "We maintain strict cleanliness protocols and use premium sanitized equipment for every treatment."
    },
    {
      icon: Users,
      title: "Expert Therapists",
      description: "Our certified professionals bring years of experience and ongoing training in advanced techniques."
    },
    {
      icon: Sparkles,
      title: "Tranquil Environment",
      description: "Carefully designed spaces that promote deep relaxation from the moment you arrive."
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Every treatment is tailored to your unique needs and preferences for optimal results."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We are committed to providing exceptional service in every detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
