import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Y2kContainer from "@/components/Y2kContainer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-dvh flex items-center justify-center overflow-x-hidden">
      <main className="flex flex-col gap-8 items-center px-4 justify-center">
        <div>
          <Hero />
        </div>
        <div className="w-full px-4 py-12">
          <Y2kContainer />
        </div>

        <div>
          <Contact />
        </div>
      </main>
    </div>
  );
}
