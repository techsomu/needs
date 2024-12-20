import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";

export function MagicButton() {
  const [likes, setLikes] = useState<number>(0);

    // Load likes count from localStorage when the component mounts
    useEffect(() => {
      const storedLikes = localStorage.getItem("likes");
      if (storedLikes) {
        setLikes(parseInt(storedLikes, 10));
      }
    }, []);
  
    // Update localStorage whenever likes change
    useEffect(() => {
      localStorage.setItem("likes", likes.toString());
    }, [likes]);

  const handleClick = () => {
    setLikes((prevLikes) => prevLikes + 1);

    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <div className="flex flex-col items-center justify-center h-auto w-auto">
      {/* Button with custom Tailwind styles */}
      <button
        onClick={handleClick}
        className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
      >
        Like
      </button>
      {/* Text with custom Tailwind styles */}
      <p className="mt-4 text-lg font-semibold text-purple-700">{likes} Likes</p>
    </div>
  );
}
