import React, { Suspense } from "react";
import Leaderboard from "./Score";

export default function Page() {
  return (
    <Suspense
      fallback={<div className="text-white p-8">Loading results...</div>}
    >
      <Leaderboard />
    </Suspense>
  );
}
