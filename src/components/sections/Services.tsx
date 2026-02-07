import { servicesConfig } from '../../config/services';

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
            {servicesConfig.title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {servicesConfig.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesConfig.services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  src={service.image}
                  alt={service.imageAlt || service.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f5f5f4" width="400" height="300"/%3E%3C/svg%3E';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-primary-600 font-semibold">
                    {service.priceRange}
                  </span>
                  <span className="text-neutral-500">
                    {service.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
