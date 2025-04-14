
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { FeaturedPhotos } from "@/components/home/FeaturedPhotos";
import { AboutSection } from "@/components/home/AboutSection";
import { photos } from "@/data/photos";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedPhotos photos={photos} />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
