import React from "react";
import ProcessHero from "../components/howitworks/ProcessHero";
import DetailedSteps from "../components/howitworks/DetailedSteps";
import Methodology from "../components/howitworks/Methodology";
import Timeline from "../components/howitworks/Timeline";
import Communication from "../components/howitworks/Communication";
import FAQ from "../components/howitworks/FAQ";
import CTASection from "../components/home/CTASection";
import FooterSection from "../components/home/FooterSection";

export default function HowItWorks() {
  return (
    <div className="bg-[#030712] min-h-screen">
      <ProcessHero />
      <DetailedSteps />
      <Methodology />
      <Timeline />
      <Communication />
      <FAQ />
      <CTASection />
      <FooterSection />
    </div>
  );
}