import { useState } from "react";
import { Link } from "react-router-dom";
import { Bird, Camera, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="py-4 border-b border-bird-softblue/30 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Bird className="h-8 w-8 text-bird-skyblue" />
          <span className="heading-font text-xl font-semibold">Bird Club of Pune</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-bird-skyblue transition-colors">
            Home
          </Link>
          <Link to="/gallery" className="text-foreground hover:text-bird-skyblue transition-colors">
            Gallery
          </Link>
          <Link to="/about" className="text-foreground hover:text-bird-skyblue transition-colors">
            About
          </Link>
          <Button className="bg-bird-skyblue hover:bg-bird-skyblue/90 flex items-center gap-2">
            <Camera className="h-4 w-4" />
            <span>Latest Captures</span>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 px-4 absolute top-full left-0 right-0 bg-white shadow-md z-50 fade-in">
          <nav className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="px-4 py-2 rounded-md hover:bg-bird-softblue/20 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/gallery" 
              className="px-4 py-2 rounded-md hover:bg-bird-softblue/20 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 rounded-md hover:bg-bird-softblue/20 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Button 
              className="bg-bird-skyblue hover:bg-bird-skyblue/90 flex items-center gap-2 w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Camera className="h-4 w-4" />
              <span>Latest Captures</span>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
