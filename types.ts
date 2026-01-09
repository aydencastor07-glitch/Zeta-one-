
export interface Ebook {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  coverImage: string;
  features: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  earningsMention?: string;
  date: string;
}

export enum AppRoute {
  HOME = '/',
  BEST_EBOOK = '/best-ebook',
  ALL_EBOOKS = '/all-ebooks',
  REVIEWS = '/reviews',
  WHO_WE_ARE = '/who-we-are',
  CHECKOUT = '/checkout',
  SUCCESS = '/congratulations'
}
