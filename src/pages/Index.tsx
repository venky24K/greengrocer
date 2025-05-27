
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Droplets, Shield, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const Index = () => {
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Fresh <span className="text-green-600">Organic</span> & 
                <span className="text-green-600"> Hydroponic</span> Produce
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover the purest, freshest fruits and vegetables grown with sustainable 
                hydroponic farming methods. 100% organic, pesticide-free, and delivered fresh to your door.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link to="/products">
                    Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Learn About Hydroponics</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600" 
                alt="Fresh organic produce" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Leaf className="h-8 w-8 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">100% Organic</p>
                    <p className="text-sm text-gray-600">Pesticide Free</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose GreenGrocer?</h2>
            <p className="text-lg text-gray-600">Experience the difference of sustainable, hydroponic farming</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-green-100">
              <CardContent className="p-6">
                <Droplets className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Hydroponic Grown</h3>
                <p className="text-gray-600 text-sm">Advanced soilless farming for optimal nutrition and taste</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-green-100">
              <CardContent className="p-6">
                <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">100% Organic</h3>
                <p className="text-gray-600 text-sm">No pesticides, chemicals, or artificial additives</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-green-100">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Quality Assured</h3>
                <p className="text-gray-600 text-sm">Rigorous quality control and freshness guarantee</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-green-100">
              <CardContent className="p-6">
                <Truck className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Fresh Delivery</h3>
                <p className="text-gray-600 text-sm">Farm-to-table delivery within 24 hours of harvest</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600">Hand-picked selection of our freshest produce</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/products">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Hydroponics Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Future of Farming is Here
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Hydroponic farming uses 95% less water than traditional agriculture while producing 
                crops that are more nutritious, pesticide-free, and available year-round. Our controlled 
                environment ensures optimal growing conditions for maximum flavor and nutrition.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">95% less water usage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">No soil-borne diseases or pests</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Faster growth and higher yields</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Year-round production</span>
                </li>
              </ul>
              <Button asChild variant="outline">
                <Link to="/about">Learn More About Our Methods</Link>
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600" 
                alt="Hydroponic farming" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
