import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import AIChatbot from "@/components/AIChatbot";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      <ScrollyCanvas />
      <AIChatbot />
      <Experience />
      <Projects />
      <Contact /> 
      <footer className="py-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Bogam Subhash Chandra.
      </footer>
    </main>
  );
}
