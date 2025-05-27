# 🌱 GreenGrocer - Fresh Organic & Hydroponic Produce

GreenGrocer is a modern e-commerce platform specializing in fresh, organic, and hydroponic produce. Our mission is to provide consumers with access to the highest quality fruits and vegetables while promoting sustainable farming practices.

## ✨ Features

### 🛒 Shopping Experience
- Browse a curated selection of organic and hydroponic produce
- Filter products by category (fruits/vegetables)
- Sort by price and name
- Search functionality for quick product discovery
- Detailed product pages with nutritional benefits
- Real-time stock status

### 🌿 Product Categories
- **Vegetables**: Fresh hydroponic and organic options
- **Fruits**: Seasonal and exotic varieties
- Each product includes:
  - Detailed description
  - Weight information
  - Organic/Hydroponic certification
  - Health benefits
  - Nutritional information

### 💚 Sustainability Focus
- Hydroponic farming information
- Educational content about organic farming
- Environmental impact insights
- Sustainable packaging details

### 👤 User Features
- Personal profile management
- Order history tracking
- Favorite products list
- Delivery preferences

### 📱 Modern UI Features
- Responsive design for all devices
- Dark mode support
- Toast notifications
- Intuitive navigation
- Accessible interface

## 🛠️ Technical Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn-ui
- **State Management**: React Query
- **Routing**: React Router
- **Form Handling**: React Hook Form
- **Validation**: Zod

### Development Tools
- ESLint for code quality
- Prettier for code formatting
- TypeScript for type safety
- PostCSS for CSS processing

## 🚀 Getting Started

1. **Prerequisites**
   - Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
   - Git

2. **Installation**
   ```bash
   # Clone the repository
   git clone <YOUR_GIT_URL>

   # Navigate to project directory
   cd greengrocer

   # Install dependencies
   npm install

   # Start development server
   npm run dev
   ```

3. **Available Scripts**
   ```bash
   npm run dev          # Start development server
   npm run build       # Build for production
   npm run preview     # Preview production build
   npm run lint        # Check for linting issues
   npm run lint:fix    # Fix auto-fixable lint issues
   npm run typecheck   # Run TypeScript type checking
   npm run format      # Format code with Prettier
   npm run clean       # Clean build artifacts
   ```

## 🔧 Development

### Code Organization
- `/src/components` - Reusable UI components
- `/src/pages` - Route components
- `/src/hooks` - Custom React hooks
- `/src/lib` - Utility functions
- `/src/data` - Data models and types

### Best Practices
- Write clean, self-documenting code
- Follow TypeScript best practices
- Maintain consistent code style
- Write unit tests for critical features
- Use meaningful commit messages

## 📦 Deployment

Deploy your application using your preferred hosting platform:

1. Build the application:
   ```bash
   npm run build
   ```

2. Preview the build:
   ```bash
   npm run preview
   ```

3. Deploy the `dist` directory to your hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🌟 Acknowledgments

- UI Components by [shadcn-ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/)
