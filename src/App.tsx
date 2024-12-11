import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/hero/Hero';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Team } from './components/Team';
import { TimelineSection } from './components/timeline/TimelineSection';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/loading/LoadingScreen';
import { Consultation } from './pages/Consultation';
import { ScrollProgressLine } from './components/scroll/ScrollProgressLine';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<'home' | 'consultation'>('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen isLoading={isLoading} />;
  }

  if (currentPage === 'consultation') {
    return (
      <div className="min-h-screen">
        <Header onHomeClick={() => setCurrentPage('home')} />
        <Consultation />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header 
        onHomeClick={() => setCurrentPage('home')} 
        onConsultationClick={() => setCurrentPage('consultation')} 
      />
      <ScrollProgressLine />
      <main>
        <Hero onConsultationClick={() => setCurrentPage('consultation')} />
        <Services />
        <Stats />
        <TimelineSection />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;