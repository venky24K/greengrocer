
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Leaf, Droplets, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products } from '@/data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <Link to="/products">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link to="/products" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div>
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {product.isOrganic && (
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <Leaf className="w-3 h-3 mr-1" />
                  Organic
                </Badge>
              )}
              {product.isHydroponic && (
                <Badge variant="outline" className="border-green-300 text-green-700">
                  <Droplets className="w-3 h-3 mr-1" />
                  Hydroponic
                </Badge>
              )}
              <Badge className={product.inStock ? 'bg-green-600' : 'bg-red-600'}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </Badge>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-green-600">${product.price}</span>
              <span className="text-lg text-gray-500 ml-2">/ {product.weight}</span>
            </div>

            <p className="text-lg text-gray-600 mb-8">{product.description}</p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Quality Guaranteed</span>
              </div>
              <div className="flex items-center space-x-3">
                <Leaf className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Pesticide Free</span>
              </div>
              <div className="flex items-center space-x-3">
                <Droplets className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Sustainably Grown</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Premium Quality</span>
              </div>
            </div>

            {/* Add to Cart */}
            <Button 
              size="lg" 
              className="w-full bg-green-600 hover:bg-green-700 mb-4"
              disabled={!product.inStock}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>

            {/* Additional Info */}
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Why Choose Our {product.category}?</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Grown in controlled hydroponic environments</li>
                <li>• Harvested at peak ripeness for maximum nutrition</li>
                <li>• No pesticides or harmful chemicals</li>
                <li>• Delivered fresh within 24 hours of harvest</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow border-green-100">
                  <Link to={`/product/${relatedProduct.id}`}>
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <CardContent className="p-4">
                    <Link to={`/product/${relatedProduct.id}`}>
                      <h3 className="font-semibold text-gray-900 mb-2 hover:text-green-600 transition-colors">
                        {relatedProduct.name}
                      </h3>
                    </Link>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-green-600">${relatedProduct.price}</span>
                      <Button size="sm" variant="outline">View</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
