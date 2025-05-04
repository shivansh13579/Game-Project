import React from "react";

const Result = ({ score, totalQuestions, handleResetQuiz }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md text-center"
  >
    <h2 className="text-3xl font-bold mb-4 text-green-400">Quiz Finished!</h2>
    <p className="text-xl mb-6">
      Your Score:{" "}
      <span className="text-yellow-400">
        {score} / {totalQuestions}
      </span>
    </p>
    <button
      onClick={handleResetQuiz}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition-colors"
    >
      Play Again
    </button>
  </motion.div>
);

export default Result;
