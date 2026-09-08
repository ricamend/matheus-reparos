import { useState, useEffect } from 'react';
import type { NavTab } from './types';
import { TopBar } from './components/layout/TopBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { HeroSection } from './components/home/HeroSection';
import { CredibilityBar } from './components/home/CredibilityBar';
import { ServicesGrid } from './components/home/ServicesGrid';
import { QuoteCalculator } from './components/home/QuoteCalculator';
import { OrderStatusTracker } from './components/home/OrderStatusTracker';
import { LabShowcase } from './components/home/LabShowcase';
import { TestimonialsSection } from './components/home/TestimonialsSection';
import { FAQSection } from './components/home/FAQSection';
import { ServicesPage } from './components/services/ServicesPage';
import { AboutPage } from './components/about/AboutPage';
import { ContactPage } from './components/contact/ContactPage';

export function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  const handleOpenCalculator = () => {
    if (currentTab !== 'home') {
      setCurrentTab('home');
      setTimeout(() => {
        const el = document.getElementById('calculadora-orcamento');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('calculadora-orcamento');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface font-sans text-text-main">
      {/* Top Banner */}
      <TopBar />

      {/* Main Header / Navigation */}
      <Navbar currentTab={currentTab} onSelectTab={setCurrentTab} />

      {/* Dynamic Views */}
      <main className="flex-1 w-full">
        {currentTab === 'home' && (
          <>
            <HeroSection
              onNavigate={setCurrentTab}
              onOpenCalculator={handleOpenCalculator}
            />
            <CredibilityBar />
            <ServicesGrid />
            <QuoteCalculator />
            <OrderStatusTracker />
            <LabShowcase />
            <TestimonialsSection />
            <FAQSection />
          </>
        )}

        {currentTab === 'servicos' && <ServicesPage />}

        {currentTab === 'rastreio' && (
          <div className="py-8 bg-surface">
            <OrderStatusTracker />
          </div>
        )}

        {currentTab === 'sobre' && <AboutPage />}

        {currentTab === 'contato' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer onSelectTab={setCurrentTab} />

      {/* Persistent Floating WhatsApp Action */}
      <WhatsAppButton variant="floating" />
    </div>
  );
}

export default App;
