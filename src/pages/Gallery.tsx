
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { GalleryFilter } from "@/components/gallery/GalleryFilter";
import { photos } from "@/data/photos";

const Gallery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "";
  const [activeFilter, setActiveFilter] = useState(categoryParam);
  
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    
    if (filter) {
      setSearchParams({ category: filter });
    } else {
      setSearchParams({});
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="heading-font text-3xl md:text-4xl font-bold mb-4">
              Bird Photography Gallery
            </h1>
            <p className="text-muted-foreground">
              Browse through my collection of bird photographs, each one capturing a special moment
              in these magnificent creatures' lives.
            </p>
          </div>
          
          <GalleryFilter activeFilter={activeFilter} onChange={handleFilterChange} />
          <GalleryGrid photos={photos} filter={activeFilter} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
