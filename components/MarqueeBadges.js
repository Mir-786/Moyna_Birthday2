export default function MarqueeBadges() {
  const badges = [
    "Baddie 😎",
    "Angel 🪽",
    "Dreamgirl 💫",
    "Sweetheart 💖",
    "Icon ✨",
    "Stunner 🌸",
    "Sunshine ☀️",
    "Queen 👑",
    "Cutie 🥹",
    "Heartbreaker 🤍",
  ];

  return (
    <div className="w-full overflow-hidden py-4 border-y border-pink-100/80 bg-white/60 my-10 backdrop-blur-sm">
      <div className="flex w-[200%] animate-marquee">
        <div className="flex w-1/2 justify-around items-center gap-6">
          {badges.map((b, i) => (
            <span
              key={i}
              className="text-xs sm:text-sm font-semibold tracking-wide text-neutral-700 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 whitespace-nowrap shadow-xs"
            >
              {b}
            </span>
          ))}
        </div>
        <div className="flex w-1/2 justify-around items-center gap-6">
          {badges.map((b, i) => (
            <span
              key={`dup-${i}`}
              className="text-xs sm:text-sm font-semibold tracking-wide text-neutral-700 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 whitespace-nowrap shadow-xs"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
