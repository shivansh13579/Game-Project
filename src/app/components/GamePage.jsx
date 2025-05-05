"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import quizzes from "./constant/data";

export default function GamePage() {
  const router = useRouter();
  const [clickCounts, setClickCounts] = useState({});

  // Load localStorage click counts on mount
  useEffect(() => {
    const counts = {};
    quizzes.forEach((card) => {
      const stored = localStorage.getItem(`clicks_${card.id}`);
      counts[card.id] = stored ? parseInt(stored, 10) : 0;
    });
    setClickCounts(counts);
  }, []);

  const handleCardClick = (cardId) => {
    const newCount = (clickCounts[cardId] || 0) + 1;
    localStorage.setItem(`clicks_${cardId}`, newCount);
    setClickCounts((prev) => ({ ...prev, [cardId]: newCount }));
    router.push(`/quiz/${cardId}`);
  };

  return (
    <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          🔥 Trending Quizzes
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {quizzes.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="cursor-pointer"
              onClick={() => handleCardClick(card.id)}
            >
              <QuizCard {...card} userPlays={clickCounts[card.id] || 0} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function QuizCard({ thumbnail, title, questionSet, label, userPlays }) {
  // const thumbnail = questionSet?.[0]?.imageUrl || "/default.jpg";

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md text-gray-900 hover:shadow-xl transition duration-300">
      <div className="relative w-full h-32">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />

        {label && (
          <div className="absolute top-2 left-2 bg-yellow-400 text-black font-bold text-xs px-2 py-0.5 rounded shadow">
            {label}
          </div>
        )}

        <div className="absolute bottom-2 left-2 bg-black/70 text-white text-[11px] font-semibold px-2 py-0.5 rounded">
          {questionSet?.length || 0} Qs
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[11px] font-semibold px-2 py-0.5 rounded">
          {userPlays} Plays
        </div>
      </div>

      <div className="p-3 text-sm font-semibold text-center line-clamp-2">
        {title}
      </div>
    </div>
  );
}
