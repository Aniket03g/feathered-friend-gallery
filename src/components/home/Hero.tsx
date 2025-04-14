
import { ArrowRight, Bird } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-bird-skyblue/10 to-bird-softpeach/20 z-0" />
      
      <div className="container-custom relative z-10 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm mb-6 shadow-sm">
            <Bird className="h-4 w-4 text-bird-skyblue" />
            <span className="text-sm font-medium">Welcome to Feathered Frames</span>
          </div>
          
          <h1 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Capturing the Beauty of <span className="text-bird-skyblue">Avian Wonders</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            A personal gallery showcasing the diverse and magnificent birds found in our local area,
            each photograph capturing a moment of nature's exquisite artistry.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-bird-skyblue hover:bg-bird-skyblue/90" asChild>
              <Link to="/gallery">
                Explore Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="border-bird-softblue/50" asChild>
              <Link to="/about">About My Journey</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
