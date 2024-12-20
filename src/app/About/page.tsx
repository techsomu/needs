'use client';
import React from 'react';
import Layout from '@/components/ui/Layout';
import BoxReveal from '@/components/ui/box-reveal';
import ShimmerButton from '@/components/ui/shimmer-button';

const About: React.FC = () => {
  return (
    <Layout>
      <div 
        className=" w-full max-w-lg mx-auto flex flex-col items-center justify-center overflow-hidden pt-2 px-4 sm:px-6 lg:px-8">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-4xl sm:text-5xl lg:text-4xl font-semibold text-center">
            About Us<span className="text-[#5046e6]">.</span>
          </p>
        </BoxReveal>
     
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h2 className="mt-2  text-lg sm:text-xl lg:text-2xl text-center">
           All Your Needs At <span className="text-[#5046e6]">Needs.</span>
          </h2>
        </BoxReveal>
     
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-2 text-base sm:text-lg lg:text-xl">
            <p className="text-center">
              -&gt;   We provide skilled workers and freelancers to fulfill your daily activities, offering instant and hassle-free services to make your life easier. Our mission is to connect you with reliable, efficient help whenever you need it, ensuring your daily tasks are handled smoothly.
              .<br />
              <br />
              -&gt;  Our company goal is to provide earning and growth opportunities to every skilled worker and freelancer. We are dedicated to empowering individuals by offering a platform where they can utilize their skills, find rewarding work, and grow professionally.<br />
            </p>
          </div>
        </BoxReveal>
     
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <ShimmerButton className="my-4 bg-[#5046e6] w-full sm:w-auto">Explore</ShimmerButton>
        </BoxReveal>
      </div>
    </Layout>
  );
};

export default About;
