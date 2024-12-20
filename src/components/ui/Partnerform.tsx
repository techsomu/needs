"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

const PartnerForm = () => {
  const [name, setName] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [profession, setProfession] = useState('');
  const [about, setAbout] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude.toString());
        setLongitude(position.coords.longitude.toString());
      },
      (error) => {
        console.error('Geolocation error:', error.message);
      }
    );
  }, []);

  const resetForm = () => {
    setName('');
    setPhonenumber('');
    setProfession('');
    setAbout('');
    setLatitude('');
    setLongitude('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.from('partners').insert([
      {
        name,
        phonenumber,
        profession,
        about,
        latitude,
        longitude,
        approved: false,
      },
    ]);

    if (error) {
      console.error('Error:', error.message);
    } else {
      alert('Profile submitted successfully!');
      resetForm();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <div>
        <label className="block text-gray-700">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700">Phone Number:</label>
        <input
          type="tel"
          value={phonenumber}
          onChange={(e) => setPhonenumber(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700">Profession:</label>
        <select
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select a Profession</option>
          <option value="Plumber">Plumber</option>
          <option value="Electrician">Electrician</option>
          <option value="Carpenter">Carpenter</option>
          <option value="Painter">Painter</option>
          <option value="Mason">Mason</option>
          <option value="Cleaner">Cleaner</option>
          {/* Add more professions as needed */}
        </select>
      </div>

      <div>
        <label className="block text-gray-700">About Your Services:</label>
        <textarea
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default PartnerForm;
