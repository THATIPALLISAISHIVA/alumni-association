// src/pages/alumni/PostJobReferral.jsx
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";


const PostJobReferral = () => {
  const [formData, setFormData] = useState({
    alumni_id: "alumni123", // Dummy ID
    company: "",
    role: "",
    location: "",
    referral_link: "",
    salary_lpa: "",
    description: "",
    posted_at: new Date().toISOString().split("T")[0],
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Posted Job Referral:", formData);
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        <main className="flex-1 bg-gradient-to-br from-indigo-50 to-purple-100 px-4 py-10 flex items-center justify-center">
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
              Post Job Referral
            </h2>

            {submitted ? (
              <div className="text-green-600 text-center font-semibold">
                Referral posted successfully (check console).
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
                    placeholder="e.g., Google"
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
                    placeholder="e.g., SDE I"
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
                    placeholder="e.g., Hyderabad"
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
                    placeholder="https://referral-link.com"
                    className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 border-gray-300"
                  />
                </div>

                {/* Salary LPA */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Salary (LPA)</label>
                  <input
                    type="number"
                    name="salary_lpa"
                    value={formData.salary_lpa}
                    onChange={handleChange}
                    placeholder="e.g., 12"
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
                    placeholder="Add job details here..."
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
                  Post Referral
                </button>
              </form>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default PostJobReferral;
