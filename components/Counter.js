'use client';

import { useState, useEffect } from "react";

export default function Counter({ birthDateString = "2002-08-02T00:00:00" }) {
  const [timeData, setTimeData] = useState(null);

  useEffect(() => {
    const targetDate = new Date(birthDateString);

    const updateTimer = () => {
      const now = new Date();
      const diff = now.getTime() - targetDate.getTime();

      if (diff < 0) return;

      const msPerYear = 1000 * 60 * 60 * 24 * 365.25;
      const years = Math.floor(diff / msPerYear);
      const days = Math.floor((diff % msPerYear) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % 1000) / 1000) || Math.floor((diff / 1000) % 60);

      setTimeData({ years, days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [birthDateString]);

  if (!timeData) {
    return (
      <div className="h-16 flex items-center justify-center text-sm font-medium text-pink-400">
        Calculating time...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center my-6">
      <div className="inline-flex items-center gap-3 sm:gap-6 glass-panel rounded-3xl px-6 py-4 shadow-sm border border-pink-200/80">
        <div className="flex items-baseline gap-1">
          <span className="font-mono text-2xl sm:text-3xl font-bold text-neutral-900">{timeData.years}</span>
          <span className="text-pink-500 font-semibold text-xs sm:text-sm">y</span>
        </div>
        <span className="text-pink-300 font-bold">·</span>
        <div className="flex items-baseline gap-1">
          <span className="font-mono text-2xl sm:text-3xl font-bold text-neutral-900">{timeData.days}</span>
          <span className="text-pink-500 font-semibold text-xs sm:text-sm">d</span>
        </div>
        <span className="text-pink-300 font-bold">·</span>
        <div className="font-mono text-2xl sm:text-3xl font-bold text-neutral-900">
          {String(timeData.hours).padStart(2, '0')}:{String(timeData.minutes).padStart(2, '0')}:{String(timeData.seconds).padStart(2, '0')}
        </div>
      </div>
      <p className="mt-2 text-xs uppercase tracking-widest font-semibold text-pink-400">
        counting the years
      </p>
    </div>
  );
}
