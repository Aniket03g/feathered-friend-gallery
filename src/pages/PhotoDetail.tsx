
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Calendar, MapPin, Camera } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { photos } from "@/data/photos";

const PhotoDetail = () => {
  const { id } = useParams<{ id: string }>();
  const photo = photos.find(p => p.id === id);
  
  if (!photo) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 py-12">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-font text-3xl font-bold mb-4">Photo Not Found</h1>
              <p className="text-muted-foreground mb-8">
                Sorry, the photo you're looking for doesn't exist or has been removed.
              </p>
              <Button asChild>
                <Link to="/gallery">Return to Gallery</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container-custom">
          <div className="mb-8">
            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link to="/gallery">
                <ChevronLeft className="h-4 w-4" />
                Back to Gallery
              </Link>
            </Button>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={photo.image} 
                  alt={photo.title} 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <h1 className="heading-font text-3xl font-bold mb-2">{photo.title}</h1>
                <h2 className="text-xl text-muted-foreground mb-6">{photo.species}</h2>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {photo.date}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {photo.location}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Camera className="h-4 w-4" />
                    {photo.category}
                  </div>
                </div>
                
                <div className="bg-bird-softgray/30 p-6 rounded-lg mb-8">
                  <h3 className="font-medium mb-2">About This Photo</h3>
                  <p className="text-muted-foreground">{photo.description}</p>
                </div>
                
                <div className="border-t border-bird-softblue/20 pt-8 mt-8">
                  <h3 className="font-medium mb-4">Explore Similar Birds</h3>
                  <div className="flex flex-wrap gap-2">
                    {photos
                      .filter(p => p.category === photo.category && p.id !== photo.id)
                      .slice(0, 3)
                      .map(similarPhoto => (
                        <Button 
                          key={similarPhoto.id} 
                          variant="outline" 
                          size="sm"
                          className="rounded-full border-bird-softblue/30"
                          asChild
                        >
                          <Link to={`/photo/${similarPhoto.id}`}>
                            {similarPhoto.species}
                          </Link>
                        </Button>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PhotoDetail;
