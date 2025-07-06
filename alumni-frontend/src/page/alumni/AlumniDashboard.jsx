import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const alumniName = "Kiran Reddy";

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
    referred_by: "Kiran Reddy",
    referer_profile: "https://linkedin.com/in/kiranreddy",
    referral_link: "https://microsoft.com/careers/job/5678",
  },
];

const AlumniDashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        <main className="flex-1 p-6 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Welcome, {alumniName}!
          </h2>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Link to="/api/alumni/post-referral">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
                <h3 className="text-lg font-semibold mb-2 text-indigo-600">Post a Job Referral</h3>
                <p className="text-gray-600">Help juniors by posting latest job opportunities.</p>
              </div>
            </Link>
            <Link to="/api/alumni/upload-resource">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all cursor-pointer">
                <h3 className="text-lg font-semibold mb-2 text-indigo-600">Upload a Resource</h3>
                <p className="text-gray-600">Share notes, guides, and placement prep documents.</p>
              </div>
            </Link>
            <Link to="/api/alumni/post-success">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
                <h3 className="text-lg font-semibold mb-2 text-indigo-600">Share Your Journey</h3>
                <p className="text-gray-600">Inspire others with your career journey and learnings.</p>
              </div>
            </Link>
          </div>

          {/* Job Referrals */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Job Referrals</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobReferrals.map((referral) => (
                <div
                  key={referral.id}
                  className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-1">{referral.company}</h2>
                    <p className="text-indigo-600 font-medium mb-1">{referral.role}</p>
                    <p className="text-sm text-gray-500 mb-1">📍 {referral.location}</p>
                    <p className="text-sm text-gray-500 mb-1">💸 ₹{referral.salary} LPA</p>
                    <p className="text-sm text-gray-500 mb-1">
                      🗓️ Posted on: {new Date(referral.posted_at).toLocaleDateString("en-IN")}
                    </p>
                    <p className="text-sm text-gray-500 mb-2 truncate">🧾 {referral.description}</p>
                    <p className="text-sm text-gray-600">
                      Referred by: <a
                        href={referral.referer_profile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:underline font-medium"
                      >{referral.referred_by}</a>
                    </p>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <a
                      href={referral.referral_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                    >Apply</a>
                    <Link
                      to={`/api/job/${referral.id}`}
                      className="text-sm text-indigo-600 px-4 py-2 rounded-lg border border-indigo-600 hover:bg-indigo-100 transition"
                    >Read More</Link>
                  </div>
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

export default AlumniDashboard;
