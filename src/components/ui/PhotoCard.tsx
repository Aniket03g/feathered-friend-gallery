
import { useState } from "react";
import { Link } from "react-router-dom";
import { Camera, Eye, MapPin } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PhotoCardProps {
  id: string;
  image: string;
  title: string;
  species: string;
  location: string;
  date: string;
  className?: string;
}

export function PhotoCard({ id, image, title, species, location, date, className }: PhotoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn("bird-card group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg">
        <AspectRatio ratio={3/2}>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </AspectRatio>
        
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col justify-end",
          "transition-opacity duration-300",
          isHovered ? "opacity-100" : "md:opacity-0"
        )}>
          <h3 className="text-white heading-font text-xl mb-1">{title}</h3>
          <p className="text-white/80 text-sm">{species}</p>
          
          <div className="flex items-center mt-4 gap-3">
            <Button 
              size="sm" 
              variant="secondary" 
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-none"
              asChild
            >
              <Link to={`/photo/${id}`}>
                <Eye className="h-4 w-4 mr-1" />
                View Details
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{species}</p>
          </div>
        </div>
        
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <div className="flex items-center">
            <MapPin className="h-3 w-3 mr-1" />
            {location}
          </div>
          <div className="flex items-center">
            <Camera className="h-3 w-3 mr-1" />
            {date}
          </div>
        </div>
      </div>
    </div>
  );
}
