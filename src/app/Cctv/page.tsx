"use client";
import CarouselPage from "@/components/ui/Carouselb";
import JobProfileGrid from "@/components/ui/JobProfileComponents";
import JobProfilesPage from "@/components/ui/JobProfilespageb";
import Layout from "@/components/ui/Layout";
import React from "react";

const Cctv: React.FC = () => {
  return (
    <Layout>
      <CarouselPage />
    
      <JobProfilesPage />
    
    </Layout>
  );
};

export default Cctv;
