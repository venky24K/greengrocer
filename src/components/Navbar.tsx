
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Leaf, Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-lg sm:text-xl font-bold text-green-800">GreenGrocer</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-green-600 transition-colors">Products</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors">About</Link>
            <Link to="/blog" className="text-gray-700 hover:text-green-600 transition-colors">Blog</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden md:flex items-center space-x-2">
              <ShoppingCart className="h-4 w-4" />
              <span>Cart (0)</span>
            </Button>
            
            <Link to="/profile">
              <Button variant="outline" size="sm" className="hidden md:flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Profile</span>
              </Button>
            </Link>
            
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-green-100 animate-in slide-in-from-top duration-300">
          <div className="px-3 pt-2 pb-3 space-y-2">
            <Link to="/" className="block px-3 py-2.5 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">Home</Link>
            <Link to="/products" className="block px-3 py-2.5 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">Products</Link>
            <Link to="/about" className="block px-3 py-2.5 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">About</Link>
            <Link to="/blog" className="block px-3 py-2.5 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">Blog</Link>
            <Link to="/profile" className="block px-3 py-2.5 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">Profile</Link>
            <div className="px-3 py-2.5">
              <Button variant="outline" size="sm" className="flex items-center space-x-2 w-full py-2.5 h-auto">
                <ShoppingCart className="h-4 w-4" />
                <span>Cart (0)</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
