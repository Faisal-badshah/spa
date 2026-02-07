import { Star } from 'lucide-react';
import { testimonialsConfig } from '../../config/testimonials';

export default function Testimonials() {
  if (!testimonialsConfig.testimonials || testimonialsConfig.testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
            {testimonialsConfig.title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {testimonialsConfig.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsConfig.testimonials.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              {testimonial.rating && (
                <div className="flex items-center mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: Math.min(testimonial.rating, 5) }).map((_, i) => (
                    <Star key={i} size={18} className="text-amber-400 fill-amber-400" aria-hidden="true" />
                  ))}
                </div>
              )}
              <p className="text-neutral-700 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="text-neutral-900 font-semibold">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>

        {testimonialsConfig.testimonials.length > 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {testimonialsConfig.testimonials.slice(3).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                {testimonial.rating && (
                  <div className="flex items-center mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {Array.from({ length: Math.min(testimonial.rating, 5) }).map((_, i) => (
                      <Star key={i} size={18} className="text-amber-400 fill-amber-400" aria-hidden="true" />
                    ))}
                  </div>
                )}
                <p className="text-neutral-700 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="text-neutral-900 font-semibold">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
