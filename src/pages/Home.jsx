import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ResumeSection from "../components/ResumeSection";
import InterviewSection from "../components/InterviewSection";
import DashboardPreview from "../components/DashboardPreview";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <ResumeSection />
      <InterviewSection />
      <DashboardPreview />
      <Testimonials />
      <Faq />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;