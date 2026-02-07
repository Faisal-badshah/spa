import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../../config/site';
import CTAButton from '../common/CTAButton';

export default function FinalCTA() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}`;

  return (
    <section className="py-20 md:py-28 bg-primary-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
          Ready to Experience True Relaxation?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Book your appointment today and discover why our guests return time and time again
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CTAButton
            href={whatsappUrl}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            <MessageCircle size={20} className="mr-2" />
            Book on WhatsApp
          </CTAButton>
          <CTAButton
            href={`tel:${siteConfig.contact.phone}`}
            variant="ghost"
            size="lg"
            className="w-full sm:w-auto"
          >
            Or Call {siteConfig.contact.phone}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
