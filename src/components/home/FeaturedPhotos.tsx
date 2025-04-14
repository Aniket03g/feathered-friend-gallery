
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GalleryGrid, Photo } from "@/components/gallery/GalleryGrid";

interface FeaturedPhotosProps {
  photos: Photo[];
}

export function FeaturedPhotos({ photos }: FeaturedPhotosProps) {
  // Show only the first 3 photos for the featured section
  const featuredPhotos = photos.slice(0, 3);
  
  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h2 className="heading-font text-2xl md:text-3xl font-bold mb-2">Featured Captures</h2>
            <p className="text-muted-foreground max-w-2xl">
              A selection of my favorite bird photographs, each telling a unique story of beauty and grace.
            </p>
          </div>
          
          <Button variant="outline" className="border-bird-softblue/50" asChild>
            <Link to="/gallery" className="flex items-center gap-1">
              View All Photos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <GalleryGrid photos={featuredPhotos} />
      </div>
    </div>
  );
}
