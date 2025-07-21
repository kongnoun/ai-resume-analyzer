import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar"
import ResumeCard from "~/constants/ResumeCard";
import { resumes } from "~/constants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind-M" },
    { name: "description", content: "Resumind-M smart feedback for your dream job." },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />

    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Applications & Resume Ratings</h1>
        <h2>Review your submissions and check AI-powered feedback</h2>
      </div>
      {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
                <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
      )}
    </section>





  </main>;
}
