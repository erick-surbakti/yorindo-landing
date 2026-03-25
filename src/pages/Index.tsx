import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import AboutSystem from "@/sections/AboutSystem";
import CoreModules from "@/sections/CoreModules";
import HowItWorks from "@/sections/HowItWorks";
import Architecture from "@/sections/Architecture";
import AccessSecurity from "@/sections/AccessSecurity";
import Footer from "@/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AboutSystem />
      <CoreModules />
      <HowItWorks />
      <Architecture />
      <AccessSecurity />
      <Footer />
    </div>
  );
};

export default Index;
