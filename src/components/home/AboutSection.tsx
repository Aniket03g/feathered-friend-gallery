
import { Camera, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <div className="py-16 bg-bird-softgray/50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-font text-2xl md:text-3xl font-bold mb-4">
              The Passion Behind The Lens
            </h2>
            
            <p className="text-muted-foreground mb-6">
              My journey into bird photography started as a simple curiosity that blossomed into a profound appreciation for these incredible creatures. Each photograph represents hours of patience, observation, and a deep respect for nature.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Camera className="h-5 w-5 text-bird-skyblue mt-0.5" />
                <div>
                  <h3 className="font-medium">Careful Observation</h3>
                  <p className="text-sm text-muted-foreground">
                    My approach focuses on minimal disruption to the birds and their habitats, allowing for authentic captures.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-bird-skyblue mt-0.5" />
                <div>
                  <h3 className="font-medium">Local Exploration</h3>
                  <p className="text-sm text-muted-foreground">
                    All photographs are taken within our local area, showcasing the surprising diversity of avian life that surrounds us.
                  </p>
                </div>
              </div>
            </div>
            
            <Button asChild>
              <Link to="/about">Learn More About My Journey</Link>
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-lg bg-bird-skyblue/20 z-0" />
            <img 
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Bird photography in action" 
              className="rounded-lg shadow-lg relative z-10 w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
