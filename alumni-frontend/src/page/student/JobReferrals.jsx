import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

// Sample job referral data
const jobReferrals = [
  {
    id: 1,
    company: "Google",
    role: "SDE Intern",
    location: "Hyderabad",
    referral_link: "https://careers.google.com/job/1234",
    description: "Work on scalable backend systems with top engineers.",
    posted_at: "2025-06-20",
    salary: 15,
    referred_by: "Kiran Reddy",
    referer_profile: "https://linkedin.com/in/kiranreddy",
  },
  {
    id: 2,
    company: "Amazon",
    role: "Cloud Engineer",
    location: "Bangalore",
    referral_link: "https://amazon.jobs/job/4567",
    description: "Build and manage AWS-based architectures.",
    posted_at: "2025-06-18",
    salary: 18,
    referred_by: "Megha Sharma",
    referer_profile: "https://linkedin.com/in/meghasharma",
  },
  {
    id: 3,
    company: "Adobe",
    role: "Frontend Developer",
    location: "Noida",
    referral_link: "https://adobe.wd5.myworkdayjobs.com/job/7890",
    description: "Create beautiful UI using React & TypeScript.",
    posted_at: "2025-06-16",
    salary: 14,
    referred_by: "Rahul Jain",
    referer_profile: "https://linkedin.com/in/rahuljain",
  },
];

const JobReferrals = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        <main className="flex-1 bg-gray-50 px-6 py-8">
          <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
            Job Referral Board
          </h1>

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
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default JobReferrals;
