import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sprout, Droplets, Sun, Shield, TreePine, Wheat } from "lucide-react";

export default function AgricultureInfo() {
  const cropInfo = [
    {
      name: "நெல்",
      season: "கார், ரபி",
      duration: "120-150 நாட்கள்",
      water: "அதிக நீர் தேவை",
      soil: "களிமண், வண்டல் மண்",
      tips: "சரியான நீர் மட்டம் பராமரிக்க வேண்டும்"
    },
    {
      name: "தக்காளி",
      season: "ரபி, கோடைகாலம்",
      duration: "90-120 நாட்கள்",
      water: "நடுத்தர நீர் தேவை",
      soil: "வண்டல் களிமண்",
      tips: "சரியான ஆதரவு மற்றும் கட்டுதல் அவசியம்"
    },
    {
      name: "வெங்காயம்",
      season: "ரபி",
      duration: "120-150 நாட்கள்",
      water: "குறைந்த நீர் தேவை",
      soil: "வண்டல் மண், களிமண்",
      tips: "அறுவடைக்கு முன் நீர்ப்பாசனம் நிறுத்த வேண்டும்"
    }
  ];

  const fertilizers = [
    {
      type: "இயற்கை உரம்",
      description: "மாட்டு எரு, வேப்பம் புண்ணாக்கு, கம்போஸ்ட்",
      benefits: "மண்ணின் வளத்தை அதிகரிக்கும், நீண்ட கால பலன்"
    },
    {
      type: "வேர்மி கம்போஸ்ட்",
      description: "மண்புழு எரு, சிறந்த ஊட்டச்சத்து",
      benefits: "வேகமான வளர்ச்சி, நோய் எதிர்ப்பு சக்தி"
    },
    {
      type: "பசுந்துரம்",
      description: "கொளுக்கட்டை, சணல், கீரை வகைகள்",
      benefits: "மண்ணின் கட்டமைப்பை மேம்படுத்தும்"
    }
  ];

  const pestControl = [
    {
      pest: "இலைப்பேன்",
      symptoms: "இலைகள் சுருங்குதல், மஞ்சளாதல்",
      treatment: "வேப்ப எண்ணெய் தெளிப்பு, இயற்கை பூச்சிக்கொல்லி"
    },
    {
      pest: "தண்டு துளைப்பான்",
      symptoms: "தண்டில் துளைகள், செடி வாடுதல்",
      treatment: "பெரோமோன் பொறிகள், ட்ரைக்கோகிரம்மா வெளியிடுதல்"
    },
    {
      pest: "வேர் அழுகல்",
      symptoms: "வேர்கள் கருமையாதல், செடி இறப்பு",
      treatment: "வடிகால் முறை, கோட்டை கட்டுதல்"
    }
  ];

  const seasons = [
    {
      name: "கார் பருவம்",
      period: "ஜூன் - செப்டம்பர்",
      crops: "நெல், கரும்பு, பருத்தி, கத்திரிக்காய்",
      weather: "மழைக்காலம், அதிக ஈரப்பதம்"
    },
    {
      name: "ரபி பருவம்",
      period: "அக்டோபர் - மார்ச்",
      crops: "கோதுமை, வெங்காயம், தக்காளி, பட்டாணி",
      weather: "குளிர்காலம், குறைந்த ஈரப்பதம்"
    },
    {
      name: "கோடைக்கால பருவம்",
      period: "ஏப்ரல் - ஜூன்",
      crops: "வெண்டைக்காய், கத்திரி, மிளகாய்",
      weather: "வெப்பம், குறைந்த மழை"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-agricultural-light-green/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="text-agricultural-green">வேளாண்மை</span> தகவல் மையம்
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            விவசாயத்தில் வெற்றி பெற தேவையான அனைத்து தகவல்களும் ஒரே இடத்தில்
          </p>
        </div>

        <Tabs defaultValue="crops" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-card/50">
            <TabsTrigger value="crops" className="data-[state=active]:bg-agricultural-green data-[state=active]:text-white">
              <Sprout className="w-4 h-4 mr-2" />
              பயிர்கள்
            </TabsTrigger>
            <TabsTrigger value="fertilizers" className="data-[state=active]:bg-agricultural-green data-[state=active]:text-white">
              <TreePine className="w-4 h-4 mr-2" />
              உரங்கள்
            </TabsTrigger>
            <TabsTrigger value="pest" className="data-[state=active]:bg-agricultural-green data-[state=active]:text-white">
              <Shield className="w-4 h-4 mr-2" />
              பூச்சி கட்டுப்பாடு
            </TabsTrigger>
            <TabsTrigger value="seasons" className="data-[state=active]:bg-agricultural-green data-[state=active]:text-white">
              <Sun className="w-4 h-4 mr-2" />
              பருவங்கள்
            </TabsTrigger>
          </TabsList>

          <TabsContent value="crops" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cropInfo.map((crop, index) => (
                <Card key={index} className="p-6 bg-card/50 border-agricultural-green/20">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-agricultural-green">{crop.name}</h3>
                      <Wheat className="w-6 h-6 text-agricultural-green" />
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">பருவம்:</span>
                        <Badge variant="secondary" className="bg-agricultural-light-green/30 text-agricultural-green">
                          {crop.season}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">கால அளவு:</span>
                        <span className="text-foreground">{crop.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">நீர் தேவை:</span>
                        <span className="text-foreground">{crop.water}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">மண் வகை:</span>
                        <span className="text-foreground">{crop.soil}</span>
                      </div>
                    </div>
                    <div className="p-3 bg-agricultural-light-green/20 rounded-lg">
                      <p className="text-xs text-agricultural-green font-medium">குறிப்பு:</p>
                      <p className="text-xs text-foreground mt-1">{crop.tips}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fertilizers" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fertilizers.map((fertilizer, index) => (
                <Card key={index} className="p-6 bg-card/50 border-agricultural-green/20">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <TreePine className="w-6 h-6 text-agricultural-green" />
                      <h3 className="text-lg font-semibold text-agricultural-green">{fertilizer.type}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{fertilizer.description}</p>
                    <div className="p-3 bg-agricultural-light-green/20 rounded-lg">
                      <p className="text-xs text-agricultural-green font-medium">நன்மைகள்:</p>
                      <p className="text-xs text-foreground mt-1">{fertilizer.benefits}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pest" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pestControl.map((pest, index) => (
                <Card key={index} className="p-6 bg-card/50 border-agricultural-green/20">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Shield className="w-6 h-6 text-agricultural-green" />
                      <h3 className="text-lg font-semibold text-agricultural-green">{pest.pest}</h3>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">அறிகுறிகள்:</p>
                      <p className="text-sm text-foreground mt-1">{pest.symptoms}</p>
                    </div>
                    <div className="p-3 bg-agricultural-light-green/20 rounded-lg">
                      <p className="text-xs text-agricultural-green font-medium">சிகிச்சை:</p>
                      <p className="text-xs text-foreground mt-1">{pest.treatment}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="seasons" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seasons.map((season, index) => (
                <Card key={index} className="p-6 bg-card/50 border-agricultural-green/20">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Sun className="w-6 h-6 text-agricultural-green" />
                      <h3 className="text-lg font-semibold text-agricultural-green">{season.name}</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-muted-foreground font-medium">காலம்: </span>
                        <span className="text-foreground">{season.period}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground font-medium">பயிர்கள்: </span>
                        <span className="text-foreground">{season.crops}</span>
                      </div>
                    </div>
                    <div className="p-3 bg-agricultural-light-green/20 rounded-lg">
                      <p className="text-xs text-agricultural-green font-medium">வானிலை:</p>
                      <p className="text-xs text-foreground mt-1">{season.weather}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}