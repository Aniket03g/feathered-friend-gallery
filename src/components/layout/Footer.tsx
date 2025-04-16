import { Bird, Heart, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bird-softgray py-12 mt-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <Bird className="h-8 w-8 text-bird-skyblue" />
              <span className="heading-font text-xl font-semibold">Bird Club of Pune</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Capturing the beauty and diversity of local avian wildlife through the lens of passion and patience.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-medium mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Categories</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/gallery?category=songbirds" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Songbirds
                  </Link>
                </li>
                <li>
                  <Link to="/gallery?category=waterfowl" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Waterfowl
                  </Link>
                </li>
                <li>
                  <Link to="/gallery?category=raptors" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Raptors
                  </Link>
                </li>
                <li>
                  <Link to="/gallery?category=other" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Other Species
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-medium mb-4">About</h4>
              <p className="text-sm text-muted-foreground">
                All photographs on this site are original works captured with love and respect for these beautiful creatures and their habitats.
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-bird-softblue/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Bird Club of Pune. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart size={14} className="text-red-400" /> for our feathered friends
          </p>
        </div>
      </div>
    </footer>
  );
}
