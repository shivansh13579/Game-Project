import React, { useEffect } from "react";

const Timer = ({
  timeLeft,
  setTimeLeft,
  sound,
  showNextButton,
  quizFinished,
}) => {
  useEffect(() => {
    if (quizFinished || showNextButton) return;

    if (timeLeft === 0) {
      sound.timer.play(); // Play the timer sound when time is up
      return;
    }

    const timer = setTimeout(() => {
      sound.timer.play(); // Play timer sound each second
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, setTimeLeft, sound, showNextButton, quizFinished]);

  return (
    <div className="mb-2 text-right text-sm text-red-400">
      ⏳ Time left: {timeLeft}s
    </div>
  );
};

export default Timer;
