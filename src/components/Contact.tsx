import { resume } from "@/data/resume";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-8 md:px-16 py-20">
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        Contact
      </h2>

      <p className="text-zinc-500 dark:text-zinc-400 mb-12 max-w-md">
        I'm open to new opportunities. Whether you have a question, a role, or
        just want to connect — feel free to reach out.
      </p>

      <div className="flex flex-col gap-4">
        {/* Email */}
        <a
          href={`mailto:${resume.contact.email}`}
          className="flex items-center gap-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors group max-w-md"
        >
          <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-lg shrink-0">
            ✉️
          </div>
          <div>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-0.5">
              Email
            </p>
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
              {resume.contact.email}
            </p>
          </div>
        </a>

        {/* GitHub */}
        <a
          href={resume.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors group max-w-md"
        >
          <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-lg shrink-0">
            🐙
          </div>
          <div>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-0.5">
              GitHub
            </p>
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
              {resume.contact.github}
            </p>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href={resume.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors group max-w-md"
        >
          <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-lg shrink-0">
            💼
          </div>
          <div>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-0.5">
              LinkedIn
            </p>
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
              {resume.contact.linkedin}
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
