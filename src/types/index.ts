export interface Customer {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  createdAt: string;
}

export interface Invoice {
  id: string;
  customerId: string;
  items: InvoiceItem[];
  total: number;
  status: 'pending' | 'paid';
  createdAt: string;
}

export interface InvoiceItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}