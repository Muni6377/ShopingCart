export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  specifications?: {
    [key: string]: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CheckoutForm {
  email: string;
  name: string;
  address: string;
  city: string;
  country: string;
  zipCode: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export type CheckoutStep = 'cart' | 'details' | 'payment' | 'confirmation';