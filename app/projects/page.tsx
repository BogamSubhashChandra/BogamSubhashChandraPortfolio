import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition"
          >
            ← Back
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-12">Projects</h1>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
  {projects.map((project) => (
    <ProjectCard key={project.slug} project={project} />
  ))}
</div>

      </div>
    </section>
  );
}
