import Head from "next/head";
import { Github, Linkedin, Download } from "lucide-react";

export default function Home() {

  return (
    <>
      <Head>
        <title>Bogam Subhash Chandra | Java Full Stack Developer</title>
        <meta
          name="description"
          content="Java Full Stack Developer skilled in Spring Boot, Quarkus, FlutterFlow, and scalable backend systems."
        />
        <meta
          name="keywords"
          content="Java Developer, Spring Boot, Quarkus, Backend Engineer, Full Stack Developer"
        />
        <meta name="author" content="Bogam Subhash Chandra" />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">
              Bogam Subhash Chandra
            </h1>

            <p className="mt-4 text-xl">
              Java Full Stack Developer | Spring Boot | Quarkus | FlutterFlow
            </p>

            <p className="mt-2 text-sm">
              📍 India · 📧{" "}
                <a href="mailto:subhashchandrabogam@gmail.com" className="text-blue-500 hover:underline">
                    subhashchandrabogam@gmail.com
                    </a>{" "}
                    · 📞{" "}
                <a href="tel:+918639468821" className="text-blue-500 hover:underline">
                    +91 8639468821
                </a>
            </p>


            <div className="mt-6 flex justify-center gap-4 flex-wrap">
              <a
                href="/resume.pdf"
                download
                className="bg-white text-blue-700 px-6 py-2 rounded-xl font-semibold shadow flex items-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </a>

              <a
                href="https://github.com/BogamSubhashChandra"
                target="_blank"
                className="border border-white px-4 py-2 rounded-xl flex items-center gap-2"
              >
                <Github size={18} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/bogam-subhash-chandra"
                target="_blank"
                className="border border-white px-4 py-2 rounded-xl flex items-center gap-2"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 text-center">
          <p>
            © {new Date().getFullYear()} Bogam Subhash Chandra · subhashchandra.dev
          </p>
        </footer>
      </main>
    </>
  );
}
