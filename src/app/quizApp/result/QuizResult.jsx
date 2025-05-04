"use client";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft, Share2, ArrowRight, X } from "lucide-react";
import SharePopup from "@/app/components/SharePopup";

const QuizResult = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [copyText, setCopyText] = useState("Copy");

  const score = parseInt(searchParams.get("score")) || 0;
  const totalQuestions = parseInt(searchParams.get("total")) || 1;
  const unattempted = parseInt(searchParams.get("unattempted")) || 0;
  const id = parseInt(searchParams.get("quiz")) || [];

  const shareLink = `https://game-project-no4s.vercel.app/quizApp/result?score=${score}&total=${totalQuestions}&unattempted=${unattempted}&quiz=${id}`;
  const correctAnswers = score;
  const incorrectAnswers = totalQuestions - score;
  const accuracy = ((correctAnswers / totalQuestions) * 100).toFixed(2);
  const timeSpent = totalQuestions * 2;
  const timePerQues = timeSpent / totalQuestions;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink);
    setCopyText("Copied!");
    setTimeout(() => setCopyText("Copy"), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0c2c33] text-white p-6 relative">
      <header className="text-yellow-400 text-2xl md:text-3xl font-bold my-8 py-3 flex items-center justify-center gap-4">
        <button onClick={() => router.back()}>
          <ArrowLeft className="hover:text-white transition duration-200" />
        </button>
        Labour Day Quiz
      </header>

      <section className="bg-[#1c3b42] rounded-xl p-6 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 shadow-lg">
        <ResultCard icon="🥇" label="Coin Earned" value={score} />
        <ResultCard icon="🏆" label="Your Score" value={score} />
        <ResultCard icon="✅" label="Correct" value={correctAnswers} />
        <ResultCard icon="❌" label="Incorrect" value={incorrectAnswers} />
        <ResultCard icon="📊" label="Accuracy" value={`${accuracy}%`} />
        <ResultCard icon="⏱️" label="Time Spent" value={`${timeSpent}s`} />
        <ResultCard icon="➖" label="Unattempted" value={unattempted} />
        <ResultCard
          icon="⏳"
          label="Time/Ques"
          value={`${timePerQues.toFixed(1)}s`}
        />
      </section>

      <section className="max-w-3xl mx-auto mt-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={() => setShowModal(true)}
            className="flex-1 bg-purple-800 text-white px-5 py-3 rounded-lg flex items-center justify-between hover:bg-purple-700 transition"
          >
            Share Score <Share2 size={18} />
          </button>
          <button
            onClick={() =>
              router.push(
                `/quizApp/review?score=${score}&total=${totalQuestions}&unattempted=${unattempted}&id=${id}`
              )
            }
            className="flex-1 bg-purple-800 text-white px-5 py-3 rounded-lg flex items-center justify-between hover:bg-purple-700 transition"
          >
            Review Questions <ArrowRight size={18} />
          </button>
        </div>
        <button
          onClick={() => router.push(`/quizApp/leaderboard?score=${score}`)}
          className="w-full bg-purple-800 text-white px-5 py-3 rounded-lg flex items-center justify-between hover:bg-purple-700 transition"
        >
          Leaderboard <ArrowRight size={18} />
        </button>
      </section>
      <SharePopup
        showModal={showModal}
        setShowModal={setShowModal}
        shareLink={shareLink}
        handleCopy={handleCopy}
        copyText={copyText}
      />
    </div>
  );
};

const ResultCard = ({ icon, label, value }) => (
  <div className="bg-[#2d4c53] p-4 rounded-lg flex justify-between items-center text-base md:text-lg">
    <div className="flex items-center gap-2">
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </div>
    <span className="font-bold">{value}</span>
  </div>
);

export default QuizResult;
