"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import quizzes from "./constant/data";

// Gaming-themed thumbnails
const gameImages = [
  "/a.jpg",
  "/b.jpg",
  "/a.jpg",
  "/b.jpg",
  "/im.jpg",
  "/b.jpg",
  "/im.jpg",
  "/b.jpg",
  "/im.jpg",
  "/b.jpg",
];

export default function GamePage() {
  const [showAll, setShowAll] = useState(false);
  const router = useRouter();

  const visibleCards = showAll ? quizzes : quizzes.slice(0, 8);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white px-6 py-10">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
          <button className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-black">
            ◀
          </button>
          <button className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-black">
            ▶
          </button>
        </div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-purple-100 text-purple-800 font-bold px-4 py-2 rounded"
        >
          {showAll ? "Show Less" : "See All"}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleCards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
            onClick={() => router.push(`/quiz/${card.id}`)}
          >
            <QuizCard {...card} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function QuizCard({ thumbnail, title, questionSet, plays, label }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-[120px] object-cover"
        />
        {label && (
          <div className="absolute top-2 left-2 bg-yellow-400 text-black text-sm font-bold px-2 py-1 rounded">
            {label}
          </div>
        )}
        <div className="absolute bottom-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
          {questionSet[0].question} Qs
        </div>
        <div className="absolute bottom-2 right-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
          {plays} Plays
        </div>
      </div>
      <div className="p-3 text-sm font-semibold text-gray-800 line-clamp-2">
        {title}
      </div>
    </div>
  );
}
