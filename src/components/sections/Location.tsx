import { MapPin, Clock, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../config/site';

export default function Location() {
  const contactMethods = [
    {
      icon: MapPin,
      label: 'Address',
      value: `${siteConfig.contact.address.street}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.state} ${siteConfig.contact.address.zip}`,
      action: `https://maps.google.com/?q=${encodeURIComponent(`${siteConfig.contact.address.street}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.state} ${siteConfig.contact.address.zip}`)}`,
      actionText: 'View on Maps'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: siteConfig.contact.phone,
      action: `tel:${siteConfig.contact.phone}`,
      actionText: 'Call Now'
    },
    {
      icon: Mail,
      label: 'Email',
      value: siteConfig.contact.email,
      action: `mailto:${siteConfig.contact.email}`,
      actionText: 'Send Email'
    },
    {
      icon: Clock,
      label: 'Hours',
      value: `${siteConfig.hours.weekday} | ${siteConfig.hours.weekend}`,
      action: null,
      actionText: null
    }
  ];

  return (
    <section id="location" className="py-20 md:py-32 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-4">
            Visit Our Sanctuary
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Located in the heart of Beverly Hills, we're easily accessible and ready to welcome you to our peaceful retreat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.action || '#'}
                className={`group p-8 rounded-2xl transition-all duration-300 ${
                  method.action
                    ? 'bg-white border border-neutral-200 hover:border-primary-400 hover:shadow-xl hover:shadow-primary-100 cursor-pointer'
                    : 'bg-neutral-100 border border-neutral-200'
                }`}
                {...(method.action ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary-100 rounded-lg group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <Icon size={24} />
                  </div>
                  {method.action && (
                    <ArrowUpRight size={20} className="text-primary-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {method.label}
                </h3>
                <p className="text-neutral-700 break-all">
                  {method.value}
                </p>
                {method.actionText && (
                  <div className="mt-4 text-sm font-semibold text-primary-600 group-hover:text-primary-700">
                    {method.actionText} →
                  </div>
                )}
              </a>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-neutral-200">
              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-6">
                Book Your Experience
              </h3>
              <p className="text-neutral-700 mb-6">
                Whether you're looking to schedule a specific service or just want to visit our sanctuary, we make booking easy and convenient.
              </p>
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl hover:shadow-lg hover:shadow-primary-600/30 transition-all duration-300 group"
                >
                  <span className="font-semibold">Message on WhatsApp</span>
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center justify-between w-full px-6 py-4 bg-white border-2 border-primary-600 text-primary-600 rounded-xl hover:bg-primary-50 transition-all duration-300 group"
                >
                  <span className="font-semibold">Call {siteConfig.contact.phone}</span>
                  <Phone size={20} className="group-hover:rotate-12 transition-transform" />
                </a>
              </div>
              <p className="text-sm text-neutral-500 mt-6 text-center">
                Walk-ins welcome based on availability
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-auto border border-neutral-200">
            {siteConfig.map.embedUrl ? (
              <iframe
                src={siteConfig.map.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Serenity Spa Location Map"
                className="w-full h-full"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200 flex flex-col items-center justify-center">
                <MapPin size={48} className="text-neutral-400 mb-4" />
                <p className="text-neutral-600 font-medium text-center px-6">
                  {siteConfig.contact.address.street}<br />
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${siteConfig.contact.address.street}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.state} ${siteConfig.contact.address.zip}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-semibold"
                >
                  Open in Google Maps
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
