"use client";
import { useEffect } from 'react';
import { useState } from 'react';
import withAuth from '@/lib/withAuth';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

interface Partner {
  id: number;
  name: string;
  phoneNumber: string;
  profession: string;
  about: string;
  latitude: string;
  longitude: string;
  approved: boolean;
}

const Dashboard = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    const { data, error } = await supabase.from('partners').select('*').eq('approved', false);
    if (data) {
      setPartners(data);
    }
    setLoading(false);
  };

  const approvePartner = async (id: number) => {
    await supabase.from('partners').update({ approved: true }).eq('id', id);
    fetchPartners();
  };

  const logout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button onClick={logout} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
          Logout
        </button>
      </div>
      <div>
        {partners.length === 0 ? (
          <p>No pending approvals.</p>
        ) : (
          partners.map((partner) => (
            <div key={partner.id} className="p-4 border rounded mb-4">
              <h2 className="font-bold">{partner.name}</h2>
              <p>Profession: {partner.profession}</p>
              <p>About: {partner.about}</p>
              <p>Phone: {partner.phoneNumber}</p>
              <p>Location: {partner.latitude}, {partner.longitude}</p>
              <button
                onClick={() => approvePartner(partner.id)}
                className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600 mt-2"
              >
                Approve
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default withAuth(Dashboard);
