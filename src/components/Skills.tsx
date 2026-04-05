import { resume } from "@/data/resume";
import Chip from "@/components/presentation/Chip";

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen px-8 md:px-16 py-12">
      {/* Section heading */}
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-12">
        Skills
      </h2>

      {/* Skills grid */}
      <div className="flex flex-col gap-8">
        {Object.entries(resume.skills).map(([category, items]) => (
          <div key={category}>
            {/* Category label */}
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
              {category}
            </h3>

            {/* Chips */}
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <Chip key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
