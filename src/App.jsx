import React, { useState } from 'react';
import { Music, Users, Mic, Heart, Star, Home, TrendingUp, Plus } from 'lucide-react';

//----------TuneTogether App----------

function TuneTogetherApp() {
  
  // Variables
  const [currentPage, setCurrentPage] = useState('home');
  const [showPremiumPopup, setShowPremiumPopup] = useState(false);
  const [likedSongs, setLikedSongs] = useState([1, 3]);

  // Sample Data
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
