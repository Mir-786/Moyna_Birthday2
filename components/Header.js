'use client';

import confetti from "canvas-confetti";

export default function Header() {
  const launchCelebration = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#ec4899", "#f43f5e", "#fb7185", "#fde047", "#c084fc"]
    });
  };

  return (
    <header className="relative w-full max-w-4xl text-center pt-14 pb-6 px-4 flex flex-col items-center">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-wider mb-5 shadow-sm">
        <span>Aug 02</span>
        <span>·</span>
        <span>Special Day 🎂</span>
      </div>

      <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight text-neutral-900 leading-tight">
        Happy Birthday <br />
        <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent">
          Sweety
        </span>
      </h1>

      <p className="mt-4 text-base sm:text-xl text-neutral-600 max-w-lg leading-relaxed">
        May this year bring you closer to everything you&apos;re chasing. Celebrating every step of your journey.
      </p>

      <button
        onClick={launchCelebration}
        className="mt-6 inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 active:scale-95 text-white font-semibold text-sm rounded-full shadow-lg shadow-pink-200 transition-all cursor-pointer"
      >
        <span>Press for Love</span>
        <span>🎉</span>
      </button>
    </header>
  );
}
