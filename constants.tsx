
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Silk Midnight Gown',
    price: 450,
    collection: 'Premium Silk Collection',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Floral Azure Midi',
    price: 320,
    collection: 'Summer Garden Edit',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800',
    isNew: true
  },
  {
    id: '3',
    name: 'Minimalist Ivory Shift',
    price: 280,
    collection: 'Core Essentials',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800'
  }
];

export const NAV_LINKS = ['Shop', 'Collections', 'New Arrivals', 'Journal'];
export const FOOTER_LINKS = {
  Shopping: ['Dresses', 'Evening Wear', 'Bridal', 'Accessories'],
  Information: ['Our Story', 'Sustainability', 'Shipping & Returns', 'Contact Us'],
  Contact: ['Kajirchara, Dasbaga, Howrah West Bengal 711307', 'eshikafashion725@gmail.com', '+91 9836264725']
};
