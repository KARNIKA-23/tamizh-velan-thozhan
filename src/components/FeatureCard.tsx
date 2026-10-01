import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <Card className={cn(
      "p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-agricultural-green/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
      className
    )}>
      <div className="space-y-3">
        <div className="w-12 h-12 bg-agricultural-light-green rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-agricultural-green" />
        </div>
        <h3 className="font-semibold text-lg text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}