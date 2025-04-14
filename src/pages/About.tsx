
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Camera, Heart, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-16">
            <h1 className="heading-font text-3xl md:text-4xl font-bold mb-4">
              About My Bird Photography Journey
            </h1>
            <p className="text-muted-foreground text-lg">
              How a casual interest evolved into a passionate pursuit to document our local avian diversity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h2 className="heading-font text-2xl font-bold mb-4">How It All Started</h2>
              <p className="text-muted-foreground mb-4">
                My journey into bird photography began quite unexpectedly. What started as casual backyard bird watching gradually evolved into a passionate pursuit to document the incredible diversity of birds in our local area.
              </p>
              <p className="text-muted-foreground mb-4">
                I remember the first time I managed to capture a clear photo of a cardinal visiting my feeder. The vibrant red against the green foliage was striking, and I was immediately hooked on trying to capture more of these beautiful moments.
              </p>
              <p className="text-muted-foreground">
                Over time, I've learned to appreciate the patience required, the joy of discovering new species, and the privilege of observing these magnificent creatures in their natural habitats.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-lg bg-bird-softpeach/40 z-0" />
              <img 
                src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Bird watching in nature" 
                className="rounded-lg shadow-lg relative z-10 w-full h-auto"
              />
            </div>
          </div>
          
          <div className="bg-bird-softgray/30 rounded-xl p-8 mb-16">
            <h2 className="heading-font text-2xl font-bold text-center mb-8">My Photography Philosophy</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-bird-skyblue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-bird-skyblue" />
                </div>
                <h3 className="font-medium mb-2">Respect for Wildlife</h3>
                <p className="text-muted-foreground text-sm">
                  I always prioritize the well-being of the birds, keeping a respectful distance and never disturbing nests or natural behaviors.
                </p>
              </div>
              
              <div className="text-center bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-bird-skyblue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-6 w-6 text-bird-skyblue" />
                </div>
                <h3 className="font-medium mb-2">Patience & Persistence</h3>
                <p className="text-muted-foreground text-sm">
                  Great bird photography requires patience. I often spend hours waiting for the perfect moment, learning bird behaviors and patterns.
                </p>
              </div>
              
              <div className="text-center bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-bird-skyblue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-bird-skyblue" />
                </div>
                <h3 className="font-medium mb-2">Local Focus</h3>
                <p className="text-muted-foreground text-sm">
                  I believe in appreciating the birds in our immediate surroundings. Every locality has its own unique avian wonders to discover.
                </p>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-font text-2xl font-bold mb-4">Equipment & Technique</h2>
            <p className="text-muted-foreground mb-8">
              While good equipment helps, I believe that understanding bird behavior, 
              developing field craft skills, and having boundless patience are the most 
              important factors in capturing meaningful bird photographs.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm inline-block">
              <h3 className="font-medium mb-4">My Current Setup</h3>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li>• DSLR camera with telephoto lens (70-300mm)</li>
                <li>• Lightweight tripod for stability</li>
                <li>• Binoculars for spotting</li>
                <li>• Field guide for identification</li>
                <li>• Patience and respect for nature</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="heading-font text-2xl font-bold mb-4">Thank You for Visiting</h2>
            <p className="text-muted-foreground">
              I hope my photographs inspire you to look more closely at the birds in your own neighborhood. 
              Every backyard, park, and natural area is home to these wonderful creatures that bring so much 
              beauty and joy to our world.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
