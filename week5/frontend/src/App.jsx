import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-800 rounded-xl p-8 shadow-2xl border border-slate-700 text-center">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/60 rounded-full mb-4 border border-indigo-800/50">
          Vibelearn Platform
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
          Vibelearn Foundation
        </h1>
        <p className="text-slate-400 text-sm mb-6">
          Phase 1 initialized successfully with Vite, React, and Tailwind CSS.
        </p>

        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-indigo-600/30 cursor-pointer"
        >
          Interactive Count: {count}
        </button>
      </div>
    </div>
  );
}

export default App;
