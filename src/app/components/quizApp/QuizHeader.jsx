import React from "react";

const QuizHeader = ({ quiz, score, questionNumber, totalQuestions }) => (
  <div className="w-full flex items-center justify-between pt-5 px-4">
    <div>
      <span className="text-white text-2xl pt-3">
        Question {questionNumber} of {totalQuestions}{" "}
        <span className="border border-white text-[16px] px-1 py-1">
          Select Question
        </span>
      </span>
    </div>
    <div className="flex justify-between items-center mb-4 text-xl">
      <span className="text-yellow-400 font-semibold">Score: {score}</span>
    </div>
  </div>
);

export default QuizHeader;
