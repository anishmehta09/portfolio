import { resume } from "@/data/resume";
import Chip from "@/components/presentation/Chip";

export default function Education() {
  return (
    <section id="education" className="min-h-screen px-8 md:px-16 py-20">
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-12">
        Education
      </h2>

      <div className="flex flex-col gap-8">
        {resume.education.map((edu, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8">
            {/* Left column — period */}
            <div className="md:w-48 shrink-0">
              <p className="text-sm font-mono text-zinc-400 dark:text-zinc-500 mt-1">
                {edu.period}
              </p>
            </div>

            {/* Right column — content */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {edu.degree}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                {edu.institution} · {edu.location}
              </p>
              {edu.courses && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {edu.courses.split(", ").map((skill) => (
                    <Chip key={skill} label={skill} />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
