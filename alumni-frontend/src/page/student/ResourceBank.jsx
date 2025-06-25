import React from "react";
import { FaGoogleDrive } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

// Sample Resource Data
const resources = [
  {
    id: 1,
    title: "Top 100 DSA Questions",
    description: "PDF covering the most important coding questions asked in interviews.",
    drive_link: "https://drive.google.com/sample1",
    category: "Coding",
    posted_at: "2025-06-18",
  },
  {
    id: 2,
    title: "Aptitude Crash Course Notes",
    description: "Handwritten notes with tricks and formulas for aptitude tests.",
    drive_link: "https://drive.google.com/sample2",
    category: "Aptitude",
    posted_at: "2025-06-17",
  },
  {
    id: 3,
    title: "Behavioral Questions Guide",
    description: "Common HR questions and how to answer them with examples.",
    drive_link: "https://drive.google.com/sample3",
    category: "Interview Prep",
    posted_at: "2025-06-15",
  },
];

// Category color mapping
const categoryColors = {
  Coding: "bg-blue-100 text-blue-700",
  Aptitude: "bg-green-100 text-green-700",
  "Interview Prep": "bg-yellow-100 text-yellow-700",
};

const ResourceBank = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />

        <main className="flex-1 p-6 bg-gray-50">
          <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
            📚 Resource Bank
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((res) => (
              <div
                key={res.id}
                className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {res.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-3">
                    {res.description}
                  </p>

                  {/* Category Badge */}
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      categoryColors[res.category] || "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {res.category}
                  </span>

                  <p className="text-sm text-gray-500 mt-3">
                    🗓️ Posted on:{" "}
                    {new Date(res.posted_at).toLocaleDateString("en-IN")}
                  </p>
                </div>

                {/* Drive Link */}
                <a
                  href={res.drive_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition"
                >
                  <FaGoogleDrive className="text-white text-lg" />
                  View Resource
                </a>
              </div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default ResourceBank;
