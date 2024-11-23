export interface Profile {
  id: string;
  name: string;
  age: number;
  bio: string;
  image: string;
  location: string;
  interests: string[];
}

export interface Match {
  id: string;
  userId: string;
  matchedUserId: string;
  timestamp: number;
}