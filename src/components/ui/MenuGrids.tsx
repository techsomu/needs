import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { FaPhoneAlt } from "react-icons/fa";
import {
  FaHome,
  FaLaptopCode,
  FaPlug,
  FaHouseUser,
  FaShower,
  FaHammer,
  FaPaintBrush,
  FaTshirt,
  FaBook,
  FaSuitcaseRolling,
  FaCaravan,
  FaAccusoft,
} from "react-icons/fa";
import { Cctv } from "lucide-react";
import Head from "next/head";

// Initialize Supabase client
const supabase = createClient(
  "https://your-project-ref.supabase.co",
  "your-supabase-anon-key"
);

const categories = [
  { name: "Architect", icon: FaHome },
  { name: "Cctv Technician", icon: Cctv },
  { name: "Web Developer", icon: FaLaptopCode },
  { name: "Electrician", icon: FaPlug },
  { name: "Home Appliances Experts", icon: FaHouseUser },
  { name: "Plumber", icon: FaShower },
  { name: "Carpenter", icon: FaHammer },
  { name: "Painter", icon: FaPaintBrush },
  { name: "Tailor", icon: FaTshirt },
  { name: "Tutor", icon: FaBook },
  { name: "Tours & Travels", icon: FaSuitcaseRolling },
  { name: "Transport", icon: FaCaravan },
  { name: "Tax Consultant", icon: FaAccusoft },
];

const MenuGrids = () => {
  const [profiles, setProfiles] = useState([]);
  const [contactCount, setContactCount] = useState(0);

  useEffect(() => {
    // Fetch profiles based on location and category
    const fetchProfiles = async () => {
      const { data, error } = await supabase
        .from("partners")
        .select("*")
        .eq("approved", true); // Fetch only approved profiles

      if (error) {
        console.error("Error fetching profiles:", error);
      } else {
        setProfiles(data);
      }
    };

    fetchProfiles();
  }, []);

  const handleCallNow = (phoneNumber: string) => {
    if (contactCount >= 3) {
      alert(
        "You have reached the limit for today. Please try again after 24 hours or contact customer support."
      );
    } else {
      setContactCount(contactCount + 1);
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {profiles.map((profile) => {
        const CategoryIcon = categories.find(
          (cat) => cat.name === profile.category
        )?.icon;

        return (
          <div
            key={profile.id}
            className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-400 hover:text-white transition duration-300 transform hover:scale-105"
          >
            {CategoryIcon && <CategoryIcon size={48} className="mb-2" />}
            <span className="text-lg font-semibold font-[Poppins]">
              {profile.name}
            </span>
            <span className="text-sm text-gray-600">{profile.category}</span>
            <button
              onClick={() => handleCallNow(profile.phone)}
              className="mt-4 flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              <FaPhoneAlt className="mr-2" />
              Call Now
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MenuGrids;
