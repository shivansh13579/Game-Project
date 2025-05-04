import React from "react";
import QuizCard from "./QuizCard";

const quizTemplate = {
  image: "/demo.jpg",
  title: "General Knowledge Challenge",
  questions: 10,
  plays: 123,
  label: "Featured Quiz",
  questionSet: [
    {
      question: "What is the capital of France?",
      imageUrl: "https://via.placeholder.com/600x400?text=Q1",
      options: [
        { id: "a", text: "Berlin" },
        { id: "b", text: "Madrid" },
        { id: "c", text: "Paris" },
        { id: "d", text: "Rome" },
      ],
      correctAnswer: "c",
    },
    {
      question: "Which planet is known as the Red Planet?",
      imageUrl: "https://via.placeholder.com/600x400?text=Q2",
      options: [
        { id: "a", text: "Venus" },
        { id: "b", text: "Mars" },
        { id: "c", text: "Jupiter" },
        { id: "d", text: "Saturn" },
      ],
      correctAnswer: "b",
    },
    // Add remaining questions as needed
  ],
};

const quizzes = [
  {
    image: "/marvel.jpg",
    title: "Are You A True Marvel Fan?",
    questions: 15,
    plays: 5,
    label: "Are You A True Marvel Fan?",
    questionSet: Array.from({ length: 10 }, (_, i) => ({
      question: `What is your favorite Marvel movie Q${i + 1}?`,
      imageUrl: `https://via.placeholder.com/600x400?text=Marvel+Q${i + 1}`,
      options: [
        { id: "a", text: "Iron Man" },
        { id: "b", text: "Thor" },
        { id: "c", text: "Captain America" },
        { id: "d", text: "Black Panther" },
      ],
      correctAnswer: ["a", "b", "c", "d"][Math.floor(Math.random() * 4)],
    })),
  },
  {
    image: "/moon.jpg",
    title: "Fun Facts of Moon Quiz",
    questions: 10,
    plays: 3,
    questionSet: Array.from({ length: 10 }, (_, i) => ({
      question: `What phase is the moon in Q${i + 1}?`,
      imageUrl: `https://via.placeholder.com/600x400?text=Moon+Q${i + 1}`,
      options: [
        { id: "a", text: "New Moon" },
        { id: "b", text: "Full Moon" },
        { id: "c", text: "Quarter Moon" },
        { id: "d", text: "Half Moon" },
      ],
      correctAnswer: ["a", "b", "c", "d"][Math.floor(Math.random() * 4)],
    })),
  },
  {
    image: "/places.jpg",
    title: "Can You Identify The Famous Places In The World?",
    questions: 15,
    plays: 11,
    label: "Can You Identify The Famous Places In The World?",
    questionSet: Array.from({ length: 10 }, (_, i) => ({
      question: `Identify this famous place Q${i + 1}`,
      imageUrl: `https://via.placeholder.com/600x400?text=Place+Q${i + 1}`,
      options: [
        { id: "a", text: "Eiffel Tower" },
        { id: "b", text: "Statue of Liberty" },
        { id: "c", text: "Taj Mahal" },
        { id: "d", text: "Colosseum" },
      ],
      correctAnswer: ["a", "b", "c", "d"][Math.floor(Math.random() * 4)],
    })),
  },
  {
    image: "/disease.jpg",
    title: "Viruses and Disease Quiz",
    questions: 10,
    plays: 2,
    questionSet: Array.from({ length: 10 }, (_, i) => ({
      question: `What disease is caused by Q${i + 1}?`,
      imageUrl: `https://via.placeholder.com/600x400?text=Disease+Q${i + 1}`,
      options: [
        { id: "a", text: "COVID-19" },
        { id: "b", text: "Influenza" },
        { id: "c", text: "Malaria" },
        { id: "d", text: "Tuberculosis" },
      ],
      correctAnswer: ["a", "b", "c", "d"][Math.floor(Math.random() * 4)],
    })),
  },
];

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
