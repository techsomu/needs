"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

const ProfileList = () => {
  const [profiles, setProfiles] = useState<any[]>([]);
  const [selectedProfession, setSelectedProfession] = useState('');
  const [userLocation, setUserLocation] = useState({ latitude: '', longitude: '' });

  useEffect(() => {
    // Detect user location on page load
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude.toString(),
          longitude: position.coords.longitude.toString(),
        });
      },
      (error) => {
        console.error('Geolocation error:', error.message);
      }
    );

    // Fetch profiles after geolocation is set
    fetchProfiles();
  }, [userLocation.latitude]);

  const fetchProfiles = async () => {
    const { data, error } = await supabase
      .from('partners')
      .select('*')
      .eq('approved', true) // Only fetch approved profiles
      .eq('profession', selectedProfession); // Filter by selected profession

    if (error) {
      console.error('Error fetching profiles:', error);
    } else {
      setProfiles(data);
    }
  };

  const handleProfessionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProfession(e.target.value);
  };

  return (
    <div>
      <select onChange={handleProfessionChange} className="p-2 border rounded">
        <option value="">Select Profession</option>
        <option value="Plumber">Plumber</option>
        <option value="Electrician">Electrician</option>
        <option value="Carpenter">Carpenter</option>
        {/* Add more professions as needed */}
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {profiles.map((profile) => (
          <div key={profile.id} className="border p-4 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <img
                src={`https://ui-avatars.com/api/?name=${profile.name}`}
                alt={profile.name}
                className="w-24 h-24 rounded-full"
              />
            </div>
            <h3 className="font-bold">{profile.name}</h3>
            <p>{profile.profession}</p>
            <p>{profile.about}</p>
            <p>
              <strong>Location:</strong> {profile.latitude}, {profile.longitude}
            </p>
            <button
              onClick={() => window.location.href = `tel:${profile.phoneNumber}`}
              className="bg-blue-500 text-white p-2 rounded mt-2"
            >
              Call Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
