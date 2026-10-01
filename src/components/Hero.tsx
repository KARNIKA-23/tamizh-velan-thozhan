import { Button } from "@/components/ui/button";
import { Mic, Users, Leaf } from "lucide-react";
import agriculturalHero from "@/assets/agricultural-hero.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${agriculturalHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              <span className="text-agricultural-green">தமிழ் குரல்</span> உதவியுடன்
              <br />
              <span className="bg-gradient-agricultural bg-clip-text text-transparent">
                விவசாயத்தை மேம்படுத்துங்கள்
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              உங்கள் தாய்மொழியில் நவீன வேளாண் தொழில்நுட்பம். குரல் வழியாக பயிர் தேர்வு, 
              மண் ஆரோக்கியம், பூச்சி கட்டுப்பாடு குறித்த உடனடி ஆலோசனை பெறுங்கள்.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-agricultural-green hover:bg-agricultural-green/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mic className="w-5 h-5 mr-2" />
              குரல் உதவியாளரைத் தொடங்குங்கள்
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-agricultural-green text-agricultural-green hover:bg-agricultural-green hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              மேலும் அறிக
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-agricultural-light-green rounded-full flex items-center justify-center mx-auto animate-float">
                <Users className="w-8 h-8 text-agricultural-green" />
              </div>
              <div className="text-3xl font-bold text-foreground">10,000+</div>
              <div className="text-muted-foreground">விவசாயிகள் பயன்படுத்துகின்றனர்</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-agricultural-light-green rounded-full flex items-center justify-center mx-auto animate-float" style={{animationDelay: '1s'}}>
                <Leaf className="w-8 h-8 text-agricultural-green" />
              </div>
              <div className="text-3xl font-bold text-foreground">95%</div>
              <div className="text-muted-foreground">துல்லியமான பதில்கள்</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-agricultural-light-green rounded-full flex items-center justify-center mx-auto animate-float" style={{animationDelay: '2s'}}>
                <Mic className="w-8 h-8 text-agricultural-green" />
              </div>
              <div className="text-3xl font-bold text-foreground">24/7</div>
              <div className="text-muted-foreground">குரல் ஆதரவு</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}