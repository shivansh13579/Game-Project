"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PlayIcon, UsersIcon, BookOpenIcon, ArrowLeftIcon } from "lucide-react";
import quizzes from "@/app/components/constant/data";

// const dummyCards = [
//   {
//     id: 0,
//     title: "Chinese Culture Quiz: How much do you know about China?",
//     questions: [
//       "What is the traditional Chinese New Year called?",
//       "Which Chinese philosophy emphasizes harmony with nature?",
//       "What is the name of the famous Chinese wall stretching over 13,000 miles?",
//       "The Chinese Zodiac is based on a cycle of how many animals?",
//       "What is the Mid-Autumn Festival traditionally celebrated with?",
//       "What famous river is often called the 'Mother River' of China?",
//       "What is the Chinese term for 'hello'?",
//       "What color is considered lucky in Chinese culture?",
//       "What is the traditional Chinese drink made from leaves?",
//       "What is the name of the Chinese art of beautiful handwriting?",
//     ],
//     plays: 520,
//     description: "Answer these simple questions correctly and earn coins",
//     difficulty: "Easy",
//     image: "/a.jpg",
//   },
// ];

export default function QuizDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    if (!params?.id) return;
    const id = parseInt(params.id);
    const foundQuiz = quizzes.find((card) => card.id === id);
    setQuiz(foundQuiz);
  }, [params]);

  if (!quiz) return <div className="text-white p-6">Loading quiz data...</div>;

  const handlePlayClick = () => {
    // Redirect to timer page
    localStorage.setItem("selectedQuiz", JSON.stringify(quiz));
    router.push("/timer");
  };

  console.log(quiz);

  return (
    <div className="min-h-screen bg-[#120622] text-white px-6 py-12">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 min-h-[80vh]">
        {/* Left: Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {quiz.thumbnail ? (
            <img
              src={quiz.thumbnail}
              alt="Quiz Visual"
              className="rounded-xl w-full max-w-md h-[400px] object-cover shadow-2xl"
            />
          ) : (
            <div className="w-full max-w-md h-[400px] bg-gray-200 flex items-center justify-center rounded-xl text-black shadow-md">
              No image available
            </div>
          )}
        </motion.div>

        {/* Right: Details */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-xl text-center space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
              {quiz.title}
            </h1>
            {/* <p className="text-lg text-gray-300">{quiz.description}</p> */}

            {/* <span className="inline-block bg-green-600 px-4 py-1 rounded-full text-sm font-medium shadow-md">
              Difficulty: {quiz.difficulty}
            </span> */}

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-6 justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <button
                onClick={handlePlayClick}
                className="bg-purple-700 hover:bg-purple-800 px-6 py-3 rounded-lg text-white w-full sm:w-auto shadow-md flex items-center justify-center gap-2 transition duration-300"
              >
                <PlayIcon size={18} /> Play
              </button>
              <button className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg text-white w-full sm:w-auto shadow-md flex items-center justify-center gap-2 transition duration-300">
                <UsersIcon size={18} /> Play With Friends
              </button>
              <button className="bg-purple-800 hover:bg-purple-900 px-6 py-3 rounded-lg text-white w-full sm:w-auto shadow-md flex items-center justify-center gap-2 transition duration-300">
                <BookOpenIcon size={18} /> Flashcards
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Questions Section */}
      <div className="mt-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 border-b border-purple-500 pb-2">
          Popular Questions In{" "}
          <span className="text-purple-400">{quiz.title}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {quiz.questionSet.map((q, index) => (
            <div
              key={index}
              className="relative bg-[#1f1f3a] px-5 py-4 rounded-lg hover:bg-[#2a2a4d] transition shadow-md"
            >
              <span className="absolute -top-3 -left-3 bg-purple-700 w-8 h-8 text-xs flex items-center justify-center rounded-full shadow">
                {index + 1}
              </span>
              <p className="text-sm text-gray-200">{q.question}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-purple-400 hover:text-purple-200 transition"
        >
          <ArrowLeftIcon size={18} /> Back
        </button>
      </div>
    </div>
  );
}
