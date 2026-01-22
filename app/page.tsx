import HeroParallax from "@/components/HeroParallax";
import ScrollSection from "@/components/ScrollSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroParallax />

      <ScrollSection>
        <h2>About</h2>
        <p>
          Application Developer with 3 years of experience at
          IBM India Pvt Ltd, specializing in Java, Spring Boot,
          Quarkus, and Flutter.
        </p>
      </ScrollSection>

      <ScrollSection>
        <h2>Skills</h2>
        <p>
          Java, Spring Boot, Quarkus, Microservices, REST APIs,
          Flutter, FlutterFlow, SQL, JMeter, SonarQube
        </p>
      </ScrollSection>

      <ScrollSection>
        <h2>Experience</h2>
        <p>
          IBM India Pvt Ltd — 3 Years<br />
          Built scalable microservices for banking and FASTag
          acquiring platforms.
        </p>
      </ScrollSection>

      {/* ✅ Contact Section */}
      <ContactSection />
    </>
  );
}
