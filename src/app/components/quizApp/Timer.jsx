import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Timer = ({
  timeLeft,
  setTimeLeft,
  sound,
  showNextButton,
  quizFinished,
}) => {
  const radius = 30;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const progress = (timeLeft / 10) * 100; // adjust divisor to max time

  useEffect(() => {
    if (quizFinished || showNextButton) return;

    if (timeLeft === 0) {
      sound.timer.play();
      return;
    }

    const timer = setTimeout(() => {
      sound.timer.play();
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, setTimeLeft, sound, showNextButton, quizFinished]);

  return (
    <div className="flex justify-end pr-4 mb-1">
      <div className="relative w-20 h-20">
        {/* SVG Circle */}
        <svg height="100%" width="100%">
          <circle
            stroke="#ccc"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx="40"
            cy="40"
          />
          <circle
            stroke="#ef4444"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (progress / 100) * circumference}
            r={normalizedRadius}
            cx="40"
            cy="40"
            style={{ transition: "stroke-dashoffset 1s linear" }}
          />
        </svg>

        {/* Number with animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={timeLeft}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-red-600 text-[18px] font-bold"
            >
              {timeLeft}s
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Timer;
