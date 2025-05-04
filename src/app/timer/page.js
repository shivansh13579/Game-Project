"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function TimerPage() {
  const router = useRouter();

  const [timer, setTimer] = useState(null);
  const [showGo, setShowGo] = useState(false);
  const [started, setStarted] = useState(false);
  const [showGetReady, setShowGetReady] = useState(true);

  const startSoundRef = useRef(null);
  const endSoundRef = useRef(null);

  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("selectedQuiz");
    if (stored) {
      setQuiz(JSON.parse(stored));
    }
  }, []);

  console.log("quiz", quiz);

  useEffect(() => {
    startSoundRef.current = new Audio("/start.mp3");
    endSoundRef.current = new Audio("/end.mp3");
  }, []);

  const handleStart = () => {
    setStarted(true);
    setShowGetReady(true);

    if (startSoundRef.current) {
      startSoundRef.current.currentTime = 0;
      startSoundRef.current
        .play()
        .catch((err) => console.warn("Start sound blocked:", err));
    }

    setTimeout(() => {
      setShowGetReady(false);
      setTimer(3); // Countdown timer starts
    }, 1000);
  };

  useEffect(() => {
    if (timer === null || showGo) return;

    if (timer > 0) {
      const timeout = setTimeout(() => {
        setTimer((prev) => (prev !== null ? prev - 1 : null));
      }, 1000);
      return () => clearTimeout(timeout);
    }

    if (timer === 0) {
      setShowGo(true);

      if (endSoundRef.current) {
        endSoundRef.current.currentTime = 0;
        endSoundRef.current
          .play()
          .catch((err) => console.warn("End sound blocked:", err));
      }

      setTimeout(() => {
        router.push(`/quizApp/${quiz.id}`);
      }, 1000);
    }
  }, [timer, showGo, router]);

  return (
    <div className="min-h-screen bg-[#120622] text-white flex items-center justify-center">
      <div className="text-center space-y-6">
        <AnimatePresence mode="wait">
          {!started ? (
            <motion.button
              key="start"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onClick={handleStart}
              className="bg-white text-black px-6 py-3 text-xl rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Start Quiz
            </motion.button>
          ) : showGo ? (
            <motion.div
              key="go"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-7xl font-extrabold text-green-400"
            >
              Go!
            </motion.div>
          ) : showGetReady ? (
            <motion.h1
              key="getready"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold text-yellow-400"
            >
              Get Ready...
            </motion.h1>
          ) : timer !== null ? (
            <>
              <motion.p
                key="text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-4xl font-bold"
              >
                The quiz will start in:
              </motion.p>
              <motion.div
                key={timer}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-7xl font-extrabold text-pink-500"
              >
                {timer}
              </motion.div>
            </>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
