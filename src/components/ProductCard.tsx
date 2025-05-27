
import { Link } from 'react-router-dom';
import { ShoppingCart, Leaf, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 border-green-100 flex flex-col h-full">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <CardContent className="p-3 sm:p-4">
        <div className="flex flex-wrap gap-1 mb-2">
          {product.isOrganic && (
            <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
              <Leaf className="w-3 h-3 mr-1" />
              Organic
            </Badge>
          )}
          {product.isHydroponic && (
            <Badge variant="outline" className="border-green-300 text-green-700 text-xs">
              Hydroponic
            </Badge>
          )}
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-1 hover:text-green-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-green-600">${product.price}</span>
            <span className="text-sm text-gray-500 ml-1">/ {product.weight}</span>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="p-3 sm:p-4 pt-0">
        <div className="flex flex-col sm:flex-row w-full gap-2">
        <Button 
          className="flex-1 bg-green-600 hover:bg-green-700 text-sm sm:text-base py-2 h-auto"
          disabled={!product.inStock}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
        <Link to={`/benefits/${product.id}`} className="flex-1">
          <Button 
            variant="outline" 
            className="w-full border-green-300 text-green-700 hover:bg-green-50 text-sm sm:text-base py-2 h-auto"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Health Benefits
          </Button>
        </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
