
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'vegetables' | 'fruits';
  description: string;
  isOrganic: boolean;
  isHydroponic: boolean;
  inStock: boolean;
  weight: string;
  benefits: string[];
}

export const products: Product[] = [
  // Vegetables
  {
    id: 1,
    name: "Hydroponic Lettuce",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400",
    category: "vegetables",
    description: "Fresh, crispy hydroponic lettuce grown in controlled environment",
    isOrganic: true,
    isHydroponic: true,
    inStock: true,
    weight: "200g",
    benefits: ["Rich in vitamin K", "Low in calories", "High water content for hydration", "Contains folate and vitamin A", "Supports bone health"]
  },
  {
    id: 2,
    name: "Organic Spinach",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400",
    category: "vegetables",
    description: "Nutrient-rich organic spinach leaves",
    isOrganic: true,
    isHydroponic: true,
    inStock: true,
    weight: "250g",
    benefits: ["High in iron", "Rich in antioxidants", "Good source of vitamin K", "Supports eye health", "May help lower blood pressure"]
  },
  {
    id: 3,
    name: "Hydroponic Tomatoes",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=400",
    category: "vegetables",
    description: "Juicy red tomatoes grown in hydroponic systems",
    isOrganic: true,
    isHydroponic: true,
    inStock: true,
    weight: "500g",
    benefits: ["Rich in lycopene", "High in vitamin C", "Supports heart health", "Good source of potassium", "May reduce cancer risk"]
  },
  {
    id: 4,
    name: "Organic Kale",
    price: 3.75,
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400",
    category: "vegetables",
    description: "Dark leafy greens packed with vitamins",
    isOrganic: true,
    isHydroponic: true,
    inStock: true,
    weight: "200g",
    benefits: ["Superfood with vitamin K", "High in antioxidants", "Rich in vitamin C", "Contains calcium", "Supports immune system"]
  },
  {
    id: 5,
    name: "Hydroponic Cucumbers",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=400",
    category: "vegetables",
    description: "Fresh, crunchy cucumbers from hydroponic farms",
    isOrganic: true,
    isHydroponic: true,
    inStock: true,
    weight: "400g",
    benefits: ["High water content", "Low in calories", "Contains vitamin K", "Helps with hydration", "Good for skin health"]
  },
  {
    id: 6,
    name: "Organic Bell Peppers",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400",
    category: "vegetables",
    description: "Colorful bell peppers grown organically",
    isOrganic: true,
    isHydroponic: true,
    inStock: true,
    weight: "300g",
    benefits: ["Very high in vitamin C", "Rich in antioxidants", "Good source of vitamin A", "Supports immune function", "May improve eye health"]
  },
  {
    id: 7,
    name: "Hydroponic Basil",
    price: 2.50,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400",
    category: "vegetables",
    description: "Aromatic fresh basil herbs",
    isOrganic: true,
    isHydroponic: true,
    inStock: true,
    weight: "50g",
    benefits: ["Anti-inflammatory properties", "Rich in antioxidants", "May reduce stress", "Supports digestive health", "Contains vitamin K"]
  },
  {
    id: 8,
    name: "Organic Broccoli",
    price: 4.25,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400",
    category: "vegetables",
    description: "Fresh green broccoli crowns",
    isOrganic: true,
    isHydroponic: true,
    inStock: true,
    weight: "400g",
    benefits: ["High in vitamin C", "Rich in fiber", "Contains folate", "Supports immune system", "May have anti-cancer properties"]
  },
  {
    id: 9,
    name: "Hydroponic Carrots",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400",
    category: "vegetables",
    description: "Sweet, crunchy orange carrots",
    isOrganic: true,
    isHydroponic: true,
    inStock: true,
    weight: "500g",
    benefits: ["High in beta-carotene", "Good for eye health", "Rich in fiber", "Supports immune function", "May improve skin health"]
  },
  {
    id: 10,
    name: "Organic Radishes",
    price: 2.75,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400",
    category: "vegetables",
    description: "Crisp and peppery radishes",
    isOrganic: true,
    isHydroponic: true,
    inStock: true,
    weight: "250g",
    benefits: ["Good source of vitamin C", "Contains fiber", "Low in calories", "May support digestion", "Has detoxifying properties"]
  },
  {
    id: 11,
    name: "Hydroponic Zucchini",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400",
    category: "vegetables",
    description: "Tender green zucchini squash",
    isOrganic: true,
    isHydroponic: true,
    inStock: true,
    weight: "400g",
    benefits: ["Low in calories", "Good source of potassium", "Contains vitamin A", "High water content", "Supports heart health"]
  },
  {
    id: 12,
    name: "Organic Cauliflower",
    price: 5.50,
    image: "https://images.unsplash.com/photo-1568584711271-7cfba5fae4b2?w=400",
    category: "vegetables",
    description: "Fresh white cauliflower heads",
    isOrganic: true,
    isHydroponic: true,
    inStock: true,
    weight: "600g",
    benefits: ["High in vitamin C", "Good source of fiber", "Low in calories", "Contains choline", "May support brain health"]
  },

  // Fruits
  {
    id: 26,
    name: "Organic Strawberries",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400",
    category: "fruits",
    description: "Sweet, juicy organic strawberries",
    isOrganic: true,
    isHydroponic: true,
    inStock: true,
    weight: "400g",
    benefits: ["High in vitamin C", "Rich in antioxidants", "Good source of folate", "May improve heart health", "Contains manganese"]
  },
  {
    id: 27,
    name: "Hydroponic Blueberries",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400",
    category: "fruits",
    description: "Antioxidant-rich blueberries",
    isOrganic: true,
    isHydroponic: true,
    inStock: true,
    weight: "300g",
    benefits: ["Very high in antioxidants", "May improve memory", "Good for brain health", "Rich in vitamin K", "May reduce inflammation"]
  },
  {
    id: 28,
    name: "Organic Apples",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400",
    category: "fruits",
    description: "Crisp red apples grown organically",
    isOrganic: true,
    isHydroponic: false,
    inStock: true,
    weight: "1kg",
    benefits: ["High in fiber", "Good source of vitamin C", "May support heart health", "Contains antioxidants", "Helps with weight management"]
  },
  {
    id: 29,
    name: "Hydroponic Grapes",
    price: 7.50,
    image: "https://images.unsplash.com/photo-1515524738708-327f6b0037a7?w=400",
    category: "fruits",
    description: "Sweet purple grapes",
    isOrganic: true,
    isHydroponic: true,
    inStock: true,
    weight: "500g",
    benefits: ["Rich in antioxidants", "Contains resveratrol", "Good for heart health", "May support brain function", "High in vitamin K"]
  },
  {
    id: 30,
    name: "Organic Oranges",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=400",
    category: "fruits",
    description: "Juicy Valencia oranges",
    isOrganic: true,
    isHydroponic: false,
    inStock: true,
    weight: "2kg",
    benefits: ["Very high in vitamin C", "Good source of fiber", "Contains folate", "Supports immune system", "May reduce inflammation"]
  },
  {
    id: 31,
    name: "Hydroponic Raspberries",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1577003833619-76bbd7f82948?w=400",
    category: "fruits",
    description: "Delicate red raspberries",
    isOrganic: true,
    isHydroponic: true,
    inStock: true,
    weight: "250g",
    benefits: ["High in fiber", "Rich in antioxidants", "Good source of vitamin C", "May support weight loss", "Contains ellagic acid"]
  },
  {
    id: 32,
    name: "Organic Bananas",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400",
    category: "fruits",
    description: "Ripe yellow bananas",
    isOrganic: true,
    isHydroponic: false,
    inStock: true,
    weight: "1kg",
    benefits: ["High in potassium", "Good source of vitamin B6", "Provides quick energy", "Contains fiber", "May support heart health"]
  },
  {
    id: 33,
    name: "Hydroponic Blackberries",
    price: 8.50,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
    category: "fruits",
    description: "Dark, sweet blackberries",
    isOrganic: true,
    isHydroponic: true,
    inStock: true,
    weight: "300g",
    benefits: ["Very high in antioxidants", "Rich in fiber", "Good source of vitamin C", "May improve brain function", "Contains manganese"]
  },
  {
    id: 34,
    name: "Organic Lemons",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1590502593747-42a996133562?w=400",
    category: "fruits",
    description: "Zesty yellow lemons",
    isOrganic: true,
    isHydroponic: false,
    inStock: true,
    weight: "500g",
    benefits: ["High in vitamin C", "May aid digestion", "Contains citrus flavonoids", "Supports immune system", "May help with iron absorption"]
  },
  {
    id: 35,
    name: "Hydroponic Kiwi",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=400",
    category: "fruits",
    description: "Fuzzy kiwi fruits rich in vitamin C",
    isOrganic: true,
    isHydroponic: true,
    inStock: true,
    weight: "400g",
    benefits: ["Extremely high in vitamin C", "Good source of fiber", "Contains vitamin K", "May support immune function", "Rich in antioxidants"]
  },
  {
    id: 49,
    name: "Hydroponic Cranberries",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?w=400",
    category: "fruits",
    description: "Tart red cranberries",
    isOrganic: true,
    isHydroponic: true,
    inStock: true,
    weight: "300g",
    benefits: ["High in antioxidants", "May support urinary tract health", "Rich in vitamin C", "Contains proanthocyanidins", "May help prevent infections"]
  }
];
