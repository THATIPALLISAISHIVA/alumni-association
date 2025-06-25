import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

// Same mock data
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

const InterviewDetails = () => {
  const { id } = useParams();
  const experience = interviewExperiences.find((item) => item.id === parseInt(id));

  if (!experience) {
    return <div className="text-center text-red-600 p-10">Experience not found.</div>;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        <main className="flex-1 bg-gray-50 px-6 py-8">
          <div className="bg-white rounded-xl shadow p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">{experience.company}</h1>
            <p className="text-indigo-600 font-medium mb-1">{experience.role}</p>
            <p className="text-sm text-gray-500 mb-1">📍 {experience.location}</p>
            <p className="text-sm text-gray-500 mb-1">
              🗓️ {new Date(experience.posted_at).toLocaleDateString("en-IN")}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Posted by: <span className="font-semibold">{experience.posted_by}</span>
            </p>
            <p className="text-gray-800 text-md mb-4">{experience.content}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              {experience.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default InterviewDetails;
