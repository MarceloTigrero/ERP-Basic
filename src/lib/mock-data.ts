import { Customer, Product, Invoice, User } from '../types';

export const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    company: 'Tech Corp',
    phone: '555-0123',
    createdAt: '2024-03-15',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    company: 'Design Co',
    phone: '555-0124',
    createdAt: '2024-03-14',
  },
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Product A',
    description: 'High-quality product',
    price: 99.99,
    stock: 50,
    createdAt: '2024-03-15',
  },
  {
    id: '2',
    name: 'Product B',
    description: 'Premium service',
    price: 149.99,
    stock: 30,
    createdAt: '2024-03-14',
  },
];

export const mockInvoices: Invoice[] = [
  {
    id: '1',
    customerId: '1',
    items: [
      { productId: '1', quantity: 2, price: 99.99 },
    ],
    total: 199.98,
    status: 'paid',
    createdAt: '2024-03-15',
  },
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
  },
  {
    id: '2',
    name: 'Regular User',
    email: 'user@example.com',
    role: 'user',
  },
];