export interface ReviewData {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  likes: number;
  dislikes: number;
}

export const mockReviews: ReviewData[] = [
  {
    id: "1",
    name: "Premium Subscription",
    rating: 4,
    date: "30 марта 2025",
    comment: "Под пиво зайдет",
    likes: 2,
    dislikes: 5,
  },
  {
    id: "2",
    name: "React Advanced Guide",
    rating: 5,
    date: "28 марта 2025",
    comment: "Под пиво зайдет",
    likes: 5,
    dislikes: 5,
  },
  {
    id: "3",
    name: "Wireless Headphones",
    rating: 2,
    date: "25 марта 2025",
    comment: "Под пиво зайдет",
    likes: 62,
    dislikes: 5,
  },
];