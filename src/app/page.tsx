import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import VideoSection from "@/components/VideoSection";
import SecuritySection from "@/components/SecuritySection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <ServicesGrid />
        <WhyChooseUs />
        <VideoSection />
        <SecuritySection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
