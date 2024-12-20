"use client";
import Layout from '@/components/ui/Layout';
import Image from 'next/image';
import { useState } from 'react';

const ArticlePage = () => {
  const [language, setLanguage] = useState('en');

  return (
    <Layout>
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setLanguage('en')}
          className={`mr-2 p-2 ${language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage('te')}
          className={`p-2 ${language === 'te' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Telugu
        </button>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3">
          <Image
            src="/web1.svg"
            alt="Article Image"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6 w-full md:w-2/3">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            {language === 'en' ? 'Article Heading' : 'ఆర్టికల విష్యానం'}
          </h1>
          <p className="text-lg mb-4">
            {language === 'en'
              ? 'This is an article paragraph in English. It provides information about a particular topic, suitable for both English readers and Telugu readers.'
              : 'ఈ లేకను తెలుగు భాషాను పేపిన ఆర్టికల్లో అర్థం తెలిపిస్తుంది. ఇది విశయాలను తెలుగు కుడి వారి ఆర్థం విసాలు.'}
          </p>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default ArticlePage;
