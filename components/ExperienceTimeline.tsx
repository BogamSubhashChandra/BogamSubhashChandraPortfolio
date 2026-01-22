"use client";

const experience = {
  role: "Application Developer",
  company: "Banking & Financial Domain",
  period: "2022 – Present",
  points: [
    "Developed Spring Boot microservices for banking platforms",
    "Designed REST APIs for FASTag onboarding",
    "Implemented performance testing using JMeter",
    "Ensured code quality via SonarQube",
  ],
};

export default function ExperienceTimeline() {
  return (
    <section className="py-24 max-w-4xl mx-auto">
      <h2 className="text-center mb-10">Experience</h2>

      <div className="border-l-4 pl-6">
        <h3>{experience.role}</h3>
        <p className="text-muted-foreground">
          {experience.company} • {experience.period}
        </p>

        <ul className="list-disc ml-5 mt-4 space-y-2">
          {experience.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
