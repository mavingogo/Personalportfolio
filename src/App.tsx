import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <ScrollProgress />
      <Navbar />
      <main id="home">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}