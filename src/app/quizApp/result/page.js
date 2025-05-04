import React, { Suspense } from "react";
import QuizResult from "./QuizResult";

export default function Page() {
  return (
    <Suspense
      fallback={<div className="text-white p-8">Loading results...</div>}
    >
      <QuizResult />
    </Suspense>
  );
}
