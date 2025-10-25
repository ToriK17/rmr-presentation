import React, { useState } from "react";
import RockyMountainRubyPresentation from "./RockyMountainRubyPresentation";
import RockyRubyJeopardy from "./RockyRubyJeopardy";

export default function App() {
  const [mode, setMode] = useState<"slides" | "game">("slides");

  return (
    <div className="w-full h-screen bg-gray-900 text-white">
      <div className="absolute top-4 right-4 z-50 space-x-2">
        <button
          onClick={() => setMode("slides")}
          className={`px-4 py-2 rounded font-semibold ${
            mode === "slides"
              ? "bg-blue-600 text-white"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          Slides
        </button>
        <button
          onClick={() => setMode("game")}
          className={`px-4 py-2 rounded font-semibold ${
            mode === "game"
              ? "bg-green-600 text-white"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          Jeopardy
        </button>
      </div>

      {mode === "slides" ? (
        <RockyMountainRubyPresentation />
      ) : (
        <RockyRubyJeopardy />
      )}
    </div>
  );
}
