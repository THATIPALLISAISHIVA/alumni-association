import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation

// Sample alumni data
const alumniData = [
  {
    id: 1,
    name: "Kiran Reddy",
    company: "Google",
    role: "SDE II",
    location: "Hyderabad",
    batch: "2018",
    linkedin_url: "https://linkedin.com/in/kiranreddy",
    profile_image_url: "https://randomuser.me/api/portraits/men/75.jpg",
    salary_lpa: 35,
  },
  {
    id: 2,
    name: "Megha Sharma",
    company: "Amazon",
    role: "Data Engineer",
    location: "Bangalore",
    batch: "2019",
    linkedin_url: "https://linkedin.com/in/meghasharma",
    profile_image_url: "https://randomuser.me/api/portraits/women/65.jpg",
    salary_lpa: 28,
  },
  {
    id: 3,
    name: "Rahul Jain",
    company: "Adobe",
    role: "Frontend Developer",
    location: "Noida",
    batch: "2017",
    linkedin_url: "https://linkedin.com/in/rahuljain",
    profile_image_url: "https://randomuser.me/api/portraits/men/32.jpg",
    salary_lpa: 24,
  },
];

const ViewAlumniProfiles = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        <div className="flex-1 bg-gray-50 px-6 py-8">
          <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
            Alumni Profiles
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumniData.map((alumnus) => (
              <Link
                to={`/api/alumni/${alumnus.id}`} // ✅ Navigate to alumni detail page
                key={alumnus.id}
                className="bg-white rounded-xl shadow hover:shadow-lg p-5 transition duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={alumnus.profile_image_url}
                    alt={alumnus.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {alumnus.name}
                    </h2>
                    <p className="text-sm text-gray-500">{alumnus.batch} Batch</p>
                  </div>
                </div>
                <div className="text-sm text-gray-700 space-y-1 mb-3">
                  <p><span className="font-medium">Company:</span> {alumnus.company}</p>
                  <p><span className="font-medium">Role:</span> {alumnus.role}</p>
                  <p><span className="font-medium">Location:</span> {alumnus.location}</p>
                  <p><span className="font-medium">Salary:</span> ₹{alumnus.salary_lpa} LPA</p>
                </div>
                <a
                  href={alumnus.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-indigo-600 font-semibold hover:underline text-sm"
                >
                  View LinkedIn Profile →
                </a>
              </Link>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ViewAlumniProfiles;
