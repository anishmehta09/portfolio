"use client";

import { useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { resume } from "@/data/resume";
import { useTheme } from "next-themes";

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);

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
          <div className="relative w-16 h-16 rounded-full overflow-hidden mb-3">
            <Image
              src="/image.png"
              alt="Anish Mehta"
              fill
              className="object-cover"
              style={{ objectPosition: "center 20%" }}
            />
          </div>
          <p className="font-bold text-base">Anish</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center mt-1">
            Full Stack Engineer
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 flex-1">
          {resume.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 rounded-lg text-base text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-2"
            >
              {item.label}
              {item.label === "Assistant" && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="sparkle-grad"
                      x1="0"
                      y1="0"
                      x2="16"
                      y2="16"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M7 1C7 1 7.5 4.5 9 6C10.5 7.5 14 8 14 8C14 8 10.5 8.5 9 10C7.5 11.5 7 15 7 15C7 15 6.5 11.5 5 10C3.5 8.5 0 8 0 8C0 8 3.5 7.5 5 6C6.5 4.5 7 1 7 1Z"
                    fill="url(#sparkle-grad)"
                  />
                  <path
                    d="M13 0C13 0 13.25 1.75 14 2.5C14.75 3.25 16 3.5 16 3.5C16 3.5 14.75 3.75 14 4.5C13.25 5.25 13 7 13 7C13 7 12.75 5.25 12 4.5C11.25 3.75 10 3.5 10 3.5C10 3.5 11.25 3.25 12 2.5C12.75 1.75 13 0 13 0Z"
                    fill="url(#sparkle-grad)"
                  />
                </svg>
              )}
            </a>
          ))}
        </nav>

        {/* Resume download */}
        <a
          href="/resume.pdf"
          download="Anish_Mehta_Resume.pdf"
          className="flex items-center gap-2 px-3 py-2 mb-3 rounded-lg text-sm font-medium text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Download Resume
        </a>

        {/* Theme toggle */}
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 px-1">Theme</p>
          <div className="flex rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700 text-xs">
            {(["system", "dark", "light"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={`flex-1 py-1.5 capitalize transition-colors cursor-pointer ${
                  mounted && theme === t
                    ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium"
                    : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                {t === "system" ? "Auto" : t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Spacer so main content doesn't hide behind sidebar on desktop */}
      <div className="hidden md:block w-52 shrink-0" />
    </>
  );
}
