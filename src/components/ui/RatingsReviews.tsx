import React from "react";
import { useState } from "react";

const RatingsReviews: React.FC = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Srinivas",
      rating: 5,
      review: "Good WebSite Made For My Business,Good Service! Highly recommend.",
    },
    {
      id: 2,
      name: "Prasad",
      rating: 4,
      review: "Best Service In Rajahmundry,All The Best.",
    },
    {
        id: 3,
        name: "Suma",
        rating: 4.5,
        review: "I Got Best Architect From U.",
      },
      {
        id: 4,
        name: "Sai",
        rating: 5,
        review: "I Had Cctv Installation From This Website,Very Good Work. ",
      },
  ]);

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
    <div className="min-h-screen flex flex-col items-center bg-gray-400 p-6">
      <h1 className="text-3xl font-bold mb-6 text-black">Ratings & Reviews</h1>
      <div className="w-full max-w-3xl space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-gray-700">{review.name}</h2>
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={
                      index < review.rating ? "text-yellow-400" : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-600">{review.review}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 w-full max-w-md bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Add Your Review</h3>
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
            className="w-full h-10 text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default RatingsReviews;
