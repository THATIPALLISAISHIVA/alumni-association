import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

// Reuse same sample stories for now
const stories = [
  {
    id: 1,
    title: "From Tier-3 College to Google",
    content:
      "I started my journey in a small town with limited resources. Initially, I struggled to find direction, but I found communities on GitHub, LinkedIn, and YouTube. I started practicing DSA daily and contributed to open source. After 6 months, I started applying to off-campus roles. I got rejected by many companies but finally cracked Google SDE internship after 3 rounds. The journey was tough but worth it.",
    posted_by: "Kiran Reddy",
    posted_at: "2025-06-20",
  },
  {
    id: 2,
    title: "How I Got Into Amazon as a Fresher",
    content:
      "As a final-year student, I knew Amazon would expect a strong DSA foundation and system design basics. I solved over 300 LeetCode questions, revised CS fundamentals, and practiced mock interviews. I cleared all 3 rounds and joined as a Data Engineer in Bangalore. The key was consistency and confidence.",
    posted_by: "Megha Sharma",
    posted_at: "2025-06-18",
  },
  {
    id: 3,
    title: "Working Abroad – My Journey to Microsoft Dublin",
    content:
      "I worked for Microsoft India for two years before applying for an internal transfer. I built a strong reputation by consistently delivering and volunteering for high-impact tasks. The Dublin opportunity came through an internal referral, and after 2 technical interviews, I made it. Never stop building, even within your company.",
    posted_by: "Rahul Jain",
    posted_at: "2025-06-16",
  },
];

const SuccessStoryDetail = () => {
  const { id } = useParams();
  const story = stories.find((s) => s.id === parseInt(id));

  if (!story) {
    return <div className="text-center mt-10">Story not found.</div>;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />

        <main className="flex-1 p-6 bg-gray-50">
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {story.title}
            </h1>
            <p className="text-sm text-gray-500 mb-2">
              🗓️ {new Date(story.posted_at).toLocaleDateString("en-IN")}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Posted by:{story.posted_by}
              <span className="font-medium text-gray-800">{story.posted_by}</span>
            </p>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {story.content}
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default SuccessStoryDetail;
