import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import { Github } from "lucide-react";
import ScreenshotGallery from "components/ScreenshotGallery";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: any) {
  const project = projects.find((p) => p.slug === params.slug);
  return project
    ? { title: project.title, description: project.description }
    : {};
}

export default function ProjectDetail({ params }: any) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <section className="py-24 max-w-3xl mx-auto">
      <h1 className="mb-4">{project.title}</h1>
      <p className="mb-6">{project.longDescription}</p>

      <h2 className="text-xl font-semibold mb-3">Highlights</h2>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-3">
        Technologies
      </h2>
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 text-sm border rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        className="inline-flex items-center gap-2 font-medium hover:underline"
      >
        <Github size={18} />
        View on GitHub
      </a>

    </section>
  );
}
