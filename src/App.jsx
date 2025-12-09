import React, { useState } from 'react';
import { Music, Users, Mic, Heart, Star, Home, TrendingUp, Plus } from 'lucide-react';

//----------TuneTogether App----------

function TuneTogetherApp() {
  
  // Variables
  const [currentPage, setCurrentPage] = useState('home');
  const [showPremiumPopup, setShowPremiumPopup] = useState(false);
  const [likedSongs, setLikedSongs] = useState([1, 3]);

  // Sample Data
  // We had to use sample data but in the real version this information would come from a data base
  const friends = [
    { 
      id: 1, 
      name: 'Sarah Chen', 
      platform: 'Spotify', 
      song: 'Blinding Lights', 
      artist: 'The Weeknd',
      time: '2 minutes ago'
    },
    { 
      id: 2, 
      name: 'Mike Johnson', 
      platform: 'Apple Music', 
      song: 'Anti-Hero', 
      artist: 'Taylor Swift',
      time: '15 minutes ago'
    },
    { 
      id: 3, 
      name: 'Emma Davis', 
      platform: 'YouTube Music', 
      song: 'As It Was', 
      artist: 'Harry Styles',
      time: '1 hour ago'
    },
  ];

  // Top songs this week
  const trendingSongs = [
    { id: 1, title: 'vampire', artist: 'Olivia Rodrigo', plays: '2.4M' },
    { id: 2, title: 'Cruel Summer', artist: 'Taylor Swift', plays: '3.1M' },
    { id: 3, title: 'Paint The Town Red', artist: 'Doja Cat', plays: '1.8M' }
  ];

  // Functions
  function handleLike(songId) {
    if (likedSongs.includes(songId)) {
      // Remove from liked songs
      setLikedSongs(likedSongs.filter(id => id !== songId));
    } else {
      // Add to liked songs
      setLikedSongs([...likedSongs, songId]);
    }
  }

  // Function to show premium upgrade popup
  function showUpgrade() {
    setShowPremiumPopup(true);
  }

  // Header
  function Header() {
    return (
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <Music className="w-10 h-10" />
          <h1 className="text-3xl font-bold">TuneTogether</h1>
        </div>
      </div>
    );
  }

  // Navigation Bar
  function NavigationBar() {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-lg">
        <div className="max-w-4xl mx-auto flex justify-around py-4">

          <button
            onClick={() => setCurrentPage('home')}
            className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg ${
              currentPage === 'home' ? 'text-purple-600 bg-purple-100' : 'text-gray-600'
            }`}
          >
            <Home className="w-7 h-7" />
            <span className="text-sm font-medium">Home</span>
          </button>

          <button
            onClick={() => setCurrentPage('trending')}
            className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg ${
              currentPage === 'trending' ? 'text-purple-600 bg-purple-100' : 'text-gray-600'
            }`}
          >
            <TrendingUp className="w-7 h-7" />
            <span className="text-sm font-medium">Trending</span>
          </button>

          <button
            onClick={showUpgrade}
            className="flex flex-col items-center gap-1 px-6 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <Mic className="w-7 h-7" />
            <span className="text-sm font-medium">Karaoke 👑</span>
          </button>

          <button
            onClick={() => setCurrentPage('friends')}
            className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg ${
              currentPage === 'friends' ? 'text-purple-600 bg-purple-100' : 'text-gray-600'
            }`}
          >
            <Users className="w-7 h-7" />
            <span className="text-sm font-medium">Friends</span>
          </button>
        </div>
      </div>
    );
  }

  // Homepage
  // This shows what people are listening to
  function HomePage() {
    return (
      <div className="space-y-6">
        
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Welcome Back! </h2>
          <p>See what your friends are listening to</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Friends Activity</h3>
          
          {friends.map((friend) => (
            <div key={friend.id} className="bg-white rounded-xl p-5 mb-3 shadow-md">
              
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-bold text-gray-800 text-lg">{friend.name}</p>
                  <p className="text-gray-600 mt-1">
                     <span className="font-semibold">{friend.song}</span> by {friend.artist}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                      {friend.platform}
                    </span>
                    <span className="ml-2">{friend.time}</span>
                  </p>
                </div>

                <button 
                  onClick={() => handleLike(friend.id)}
                  className={`p-3 rounded-full ${
                    likedSongs.includes(friend.id) 
                      ? 'bg-red-100' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <Heart 
                    className={`w-6 h-6 ${
                      likedSongs.includes(friend.id) 
                        ? 'fill-red-500 text-red-500' 
                        : 'text-gray-600'
                    }`} 
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
