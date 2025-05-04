"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, XCircle, CheckCircle } from "lucide-react";
import quizzes from "@/app/components/constant/data"; // Update this path as needed

const ReviewQuestions = () => {
  const searchParams = useSearchParams();
  const [quiz, setQuiz] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});

  const id = parseInt(searchParams.get("id")) || "";

  useEffect(() => {
    if (!id) return;
    const foundQuiz = quizzes.find((quiz) => quiz.id === id);
    setQuiz(foundQuiz);

    const storedAnswers =
      JSON.parse(localStorage.getItem(`answers_quiz_${id}`)) || {};
    setUserAnswers(storedAnswers);
  }, [id]);

  if (!quiz) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
        <header className="text-yellow-400 text-2xl md:text-3xl font-bold mb-8 flex items-center justify-center gap-4">
          <button onClick={() => window.history.back()}>
            <ArrowLeft className="hover:text-white transition-all duration-300 transform hover:scale-110" />
          </button>
          Review Questions
        </header>
        <div className="text-center text-lg text-white">Quiz not found.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-zinc-900 to-zinc-400 text-white p-8">
      <header className="text-yellow-400 text-2xl md:text-3xl font-bold mb-8 flex justify-center items-center gap-4 pt-6">
        <button onClick={() => window.history.back()}>
          <ArrowLeft className="hover:text-white transition-all duration-300 transform hover:scale-110" />
        </button>
        Review Questions
      </header>

      <section className="grid md:grid-cols-2 gap-4">
        {quiz.questionSet.map((question, index) => {
          const userAnswer = userAnswers[index];
          const correct = question.correctAnswer.toLowerCase();
          const user = userAnswer?.toLowerCase?.();
          const isCorrect = user === correct;

          return (
            <div
              key={index}
              className="bg-[#1c3b42] p-3 rounded-lg shadow transition-transform transform hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-semibold text-yellow-300">
                  Q{index + 1}: {question.question}
                </h3>
                <div>
                  {isCorrect ? (
                    <CheckCircle className="text-green-500 text-base" />
                  ) : (
                    <XCircle className="text-red-500 text-base" />
                  )}
                </div>
              </div>

              {question.imageUrl && (
                <img
                  src={question.imageUrl}
                  alt={`Question ${index + 1}`}
                  className="w-full h-32 object-cover rounded-md mb-3"
                />
              )}

              <div className="space-y-2">
                {question.options.map((opt, optIndex) => {
                  const optionKey = opt.id.toLowerCase();
                  const isSelected = user === optionKey;
                  const isRight = correct === optionKey;

                  let borderColor = "border-gray-600";
                  if (isRight) borderColor = "border-green-500";
                  else if (isSelected) borderColor = "border-red-500";

                  return (
                    <div
                      key={optIndex}
                      className={`flex items-center justify-between p-2 border ${borderColor} rounded-md text-sm`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-gray-600 text-white text-xs font-bold flex items-center justify-center">
                          {optionKey.toUpperCase()}
                        </span>
                        {opt.text}
                      </div>
                      <div className="text-xs">
                        {isSelected && !isRight && (
                          <span className="text-red-400">Your Answer</span>
                        )}
                        {isRight && (
                          <span className="text-green-400">Correct Answer</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      <div className="mt-8 max-w-2xl mx-auto">
        <button
          onClick={() => window.history.back()}
          className="w-full bg-gradient-to-r from-purple-800 to-indigo-600 text-white px-6 py-4 rounded-lg flex items-center justify-center text-lg font-semibold hover:opacity-90 transition-all"
        >
          Go Back to Results
        </button>
      </div>
    </div>
  );
};

export default ReviewQuestions;
