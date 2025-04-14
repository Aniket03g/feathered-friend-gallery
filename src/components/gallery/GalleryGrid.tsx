
import { PhotoCard } from "@/components/ui/PhotoCard";

export interface Photo {
  id: string;
  image: string;
  title: string;
  species: string;
  category: string;
  location: string;
  date: string;
  description?: string;
}

interface GalleryGridProps {
  photos: Photo[];
  filter?: string;
}

export function GalleryGrid({ photos, filter }: GalleryGridProps) {
  const filteredPhotos = filter 
    ? photos.filter(photo => photo.category.toLowerCase() === filter.toLowerCase())
    : photos;
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredPhotos.map((photo) => (
        <PhotoCard
          key={photo.id}
          id={photo.id}
          image={photo.image}
          title={photo.title}
          species={photo.species}
          location={photo.location}
          date={photo.date}
          className="fade-in"
        />
      ))}
      
      {filteredPhotos.length === 0 && (
        <div className="col-span-full py-12 text-center">
          <p className="text-muted-foreground">No photos found in this category.</p>
        </div>
      )}
    </div>
  );
}
