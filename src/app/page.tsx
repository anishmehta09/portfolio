import Assistant from "@/components/Assistant";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Project";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Assistant />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
}
