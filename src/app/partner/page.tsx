import { useState } from 'react';
import { useRouter } from 'next/router';
import LocationSelector from '@/components/ui/LocationSelector';
import { supabase } from '@/lib/supabaseClient';

export default function PartnerRegistration() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [profession, setProfession] = useState('');
  const [location, setLocation] = useState('');
  const [about, setAbout] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from('partner_requests').insert([
      {
        name,
        phone,
        profession,
        location,
        about,
      },
    ]);

    if (error) {
      console.error('Submission Error:', error.message);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Partner With Us</h1>
      {submitted ? (
        <div className="text-green-600 font-medium">Your profile submitted successfully!</div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-2 border rounded"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Profession"
            className="w-full p-2 border rounded"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            required
          />
          <LocationSelector setLocation={setLocation} />
          <textarea
            placeholder="About Your Services"
            className="w-full p-2 border rounded"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
