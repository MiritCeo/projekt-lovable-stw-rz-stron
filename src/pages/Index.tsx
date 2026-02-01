import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Dashboard } from "@/components/Dashboard";
import { AllFeatures } from "@/components/AllFeatures";
import { AIAnalysis } from "@/components/AIAnalysis";
import { Benefits } from "@/components/Benefits";
import { CaseStudy } from "@/components/CaseStudy";
import { Pricing } from "@/components/Pricing";
import { Implementation } from "@/components/Implementation";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { LeadWidget } from "@/components/LeadWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Dashboard />
        <AllFeatures />
        <AIAnalysis />
        <Benefits />
        <CaseStudy />
        <Pricing />
        <Implementation />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <LeadWidget />
    </div>
  );
};

export default Index;
