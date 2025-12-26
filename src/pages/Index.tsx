import HeroSection from "@/components/HeroSection";
import WhatItDoesSection from "@/components/WhatItDoesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhatItDoesSection />
      <HowItWorksSection />
      <TrustSection />
      <Footer />
    </main>
  );
};

export default Index;
