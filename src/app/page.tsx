import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Project";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
}
