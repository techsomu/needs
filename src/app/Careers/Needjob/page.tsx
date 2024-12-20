'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/ui/Layout';

const BlogFeed = () => {
  const [language, setLanguage] = useState<'en' | 'te'>('en');

  const posts = [
    {
      id: 1,
      title: {
        en: 'Understanding TypeScript with Next.js',
        te: 'టైప్‌స్క్రిప్ట్‌తో Next.js అర్థం చేసుకోండి',
      },
      image: '/cctv1.svg',
      link: '/Blog/Blogpost',
    },
    {
      id: 2,
      title: {
        en: 'Building a Responsive Layout with Tailwind CSS',
        te: 'టైల్విండ CSS తో స్పందనశీల లేఅవుట్ నిర్మించడం',
      },
      image: '/cctv2.svg',
      link: '/blog/tailwind-responsive',
    },
    {
      id: 3,
      title: {
        en: 'Health & Fitness Tips for a Better Lifestyle',
        te: 'మంచి జీవనశైలి కోసం ఆరోగ్య & ఫిట్‌నెస్ చిట్కాలు',
      },
      image: '/cctv3.svg',
      link: '/blog/health-fitness',
    },
    {
      id: 4,
      title: {
        en: 'Financial Tips & Awareness for Beginners',
        te: 'ప్రారంభకులకు ఆర్థిక చిట్కాలు & అవగాహన',
      },
      image: '/cctv4.svg',
      link: '/blog/financial-tips',
    },
    {
      id: 5,
      title: {
        en: 'Latest Technology Trends You Should Know',
        te: 'మీరు తెలుసుకోవలసిన తాజా సాంకేతిక ధోరణులు',
      },
      image: '/int4.svng',
      link: '/blog/technology-trends',
    },
    {
      id: 6,
      title: {
        en: 'Education: Effective Learning Techniques',
        te: 'విద్య: సమర్థవంతమైన అభ్యాస పద్ధతులు',
      },
      image: '/int5.svg',
      link: '/blog/education-tips',
    },
    {
      id: 7,
      title: {
        en: 'Business Strategies for Success',
        te: 'విజయం కోసం వ్యాపార వ్యూహాలు',
      },
      image: '/images/business-strategies.png',
      link: '/blog/business-strategies',
    },
    {
      id: 8,
      title: {
        en: 'Clothing Trends for Every Season',
        te: 'ప్రతి సీజన్ కోసం దుస్తుల ధోరణులు',
      },
      image: '/images/clothing-trends.png',
      link: '/blog/clothing-trends',
    },
    {
      id: 9,
      title: {
        en: 'Trending News: Stay Updated with the World',
        te: 'ట్రెండింగ్ న్యూస్: ప్రపంచంతో అప్‌డేట్‌గా ఉండండి',
      },
      image: '/images/trending-news.png',
      link: '/blog/trending-news',
    },
  ];

  return (
    <Layout>
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 mr-2 ${language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setLanguage('en')}
          >
            English
          </button>
          <button
            className={`px-4 py-2 ${language === 'te' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setLanguage('te')}
          >
            తెలుగు
          </button>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {language === 'en' ? 'Welcome to Our Professional Blog' : 'మా ప్రొఫెషనల్ బ్లాగ్‌కి స్వాగతం'}
        </h1>
        <p className="text-lg text-gray-600">
          {language === 'en'
            ? 'Discover insightful articles, tutorials, and guides to boost your development skills.'
            : 'మీ అభివృద్ధి నైపుణ్యాలను మెరుగుపరచడానికి పరిశీలనాత్మక వ్యాసాలు, ట్యుటోరియల్స్, మరియు మార్గదర్శకాలు కనుగొనండి.'}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <Link key={post.id} href={post.link} passHref>
            <div className="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <Image
                src={post.image}
                alt={post.title[language]}
                width={400}
                height={250}
                className="rounded-t-lg object-cover w-full"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{post.title[language]}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default BlogFeed;

// Tailwind CSS classes used:
// - Container spacing: `container mx-auto p-4`
// - Heading styling: `text-4xl font-bold text-gray-900`, `text-lg text-gray-600`
// - Grid layout: `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`
// - Card styling: `bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out`
// - Image styling: `rounded-t-lg object-cover w-full`
// - Text styling: `text-lg font-semibold text-gray-800`
// Responsive behavior is handled by changing grid columns based on screen size.
