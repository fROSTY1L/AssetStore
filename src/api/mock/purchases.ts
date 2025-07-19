export interface PurchaseData {
  id: string;
  author: string;
  name: string;
  price: number;
  date: string;
}

export const mockPurchases: PurchaseData[] = [
  {
    id: "1",
    author: "Super Company",
    name: "Premium Subscription",
    price: 56,
    date: "30 марта 2025",
  },
  {
    id: "2",
    author: "BookStore",
    name: "React Advanced Guide",
    price: 42,
    date: "28 марта 2025",
  },
  {
    id: "3",
    author: "TechShop",
    name: "Wireless Headphones",
    price: 120,
    date: "25 марта 2025",
  },
];