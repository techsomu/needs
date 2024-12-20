'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

const PartnerForm = () => {
  const router = useRouter();
  const params = useParams();

  // Extract category and subcategory from params
  const { category, subcategory } = params as { category: string; subcategory: string };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    profession: '',
    location: '',
    about: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Profile submitted successfully');
    router.push('/');
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Partner Registration ({category} - {subcategory})
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="profession"
          placeholder="Profession"
          value={formData.profession}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="about"
          placeholder="About Your Services"
          value={formData.about}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PartnerForm;
