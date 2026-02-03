import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="page">
      <div className="page__inner">
        <Hero />
        <div className="rule" />
        <About />
        <div className="rule" />
        <Experience />
        <div className="rule" />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
