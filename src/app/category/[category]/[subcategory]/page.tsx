import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProfileCard from '@/components/ui/ProfileCard';
import { supabase } from '@/lib/supabaseClient';


interface Profile {
  id: number;
  name: string;
  profession: string;
  about: string;
  phone: string;
}

export default function SubcategoryPage() {
  const router = useRouter();
  const { category, subcategory } = router.query;
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensure both category and subcategory are available before fetching
    if (!category || !subcategory) return;

    const fetchProfiles = async () => {
      try {
        const { data, error } = await supabase
          .from('approved_profiles')
          .select('*')
          .eq('category', category)
          .eq('subcategory', subcategory);

        if (error) {
          console.error('Error fetching profiles:', error.message);
        } else {
          setProfiles(data || []);
        }
      } catch (error) {
        console.error('Unexpected error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, [category, subcategory]);

  if (loading) {
    return <p className="text-center py-8">Loading...</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {subcategory} Profiles in {category}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.length > 0 ? (
          profiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              id={profile.id}
              name={profile.name}
              profession={profile.profession}
              about={profile.about}
              phone={profile.phone}
            />
          ))
        ) : (
          <p>No profiles found in this subcategory.</p>
        )}
      </div>
    </div>
  );
}
