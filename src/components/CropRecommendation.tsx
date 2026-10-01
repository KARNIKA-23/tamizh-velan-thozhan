import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Leaf, Droplets, Thermometer, Calendar } from "lucide-react";

interface CropRecommendationProps {
  className?: string;
}

export default function CropRecommendation({ className }: CropRecommendationProps) {
  const [selectedSeason, setSelectedSeason] = useState("");
  const [selectedSoil, setSelectedSoil] = useState("");
  const [recommendations, setRecommendations] = useState<any[]>([]);

  const seasons = [
    { value: "kharif", label: "கரீஃப் (மழைக்காலம்)" },
    { value: "rabi", label: "ரபி (குளிர்காலம்)" },
    { value: "summer", label: "கோடைக்காலம்" }
  ];

  const soilTypes = [
    { value: "clay", label: "களிமண் மண்" },
    { value: "sandy", label: "மணல் மண்" },
    { value: "loamy", label: "வண்டல் மண்" },
    { value: "black", label: "கருப்பு மண்" }
  ];

  const cropDatabase = {
    kharif: {
      clay: [
        { name: "நெல்", yield: "4-5 டன்/ஏக்கர்", duration: "120-150 நாட்கள்", profit: "₹40,000-60,000" },
        { name: "கரும்பு", yield: "80-100 டன்/ஏக்கர்", duration: "12-18 மாதங்கள்", profit: "₹80,000-1,20,000" }
      ],
      sandy: [
        { name: "தக்காளி", yield: "20-25 டன்/ஏக்கர்", duration: "90-120 நாட்கள்", profit: "₹60,000-80,000" },
        { name: "வெங்காயம்", yield: "15-20 டன்/ஏக்கர்", duration: "120-150 நாட்கள்", profit: "₹50,000-70,000" }
      ],
      loamy: [
        { name: "மக்காச்சோளம்", yield: "6-8 டன்/ஏக்கர்", duration: "90-110 நாட்கள்", profit: "₹35,000-50,000" },
        { name: "பருத்தி", yield: "8-12 குவிண்டால்/ஏக்கர்", duration: "150-180 நாட்கள்", profit: "₹45,000-65,000" }
      ],
      black: [
        { name: "துவரை", yield: "8-10 குவிண்டால்/ஏக்கர்", duration: "120-150 நாட்கள்", profit: "₹40,000-55,000" },
        { name: "பருத்தி", yield: "10-15 குவிண்டால்/ஏக்கர்", duration: "150-180 நாட்கள்", profit: "₹50,000-75,000" }
      ]
    },
    rabi: {
      clay: [
        { name: "கோதுமை", yield: "25-30 குவிண்டால்/ஏக்கர்", duration: "120-150 நாட்கள்", profit: "₹35,000-50,000" },
        { name: "வாலி", yield: "20-25 குவிண்டால்/ஏக்கர்", duration: "90-120 நாட்கள்", profit: "₹30,000-45,000" }
      ],
      sandy: [
        { name: "கடுகு", yield: "8-12 குவிண்டால்/ஏக்கர்", duration: "90-110 நாட்கள்", profit: "₹40,000-60,000" },
        { name: "கிராம்", yield: "15-20 குவிண்டால்/ஏக்கர்", duration: "90-120 நாட்கள்", profit: "₹35,000-50,000" }
      ],
      loamy: [
        { name: "உருளைக்கிழங்கு", yield: "200-250 குவிண்டால்/ஏக்கர்", duration: "90-120 நாட்கள்", profit: "₹80,000-1,20,000" },
        { name: "சூரியகாந்தி", yield: "15-20 குவிண்டால்/ஏக்கர்", duration: "90-110 நாட்கள்", profit: "₹45,000-65,000" }
      ],
      black: [
        { name: "கோதுமை", yield: "30-35 குவிண்டால்/ஏக்கர்", duration: "120-150 நாட்கள்", profit: "₹40,000-60,000" },
        { name: "கடலைப்பருப்பு", yield: "12-18 குவிண்டால்/ஏக்கர்", duration: "90-120 நாட்கள்", profit: "₹50,000-70,000" }
      ]
    },
    summer: {
      clay: [
        { name: "வெந்தயம்", yield: "8-12 குவிண்டால்/ஏக்கர்", duration: "90-120 நாட்கள்", profit: "₹40,000-60,000" },
        { name: "கொள்ளு", yield: "6-10 குவிண்டால்/ஏக்கர்", duration: "90-110 நாட்கள்", profit: "₹30,000-45,000" }
      ],
      sandy: [
        { name: "வெண்டைக்காய்", yield: "80-120 குவிண்டால்/ஏக்கர்", duration: "60-90 நாட்கள்", profit: "₹60,000-90,000" },
        { name: "கீரை", yield: "40-60 குவிண்டால்/ஏக்கர்", duration: "30-45 நாட்கள்", profit: "₹25,000-40,000" }
      ],
      loamy: [
        { name: "வத்தல் காய்கள்", yield: "60-80 குவிண்டால்/ஏக்கர்", duration: "60-90 நாட்கள்", profit: "₹50,000-75,000" },
        { name: "முள்ளங்கி", yield: "150-200 குவிண்டால்/ஏக்கர்", duration: "45-60 நாட்கள்", profit: "₹40,000-60,000" }
      ],
      black: [
        { name: "சோளம்", yield: "25-30 குவிண்டால்/ஏக்கர்", duration: "90-120 நாட்கள்", profit: "₹35,000-50,000" },
        { name: "அவரைக்காய்", yield: "60-80 குவிண்டால்/ஏக்கர்", duration: "60-90 நாட்கள்", profit: "₹45,000-65,000" }
      ]
    }
  };

  const generateRecommendations = () => {
    if (selectedSeason && selectedSoil) {
      const crops = cropDatabase[selectedSeason as keyof typeof cropDatabase]?.[selectedSoil as keyof typeof cropDatabase.kharif] || [];
      setRecommendations(crops);
    }
  };

  return (
    <Card className={`p-6 bg-gradient-to-br from-agricultural-light-green/20 to-background border-agricultural-green/20 ${className}`}>
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-xl font-semibold text-foreground flex items-center justify-center gap-2">
            <Leaf className="w-5 h-5 text-agricultural-green" />
            பயிர் பரிந்துரை அமைப்பு
          </h3>
          <p className="text-sm text-muted-foreground">உங்கள் நிலத்திற்கு ஏற்ற பயிர்களை தேர்வு செய்யுங்கள்</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              பருவம் தேர்வு
            </label>
            <Select value={selectedSeason} onValueChange={setSelectedSeason}>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="பருவத்தை தேர்வு செய்யுங்கள்" />
              </SelectTrigger>
              <SelectContent>
                {seasons.map((season) => (
                  <SelectItem key={season.value} value={season.value}>
                    {season.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <Thermometer className="w-4 h-4" />
              மண் வகை
            </label>
            <Select value={selectedSoil} onValueChange={setSelectedSoil}>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="மண் வகையை தேர்வு செய்யுங்கள்" />
              </SelectTrigger>
              <SelectContent>
                {soilTypes.map((soil) => (
                  <SelectItem key={soil.value} value={soil.value}>
                    {soil.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button 
          onClick={generateRecommendations}
          className="w-full bg-agricultural-green hover:bg-agricultural-green/90"
          disabled={!selectedSeason || !selectedSoil}
        >
          பயிர் பரிந்துரைகளை பெறுங்கள்
        </Button>

        {recommendations.length > 0 && (
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">பரிந்துரைக்கப்பட்ட பயிர்கள்:</h4>
            <div className="grid gap-4">
              {recommendations.map((crop, index) => (
                <Card key={index} className="p-4 bg-background/50 border-agricultural-green/20">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h5 className="font-semibold text-agricultural-green">{crop.name}</h5>
                      <Badge className="bg-agricultural-light-green text-agricultural-green">
                        பரிந்துரைக்கப்பட்டது
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Droplets className="w-4 h-4 text-agricultural-green" />
                        <span className="text-muted-foreground">விளைச்சல்: {crop.yield}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-agricultural-green" />
                        <span className="text-muted-foreground">காலம்: {crop.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-600 font-medium">லாபம்: {crop.profit}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}