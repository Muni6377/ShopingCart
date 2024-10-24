import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    description: "Experience crystal-clear sound with our premium wireless headphones. Features active noise cancellation and 30-hour battery life.",
    specifications: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.0",
      "Touch controls",
      "Quick charging - 5 hours in 10 minutes"
    ],
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    description: "Track your fitness goals with our advanced smartwatch. Includes heart rate monitoring, GPS, and sleep tracking.",
    specifications: [
      "Heart rate monitoring",
      "Built-in GPS",
      "5 ATM water resistance",
      "7-day battery life",
      "Sleep tracking"
    ],
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Ultra-Slim Laptop",
    price: 1299.99,
    description: "Powerful and portable laptop perfect for professionals. Features a 4K display and all-day battery life.",
    specifications: [
      "14-inch 4K display",
      "16GB RAM",
      "512GB SSD",
      "Intel Core i7",
      "12-hour battery life"
    ],
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80"
  }
];