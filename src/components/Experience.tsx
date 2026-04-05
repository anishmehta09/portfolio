import { resume } from "@/data/resume";
import Chip from "@/components/presentation/Chip";

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen px-8 md:px-16 py-12">
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-12">
        Experience
      </h2>

      <div className="flex flex-col gap-6">
        {resume.experience.map((job, index) => (
          <div
            key={index}
            className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6 flex flex-col gap-4"
          >
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {job.role}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  {job.company} · {job.location}
                </p>
              </div>
              {/* Period chip */}
              <Chip label={job.period} />
            </div>

            {/* Client badge */}
            {job.client && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-400 dark:text-zinc-500">Client</span>
                <Chip label={job.client} />
              </div>
            )}

            {/* Project description */}
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed italic border-l-2 border-zinc-200 dark:border-zinc-700 pl-3">
              {job.project}
            </p>

            {/* Bullet points */}
            <ul className="flex flex-col gap-2">
              {job.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
