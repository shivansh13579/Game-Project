import React from "react";

const QuizHeader = ({ score, questionNumber, totalQuestions }) => (
  <div className="w-full flex items-center justify-between px-4 py-6 whitespace-nowrap">
    {/* Left side: Question info */}
    <div className="text-white text-sm sm:text-base md:text-lg font-medium overflow-hidden text-ellipsis">
      Question {questionNumber} of {totalQuestions}
      <span className="hidden sm:inline-block ml-2 border border-white px-2 py-1 text-xs sm:text-sm rounded">
        Select Question
      </span>
    </div>

    {/* Right side: Score */}
    <div className="text-sm sm:text-base md:text-lg font-semibold text-yellow-400">
      Score: {score}
    </div>
  </div>
);

export default QuizHeader;
