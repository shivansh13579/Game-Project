import React, { Suspense } from "react";
import ReviewQuestions from "./QuizReview";

export default function Page() {
  return (
    <Suspense
      fallback={<div className="text-white p-8">Loading results...</div>}
    >
      <ReviewQuestions />
    </Suspense>
  );
}
