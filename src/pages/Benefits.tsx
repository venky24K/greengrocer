
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Shield, Zap, Eye, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products } from '@/data/products';

const Benefits = () => {
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

  const benefitIcons = {
    heart: Heart,
    shield: Shield,
    energy: Zap,
    eye: Eye,
    brain: Brain
  };

  const getBenefitIcon = (benefit: string) => {
    if (benefit.toLowerCase().includes('heart')) return Heart;
    if (benefit.toLowerCase().includes('immune') || benefit.toLowerCase().includes('antioxidant')) return Shield;
    if (benefit.toLowerCase().includes('energy') || benefit.toLowerCase().includes('vitamin')) return Zap;
    if (benefit.toLowerCase().includes('eye') || benefit.toLowerCase().includes('vision')) return Eye;
    if (benefit.toLowerCase().includes('brain') || benefit.toLowerCase().includes('memory')) return Brain;
    return Heart; // default
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link to={`/product/${product.id}`} className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Product
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-cover rounded-full mx-auto shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Health Benefits of {product.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the amazing nutritional benefits and health advantages of including {product.name.toLowerCase()} in your diet.
          </p>
          <div className="flex justify-center gap-2 mt-4">
            {product.isOrganic && (
              <Badge className="bg-green-100 text-green-800">Organic</Badge>
            )}
            {product.isHydroponic && (
              <Badge variant="outline" className="border-green-300 text-green-700">Hydroponic</Badge>
            )}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {product.benefits?.map((benefit, index) => {
            const IconComponent = getBenefitIcon(benefit);
            return (
              <Card key={index} className="border-green-100 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <IconComponent className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">{benefit}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    This nutrient contributes significantly to your overall health and wellbeing.
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Nutritional Information */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Nutritional Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Vitamins</h3>
                <p className="text-sm text-gray-600">Rich in essential vitamins for optimal health</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Minerals</h3>
                <p className="text-sm text-gray-600">Contains important minerals for body function</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Antioxidants</h3>
                <p className="text-sm text-gray-600">Powerful compounds that fight free radicals</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Fiber</h3>
                <p className="text-sm text-gray-600">Supports digestive health and satiety</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why Choose Hydroponic */}
        <Card className="mb-12 bg-gradient-to-r from-green-50 to-green-100">
          <CardHeader>
            <CardTitle className="text-2xl">Why Choose Hydroponic {product.name}?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-3">Superior Quality</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Grown in controlled, optimal conditions</li>
                  <li>• Higher nutrient concentration</li>
                  <li>• Consistent quality year-round</li>
                  <li>• Free from soil-borne contaminants</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Environmental Benefits</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Uses 90% less water than traditional farming</li>
                  <li>• No pesticides or harmful chemicals</li>
                  <li>• Reduced carbon footprint</li>
                  <li>• Sustainable growing practices</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Experience the Benefits?
          </h2>
          <p className="text-gray-600 mb-6">
            Add {product.name.toLowerCase()} to your cart and start your journey to better health today.
          </p>
          <div className="flex justify-center gap-4">
            <Link to={`/product/${product.id}`}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                View Product Details
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" variant="outline">
                Browse All Products
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Benefits;
