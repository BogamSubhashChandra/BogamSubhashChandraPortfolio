export type TechGroup = {
  primary: string[];
  secondary: string[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  github: string;
  highlights: string[];
  tech: {
    frontend?: TechGroup;
    backend?: TechGroup;
    testing?: TechGroup;
  };
};


export const projects: Project[] = [
  {
    slug: "banking-microservices",
    title: "Microservices-Based Banking Application",
    description:
      "Enterprise banking platform built using Java Spring Boot.",
      longDescription:
      "Designed and implemented a scalable microservices-based banking platform using Java and Spring Boot. Focused on secure REST APIs, performance optimization, and enterprise-grade validation for financial systems.",
    github: "https://github.com/BogamSubhashChandra/java-springboot-application",
     highlights: [
      "Microservice-based architecture using Spring Boot framework",
      "Secure REST APIs",
      "SonarQube quality enforcement",
      "JMeter performance testing",
    ],
    tech: {
      backend: {
      primary: ["Java", "Spring Boot", "Microservices"],
      secondary: ["REST APIs", "MySQL"]
    },
    testing: {
      primary: ["Unit Testing"],
      secondary: ["JMeter", "Black-box Testing"]
    }
  }

  },
  {
    slug: "fastag-onboarding-frontend",
    title: "FASTag Acquiring Frontend Application",
    description:
      "FlutterFlow onboarding system backed by microservices.",
    longDescription:
      "Built an end-to-end FASTag onboarding application using FlutterFlow with backend microservices handling validation, onboarding workflows, and FASTag lifecycle management.",
    github: "https://github.com/BogamSubhashChandra/plaza_onboarding_frontend.git",
    highlights: [
      "Adding FASTag Plazas",
      "Editing FASTag Plazas",
      "Adaptive UI design",
    ],
     tech: {
  frontend: {
    primary: ["FlutterFlow"],
    secondary: ["UI/UX Design", "Responsive Design", "Adaptive Layouts"]
  },
  backend: {
    primary: ["API Integration"],
    secondary: []
  },
  testing: {
    primary: [],
    secondary: []
  }
}

  },
  {
    slug: "fastag-quarkus",
    title: "FASTag Acquiring Platform (Quarkus)",
    description:
      "High-performance FASTag backend built using Java Quarkus.",
    longDescription:
      "Built an end-to-end FASTag onboarding application using FlutterFlow with backend microservices handling validation, onboarding workflows, and FASTag lifecycle management.",
    github: "https://github.com/BogamSubhashChandra/plaza-onboarding-service.git",
    highlights: [
      "Microservice-based architecture using Quarkus framework",
      "Secure REST APIs",
      "Database design with PostgreSQL",
      "Using record types for data modeling",
    ],
    tech: {
  backend: {
    primary: ["Java", "Quarkus", "Microservices"],
    secondary: ["PostgreSQL", "REST APIs", "Record Types"]
  },
  testing: {
    primary: ["Blackbox Testing"],
    secondary: []
  }
}
  },
];     
