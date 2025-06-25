import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

// Sample interview data
const interviewExperiences = [
  {
    id: 1,
    company: "Google",
    role: "SDE Intern",
    location: "Hyderabad",
    content:
      "The interview consisted of 3 rounds. First was DSA, then system design, and finally behavioral. Focused on problem-solving and clarity.",
    tags: ["DSA", "Behavioral", "System Design"],
    posted_at: "2025-06-18",
    posted_by: "Kiran Reddy",
  },
  {
    id: 2,
    company: "Amazon",
    role: "Data Engineer",
    location: "Bangalore",
    content:
      "2 technical rounds with coding and SQL questions. One managerial round. Prepare well on projects and resume-based questions.",
    tags: ["SQL", "Resume", "Projects"],
    posted_at: "2025-06-17",
    posted_by: "Megha Sharma",
  },
  {
    id: 3,
    company: "Adobe",
    role: "Frontend Developer",
    location: "Noida",
    content:
      "They asked about React lifecycle, API integration, and a take-home assignment to build a responsive UI.",
    tags: ["React", "UI", "APIs"],
    posted_at: "2025-06-15",
    posted_by: "Rahul Jain",
  },
];

const InterviewExperiences = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        <div className="flex-1 bg-gray-50 px-6 py-8">
          <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
            Interview Experiences
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interviewExperiences.map((exp) => (
              <div
                key={exp.id}
                className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-1">
                    {exp.company}
                  </h2>
                  <p className="text-indigo-600 font-medium">{exp.role}</p>
                  <p className="text-sm text-gray-500 mb-1">📍 {exp.location}</p>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                    {exp.content}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-500 mt-4">
                    🗓️ {new Date(exp.posted_at).toLocaleDateString("en-IN")}
                  </p>
                  <p className="text-sm text-gray-600">
                    Posted by: <span className="font-medium">{exp.posted_by}</span>
                  </p>
                </div>

                <Link
                  to={`/api/interview/${exp.id}`}
                  className="mt-4 text-sm text-indigo-600 hover:underline font-medium"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default InterviewExperiences;
