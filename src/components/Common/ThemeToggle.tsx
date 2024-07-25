import { useState, useEffect } from "react";
import { DarkSh, MoonSht } from "@assets/icons/ThemeIcons";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  const getCurrentHour = () => new Date().getHours();

  const getPreferredTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }

    const hour = getCurrentHour();
    if (hour >= 19 || hour < 7) {
      return "dark";
    }

    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDarkScheme ? "dark" : "light";
  };

  useEffect(() => {
    const preferredTheme = getPreferredTheme();
    setTheme(preferredTheme);

    if (preferredTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", preferredTheme);
  }, []);

  const handleClick = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      onClick={handleClick}
      className="group relative flex h-8 w-8 rounded-full transition duration-500 hover:bg-slate-950/5 dark:hover:bg-white/10"
      aria-label="Modo oscuro"
    >
      {theme === "light" ? <MoonSht /> : <DarkSh />}
    </button>
  );
}
