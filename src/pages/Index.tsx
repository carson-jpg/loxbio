import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ResearchGallery from "@/components/ResearchGallery";
import TeamSection from "@/components/TeamSection";
import TrainingSection from "@/components/TrainingSection";
import PublicationsSection from "@/components/PublicationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => (
  <div className="overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ResearchGallery />
    <TeamSection />
    <TrainingSection />
    <PublicationsSection />
    <ContactSection />
    <Footer />
    <BackToTop />
  </div>
);

export default Index;
