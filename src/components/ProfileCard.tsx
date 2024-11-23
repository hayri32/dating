import React from 'react';
import { Heart, X, MapPin } from 'lucide-react';
import { Profile } from '../types';

interface ProfileCardProps {
  profile: Profile;
  onLike: (id: string) => void;
  onPass: (id: string) => void;
}

export default function ProfileCard({ profile, onLike, onPass }: ProfileCardProps) {
  return (
    <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="relative h-[32rem]">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
          <div className="text-white">
            <h2 className="text-3xl font-bold">{profile.name}, {profile.age}</h2>
            <div className="flex items-center mt-2">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{profile.location}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4">{profile.bio}</p>
        <div className="flex flex-wrap gap-2">
          {profile.interests.map((interest) => (
            <span
              key={interest}
              className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-6 p-6 border-t">
        <button
          onClick={() => onPass(profile.id)}
          className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={() => onLike(profile.id)}
          className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-100 hover:bg-purple-200 transition-colors"
        >
          <Heart className="w-6 h-6 text-purple-600" />
        </button>
      </div>
    </div>
  );
}