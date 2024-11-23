import React, { useState } from 'react';
import { profiles } from './data/profiles';
import ProfileCard from './components/ProfileCard';
import MatchModal from './components/MatchModal';
import { Profile } from './types';
import { Heart } from 'lucide-react';

function App() {
  const [currentProfiles, setCurrentProfiles] = useState(profiles);
  const [matchedProfile, setMatchedProfile] = useState<Profile | null>(null);

  const handleLike = (id: string) => {
    const profile = currentProfiles.find(p => p.id === id);
    // Simulate a match with 30% probability
    if (profile && Math.random() < 0.3) {
      setMatchedProfile(profile);
    }
    setCurrentProfiles(prev => prev.filter(p => p.id !== id));
  };

  const handlePass = (id: string) => {
    setCurrentProfiles(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center">
            <Heart className="w-8 h-8 text-purple-600" />
            <h1 className="ml-2 text-2xl font-bold text-gray-900">DateMate</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {currentProfiles.length > 0 ? (
          <div className="flex justify-center">
            <ProfileCard
              profile={currentProfiles[0]}
              onLike={handleLike}
              onPass={handlePass}
            />
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-600">
              No more profiles to show!
            </h2>
            <p className="mt-2 text-gray-500">
              Check back later for more matches.
            </p>
          </div>
        )}
      </main>

      {/* Match Modal */}
      <MatchModal
        matchedProfile={matchedProfile}
        onClose={() => setMatchedProfile(null)}
      />
    </div>
  );
}

export default App;