import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectGallery from '@/components/ProjectGallery';
import AboutSection from '@/components/AboutSection';
import TechStack from '@/components/TechStack';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#141615] text-[#F6F5F0]">
      <Navbar />
      <Hero />
      <ProjectGallery />
      <AboutSection />
      <TechStack />
      <ContactSection />
    </div>
  );
}
