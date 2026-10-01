import FeatureCard from "./FeatureCard";
import { Sprout, CloudRain, Bug, DollarSign, BookOpen, Phone } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Sprout,
      title: "பயிர் தேர்வு ஆலோசனை",
      description: "உங்கள் மண், காலநிலை மற்றும் நீர் வசதிக்கு ஏற்ற சிறந்த பயிர்களைத் தேர்ந்தெடுக்க உதவுகிறது."
    },
    {
      icon: CloudRain,
      title: "வானிலை முன்னறிவிப்பு",
      description: "நம்பகமான வானிலை தகவல்களுடன் பாசன அட்டவணையைத் திட்டமிடுங்கள்."
    },
    {
      icon: Bug,
      title: "பூச்சி கட்டுப்பாடு",
      description: "பூச்சிகள் மற்றும் நோய்களை அடையாளம் கண்டு சரியான தீர்வுகளைப் பெறுங்கள்."
    },
    {
      icon: DollarSign,
      title: "சந்தை விலை தகவல்",
      description: "உங்கள் பயிர்களுக்கான சமீபத்திய சந்தை விலைகளை அறிந்து லாபம் அதிகரிக்குங்கள்."
    },
    {
      icon: BookOpen,
      title: "அரசு திட்டங்கள்",
      description: "விவசாயிகளுக்கான அரசு திட்டங்கள் மற்றும் மானியங்கள் பற்றிய தகவல்கள்."
    },
    {
      icon: Phone,
      title: "நிபுணர் ஆலோசனை",
      description: "அவசரகால சந்தர்ப்பங்களில் வேளாண் நிபுணர்களுடன் நேரடித் தொடர்பு."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-agricultural-light-green/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            முழுமையான <span className="text-agricultural-green">வேளாண் தீர்வுகள்</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            ஒரே இடத்தில் அனைத்து வேளாண் தேவைகளுக்கும் தீர்வு. 
            உங்கள் குரலே போதும், எங்கள் AI உதவியாளர் தயார்!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="animate-float"
            />
          ))}
        </div>
      </div>
    </section>
  );
}