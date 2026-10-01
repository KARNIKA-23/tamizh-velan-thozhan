import VoiceAssistant from "./VoiceAssistant";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import voiceIcon from "@/assets/voice-icon.jpg";

export default function VoiceDemo() {
  const sampleQuestions = [
    "என் தக்காளி பயிரில் இலைகள் மஞ்சளாகுது, என்ன செய்யலாம்?",
    "இன்றைய வானிலை எப்படி உள்ளது?",
    "நெல் விதைப்புக்கு நல்ல நேரம் எது?",
    "சந்தையில் வெங்காயம் விலை என்ன?",
    "மண் பரிசோதனை எப்படி செய்யலாம்?",
    "கரும்பு சாகுபடிக்கு எந்த மண் சிறந்தது?",
    "கத்திரிக்காய் பயிரில் பூச்சி தாக்குதல் தடுக்க என்ன செய்யலாம்?",
    "நெல் அறுவடைக்கு எந்த கருவிகள் தேவை?",
    "பருவ மழை எப்போது தொடங்கும்?",
    "விவசாய கடன் பெற என்ன ஆவணங்கள் தேவை?",
    "இயற்கை உரம் தயாரிக்கும் முறை சொல்லுங்கள்",
    "வெண்டைக்காய் சாகுபடியில் நீர் மேலாண்மை எப்படி?",
    "மண்ணில் உள்ள ஊட்டச்சத்து பற்றாக்குறையை எப்படி கண்டறியலாம்?",
    "வேளாண் இயந்திரங்கள் வாங்க மானியம் உள்ளதா?",
    "பயிர் பாதுகாப்பு காப்பீடு எப்படி பெறுவது?"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="text-agricultural-green">குரல் உதவியாளரை</span> முயற்சி செய்யுங்கள்
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            உங்கள் மைக்ரோஃபோனைப் பயன்படுத்தி நேரடியாக தமிழில் கேள்விகளைக் கேளுங்கள்
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Voice Assistant Interface */}
          <div className="space-y-6">
            <VoiceAssistant />
            
            <Card className="p-4 bg-card/50">
              <h3 className="font-semibold mb-3 text-foreground">மாதிரி கேள்விகள்:</h3>
              <div className="space-y-2">
                {sampleQuestions.map((question, index) => (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className="text-xs p-2 bg-agricultural-light-green/30 text-agricultural-green border-agricultural-green/20 hover:bg-agricultural-light-green/50 cursor-pointer transition-colors"
                  >
                    {question}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Visual Representation */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-agricultural-light-green/20 to-agricultural-sky/20 border-agricultural-green/20">
              <div className="text-center space-y-4">
                <img 
                  src={voiceIcon} 
                  alt="Voice Assistant Icon" 
                  className="w-24 h-24 mx-auto rounded-2xl shadow-lg"
                />
                <h3 className="text-xl font-semibold text-foreground">AI உதவியாளர் தயார்!</h3>
                <p className="text-muted-foreground">
                  நவீன செயற்கை நுண்ணறிவு தொழில்நுட்பத்துடன் 
                  உங்கள் வேளாண் கேள்விகளுக்கு உடனடியாக பதிலளிக்கிறது.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50">
              <h3 className="font-semibold mb-4 text-foreground">தொழில்நுட்ப அம்சங்கள்:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-agricultural-green rounded-full"></div>
                  தமிழ் குரல் அடையாளம்
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-agricultural-green rounded-full"></div>
                  இயற்கை மொழி செயலாக்கம்
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-agricultural-green rounded-full"></div>
                  உண்மை நேர தரவு ஆய்வு
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-agricultural-green rounded-full"></div>
                  व्यक्तिगत सुझाव
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}