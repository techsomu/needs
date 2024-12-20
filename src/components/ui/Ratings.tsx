import React, { useState, useEffect } from "react";

const Ratings: React.FC = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      review: "Amazing product! Highly recommend.",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      review: "Great quality but could be improved in some areas.",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const addReview = (name: string, contact: string, rating: number, review: string) => {
    const newReview = {
      id: reviews.length + 1,
      name,
      contact,
      rating,
      review,
    };
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 sm:text-4xl">Ratings & Reviews</h1>
      <div className="w-full max-w-3xl">
        <div
          className="bg-white p-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
          key={reviews[currentIndex].id}
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-700 sm:text-xl">{reviews[currentIndex].name}</h2>
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={
                    index < reviews[currentIndex].rating ? "text-yellow-400" : "text-gray-300"
                  }
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <p className="text-gray-600 sm:text-lg">{reviews[currentIndex].review}</p>
        </div>
      </div>
      <div className="mt-6 w-full max-w-md bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-700 mb-4 sm:text-xl">Add Your Review</h3>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const name = (e.target as any).name.value;
            const contact = (e.target as any).contact.value;
            const rating = parseInt((e.target as any).rating.value);
            const review = (e.target as any).review.value;
            addReview(name, contact, rating, review);
            (e.target as any).reset();
          }}
        >
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            name="contact"
            type="text"
            placeholder="Your Contact Number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <select
            name="rating"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select Rating</option>
            {Array.from({ length: 5 }).map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1} Star{index > 0 ? "s" : ""}
              </option>
            ))}
          </select>
          <textarea
            name="review"
            placeholder="Write your review here..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Ratings;
