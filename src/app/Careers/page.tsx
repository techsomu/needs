import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/ui/Layout';

const BlogFeed = () => {
  const posts = [
    {
      id: 1,
      title: 'Need Job',
      image: '/cctv1.svg',
      link: '/Careers/Needjob',
    },
    {
      id: 2,
      title: 'Hire An Employee',
      image: '/cctv2.svg',
      link: '/blog/tailwind-responsive',
    },
    // Add more posts as needed
  ];

  return (
    <Layout>
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome to Our Carrers Blog</h1>
        <p className="text-lg text-gray-600">Discover insightful articles, tutorials, and guides to boost your development skills.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <Link key={post.id} href={post.link} passHref>
            <div className="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="rounded-t-lg object-cover w-full"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{post.title}</h2>
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
// - Grid layout: `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`
// - Card styling: `bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out`
// - Image styling: `rounded-t-lg object-cover w-full`
// - Text styling: `text-lg font-semibold text-gray-800`
// Responsive behavior is handled by changing grid columns based on screen size.
