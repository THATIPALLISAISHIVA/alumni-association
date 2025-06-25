import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

// Same mock data for now
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

const JobDetails = () => {
  const { id } = useParams();
  const job = jobReferrals.find((job) => job.id === parseInt(id));

  if (!job) {
    return <div className="text-center p-10 text-red-600">Job not found.</div>;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        <main className="flex-1 bg-gray-50 px-6 py-8">
          <div className="bg-white rounded-xl shadow p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{job.company}</h1>
            <p className="text-indigo-600 font-medium mb-1">{job.role}</p>
            <p className="text-sm text-gray-600 mb-1">📍 {job.location}</p>
            <p className="text-sm text-gray-600 mb-1">💸 ₹{job.salary} LPA</p>
            <p className="text-sm text-gray-600 mb-1">
              🗓️ Posted on: {new Date(job.posted_at).toLocaleDateString("en-IN")}
            </p>
            <p className="text-md text-gray-800 my-4">{job.description}</p>
            <p className="text-sm text-gray-600 mb-4">
              Referred by:{" "}
              <a
                href={job.referer_profile}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline font-medium"
              >
                {job.referred_by}
              </a>
            </p>

            <a
              href={job.referral_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition"
            >
              Apply Now
            </a>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default JobDetails;
