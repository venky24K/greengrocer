
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Hydroponic Farming: What to Expect in 2024",
    excerpt: "Explore the latest innovations in hydroponic technology and how they're revolutionizing agriculture.",
    author: "Dr. Sarah Green",
    date: "2024-01-15",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "10 Benefits of Eating Organic Hydroponic Vegetables",
    excerpt: "Discover why hydroponic vegetables are not only delicious but also incredibly nutritious.",
    author: "Mike Johnson",
    date: "2024-01-12",
    category: "Health",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Starting Your Own Hydroponic Garden at Home",
    excerpt: "A beginner's guide to setting up a small hydroponic system in your home or apartment.",
    author: "Emma Wilson",
    date: "2024-01-10",
    category: "DIY",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
    readTime: "8 min read"
  },
  {
    id: 4,
    title: "Hydroponic vs Traditional Farming: A Comprehensive Comparison",
    excerpt: "An in-depth analysis of the advantages and disadvantages of both farming methods.",
    author: "Dr. Robert Chen",
    date: "2024-01-08",
    category: "Agriculture",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400",
    readTime: "6 min read"
  },
  {
    id: 5,
    title: "The Science Behind Nutrient Solutions in Hydroponics",
    excerpt: "Understanding how plants absorb nutrients and the importance of balanced nutrition.",
    author: "Lisa Martinez",
    date: "2024-01-05",
    category: "Science",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400",
    readTime: "7 min read"
  },
  {
    id: 6,
    title: "Sustainable Agriculture: How Hydroponics Saves Water",
    excerpt: "Learn how hydroponic systems conserve water and contribute to environmental sustainability.",
    author: "Tom Anderson",
    date: "2024-01-03",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1518160702438-9b02ab6515c9?w=400",
    readTime: "5 min read"
  }
];

const categories = ["All", "Technology", "Health", "DIY", "Agriculture", "Science", "Environment"];

const Blog = () => {
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest in hydroponic farming, organic agriculture, 
              and sustainable growing practices.
            </p>
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
        <div className="mb-12">
          <Card className="overflow-hidden border-green-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-green-600">{blogPosts[0].category}</Badge>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{blogPosts[0].author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{blogPosts[0].date}</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Button className="w-fit bg-green-600 hover:bg-green-700">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
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
                <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <User className="h-3 w-3 mr-1" />
                  <span className="mr-3">{post.author}</span>
                  <Calendar className="h-3 w-3 mr-1" />
                  <span className="mr-3">{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-green-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter and never miss the latest updates on hydroponic farming and organic agriculture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <Button className="bg-green-600 hover:bg-green-700">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
