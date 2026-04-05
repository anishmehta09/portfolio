import { resume } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen px-8 md:px-16 py-20">
      {/* Section heading */}
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-12">
        Experience
      </h2>

      {/* Timeline */}
      <div className="flex flex-col gap-12">
        {resume.experience.map((job, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8">
            {/* Left column — period */}
            <div className="md:w-48 shrink-0">
              <p className="text-sm font-mono text-zinc-400 dark:text-zinc-500 mt-1">
                {job.period}
              </p>
            </div>

            {/* Right column — content */}
            <div className="flex-1">
              {/* Role + company */}
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {job.role}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 mb-3">
                {job.company} · {job.location}
              </p>

              {/* Project description */}
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 italic">
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
          </div>
        ))}
      </div>
    </section>
  );
}
