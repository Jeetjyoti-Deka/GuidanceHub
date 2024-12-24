import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import EmpowerSection from "@/components/EmpowerSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen">
        <Navbar />
        {/* <HeroSection /> */}
      </div>
      {/* <FeaturesSection />
      <EmpowerSection />
      <CTASection />
      <ContactSection /> */}
    </div>
  );
}
