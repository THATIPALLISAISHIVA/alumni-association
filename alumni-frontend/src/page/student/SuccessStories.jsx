import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

// Sample success stories
const stories = [
  {
    id: 1,
    title: "From Tier-3 College to Google",
    content:
      "I started my journey in a small town with limited resources, but consistent DSA practice and open-source contributions helped me crack Google SDE internship... I started my journey in a small town with limited resources, but consistent DSA practice and open-source contributions helped me crack Google SDE internship...I started my journey in a small town with limited resources, but consistent DSA practice and open-source contributions helped me crack Google SDE internship...I started my journey in a small town with limited resources, but consistent DSA practice and open-source contributions helped me crack Google SDE internship... "
      ,
    posted_by: "Kiran Reddy",
    posted_at: "2025-06-20",
  },
  {
    id: 2,
    title: "How I Got Into Amazon as a Fresher",
    content:
      "Amazon’s hiring process tested both technical and behavioral skills. Here's how I prepared with mock interviews, resume revisions, and LeetCode grind...",
    posted_by: "Megha Sharma",
    posted_at: "2025-06-18",
  },
  {
    id: 3,
    title: "Working Abroad – My Journey to Microsoft Dublin",
    content:
      "After two years in India, I transitioned to Microsoft Dublin through an internal transfer. Here's how I built visibility within the company and handled the interview process...",
    posted_by: "Rahul Jain",
    posted_at: "2025-06-16",
  },
];

const SuccessStories = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        <main className="flex-1 p-6 bg-gray-50">
          <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
            Alumni Success Stories
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story) => (
              <div
                key={story.id}
                className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-300"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {story.title}
                </h2>
                <p className="text-sm text-gray-700 mb-3">
                  {story.content.length > 150
                    ? story.content.slice(0, 150) + "..."
                    : story.content}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  🗓️ {new Date(story.posted_at).toLocaleDateString("en-IN")}
                </p>
                <p className="text-sm text-gray-600">
                  Posted by:{" "}
                  <span className="font-medium text-gray-800">
                    {story.posted_by}
                  </span>
                </p>

                <Link
                  to={`/api/success-stories/${story.id}`}
                  className="inline-block mt-4 text-indigo-600 font-medium hover:underline text-sm"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default SuccessStories;
