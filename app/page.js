import Header from "../components/Header";
import Counter from "../components/Counter";
import MarqueeBadges from "../components/MarqueeBadges";
import ThreeDGallery from "../components/ThreeDGallery";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between pb-16 selection:bg-pink-200">
      <div className="w-full flex flex-col items-center">
        {/* Celebration Header */}
        <Header />

        {/* Live Age & Time Counter */}
        <Counter birthDateString="2002-08-02T00:00:00" />

        {/* Scrolling Badges */}
        <MarqueeBadges />

        {/* 3D Interactive Parallax Gallery */}
        <ThreeDGallery />
      </div>

      <footer className="mt-20 text-center text-xs text-neutral-400 font-medium">
        Made with ❤️ for someone truly special.
      </footer>
    </main>
  );
}
