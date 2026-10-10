import "./globals.css";

export const metadata = {
  title: "Happy Birthday Sweety! ✿",
  description: "Counting the years and celebrating memories in 3D.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-pink-300 selection:text-pink-900">
        {children}
      </body>
    </html>
  );
}
