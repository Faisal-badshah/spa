import { MessageCircle } from 'lucide-react';
import { useEffect } from 'react';
import Header from '../Header';
import Footer from './components/common/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Gallery from './components/sections/Gallery';
import Testimonials from './components/sections/Testimonials';
import Location from './components/sections/Location';
import FinalCTA from './components/sections/FinalCTA';
import { siteConfig } from './config/site';

function App() {
  useEffect(() => {
    document.title = siteConfig.meta.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', siteConfig.meta.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = siteConfig.meta.description;
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', siteConfig.meta.keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = siteConfig.meta.keywords;
      document.head.appendChild(meta);
    }
  }, []);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}`;

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Location />
        <FinalCTA />
      </main>
      <Footer />

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 md:hidden"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}

export default App;
