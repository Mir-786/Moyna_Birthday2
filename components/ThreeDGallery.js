'use client';

import { useState, useEffect } from "react";
import Image from "next/image";

const items = [
  {
    title: "Cutie 🥹",
    tag: "Tape #01",
    rotation: "-3deg",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
    note: "The smile that brightens any room.",
  },
  {
    title: "Baddie 😎",
    tag: "Disk Track 02",
    rotation: "2deg",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80",
    note: "Confidence level: Unstoppable.",
  },
  {
    title: "Pretty ✨",
    tag: "Polaroid #03",
    rotation: "-2deg",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=80",
    note: "Effortlessly elegant, always.",
  },
  {
    title: "My Love 🤍",
    tag: "Record #04",
    rotation: "3deg",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=80",
    note: "Forever my favorite person.",
  },
  {
    title: "Sunshine ☀️",
    tag: "Memory #05",
    rotation: "-1.5deg",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=80",
    note: "Pure warmth and golden days.",
  },
  {
    title: "Angel 🪽",
    tag: "Frame #06",
    rotation: "2.5deg",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
    note: "A heart made of gold.",
  },
  {
    title: "Dream Girl 💫",
    tag: "Archive #07",
    rotation: "-2.5deg",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop&q=80",
    note: "Out of this world.",
  },
  {
    title: "Queen 👑",
    tag: "Crown #08",
    rotation: "1.8deg",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80",
    note: "Ruling every moment with grace.",
  },
];

export default function ThreeDGallery() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full max-w-6xl px-4 mx-auto my-12 scene-3d">
      {/* Vinyl record spinning badge like original website */}
      <div className="flex justify-center mb-10">
        <div className="relative flex items-center justify-center w-28 h-28 rounded-full bg-neutral-950 shadow-2xl border-4 border-neutral-800 animate-spin-slow">
          <div className="w-10 h-10 rounded-full bg-pink-400 border-2 border-neutral-900 flex items-center justify-center text-[10px] font-bold text-white uppercase tracking-tighter">
            BDAY
          </div>
          {/* Vinyl grooves */}
          <div className="absolute inset-2 rounded-full border border-neutral-800 pointer-events-none" />
          <div className="absolute inset-4 rounded-full border border-neutral-800 pointer-events-none" />
          <div className="absolute inset-7 rounded-full border border-neutral-800 pointer-events-none" />
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-black text-neutral-800 tracking-tight">
          Memories &amp; Moments
        </h2>
        <p className="text-sm sm:text-base text-pink-600 font-medium mt-1">
          Scroll to explore each card in 3D perspective ✿
        </p>
      </div>

      {/* 3D Dynamic Parallax Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 perspective-1000">
        {items.map((item, index) => {
          // Dynamic tilt calculated per scroll position for a fluid 3D parallax feel
          const offset = (scrollY * 0.05 * (index % 2 === 0 ? 1 : -1)).toFixed(1);

          return (
            <div
              key={index}
              style={{
                transform: `rotate(${item.rotation}) translateY(${offset}px)`,
              }}
              className="card-3d relative bg-white border border-pink-100 rounded-3xl p-5 shadow-lg shadow-pink-100/50 hover:shadow-2xl hover:border-pink-200 transition-all duration-300"
            >
              {/* Tape sticker simulation */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-pink-100/80 backdrop-blur-xs border border-pink-200 rounded-sm rotate-2 shadow-xs z-20 pointer-events-none" />

              {/* Image Frame */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-pink-50">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-white">
                  {item.tag}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-neutral-800 text-base">{item.title}</h3>
                  <p className="text-xs text-neutral-500 mt-0.5">{item.note}</p>
                </div>
                <span className="text-rose-500 text-xl font-bold">❤️</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
