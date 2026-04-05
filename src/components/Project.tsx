import { resume } from "@/data/resume";
import Chip from "@/components/presentation/Chip";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-8 md:px-16 py-20">
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-12">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resume.projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col gap-4 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
          >
            {/* Title */}
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1">
              {project.description}
            </p>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Chip key={t} label={t} />
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-auto">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  GitHub →
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  Live →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
