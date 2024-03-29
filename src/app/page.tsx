import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/about/AboutSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import EmailTemplate from "@/components/contact/EmailTemplate";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col bg-[#15011c]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection />
      <AboutSection/>
      <ProjectsSection/>
      <EmailTemplate />
      </div>
      <Footer />
    </main>
  );
}
