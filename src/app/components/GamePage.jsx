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

  const visibleCards = quizzes;

  return (
    <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white px-4 pt-8 pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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

function QuizCard({ title, questionSet, plays, label }) {
  const thumbnail = questionSet?.[0]?.imageUrl;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-[220px] mx-auto text-gray-900">
      <div className="relative">
        <img
          src={thumbnail || "/default.jpg"}
          alt={title}
          className="w-full h-[120px] md:h-[100px] lg:h-[120px] object-cover"
        />

        {label && (
          <div className="absolute inset-x-0 top-2 text-center bg-yellow-400 text-black font-bold text-sm px-2 py-1 mx-2 rounded shadow-md">
            {label}
          </div>
        )}

        <div className="absolute bottom-2 left-2 bg-black text-white text-[10px] font-semibold px-2 py-0.5 rounded-md shadow">
          {questionSet?.length || 0} Qs
        </div>
        <div className="absolute bottom-2 right-2 bg-black text-white text-[10px] font-semibold px-2 py-0.5 rounded-md shadow">
          {plays} Plays
        </div>
      </div>

      <div className="p-2 text-xs font-semibold text-center line-clamp-2">
        {title}
      </div>
    </div>
  );
}
