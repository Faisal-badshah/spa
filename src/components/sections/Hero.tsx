import { MessageCircle, Phone } from 'lucide-react';
import { heroConfig } from '../../config/hero';
import { siteConfig } from '../../config/site';
import CTAButton from '../common/CTAButton';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}`;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 bg-gradient-to-b from-primary-900 to-primary-700"
      aria-label="Hero section"
    >
      {heroConfig.image.url && (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${heroConfig.image.url}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6">
          {heroConfig.headline}
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
          {heroConfig.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {siteConfig.contact.whatsapp && (
            <CTAButton
              href={whatsappUrl}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              ariaLabel="Book on WhatsApp"
            >
              <MessageCircle size={20} className="mr-2" />
              {heroConfig.cta.primary}
            </CTAButton>
          )}
          {siteConfig.contact.phone && (
            <CTAButton
              href={`tel:${siteConfig.contact.phone}`}
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto"
              ariaLabel={`Call us at ${siteConfig.contact.phone}`}
            >
              <Phone size={20} className="mr-2" />
              {heroConfig.cta.secondary}
            </CTAButton>
          )}
        </div>
      </div>
    </section>
  );
}
