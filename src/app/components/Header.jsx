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
