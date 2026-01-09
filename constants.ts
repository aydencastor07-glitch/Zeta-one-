
import { Ebook, Review } from './types';

export const TOTAL_STUDENT_EARNINGS = 600000;

export const PRIMARY_EBOOK: Ebook = {
  id: 'tiktok-blueprint-001',
  title: 'FROM 0 TO $2,000 ON TIKTOK IN 30 DAYS',
  subtitle: 'The Definitive Monetization Protocol',
  description: `✔ Learn how to earn from $0 to $2000 in just 1 month on TikTok! 🚀

✔ Perfect for beginners — no need to show your face 😎

✔ Works even if TikTok is not available in your country 🌍

✔ Discover the tools to create viral videos and make your first thousands 💰

✔ Also useful for content creators with some experience

✔ Helps businesses increase visibility and profit

✔ Created by professional content creators who have already earned over +$1,000,000 🏆

This ebook is fully verified and trusted by experts. 🔥`,
  price: 1,
  rating: 5.0,
  reviewCount: 740,
  // Utilisation de l'image fournie par l'utilisateur (hébergée ou via data URI pour la persistance)
  coverImage: 'https://i.ibb.co/jZ6MdfX6/tiktok-cover-final.png',
  features: [
    'No face required',
    'Works with or without showing your face',
    'AI helps you create your videos',
    'Easy to apply:',
    'Trusted by 700+ people'
  ]
};

export const UPCOMING_EBOOK: Ebook = {
  id: 'youtube-blueprint-002',
  title: 'YouTube Alpha Systems',
  subtitle: 'Mastering the Algorithm for Rapid Monetization',
  description: 'The definitive guide to building a cash-flow positive YouTube channel from scratch. Operational protocols for viral growth and high-CPM niche selection.',
  price: 47,
  rating: 0,
  reviewCount: 0,
  coverImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop',
  features: []
};

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Sarah M.',
    rating: 5,
    comment: 'The technical depth here is unparalleled. I achieved a $2,000 monthly baseline within my first quarter.',
    earningsMention: '$2,000/mo',
    date: '2 days ago'
  },
  {
    id: 'r2',
    author: 'Jason L.',
    rating: 5,
    comment: 'Zeta’s operational systems are flawless. Generated $1,000 in week one following their specific framework.',
    earningsMention: '$1,000/week',
    date: '1 week ago'
  },
  {
    id: 'r3',
    author: 'Chidi A.',
    rating: 5,
    comment: 'The compliance guide for global monetization is essential for anyone operating in restricted jurisdictions.',
    earningsMention: 'Market Access',
    date: '2 weeks ago'
  },
  {
    id: 'r4',
    author: 'Mike D.',
    rating: 5,
    comment: 'Professional structure throughout. This isn\'t just advice; it\'s a revenue-generating blueprint.',
    earningsMention: '$3,000/mo',
    date: '3 weeks ago'
  },
  {
    id: 'r5',
    author: 'Anita K.',
    rating: 5,
    comment: 'Scaled from zero to 15k followers using the Viral Pattern Recognition chapter. Highly effective.',
    earningsMention: '15k Followers',
    date: '1 month ago'
  }
];

export const TESTIMONIAL_NOTIFICATIONS = [
  { name: "Michael R.", location: "New York", message: "Yes! Today I made my first $100 using this method." },
  { name: "Sarah K.", location: "London", message: "I finally understand how the TikTok algorithm works. Thank you Zeta One!" },
  { name: "Ahmed D.", location: "Dubai", message: "This ebook is gold. Big respect to the Zeta One team." },
  { name: "Elena P.", location: "Berlin", message: "I started getting views in 24 hours. This is crazy." },
  { name: "James W.", location: "Toronto", message: "Thank you Zeta One, you guys are geniuses." },
  { name: "Chidi O.", location: "Lagos", message: "Successfully monetized my account from Nigeria. This framework works!" },
  { name: "Sophie L.", location: "Paris", message: "The faceless strategy is exactly what I needed. $500 in my first week." }
];
