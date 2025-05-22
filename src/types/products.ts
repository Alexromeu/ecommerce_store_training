export interface ProductInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: { rate: number; count: number };
}

export const mockProducts: ProductInterface[] = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 99.99,
    description: "Noise-cancelling Bluetooth headphones",
    image: "/images/headphones.jpg",
    rating: { rate: 4.5, count: 120 }
  },
  {
    id: 2,
    title: "Smartphone Pro",
    price: 799.99,
    description: "Latest flagship smartphone with 5G",
    image: "/images/phone.jpg",
    rating: { rate: 4.8, count: 85 }
  },
  {
    id: 3,
    title: "Fitness Tracker",
    price: 59.99,
    description: "Water-resistant activity tracker with heart rate monitor",
    image: "/images/tracker.jpg",
    rating: { rate: 4.2, count: 210 }
  },
  {
    id: 4,
    title: "4K Smart TV",
    price: 649.99,
    description: "55-inch 4K UHD LED Smart Television",
    image: "/images/tv.jpg",
    rating: { rate: 4.7, count: 63 }
  },
  {
    id: 5,
    title: "Wireless Keyboard",
    price: 49.99,
    description: "Ergonomic mechanical keyboard with Bluetooth",
    image: "/images/keyboard.jpg",
    rating: { rate: 4.4, count: 156 }
  },
  {
    id: 6,
    title: "Portable Speaker",
    price: 89.99,
    description: "Waterproof Bluetooth speaker with 20hr battery",
    image: "/images/speaker.jpg",
    rating: { rate: 4.6, count: 92 }
  }

]; 