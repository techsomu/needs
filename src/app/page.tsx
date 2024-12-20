"use client";

import Layout from "@/components/ui/Layout";
import Hero from "@/components/ui/Hero";
import MenuGrids from "@/components/ui/MenuGrids";
import CarouselPage from "@/components/ui/Carousel";
import PartnerForm from "@/components/ui/Partnerform";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation"; // Ensure this import is correct for App Router
import { User } from "@supabase/supabase-js";
import PartnerWithUs from "@/components/ui/partnerWithUs";
import CategoryPage from "./category/[category]/page";
import ProfileList from "@/components/ui/profileList";
import ProfileCard from "@/components/ui/ProfileCard";

const HomePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push("/auth");
      } else {
        setUser(data.user);
      }
    };

    // Only run this code on the client side
    if (typeof window !== "undefined") {
      checkUser();
    }
  }, [router]);

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Welcome to the Home Page!</h1>
        {user && <p>Hello, {user.email}</p>}
      </div>

      <CarouselPage />
<CategoryPage />
<ProfileList />
      
      <PartnerWithUs />

      <button
        onClick={async () => {
          await supabase.auth.signOut();
          router.push("/auth");
        }}
        className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
      >
        Sign Out
      </button>
    </Layout>
  );
};

export default HomePage;
