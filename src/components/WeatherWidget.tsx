import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Sun, CloudRain, Wind, Droplets, Thermometer, Eye } from "lucide-react";

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  forecast: Array<{
    day: string;
    condition: string;
    high: number;
    low: number;
    rainfall: number;
  }>;
  farmingAdvice: string;
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData>({
    location: "திருச்சி, தமிழ்நாடு",
    temperature: 32,
    condition: "மிதமான மேகமூட்டம்",
    humidity: 68,
    windSpeed: 12,
    visibility: 8,
    forecast: [
      { day: "இன்று", condition: "மேகமூட்டம்", high: 32, low: 24, rainfall: 2 },
      { day: "நாளை", condition: "மழை", high: 29, low: 22, rainfall: 15 },
      { day: "மூன்றாம் நாள்", condition: "வெயில்", high: 34, low: 26, rainfall: 0 },
      { day: "நான்காம் நாள்", condition: "மழை", high: 28, low: 21, rainfall: 25 },
      { day: "ஐந்தாம் நாள்", condition: "மேகமூட்டம்", high: 31, low: 23, rainfall: 5 }
    ],
    farmingAdvice: "அடுத்த 24 மணி நேரத்தில் மழை எதிர்பார்க்கப்படுகிறது. பயிர்களுக்கு தண்ணீர் பாய்ச்சுவதை தவிர்க்கவும்."
  });

  const getWeatherIcon = (condition: string) => {
    if (condition.includes("மழை")) return CloudRain;
    if (condition.includes("வெயில்")) return Sun;
    return Cloud;
  };

  const getConditionColor = (condition: string) => {
    if (condition.includes("மழை")) return "text-blue-500";
    if (condition.includes("வெயில்")) return "text-yellow-500";
    return "text-gray-500";
  };

  useEffect(() => {
    // Simulate weather updates every 30 seconds
    const interval = setInterval(() => {
      setWeather(prev => ({
        ...prev,
        temperature: prev.temperature + (Math.random() - 0.5) * 2,
        humidity: Math.max(30, Math.min(90, prev.humidity + (Math.random() - 0.5) * 10))
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="p-6 bg-gradient-to-br from-agricultural-sky/20 to-background border-agricultural-green/20">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-xl font-semibold text-foreground">வானிலை அறிக்கை</h3>
          <p className="text-sm text-muted-foreground">{weather.location}</p>
        </div>

        {/* Current Weather */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-4">
            {(() => {
              const WeatherIcon = getWeatherIcon(weather.condition);
              return <WeatherIcon className={`w-12 h-12 ${getConditionColor(weather.condition)}`} />;
            })()}
            <div>
              <div className="text-3xl font-bold text-foreground">{Math.round(weather.temperature)}°C</div>
              <div className="text-sm text-muted-foreground">{weather.condition}</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="text-center space-y-1">
              <Droplets className="w-4 h-4 mx-auto text-blue-500" />
              <div className="text-muted-foreground">ஈரப்பதம்</div>
              <div className="font-medium">{weather.humidity}%</div>
            </div>
            <div className="text-center space-y-1">
              <Wind className="w-4 h-4 mx-auto text-gray-500" />
              <div className="text-muted-foreground">காற்று</div>
              <div className="font-medium">{weather.windSpeed} கிமீ/மணி</div>
            </div>
            <div className="text-center space-y-1">
              <Eye className="w-4 h-4 mx-auto text-green-500" />
              <div className="text-muted-foreground">காணும் தூரம்</div>
              <div className="font-medium">{weather.visibility} கிமீ</div>
            </div>
          </div>
        </div>

        {/* 5-Day Forecast */}
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">5 நாள் முன்னறிவிப்பு:</h4>
          <div className="space-y-2">
            {weather.forecast.map((day, index) => {
              const DayIcon = getWeatherIcon(day.condition);
              return (
                <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border/50">
                  <div className="flex items-center gap-3">
                    <DayIcon className={`w-5 h-5 ${getConditionColor(day.condition)}`} />
                    <span className="font-medium text-sm">{day.day}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">{day.high}°/{day.low}°</span>
                    {day.rainfall > 0 && (
                      <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                        {day.rainfall}mm மழை
                      </Badge>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Farming Advice */}
        <div className="bg-agricultural-light-green/30 rounded-lg p-4 border border-agricultural-green/20">
          <div className="flex items-start gap-2">
            <Thermometer className="w-5 h-5 text-agricultural-green mt-0.5" />
            <div>
              <h5 className="font-medium text-agricultural-green mb-1">வேளாண் ஆலோசனை:</h5>
              <p className="text-sm text-foreground">{weather.farmingAdvice}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}