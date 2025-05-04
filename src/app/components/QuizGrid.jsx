import React from "react";
import QuizCard from "./QuizCard";

const QuizGrid = () => {
  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Recently Published</h2>
      <div className="flex flex-wrap gap-4">
        {quizzes.map((quiz, idx) => (
          <QuizCard key={idx} {...quiz} />
        ))}
      </div>
    </div>
  );
};

export default QuizGrid;
