import HeroParallax from "@/components/HeroParallax";
import ScrollSection from "@/components/ScrollSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <HeroParallax />

      {/* CONTACT ICONS (TOP / HERO AREA) */}
      <ContactSection />

      {/* ABOUT */}
      <ScrollSection>
        <h2>About</h2>
        <p>
          Application Developer with 3 years of experience at IBM India Pvt Ltd,
          specializing in designing and building scalable, enterprise-grade
          applications. Strong expertise in Java Full-Stack development,
          including Spring Boot, Quarkus, and Microservices architecture, with
          hands-on experience in banking and FASTag acquiring & onboarding
          systems.
        </p>
        <p>
          Proven ability to develop high-performance REST APIs, integrate complex
          business workflows, and ensure code quality, performance, and
          reliability. Experienced in FlutterFlow for building modern user
          interfaces, collaborating with cross-functional teams, and delivering
          production-ready solutions in fast-paced environments. Passionate about
          clean architecture, performance optimization, and building robust
          systems that scale.
        </p>
      </ScrollSection>

      {/* SKILLS */}
      <ScrollSection>
        <h2>Skills</h2>
        <p>
          Java, Spring Boot, Quarkus, Microservices, REST APIs, FlutterFlow, SQL,
          Git, JMeter, Agile Methodologies
        </p>
      </ScrollSection>

      {/* EXPERIENCE */}
      <ScrollSection>
        <h2>Experience</h2>
        <p>
          IBM India Pvt Ltd — 3 Years
          <br />
          Built scalable microservices for banking and FASTag acquiring
          platforms.
        </p>
      </ScrollSection>

      {/* PROJECT PREVIEW */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>

          <p className="text-gray-600 dark:text-gray-400 mb-10">
            A snapshot of the systems I’ve built in banking and FASTag domains
          </p>

          {/* Short project descriptions */}
          <div className="grid gap-6 mb-12">
            {projects.slice(0, 3).map((project) => (
              <div
  key={project.slug}
  className="
    rounded-2xl
    border border-slate-300/30 dark:border-slate-700/40
    p-5
    text-left
  "
>
  <h3 className="font-semibold mb-1">
    {project.title}
  </h3>
  <p className="text-sm text-gray-600 dark:text-gray-400">
    {project.description}
  </p>
</div>

            ))}
          </div>

          {/* Projects Button */}
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            View All Projects →
          </Link>
        </div>
      </section>
    </>
  );
}
