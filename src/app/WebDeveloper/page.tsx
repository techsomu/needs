import CarouselPage from "@/components/ui/Carouselc";
import JobProfilesPage from "@/components/ui/JobProfilesPage";
import Layout from "@/components/ui/Layout";
import React from "react";

const WebDeveloper: React.FC = () => {
  return (
    <Layout>
      <CarouselPage />
      {/* <div className="App"> */}
        <JobProfilesPage />
      {/* </div> */}
    </Layout>
  );
};

export default WebDeveloper;
