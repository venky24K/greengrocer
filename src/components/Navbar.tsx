
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Leaf, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-green-800">GreenGrocer</span>
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
        <div className="md:hidden bg-white border-t border-green-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-green-600">Home</Link>
            <Link to="/products" className="block px-3 py-2 text-gray-700 hover:text-green-600">Products</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-green-600">About</Link>
            <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:text-green-600">Blog</Link>
            <div className="px-3 py-2">
              <Button variant="outline" size="sm" className="flex items-center space-x-2 w-full">
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
