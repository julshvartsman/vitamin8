"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply dark mode class to the html element when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      className={clsx("min-h-screen transition-colors duration-300", {
        "bg-black text-white": isDarkMode,
        "bg-gray-100 text-gray-900": !isDarkMode,
      })}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1
            className={clsx("text-4xl font-bold mb-6", {
              "text-white": isDarkMode,
              "text-gray-900": !isDarkMode,
            })}
          >
            Mode Switcher Example
          </h1>

          <p
            className={clsx("text-xl mb-8", {
              "text-gray-300": isDarkMode,
              "text-gray-600": !isDarkMode,
            })}
          >
            Current mode: {isDarkMode ? "Dark Mode" : "Light Mode"}
          </p>

          <div className="space-x-4">
            <button
              onClick={() => setIsDarkMode(true)}
              className={clsx(
                "px-6 py-3 rounded-lg font-medium transition-colors duration-200",
                {
                  "bg-blue-600 text-white hover:bg-blue-700": isDarkMode,
                  "bg-gray-800 text-white hover:bg-gray-900": !isDarkMode,
                }
              )}
            >
              Dark Mode
            </button>
            <button
              onClick={() => setIsDarkMode(false)}
              className={clsx(
                "px-6 py-3 rounded-lg font-medium transition-colors duration-200",
                {
                  "bg-gray-700 text-white hover:bg-gray-600": isDarkMode,
                  "bg-blue-500 text-white hover:bg-blue-600": !isDarkMode,
                }
              )}
            >
              Light Mode
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
