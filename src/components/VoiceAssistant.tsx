import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mic, MicOff, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Extend the Window interface to include speech recognition
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

interface VoiceAssistantProps {
  className?: string;
}

export default function VoiceAssistant({ className }: VoiceAssistantProps) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");
  const [recognition, setRecognition] = useState<any | null>(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'ta-IN'; // Tamil language
      
      recognition.onresult = (event) => {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        setTranscript(transcript);
      };
      
      recognition.onend = () => {
        setIsListening(false);
        // Simulate AI response
        setTimeout(() => {
          setResponse("உங்கள் வயலில் நல்ல விளைச்சலுக்கு இன்று காலையில் தண்ணீர் பாய்ச்சுங்கள். வானிலை அறிக்கையின்படி மழை வரும் என எதிர்பார்க்கப்படுகிறது.");
        }, 1000);
      };
      
      setRecognition(recognition);
    }
  }, []);

  const startListening = () => {
    if (recognition) {
      setIsListening(true);
      setTranscript("");
      setResponse("");
      recognition.start();
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  return (
    <Card className={cn("p-6 bg-gradient-to-br from-agricultural-light-green to-background border-agricultural-green/20", className)}>
      <div className="text-center space-y-4">
        <h3 className="text-xl font-semibold text-foreground">தமிழ் குரல் உதவியாளர்</h3>
        <p className="text-sm text-muted-foreground">உங்கள் வேளாண் கேள்விகளைக் கேளுங்கள்</p>
        
        <div className="flex justify-center">
          <Button
            size="lg"
            variant={isListening ? "destructive" : "default"}
            className={cn(
              "w-20 h-20 rounded-full bg-agricultural-green hover:bg-agricultural-green/90",
              isListening && "animate-voice-pulse"
            )}
            onClick={isListening ? stopListening : startListening}
          >
            {isListening ? (
              <MicOff className="w-8 h-8" />
            ) : (
              <Mic className="w-8 h-8" />
            )}
          </Button>
        </div>

        {transcript && (
          <div className="bg-background/50 rounded-lg p-3 border border-border">
            <p className="text-sm font-medium">நீங்கள் சொன்னது:</p>
            <p className="text-sm text-muted-foreground mt-1">{transcript}</p>
          </div>
        )}

        {response && (
          <div className="bg-agricultural-light-green/50 rounded-lg p-3 border border-agricultural-green/20">
            <div className="flex items-center gap-2 mb-2">
              <Volume2 className="w-4 h-4 text-agricultural-green" />
              <p className="text-sm font-medium">பதில்:</p>
            </div>
            <p className="text-sm text-foreground">{response}</p>
          </div>
        )}

        <p className="text-xs text-muted-foreground">
          குரல் அடையாளம் காண மைக்ரோஃபோன் அனுமதி தேவை
        </p>
      </div>
    </Card>
  );
}