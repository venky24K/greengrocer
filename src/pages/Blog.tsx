
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Hydroponic Farming: Revolutionary Technologies Transforming Agriculture",
    excerpt: "Discover how cutting-edge innovations in hydroponic technology are revolutionizing the way we grow food, making agriculture more sustainable, efficient, and accessible than ever before.",
    content: "The agricultural landscape is undergoing a dramatic transformation as hydroponic farming emerges as a game-changing solution to global food security challenges. This soilless cultivation method is not just a trend—it's the future of sustainable agriculture that's already reshaping how we think about food production.",
    author: "Dr. Sarah Green",
    date: "2024-01-15",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400",
    readTime: "8 min read",
    featured: true
  },
  {
    id: 2,
    title: "10 Incredible Health Benefits of Eating Organic Hydroponic Vegetables Daily",
    excerpt: "Explore the remarkable nutritional advantages of hydroponic vegetables and learn why they're becoming the preferred choice for health-conscious consumers worldwide.",
    content: "Scientific research continues to reveal the extraordinary health benefits of incorporating organic hydroponic vegetables into your daily diet. From enhanced nutrient density to superior safety profiles, these vegetables offer unmatched nutritional value.",
    author: "Mike Johnson",
    date: "2024-01-12",
    category: "Health",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400",
    readTime: "6 min read",
    featured: false
  },
  {
    id: 3,
    title: "Complete Beginner's Guide to Starting Your Own Hydroponic Garden at Home",
    excerpt: "Everything you need to know to set up a thriving hydroponic system in your home, from choosing the right equipment to maintaining optimal growing conditions.",
    content: "Creating your own hydroponic garden at home is easier than you might think. With the right guidance and equipment, you can grow fresh, nutritious vegetables year-round, regardless of weather conditions or available outdoor space.",
    author: "Emma Wilson",
    date: "2024-01-10",
    category: "DIY",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
    readTime: "12 min read",
    featured: false
  },
  {
    id: 4,
    title: "Hydroponic vs Traditional Farming: A Comprehensive Environmental Impact Analysis",
    excerpt: "An in-depth comparison of environmental impacts, resource efficiency, and sustainability between hydroponic systems and conventional agricultural methods.",
    content: "As environmental concerns grow and resources become scarcer, the agricultural industry faces pressure to adopt more sustainable practices. This comprehensive analysis examines how hydroponic farming compares to traditional methods.",
    author: "Dr. Robert Chen",
    date: "2024-01-08",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400",
    readTime: "10 min read",
    featured: false
  },
  {
    id: 5,
    title: "The Science Behind Nutrient Solutions: Optimizing Plant Growth in Hydroponic Systems",
    excerpt: "Understand the complex chemistry of hydroponic nutrient solutions and learn how to create the perfect growing environment for maximum plant health and yield.",
    content: "The foundation of successful hydroponic farming lies in understanding the intricate balance of nutrients that plants require. This scientific deep-dive explores the chemistry behind optimal plant nutrition.",
    author: "Lisa Martinez",
    date: "2024-01-05",
    category: "Science",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400",
    readTime: "9 min read",
    featured: false
  },
  {
    id: 6,
    title: "Water Conservation Revolution: How Hydroponics is Saving Our Planet's Most Precious Resource",
    excerpt: "Learn about the remarkable water-saving capabilities of hydroponic systems and their role in addressing global water scarcity challenges.",
    content: "With water scarcity affecting billions worldwide, hydroponic farming offers a beacon of hope. These systems use up to 90% less water than traditional farming while producing higher yields.",
    author: "Tom Anderson",
    date: "2024-01-03",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1518160702438-9b02ab6515c9?w=400",
    readTime: "7 min read",
    featured: false
  },
  {
    id: 7,
    title: "Urban Agriculture Revolution: Bringing Fresh Food to City Centers",
    excerpt: "Explore how hydroponic farming is transforming urban landscapes and making fresh, local produce accessible in densely populated areas.",
    content: "Cities around the world are embracing hydroponic farming as a solution to food deserts and the growing demand for locally-sourced, fresh produce in urban environments.",
    author: "Dr. Maria Rodriguez",
    date: "2024-01-01",
    category: "Urban Farming",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
    readTime: "8 min read",
    featured: false
  },
  {
    id: 8,
    title: "From Seed to Harvest: The Complete Lifecycle of Hydroponic Vegetables",
    excerpt: "Follow the fascinating journey of hydroponic vegetables from germination to harvest, understanding each critical stage of growth.",
    content: "The lifecycle of hydroponic vegetables is a carefully orchestrated process that maximizes nutrition, flavor, and yield through precise environmental control.",
    author: "John Smith",
    date: "2023-12-28",
    category: "Education",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
    readTime: "6 min read",
    featured: false
  }
];

const categories = ["All", "Technology", "Health", "DIY", "Environment", "Science", "Urban Farming", "Education"];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              GreenGrocer <span className="text-green-600">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay updated with the latest insights in hydroponic farming, organic agriculture, 
              sustainable growing practices, and nutritional science from our team of experts.
            </p>
            <div className="flex justify-center gap-4">
              <Badge className="bg-green-600 text-white px-4 py-2">50+ Articles</Badge>
              <Badge variant="outline" className="border-green-300 text-green-700 px-4 py-2">Expert Writers</Badge>
              <Badge variant="outline" className="border-green-300 text-green-700 px-4 py-2">Weekly Updates</Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={`cursor-pointer ${
                category === "All" 
                  ? "bg-green-600 hover:bg-green-700" 
                  : "border-green-300 text-green-700 hover:bg-green-50"
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
            <Card className="overflow-hidden border-green-100 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-green-600">{featuredPost.category}</Badge>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                  <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                    {featuredPost.content}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button className="w-fit bg-green-600 hover:bg-green-700">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Latest Articles Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-shadow border-green-100">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <Badge className="w-fit mb-2 bg-green-100 text-green-800">{post.category}</Badge>
                  <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">{post.excerpt}</p>
                  <p className="text-gray-700 text-xs mb-4 line-clamp-2">{post.content}</p>
                  <div className="flex items-center text-xs text-gray-500 mb-4">
                    <User className="h-3 w-3 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="h-3 w-3 mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Educational Resources Section */}
        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Educational Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Beginner Guides</h4>
              <p className="text-sm text-gray-600 mb-4">
                Start your hydroponic journey with our comprehensive beginner-friendly guides
              </p>
              <Button variant="outline" size="sm">Browse Guides</Button>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Video Tutorials</h4>
              <p className="text-sm text-gray-600 mb-4">
                Watch step-by-step video tutorials from hydroponic farming experts
              </p>
              <Button variant="outline" size="sm">Watch Videos</Button>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Research Papers</h4>
              <p className="text-sm text-gray-600 mb-4">
                Access the latest scientific research on hydroponic farming and nutrition
              </p>
              <Button variant="outline" size="sm">Read Research</Button>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with GreenGrocer</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Join over 10,000 subscribers and receive weekly insights on hydroponic farming, 
            nutrition tips, and exclusive content from our expert team. Plus, get a free 
            hydroponic starter guide when you subscribe!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-900"
            />
            <Button className="bg-white text-green-600 hover:bg-gray-100">
              Subscribe Now
            </Button>
          </div>
          <p className="text-sm mt-4 opacity-90">
            No spam, unsubscribe at any time. Your email is safe with us.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
