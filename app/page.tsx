import Navbar from "../components/Navbar"; // adjust the path if needed
import Hero from "../components/Hero";
import AboutUs from "@/components/About";
import Services from "@/components/Services";
import CoreValues from "@/components/CoreValues";
import Projects from "@/components/Projects"
import Initiatives from "@/components/Initiatives";
import TeamMembers from "@/components/TeamMembers";
import FounderWord from "@/components/FounderWord";
import Accomplishments from "@/components/Accomplishments";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactUs";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import FAQSection from "@/components/FAQSection";
import WhoWeTarget from "@/components/Target";



export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 overflow-x-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <CoreValues />
        <Projects />
        <Initiatives />
        <WhoWeTarget />
        <TeamMembers />
        <FounderWord />
        <Accomplishments />
        <Testimonials />
        <FAQSection />
        <ContactSection />
        <Footer />
        <ChatWidget />
      </main>
    </div>
  );
}
