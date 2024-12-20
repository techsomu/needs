"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // For accessing dynamic route params in the App Router
import { supabase } from "@/lib/supabaseClient";
import ProfileCard from "@/components/ui/ProfileCard";

interface Profile {
  id: number;
  name: string;
  profession: string;
  about: string;
  phonenumber: string;
}

export default function CategoryPage() {
  const { category } = useParams(); // Access the dynamic category parameter from the URL
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!category) return; // Ensure category is available before fetching

    const fetchProfiles = async () => {
      try {
        const { data, error } = await supabase
        .from("partners")
        .select("*")
        .eq("approved", true);
      console.log("Data:", data);
      console.log("Error:", error);

        if (error) {
          console.error("Error fetching profiles:", error.message);
        } else {
          setProfiles(data || []);
        }
      } catch (error) {
        console.error("Unexpected error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, [category]);

  if (loading) {
    return <p className="text-center py-8">Loading...</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">{category} Profiles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.length > 0 ? (
          profiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              id={profile.id}
              name={profile.name}
              profession={profile.profession}
              about={profile.about}
              phonenumber={profile.phonenumber} location={{
                latitude: "",
                longitude: ""
              }}            />
          ))
        ) : (
          <p>No profiles found in this category.</p>
        )}
      </div>
    </div>
  );
}
