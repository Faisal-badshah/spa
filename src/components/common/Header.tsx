import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '../../config/site';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Location', id: 'location' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-serif font-semibold text-primary-800">
              {siteConfig.businessName}
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </button>
            ))}
            {siteConfig.contact.phone && (
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center space-x-2 bg-primary-600 text-white px-5 py-2.5 rounded-lg hover:bg-primary-700 transition-colors"
                aria-label={`Call us at ${siteConfig.contact.phone}`}
              >
                <Phone size={18} />
                <span className="font-medium">Call Now</span>
              </a>
            )}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-700"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200">
          <nav className="px-4 py-4 space-y-3" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-neutral-700 hover:text-primary-600 transition-colors font-medium"
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </button>
            ))}
            {siteConfig.contact.phone && (
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center justify-center space-x-2 bg-primary-600 text-white px-5 py-3 rounded-lg hover:bg-primary-700 transition-colors w-full"
                aria-label={`Call us at ${siteConfig.contact.phone}`}
              >
                <Phone size={18} />
                <span className="font-medium">Call Now</span>
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
