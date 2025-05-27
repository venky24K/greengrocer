
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-50 border-t border-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-green-800">GreenGrocer</span>
            </div>
            <p className="text-gray-600 text-sm">
              Your trusted source for fresh, organic, and hydroponic fruits and vegetables. 
              Committed to sustainable farming and healthy living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-green-600 text-sm">Home</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:text-green-600 text-sm">Products</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-green-600 text-sm">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-green-600 text-sm">Blog</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/products?category=vegetables" className="text-gray-600 hover:text-green-600 text-sm">Vegetables</Link></li>
              <li><Link to="/products?category=fruits" className="text-gray-600 hover:text-green-600 text-sm">Fruits</Link></li>
              <li><Link to="/products?type=organic" className="text-gray-600 hover:text-green-600 text-sm">Organic</Link></li>
              <li><Link to="/products?type=hydroponic" className="text-gray-600 hover:text-green-600 text-sm">Hydroponic</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="h-4 w-4" />
                <span>info@greengrocer.com</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>123 Green Street, Farm City, FC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © 2024 GreenGrocer. All rights reserved. | Committed to sustainable and organic farming.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
