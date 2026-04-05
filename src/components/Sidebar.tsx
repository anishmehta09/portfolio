"use client";

import { useState } from "react";
import { resume } from "@/data/resume";
import { useTheme } from "next-themes";

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 h-14 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        <span className="font-bold text-lg">Anish</span>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar — desktop fixed, mobile drawer */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-full w-52
          bg-white dark:bg-zinc-900
          border-r border-zinc-200 dark:border-zinc-800
          flex flex-col px-4 py-8
          transition-transform duration-300
          md:translate-x-0
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Avatar + name */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-2xl font-bold mb-3">
            A
          </div>
          <p className="font-bold text-base">Anish</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center mt-1">
            Dev & AI Engineer
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 flex-1">
          {resume.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Theme toggle */}
        <button
          onClick={() => {
            if (theme === "light") setTheme("dark");
            else if (theme === "dark") setTheme("system");
            else setTheme("light");
          }}
          className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          {theme === "light"
            ? "🌞 Light"
            : theme === "dark"
              ? "🌜 Dark"
              : "💻 Auto"}
        </button>

        {/* Chat button */}
        <button className="mt-4 w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
          💬 Chat with me
        </button>
      </aside>

      {/* Spacer so main content doesn't hide behind sidebar on desktop */}
      <div className="hidden md:block w-52 shrink-0" />
    </>
  );
}
