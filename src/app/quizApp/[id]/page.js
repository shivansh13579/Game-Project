"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import quizzes from "@/app/components/constant/data";
import Timer from "@/app/components/quizApp/Timer";
import Question from "@/app/components/quizApp/Question";
import QuizHeader from "@/app/components/quizApp/QuizHeader";
import Result from "@/app/components/quizApp/Result";
import CoinsAnimation from "@/app/components/quizApp/CoinsAnimation";

const QuizApp = () => {
  const [quiz, setQuiz] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [timeLeft, setTimeLeft] = useState(40);
  const [showCoins, setShowCoins] = useState(false);

  const [sound, setSound] = useState({
    correct: null,
    wrong: null,
    timer: null,
  });

  const [showTimeoutPopup, setShowTimeoutPopup] = useState(false);
  const [timeoutCountdown, setTimeoutCountdown] = useState(3);
  const [unattemptedCount, setUnattemptedCount] = useState(0);

  const params = useParams();
  const router = useRouter();
  const currentQuestion = quiz?.questionSet[questionNumber - 1];

  // Initialize sounds
  useEffect(() => {
    if (typeof window !== "undefined") {
      setSound({
        correct: new Audio("/win.mp3"),
        wrong: new Audio("/error.mp3"),
        timer: new Audio("/timer.mp3"),
      });
    }
  }, []);

  // Load quiz data
  useEffect(() => {
    if (!params?.id) return;
    const id = parseInt(params.id);
    const foundQuiz = quizzes.find((card) => card.id === id);
    setQuiz(foundQuiz);

    // Initialize localStorage for this quiz
    localStorage.setItem(`answers_quiz_${id}`, JSON.stringify({}));
  }, [params]);

  // Handle answer selection
  const handleAnswerChange = (value) => {
    if (showNextButton) return;

    setSelectedAnswer(value);
    setIsAnswerSelected(true);
    setShowNextButton(true);

    // Save answer to localStorage
    const id = parseInt(params.id);
    const stored = JSON.parse(localStorage.getItem(`answers_quiz_${id}`)) || {};
    stored[questionNumber - 1] = value;
    localStorage.setItem(`answers_quiz_${id}`, JSON.stringify(stored));

    if (value === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
      sound.correct?.play();
      setShowCoins(true);
      setTimeout(() => setShowCoins(false), 1000);
    } else {
      sound.wrong?.play();
    }
  };

  const goToNextQuestion = () => {
    if (questionNumber < quiz.questionSet.length) {
      setQuestionNumber((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSelected(false);
      setShowNextButton(false);
      setTimeLeft(40);
      setShowTimeoutPopup(false);
    } else {
      router.push(
        `/quizApp/result?score=${score}&total=${quiz.questionSet.length}&unattempted=${unattemptedCount}&quiz=${quiz?.id}`
      );
    }
  };

  const handleResetQuiz = () => {
    setQuestionNumber(1);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswerSelected(false);
    setShowNextButton(false);
    setQuizFinished(false);
    setTimeLeft(40);
    setUnattemptedCount(0);

    // Clear stored answers
    const id = parseInt(params.id);
    localStorage.setItem(`answers_quiz_${id}`, JSON.stringify({}));
  };

  // Show timeout popup if time runs out and no answer is selected
  useEffect(() => {
    if (timeLeft === 0 && !isAnswerSelected) {
      setShowTimeoutPopup(true);
      setTimeoutCountdown(3);
      setUnattemptedCount((prev) => prev + 1);
    }
  }, [timeLeft, isAnswerSelected]);

  // Countdown for timeout popup
  useEffect(() => {
    let timer;
    if (showTimeoutPopup && timeoutCountdown > 0) {
      timer = setTimeout(() => {
        setTimeoutCountdown((prev) => prev - 1);
      }, 1000);
    } else if (showTimeoutPopup && timeoutCountdown === 0) {
      setShowTimeoutPopup(false);
      goToNextQuestion();
    }
    return () => clearTimeout(timer);
  }, [showTimeoutPopup, timeoutCountdown]);

  if (!quiz) return <div className="text-white p-6">Loading quiz data...</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-start pt-12 px-4 relative">
      <QuizHeader
        quiz={quiz}
        score={score}
        questionNumber={questionNumber}
        totalQuestions={quiz.questionSet.length}
      />

      {showCoins && <CoinsAnimation />}

      {showTimeoutPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-2">Time's up!</h2>
            <p className="text-xl">
              Moving to next question in {timeoutCountdown}...
            </p>
          </div>
        </div>
      )}

      {!quizFinished ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={questionNumber}
            initial={{ x: 600 }}
            animate={{ x: 0 }}
            exit={{ x: -600 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-2xl"
          >
            <Timer
              timeLeft={timeLeft}
              setTimeLeft={setTimeLeft}
              sound={sound}
              showNextButton={showNextButton}
              quizFinished={quizFinished}
            />
            <Question
              currentQuestion={currentQuestion}
              handleAnswerChange={handleAnswerChange}
              selectedAnswer={selectedAnswer}
              showNextButton={showNextButton}
            />
            {showNextButton && (
              <button
                onClick={goToNextQuestion}
                className="mt-8 w-full font-semibold py-3 rounded-md transition-colors bg-yellow-500 text-gray-900 hover:bg-yellow-600"
              >
                {questionNumber < quiz.questionSet.length
                  ? "Next Question"
                  : "Finish Quiz"}
              </button>
            )}
          </motion.div>
        </AnimatePresence>
      ) : (
        <Result
          score={score}
          totalQuestions={quiz.questionSet.length}
          handleResetQuiz={handleResetQuiz}
        />
      )}
    </div>
  );
};

export default QuizApp;
