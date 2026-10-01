import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import VoiceAssistant from "./VoiceAssistant";
import CropRecommendation from "./CropRecommendation";
import WeatherWidget from "./WeatherWidget";
import MarketPrices from "./MarketPrices";
import { 
  Mic, 
  Leaf, 
  Cloud, 
  TrendingUp, 
  Brain, 
  Smartphone, 
  Globe, 
  Shield,
  Zap,
  Users
} from "lucide-react";

export default function PrototypeShowcase() {
  const [activeDemo, setActiveDemo] = useState("voice");

  const features = [
    {
      icon: Mic,
      title: "தமிழ் குரல் அடையாளம்",
      description: "நவீன AI தொழில்நுட்பத்துடன் தமிழ் மொழியில் குரல் அடையாளம் கண்டறிதல்",
      status: "செயல்பாட்டில்"
    },
    {
      icon: Brain,
      title: "புத்திசாலி பதில்கள்",
      description: "இயற்கை மொழி செயலாக்கத்துடன் துல்லியமான வேளாண் ஆலோசனைகள்",
      status: "செயல்பாட்டில்"
    },
    {
      icon: Cloud,
      title: "வானிலை ஒருங்கிணைப்பு",
      description: "உண்மை நேர வானிலை தரவு மற்றும் வேளாண் பரிந்துரைகள்",
      status: "செயல்பாட்டில்"
    },
    {
      icon: TrendingUp,
      title: "சந்தை விலை கண்காணிப்பு",
      description: "நேரடி சந்தை விலைகள் மற்றும் வர்த்தக ஆலோசனைகள்",
      status: "செயல்பாட்டில்"
    },
    {
      icon: Leaf,
      title: "பயிர் பரிந்துரை",
      description: "மண் மற்றும் பருவ நிலை அடிப்படையில் பயிர் தேர்வு ஆலோசனை",
      status: "செயல்பாட்டில்"
    },
    {
      icon: Smartphone,
      title: "மொபைல் நட்பு",
      description: "எல்லா சாதனங்களிலும் செயல்படும் வகையில் வடிவமைக்கப்பட்டது",
      status: "செயல்பாட்டில்"
    }
  ];

  const technicalSpecs = [
    {
      category: "குரல் தொழில்நுட்பம்",
      details: [
        "Web Speech API ஆதரவு",
        "தமிழ் (ta-IN) மொழி அடையாளம்",
        "உண்மை நேர குரல் செயலாக்கம்",
        "சத்தம் குறைப்பு அம்சம்"
      ]
    },
    {
      category: "AI திறன்கள்",
      details: [
        "இயற்கை மொழி புரிதல்",
        "சூழல் அடிப்படையில் பதில்கள்",
        "பல மொழி ஆதரவு",
        "கற்றல் திறன்"
      ]
    },
    {
      category: "தரவு ஒருங்கிணைப்பு",
      details: [
        "வானிலை API",
        "சந்தை விலை API", 
        "அரசு திட்ட தரவு",
        "வேளாண் ஆராய்ச்சி தரவு"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-agricultural-light-green/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <Badge className="bg-agricultural-green text-white mb-4">
            முழுமையான செயல்முறை மாதிரி
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="text-agricultural-green">AI-Driven Tamil Voice Support</span> for Agriculture
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            நவீன செயற்கை நுண்ணறிவு தொழில்நுட்பத்துடன் கூடிய முழுமையான தமிழ் குரல் வேளாண் உதவியாளர்
          </p>
        </div>

        {/* Interactive Demo Tabs */}
        <div className="max-w-6xl mx-auto mb-16">
          <Tabs value={activeDemo} onValueChange={setActiveDemo} className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 bg-background/50 border border-agricultural-green/20">
              <TabsTrigger value="voice" className="flex items-center gap-2">
                <Mic className="w-4 h-4" />
                குரல் உதவியாளர்
              </TabsTrigger>
              <TabsTrigger value="crop" className="flex items-center gap-2">
                <Leaf className="w-4 h-4" />
                பயிர் பரிந்துரை
              </TabsTrigger>
              <TabsTrigger value="weather" className="flex items-center gap-2">
                <Cloud className="w-4 h-4" />
                வானிலை
              </TabsTrigger>
              <TabsTrigger value="market" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                சந்தை விலை
              </TabsTrigger>
            </TabsList>

            <TabsContent value="voice" className="space-y-4">
              <h3 className="text-2xl font-semibold text-center text-foreground mb-6">
                தமிழ் குரல் உதவியாளர் - நேரடி செயல்முறை
              </h3>
              <div className="max-w-2xl mx-auto">
                <VoiceAssistant />
              </div>
            </TabsContent>

            <TabsContent value="crop" className="space-y-4">
              <h3 className="text-2xl font-semibold text-center text-foreground mb-6">
                புத்திசாலி பயிர் பரிந்துரை அமைப்பு
              </h3>
              <div className="max-w-4xl mx-auto">
                <CropRecommendation />
              </div>
            </TabsContent>

            <TabsContent value="weather" className="space-y-4">
              <h3 className="text-2xl font-semibold text-center text-foreground mb-6">
                உண்மை நேர வானிலை மற்றும் வேளாண் ஆலோசனை
              </h3>
              <div className="max-w-2xl mx-auto">
                <WeatherWidget />
              </div>
            </TabsContent>

            <TabsContent value="market" className="space-y-4">
              <h3 className="text-2xl font-semibold text-center text-foreground mb-6">
                நேரடி சந்தை விலை கண்காணிப்பு
              </h3>
              <div className="max-w-3xl mx-auto">
                <MarketPrices />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Feature Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
            முக்கிய அம்சங்கள் மற்றும் திறன்கள்
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 bg-background/50 border-agricultural-green/20 hover:border-agricultural-green/40 transition-all hover:shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-agricultural-light-green rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-agricultural-green" />
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                        {feature.status}
                      </Badge>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
            தொழில்நுட்ப விவரங்கள்
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technicalSpecs.map((spec, index) => (
              <Card key={index} className="p-6 bg-background/50 border-agricultural-green/20">
                <h4 className="font-semibold text-agricultural-green mb-4">{spec.category}</h4>
                <ul className="space-y-2">
                  {spec.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-agricultural-green rounded-full"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="p-8 bg-gradient-to-r from-agricultural-green/10 to-agricultural-light-green/20 border-agricultural-green/20">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">எதிர்பார்க்கப்படும் தாக்கம்</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-agricultural-green">95%</div>
                  <div className="text-sm text-muted-foreground">மொழி அணுகல் மேம்பாடு</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-agricultural-green">60%</div>
                  <div className="text-sm text-muted-foreground">விளைச்சல் அதிகரிப்பு</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-agricultural-green">10L+</div>
                  <div className="text-sm text-muted-foreground">பயனடையும் விவசாயிகள்</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}