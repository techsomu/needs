// pages/partners.tsx
"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface Partner {
  id: number;
  name: string;
  phoneNumber: string;
  profession: string;
  about: string;
  latitude: string;
  longitude: string;
}

const PartnersList = ({ selectedProfession }: { selectedProfession: string }) => {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    fetchApprovedPartners();
  }, [selectedProfession]);

  const fetchApprovedPartners = async () => {
    const { data, error } = await supabase
      .from('partners')
      .select('*')
      .eq('approved', true)
      .eq('profession', selectedProfession);

    if (data) setPartners(data);
    if (error) console.error('Error:', error.message);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Partners</h1>
      {partners.length === 0 ? (
        <p>No partners found for this profession.</p>
      ) : (
        partners.map((partner) => (
          <div key={partner.id} className="p-4 border rounded mb-4">
            <h2 className="font-bold">{partner.name}</h2>
            <p>Profession: {partner.profession}</p>
            <p>About: {partner.about}</p>
            <p>Location: {partner.latitude}, {partner.longitude}</p>
            <a href={`tel:${partner.phoneNumber}`} className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
              Call Now
            </a>
          </div>
        ))
      )}
    </div>
  );
};

export default PartnersList;
