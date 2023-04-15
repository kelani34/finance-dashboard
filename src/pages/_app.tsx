import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(isDarkMode);
  }, []);
  return (
    <div
      className={`bg-${darkMode ? "gray-900" : "white"} text-${
        darkMode ? "white" : "gray-900"
      }`}
    >
      <Component {...pageProps} />
    </div>
  );
}
