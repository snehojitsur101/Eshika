
export interface Product {
  id: string;
  name: string;
  price: number;
  collection: string;
  image: string;
  isNew?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
