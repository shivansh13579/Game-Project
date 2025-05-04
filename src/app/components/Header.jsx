"use client";

import React from "react";
import { motion } from "framer-motion";

export function Header() {
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
          className="text-3xl sm:text-5xl font-extrabold leading-tight max-w-4xl text-center"
        >
          Let's Play the
          <br className="hidden sm:block" />
          <span className="text-white">quiz</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-base sm:text-lg max-w-xl text-gray-300 text-center"
        >
          With AI, you can launch your website in hours, not days. Try our
          state-of-the-art AI tools.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center"
        >
          <button className="bg-black text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-800 transition w-full sm:w-auto">
            Create Quiz
          </button>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition w-full sm:w-auto border border-gray-300">
            Generate Quiz
          </button>
        </motion.div>
      </div>
    </div>
  );
}
