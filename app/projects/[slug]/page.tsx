import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();
  <Link
  href="/projects"
  className="inline-flex items-center px-5 py-2 mb-6 rounded-full text-sm font-medium bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
>
  ← Back to Projects
</Link>


  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        {/* ✅ Back button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          ← Back to Projects
        </Link>

        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          {project.longDescription}
        </p>

        <h2 className="text-lg font-semibold mb-2">Technologies</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 text-xs rounded-full border">
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline font-medium"
        >
          View on GitHub →
        </a>
      </div>
    </section>
  );
}
