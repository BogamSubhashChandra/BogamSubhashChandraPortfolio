import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <section>
      <div className="container">
        <h1 className="text-center mb-16">Projects</h1>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
