import React from "react";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import StatsCounter from "../components/home/StatsCounter";
import AboutSection from "../components/home/AboutSection";
import ProcessSection from "../components/home/ProcessSection";
import PortfolioSection from "../components/home/PortfolioSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import TeamSection from "../components/home/TeamSection";
import TechStackSection from "../components/home/TechStackSection";
import CTASection from "../components/home/CTASection";
import ContactSection from "../components/home/ContactSection";
import FooterSection from "../components/home/FooterSection";

export default function Home() {
  return (
    <div className="bg-[#030712] min-h-screen">
      <HeroSection />
      <ServicesSection />
      <StatsCounter />
      <AboutSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <TeamSection />
      <TechStackSection />
      <CTASection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}