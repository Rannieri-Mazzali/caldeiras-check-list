import React from "react";
import Header from "@/components/Header";
import TruckAnimation3D from "@/components/TruckAnimation3D";
import BenefitsSection from "@/components/BenefitsSection";
import TechnologySection from "@/components/TechnologySection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-dark overflow-x-hidden">
      <Header />

      {/* Hero with 3D Animation */}
      <TruckAnimation3D />

      {/* Benefits */}
      <BenefitsSection />

      {/* Technology */}
      <TechnologySection />

      {/* Pricing */}
      <PricingSection />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
