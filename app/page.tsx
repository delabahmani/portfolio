import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechnologiesContainer from "@/components/TechnologiesContainer";
import Y2kContainer from "@/components/Y2kContainer";

export default function Home() {
  return (
    <div className="flex min-h-dvh items-center justify-center overflow-x-hidden">
      <main className="flex flex-col items-center justify-center gap-8 px-4">
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
          <Contact
            accessKey={process.env.WEB3_KEY ? process.env.WEB3_KEY : ""}
          />
        </div>
      </main>
    </div>
  );
}
