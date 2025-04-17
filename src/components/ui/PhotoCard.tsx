
import { useState } from "react";
import { Link } from "react-router-dom";
import { Camera, Eye, MapPin, User } from "lucide-react";
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
  photographer?: string;
}

export function PhotoCard({ 
  id, 
  image, 
  title, 
  species, 
  location, 
  date, 
  className,
  photographer = "Anil Rudramuni Hiremath" 
}: PhotoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "bird-card group transition-all duration-300 hover:-translate-y-1",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg">
        <AspectRatio ratio={3/2}>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className={cn(
            "absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm",
            "transition-all duration-300",
            isHovered ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
          )}>
            © {photographer}
          </div>
        </AspectRatio>
        
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 flex flex-col justify-end",
          "transition-all duration-300 ease-out",
          isHovered ? "opacity-100" : "md:opacity-0"
        )}>
          <h3 className="text-white heading-font text-xl mb-1 transform transition-all duration-300 ease-out translate-y-0 group-hover:-translate-y-1">{title}</h3>
          <p className="text-white/90 text-sm transform transition-all duration-300 ease-out delay-75 translate-y-0 group-hover:-translate-y-1">{species}</p>
          
          <div className="flex items-center mt-4 gap-3 transform transition-all duration-300 ease-out delay-100 translate-y-0 group-hover:-translate-y-1">
            <Button 
              size="sm" 
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-none transition-all duration-300 hover:scale-105"
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
      
      <div className="p-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium mb-1 transition-colors duration-200 group-hover:text-bird-skyblue">{title}</h3>
            <p className="text-sm text-muted-foreground">{species}</p>
          </div>
        </div>
        
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <div className="flex items-center transition-all duration-200 hover:text-bird-skyblue">
            <MapPin className="h-3 w-3 mr-1" />
            {location}
          </div>
          <div className="flex items-center transition-all duration-200 hover:text-bird-skyblue">
            <Camera className="h-3 w-3 mr-1" />
            {date}
          </div>
          <div className="flex items-center transition-all duration-200 hover:text-bird-skyblue">
            <User className="h-3 w-3 mr-1" />
            {photographer}
          </div>
        </div>
      </div>
    </div>
  );
}
