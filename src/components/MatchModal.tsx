import React from 'react';
import { Heart } from 'lucide-react';

interface MatchModalProps {
  matchedProfile: { name: string; image: string } | null;
  onClose: () => void;
}

export default function MatchModal({ matchedProfile, onClose }: MatchModalProps) {
  if (!matchedProfile) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">It's a Match!</h2>
          <p className="text-gray-600 mb-6">
            You and {matchedProfile.name} have liked each other!
          </p>
          <div className="mb-6">
            <img
              src={matchedProfile.image}
              alt={matchedProfile.name}
              className="w-32 h-32 rounded-full mx-auto object-cover"
            />
          </div>
          <button
            onClick={onClose}
            className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Keep Swiping
          </button>
        </div>
      </div>
    </div>
  );
}