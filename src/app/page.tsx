import Background from "@/components/Background";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Hackathons from "@/components/Hackathons";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Background />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Hackathons />
        <Experience />
        <About />
        <Contact />
      </main>
    </>
  );
}
