import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const studentName = "Sai Shiva";

const jobReferrals = [
  {
    id: 1,
    company: "Google",
    role: "SDE Intern",
    location: "Hyderabad",
    salary: 15,
    posted_at: "2025-06-20",
    description: "Work on scalable backend systems with top engineers.",
    referred_by: "Kiran Reddy",
    referer_profile: "https://linkedin.com/in/kiranreddy",
    referral_link: "https://careers.google.com/job/1234",
  },
  {
    id: 2,
    company: "Microsoft",
    role: "Backend Developer",
    location: "Bangalore",
    salary: 18,
    posted_at: "2025-06-18",
    description: "Join Azure backend team. Must know Node.js, C#, SQL.",
    referred_by: "Megha Sharma",
    referer_profile: "https://linkedin.com/in/meghasharma",
    referral_link: "https://microsoft.com/careers/job/5678",
  },
];

const successStories = [
  {
    id: 1,
    title: "From Tier-3 to Amazon",
    content:
      "Coming from a small college, I never imagined landing Amazon. But focused DSA practice and consistent effort on open-source made it happen.",
    posted_by: "Anjali Rao",
    posted_at: "2025-06-10",
  },
  {
    id: 2,
    title: "My Adobe Journey",
    content:
      "I cracked Adobe through open-source and community building. Shared insights on system design and behavioral round strategies.",
    posted_by: "Rahul Verma",
    posted_at: "2025-06-12",
  },
];

const StudentDashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        <main className="flex-1 p-6 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Welcome back, {studentName}!
          </h2>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Link to="/api/alumni-profiles">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
                <h3 className="text-lg font-semibold mb-2 text-indigo-600">Find Alumni in Your Field</h3>
                <p className="text-gray-600">Search and connect with alumni based on your domain or location.</p>
              </div>
            </Link>
            <Link to="/api/referrals">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all cursor-pointer">
                <h3 className="text-lg font-semibold mb-2 text-indigo-600">Browse Latest Jobs</h3>
                <p className="text-gray-600">See new job referrals shared by alumni in top companies.</p>
              </div>
            </Link>
            <Link to="/api/resources">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
                <h3 className="text-lg font-semibold mb-2 text-indigo-600">Access Resources</h3>
                <p className="text-gray-600">Download alumni-shared notes, guides, and placement materials.</p>
              </div>
            </Link>
          </div>

          {/* Recent Job Postings */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Job Postings</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobReferrals.map((referral) => (
                <div
                  key={referral.id}
                  className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-1">
                      {referral.company}
                    </h2>
                    <p className="text-indigo-600 font-medium mb-1">{referral.role}</p>
                    <p className="text-sm text-gray-500 mb-1">📍 {referral.location}</p>
                    <p className="text-sm text-gray-500 mb-1">💸 ₹{referral.salary} LPA</p>
                    <p className="text-sm text-gray-500 mb-1">
                      🗓️ Posted on: {new Date(referral.posted_at).toLocaleDateString("en-IN")}
                    </p>
                    <p className="text-sm text-gray-500 mb-2 truncate">
                      🧾 {referral.description}
                    </p>
                    <p className="text-sm text-gray-600">
                      Referred by:{" "}
                      <a
                        href={referral.referer_profile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:underline font-medium"
                      >
                        {referral.referred_by}
                      </a>
                    </p>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <a
                      href={referral.referral_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                    >
                      Apply
                    </a>
                    <Link
                      to={`/api/job/${referral.id}`}
                      className="text-sm text-indigo-600 px-4 py-2 rounded-lg border border-indigo-600 hover:bg-indigo-100 transition"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Success Stories */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {successStories.map((story) => (
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
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default StudentDashboard;
