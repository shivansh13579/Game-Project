import React from "react";

const Question = ({
  currentQuestion,
  handleAnswerChange,
  selectedAnswer,
  showNextButton,
}) => (
  <div className="mb-6">
    {currentQuestion.imageUrl && (
      <img
        src={currentQuestion.imageUrl}
        alt="Quiz"
        className="w-[50%] mx-auto h-[50%] rounded-md"
      />
    )}
    <h2 className="text-xl font-semibold mt-4">{currentQuestion.question}</h2>

    <div className="space-y-3">
      {currentQuestion.options.map((option, index) => {
        const isCorrect = option.id === currentQuestion.correctAnswer;
        const isSelected = option.id === selectedAnswer;
        const showCorrect = showNextButton && isCorrect;
        const showIncorrect = showNextButton && isSelected && !isCorrect;

        return (
          <div
            key={option.id}
            className={`py-2 px-4 rounded-xl border flex items-center space-x-4 ${
              showCorrect
                ? "bg-green-500 text-white border-green-600"
                : showIncorrect
                ? "bg-red-500 text-white border-red-600"
                : "border-amber-400 bg-white"
            }`}
          >
            <input
              type="radio"
              id={`option-${option.id}`}
              name="quiz"
              value={option.id}
              checked={isSelected}
              disabled={showNextButton}
              onChange={() => handleAnswerChange(option.id)}
              className="hidden"
            />
            <label
              htmlFor={`option-${option.id}`}
              className="cursor-pointer flex items-center space-x-3 w-full"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                  isSelected
                    ? "bg-amber-500 text-white"
                    : "bg-amber-200 text-amber-900"
                }`}
              >
                {String.fromCharCode(65 + index)}
              </div>

              <span className="text-sm sm:text-base text-black">
                {option.text}
              </span>
            </label>
          </div>
        );
      })}
    </div>
  </div>
);

export default Question;
