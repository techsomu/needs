import React from 'react';

const NewsletterForm: React.FC = () => {
  return (
    <form className="text-neutral-800 py-2 relative overflow-hidden flex flex-col justify-around w-full max-w-lg h-auto border border-neutral-500 rounded-lg bg-neutral-50 p-6 md:px-8 lg:p-10">
      <div className="relative z-10 before:absolute before:w-32 before:h-20 before:right-2 before:bg-rose-300 before:-z-10 before:rounded-full before:blur-xl before:-top-12 after:absolute after:w-24 after:h-24 after:bg-purple-300 after:-z-10 after:rounded-full after:blur after:-top-12 after:-right-6">
        <span className="font-extrabold text-2xl text-violet-600 md:text-3xl">
          Get more updates...
        </span>
        <p className="text-neutral-700 mt-2 md:mt-4">
          Get Whast app Updates About Exciting Offers & On Demand Services. you'll be the first to find out about new features
        </p>
      </div>
      <div className="flex flex-col gap-3 mt-4 md:flex-row md:gap-2">
        <div className="relative rounded-lg w-full md:w-2/3 overflow-hidden before:absolute before:w-12 before:h-12 before:content-[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content-[''] after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
          <input
            type="text"
            className="relative bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500"
            placeholder="whats app number..."
          />
        </div>
        <button className="bg-violet-500 text-neutral-50 p-3 rounded-lg hover:bg-violet-400 md:w-1/3">
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default NewsletterForm;
