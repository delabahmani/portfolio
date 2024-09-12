import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechnologiesContainer from "@/components/TechnologiesContainer";
import Y2kContainer from "@/components/Y2kContainer";


export default function Home() {
  return (
    <div className="min-h-dvh flex items-center justify-center overflow-x-hidden">
      <main className="flex flex-col gap-8 items-center px-4 justify-center">
        <div>
          <Hero />
        </div>
        <div>
          <About />
        </div>

        <div>
          <TechnologiesContainer />
        </div>

        <div className="">
          <Projects />
        </div>

        <div>
          <Contact />
        </div>
      </main>
    </div>
  );
}
