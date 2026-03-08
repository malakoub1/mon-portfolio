import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const getInitialTheme = () => {
    if (typeof window === "undefined") return false;

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") return true;
    if (savedTheme === "light") return false;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [dark, setDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark(!dark)}
      className="rounded-xl border px-3 py-2 text-sm font-medium transition hover:bg-accent"
      aria-label="Basculer le thème"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}