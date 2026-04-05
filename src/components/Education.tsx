import { resume } from "@/data/resume";
import Chip from "@/components/presentation/Chip";

export default function Education() {
  return (
    <section id="education" className="min-h-screen px-8 md:px-16 py-12">
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-12">
        Education
      </h2>

      <div className="flex flex-col gap-6">
        {resume.education.map((edu, index) => (
          <div
            key={index}
            className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6 flex flex-col gap-4"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {edu.degree}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  {edu.institution} · {edu.location}
                </p>
              </div>
              <Chip label={edu.period} />
            </div>

            {edu.courses && (
              <div className="flex flex-wrap gap-2">
                {edu.courses.split(", ").map((course) => (
                  <Chip key={course} label={course} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Certifications */}
      <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-12 mb-6">
        Certifications
      </h3>

      <div className="flex flex-col gap-6">
        {resume.certifications.map((cert, index) => (
          <div
            key={index}
            className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6 flex flex-col gap-2"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {cert.name}
                </h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  {cert.issuer}
                </p>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline underline-offset-2 transition-colors mt-1 inline-block"
                  >
                    Show credential ↗
                  </a>
                )}
              </div>
              <Chip label={cert.issued} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
