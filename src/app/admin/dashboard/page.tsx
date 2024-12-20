"use client";

import { useEffect, useState } from "react";
import withAuth from "@/lib/withAuth";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

interface Partner {
  id: number;
  name: string;
  profession: string;
  about: string;
  latitude: string;
  longitude: string;
  approved: boolean;
  phonenumber: string;
}

const Dashboard = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    try {
      const { data, error } = await supabase
        .from("partners")
        .select("*")
        .eq("approved", false);
      console.log("Data:", data);
      console.log("Error:", error);

      if (data) {
        setPartners(data);
      }

      if (error) {
        console.error("Error fetching partners:", error.message);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
      setLoading(false);
    }
  };

  const approvePartner = async (id: number) => {
    try {
      const { error } = await supabase
        .from("partners")
        .update({ approved: true })
        .eq("id", id);

      if (error) {
        console.error("Error approving partner:", error.message);
        alert("Failed to approve partner.");
      } else {
        console.log(`Partner with ID ${id} approved successfully.`);
        // Refresh the partner list after approval
        fetchPartners();
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  const rejectPartner = async (id: number) => {
    try {
      const { error } = await supabase.from("partners").delete().eq("id", id);

      if (error) {
        console.error("Error rejecting partner:", error.message);
        alert("Failed to reject partner.");
      } else {
        console.log(`Partner with ID ${id} rejected successfully.`);
        // Refresh the partner list after rejection
        fetchPartners();
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={logout}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
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
              <p>Phone: {partner.phonenumber}</p>
              <p>
                Location: {partner.latitude}, {partner.longitude}
              </p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => {
                    console.log("Approve button clicked");
                    approvePartner(partner.id);
                  }}
                  className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600 mt-2"
                >
                  Approve
                </button>

                <button
                  onClick={() => {
                    console.log("Reject button clicked");
                    rejectPartner(partner.id);
                  }}
                  className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 mt-2"
                >
                  Reject
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default withAuth(Dashboard);
