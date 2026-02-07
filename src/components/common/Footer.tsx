import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { siteConfig } from '../../config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-semibold text-white mb-4">
              {siteConfig.businessName}
            </h3>
            <p className="text-neutral-400 mb-4">
              {siteConfig.tagline}
            </p>
            {(siteConfig.social.instagram || siteConfig.social.facebook) && (
              <div className="flex space-x-4">
                {siteConfig.social.instagram && (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                )}
                {siteConfig.social.facebook && (
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                )}
              </div>
            )}
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              {siteConfig.contact.phone && (
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center space-x-3 text-neutral-400 hover:text-primary-400 transition-colors"
                  aria-label={`Call us at ${siteConfig.contact.phone}`}
                >
                  <Phone size={18} />
                  <span>{siteConfig.contact.phone}</span>
                </a>
              )}
              {siteConfig.contact.email && (
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center space-x-3 text-neutral-400 hover:text-primary-400 transition-colors"
                  aria-label={`Email us at ${siteConfig.contact.email}`}
                >
                  <Mail size={18} />
                  <span>{siteConfig.contact.email}</span>
                </a>
              )}
              {siteConfig.contact.address.street && (
                <div className="flex items-start space-x-3 text-neutral-400">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <span>
                    {siteConfig.contact.address.street}<br />
                    {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Hours</h4>
            <div className="space-y-2 text-neutral-400">
              {siteConfig.hours.weekday && <p>{siteConfig.hours.weekday}</p>}
              {siteConfig.hours.weekend && <p>{siteConfig.hours.weekend}</p>}
              {!siteConfig.hours.weekday && !siteConfig.hours.weekend && (
                <p className="text-neutral-500 italic">Hours not available</p>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-500 text-sm">
          <p>&copy; {currentYear} {siteConfig.businessName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
