// src/pages/EditJobReferral.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";





const EditJobReferral = () => {
  const { jobid } = useParams();
  const navigate = useNavigate();
  const jobId = parseInt(jobid);

  const jobReferrals = [
  {
    id: 101,
    company: "Google",
    role: "Software Engineer",
    location: "Bangalore",
    salary: 30,
    posted_at: "2024-12-20",
    description: "Work on scalable backend systems in Ads division.",
    referral_link: "https://careers.google.com/jobs/101",
    referred_by: "John Doe",
    referer_profile: "https://linkedin.com/in/johndoe"
  }
];

  const selectedJob = jobReferrals.find((job) => job.id === jobId);

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    location: "",
    referral_link: "",
    salary_lpa: "",
    description: "",
    posted_at: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedJob) {
      setFormData({
        company: selectedJob.company || "",
        role: selectedJob.role || "",
        location: selectedJob.location || "",
        referral_link: selectedJob.referral_link || "",
        salary_lpa: selectedJob.salary || "",
        description: selectedJob.description || "",
        posted_at: new Date(selectedJob.posted_at).toLocaleDateString("en-IN") || "",
      });
    }
  }, [selectedJob]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Job Referral:", formData);
    setSubmitted(true);
    setTimeout(() => {
      navigate(`/api/alumni/profile`);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 bg-gradient-to-br from-indigo-50 to-purple-100 px-4 py-10 flex items-center justify-center">
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
              Edit Job Referral
            </h2>

            {submitted ? (
              <div className="text-green-600 text-center font-semibold">
                Edited successfully (check console).
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">Role</label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">Referral Link</label>
                  <input
                    type="url"
                    name="referral_link"
                    value={formData.referral_link}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">Salary (LPA)</label>
                  <input
                    type="number"
                    name="salary_lpa"
                    value={formData.salary_lpa}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">Description</label>
                  <textarea
                    name="description"
                    rows="3"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 border-gray-300 resize-none
                              h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">Posted On</label>
                  <input
                    type="text"
                    name="posted_at"
                    value={formData.posted_at}
                    disabled
                    className="w-full px-4 py-2 border rounded-xl bg-gray-100 text-gray-500 cursor-not-allowed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition"
                >
                  Save Changes
                </button>
              </form>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditJobReferral;
