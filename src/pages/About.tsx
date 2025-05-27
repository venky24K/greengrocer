
import { Droplets, Leaf, Shield, Users, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-green-600">GreenGrocer</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering the future of sustainable agriculture through innovative hydroponic farming 
              and organic practices to bring you the freshest, most nutritious produce.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2018, GreenGrocer began as a vision to revolutionize how we grow and 
                consume fresh produce. Our founders, passionate about sustainable agriculture and 
                healthy living, recognized the potential of hydroponic farming to address the 
                growing demand for pesticide-free, nutritious food.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Starting with a small hydroponic facility, we've grown to become a leading provider 
                of organic and hydroponic produce, serving thousands of families with fresh, 
                healthy vegetables and fruits.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">50+</div>
                  <div className="text-gray-600">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">10k+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600" 
                alt="Hydroponic farm" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Hydroponics */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Hydroponic Farming?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hydroponic farming is a method of growing plants without soil, using nutrient-rich 
              water solutions to deliver minerals directly to plant roots.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600" 
                alt="Hydroponic lettuce growing" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Science Behind Hydroponics</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Droplets className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Nutrient Solutions</h4>
                    <p className="text-gray-600">Plants receive precise nutrients dissolved in water, optimizing growth and nutrition.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Controlled Environment</h4>
                    <p className="text-gray-600">Protected from pests, diseases, and weather variations for consistent quality.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <TrendingUp className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Faster Growth</h4>
                    <p className="text-gray-600">Plants grow 30-50% faster than traditional soil farming methods.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Hydroponic Produce</h2>
            <p className="text-lg text-gray-600">
              Discover why hydroponic farming is the future of sustainable agriculture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-green-100">
              <CardContent className="p-6 text-center">
                <Droplets className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-3">95% Less Water</h3>
                <p className="text-gray-600">
                  Hydroponic systems recycle water efficiently, using 95% less water than traditional farming.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardContent className="p-6 text-center">
                <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-3">No Pesticides</h3>
                <p className="text-gray-600">
                  Controlled environment eliminates the need for harmful pesticides and chemicals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-3">Higher Nutrition</h3>
                <p className="text-gray-600">
                  Precise nutrient delivery results in produce with higher vitamin and mineral content.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-3">Year-Round Growth</h3>
                <p className="text-gray-600">
                  Climate-controlled environments enable consistent production regardless of season.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-3">Disease Free</h3>
                <p className="text-gray-600">
                  Soilless growing eliminates soil-borne diseases and reduces crop loss.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-3">Local Production</h3>
                <p className="text-gray-600">
                  Reduced transportation costs and carbon footprint with local production facilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're dedicated to providing you with the freshest, most nutritious produce while 
              protecting our planet for future generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">100% Organic</h3>
              <p className="text-gray-600">
                All our produce is certified organic, grown without synthetic pesticides or fertilizers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600">
                Rigorous testing and quality control ensure every product meets our high standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Community Focused</h3>
              <p className="text-gray-600">
                Supporting local communities and promoting sustainable agriculture practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
