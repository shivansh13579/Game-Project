"use client";
import { ArrowLeft } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Leaderboard = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const score = parseInt(searchParams.get("score")) || 0;

  const topThree = [
    {
      name: "Sarthak",
      score: 36,
      position: 2,
      image: "/c.png",
    },
    {
      name: "Shivam",
      score: 40,
      position: 1,
      image: "/c.png",
    },
    {
      name: "Gaurav Bhardwajj",
      score: 36,
      position: 3,
      image: "/c.png",
    },
  ];

  const others = [
    { rank: 4, name: "shivam Kumar", coins: 4, image: "/c.png" },
    { rank: 5, name: "Vikash Kumar", coins: 28, image: "/c.png" },
    { rank: 6, name: "Sarthaksquiz", coins: 24, image: "/c.png" },
    { rank: 7, name: "Sarthaksquiz", coins: 24, image: "/c.png" },
    { rank: 8, name: "Sarthaksquiz", coins: 24, image: "/c.png" },
    { rank: 9, name: "Sarthaksquiz", coins: 24, image: "/c.png" },
  ];

  const [visibleCount, setVisibleCount] = useState(5);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount(others.length);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0c2c33] text-white p-4 pb-7">
      {/* Header */}
      <header className="flex items-center justify-center text-yellow-400 text-2xl sm:text-3xl font-bold mb-6 relative mt-6 py-4">
        <button onClick={() => router.back()} className="absolute left-0">
          <ArrowLeft size={24} />
        </button>
        Leaderboard
      </header>

      {/* Podium */}
      <div className="flex flex-wrap sm:flex-nowrap justify-center items-end gap-4 sm:gap-6 mb-10">
        {topThree.map((user, index) => (
          <motion.div
            key={user.name}
            className={`bg-[#1c3b42] rounded-xl text-center p-4 w-24 sm:w-28 ${
              user.position === 1
                ? "transform scale-110 shadow-lg"
                : "opacity-90"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="relative">
              <img
                src={user.image}
                alt={user.name}
                className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full border-4 border-white"
              />
              {user.position === 1 && (
                <span className="absolute -top-6 right-2 sm:-top-8 sm:right-4 text-yellow-400 text-3xl sm:text-4xl">
                  👑
                </span>
              )}
              <div
                className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-black text-xs px-2 py-1 rounded-full ${
                  user.position === 1
                    ? "bg-yellow-500"
                    : user.position === 2
                    ? "bg-blue-500"
                    : "bg-green-500"
                }`}
              >
                {user.position}
              </div>
            </div>
            <p className="mt-6 font-semibold text-sm sm:text-base">
              {user.name}
            </p>
            <p className="text-yellow-400 font-bold text-sm sm:text-base">
              {score}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Other Leaderboard Entries */}
      <div className="space-y-2 max-w-md mx-auto px-2 sm:px-0">
        <AnimatePresence>
          {others.slice(0, visibleCount).map((user, i) => (
            <motion.div
              key={user.rank}
              className={`flex justify-between items-center p-3 rounded-lg transition duration-200 cursor-pointer ${
                user.rank === 7
                  ? "bg-cyan-700 hover:bg-cyan-600"
                  : "bg-[#1c3b42] hover:bg-[#27575f]"
              }`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <div className="flex items-center gap-3">
                <span className="text-base font-bold">{user.rank}</span>
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm">{user.name}</span>
              </div>
              <div className="flex items-center gap-1 text-yellow-400 font-semibold text-sm">
                <span>{score}</span> 🪙
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Load More */}
        {visibleCount < others.length && (
          <div className="text-center mt-4">
            {loading ? (
              <div className="text-yellow-400 animate-pulse">Loading...</div>
            ) : (
              <button
                onClick={handleLoadMore}
                className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition"
              >
                Load More
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
