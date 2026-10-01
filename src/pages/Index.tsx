import Hero from "@/components/Hero";
import Features from "@/components/Features";
import VoiceDemo from "@/components/VoiceDemo";
import AgricultureInfo from "@/components/AgricultureInfo";
import PrototypeShowcase from "@/components/PrototypeShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <PrototypeShowcase />
      <Features />
      <VoiceDemo />
      <AgricultureInfo />
    </div>
  );
};

export default Index;
