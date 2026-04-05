import { resume } from "@/data/resume";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-8 md:px-16 py-20"
    >
      {/* Greeting */}
      <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 mb-4">
        Hi, I'm
      </p>

      {/* Name */}
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
        {resume.name}
      </h1>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-light text-zinc-500 dark:text-zinc-400 mb-6">
        {resume.title}
      </h2>

      {/* Summary */}
      <p className="max-w-xl text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">
        {resume.summary}
      </p>

      {/* CTAs */}
      <div className="flex gap-4 flex-wrap">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          View Projects
        </a>
        <a
          href="#experience"
          className="px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          My Experience
        </a>
      </div>

      {/* Location */}
      <p className="mt-10 text-sm text-zinc-400 dark:text-zinc-600">
        📍 {resume.location}
      </p>
    </section>
  );
}
