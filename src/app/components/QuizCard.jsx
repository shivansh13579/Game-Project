"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Dummy data for Quiz Cards
const dummyCards = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  title: `Level ${i + 1}: General Knowledge Quiz`,
  image: `https://picsum.photos/300/200?random=${i + 1}`,
  questions: Math.floor(Math.random() * 10 + 5), // random 5–15 questions
  plays: Math.floor(Math.random() * 1000 + 100), // random 100–1100 plays
  label: i % 2 === 0 ? "NEW" : null,
}));

export default function GamePage() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white">
      <Header />

      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyCards.map((card, idx) => (
          <motion.div
            key={card.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
            onClick={() => setSelectedCard(idx)}
          >
            <QuizCard
              image={card.image}
              title={card.title}
              questions={card.questions}
              plays={card.plays}
              label={card.label}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Header() {
  return (
    <div
      className="text-center relative bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/im.jpg')",
        height: "100vh",
      }}
    >
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center px-4 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold leading-tight max-w-3xl"
        >
          Launch your website in <br className="hidden sm:block" />
          <span className="text-white">hours, not days</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-lg sm:text-xl max-w-xl text-gray-300"
        >
          With AI, you can launch your website in hours, not days. Try our
          state-of-the-art AI tools.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex gap-4 flex-col sm:flex-row"
        >
          <button className="bg-black text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-800 transition">
            Explore Now
          </button>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition border border-gray-300">
            Contact Support
          </button>
        </motion.div>
      </div>
    </div>
  );
}

function QuizCard({ image, title, questions, plays, label }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-[120px] object-cover"
        />

        {label && (
          <div className="absolute top-2 left-2 bg-yellow-400 text-black text-sm font-bold px-2 py-1 rounded">
            {label}
          </div>
        )}

        <div className="absolute bottom-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
          {questions} Qs
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
