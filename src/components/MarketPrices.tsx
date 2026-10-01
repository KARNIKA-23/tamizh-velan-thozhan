import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Minus, RefreshCw, MapPin } from "lucide-react";

interface MarketPrice {
  crop: string;
  currentPrice: number;
  previousPrice: number;
  unit: string;
  market: string;
  trend: 'up' | 'down' | 'stable';
  lastUpdated: string;
}

export default function MarketPrices() {
  const [prices, setPrices] = useState<MarketPrice[]>([
    {
      crop: "நெல்",
      currentPrice: 2150,
      previousPrice: 2100,
      unit: "குவிண்டால்",
      market: "திருச்சி மார்க்கெட்",
      trend: 'up',
      lastUpdated: "2 மணி நேரம் முன்"
    },
    {
      crop: "தக்காளி",
      currentPrice: 25,
      previousPrice: 30,
      unit: "கிலோ",
      market: "கோவை மார்க்கெட்",
      trend: 'down',
      lastUpdated: "1 மணி நேரம் முன்"
    },
    {
      crop: "வெங்காயம்",
      currentPrice: 18,
      previousPrice: 18,
      unit: "கிலோ",
      market: "சென்னை மார்க்கெட்",
      trend: 'stable',
      lastUpdated: "30 நிமிடங்கள் முன்"
    },
    {
      crop: "மக்காச்சோளம்",
      currentPrice: 1850,
      previousPrice: 1800,
      unit: "குவிண்டால்",
      market: "மதுரை மார்க்கெட்",
      trend: 'up',
      lastUpdated: "1 மணி நேரம் முன்"
    },
    {
      crop: "பருத்தி",
      currentPrice: 5200,
      previousPrice: 5350,
      unit: "குவிண்டால்",
      market: "ஈரோடு மார்க்கெட்",
      trend: 'down',
      lastUpdated: "45 நிமிடங்கள் முன்"
    },
    {
      crop: "கரும்பு",
      currentPrice: 2800,
      previousPrice: 2750,
      unit: "டன்",
      market: "திருநெல்வேலி மார்க்கெட்",
      trend: 'up',
      lastUpdated: "2 மணி நேரம் முன்"
    }
  ]);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      default:
        return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getPriceChange = (current: number, previous: number) => {
    const change = current - previous;
    const percentage = ((change / previous) * 100).toFixed(1);
    return { change, percentage };
  };

  const refreshPrices = async () => {
    setIsRefreshing(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate price updates
    setPrices(prevPrices => 
      prevPrices.map(price => {
        const fluctuation = (Math.random() - 0.5) * 0.1; // ±5% fluctuation
        const newPrice = Math.round(price.currentPrice * (1 + fluctuation));
        const trend = newPrice > price.currentPrice ? 'up' : 
                     newPrice < price.currentPrice ? 'down' : 'stable';
        
        return {
          ...price,
          previousPrice: price.currentPrice,
          currentPrice: newPrice,
          trend,
          lastUpdated: "இப்போது"
        };
      })
    );
    
    setIsRefreshing(false);
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-green-50/50 to-background border-agricultural-green/20">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-foreground">சந்தை விலைகள்</h3>
            <p className="text-sm text-muted-foreground">இன்றைய விலை நிலவரம்</p>
          </div>
          <Button
            onClick={refreshPrices}
            disabled={isRefreshing}
            variant="outline"
            size="sm"
            className="border-agricultural-green/30 hover:bg-agricultural-light-green/20"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
            புதுப்பிக்கவும்
          </Button>
        </div>

        <div className="grid gap-4">
          {prices.map((item, index) => {
            const { change, percentage } = getPriceChange(item.currentPrice, item.previousPrice);
            
            return (
              <Card key={index} className="p-4 bg-background/50 border-border/50 hover:border-agricultural-green/30 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-foreground">{item.crop}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {item.unit}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {item.market}
                    </div>
                  </div>

                  <div className="text-right space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-foreground">
                        ₹{item.currentPrice.toLocaleString()}
                      </span>
                      {getTrendIcon(item.trend)}
                    </div>
                    
                    {item.trend !== 'stable' && (
                      <div className={`text-xs ${getTrendColor(item.trend)}`}>
                        {change > 0 ? '+' : ''}₹{Math.abs(change)} ({percentage}%)
                      </div>
                    )}
                    
                    <div className="text-xs text-muted-foreground">
                      {item.lastUpdated}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="bg-agricultural-light-green/30 rounded-lg p-4 border border-agricultural-green/20">
          <div className="text-center space-y-2">
            <h5 className="font-medium text-agricultural-green">சந்தை ஆலோசனை</h5>
            <p className="text-sm text-foreground">
              நெல் மற்றும் கரும்பு விலைகள் அதிகரித்து வருகின்றன. 
              தக்காளி விலை குறைந்துள்ளதால் அதிக அளவில் சந்தைக்கு கொண்டு வரலாம்.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}