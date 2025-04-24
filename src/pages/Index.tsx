
import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SpecialtiesSection from '../components/SpecialtiesSection';
import RoboticSurgerySection from '../components/RoboticSurgerySection';
import TimelineSection from '../components/TimelineSection';
import { ContactSection } from '../components/ContactSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';

const Index = () => {
  useEffect(() => {
    // Change page title
    document.title = "Dr. Heder Murari Borba | Urologia de Excelência";
    
    // Update description meta tag
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Dr. Heder Murari Borba - Médico Urologista especializado em Cirurgia Robótica, Uro-oncologia e Endourologia em Brasília.');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SpecialtiesSection />
        <RoboticSurgerySection />
        <TimelineSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
