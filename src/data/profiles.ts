import { Profile } from '../types';

export const profiles: Profile[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    age: 28,
    bio: 'Adventure seeker and coffee enthusiast. Love hiking and photography.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600',
    location: 'San Francisco',
    interests: ['Photography', 'Hiking', 'Coffee', 'Travel']
  },
  {
    id: '2',
    name: 'James Wilson',
    age: 31,
    bio: 'Tech entrepreneur by day, musician by night. Looking for someone to share adventures with.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
    location: 'New York City',
    interests: ['Music', 'Technology', 'Entrepreneurship', 'Fitness']
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    age: 26,
    bio: 'Book lover and yoga instructor. Passionate about mindfulness and healthy living.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600',
    location: 'Los Angeles',
    interests: ['Yoga', 'Reading', 'Cooking', 'Meditation']
  }
];