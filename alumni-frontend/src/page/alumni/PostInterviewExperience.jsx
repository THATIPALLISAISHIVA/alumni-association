// src/pages/alumni/PostInterviewExperience.jsx
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import AlumniSidebar from "../../components/AlumniSidebar";
import Footer from "../../components/Footer";

const PostInterviewExperience = () => {
  const [formData, setFormData] = useState({
    alumni_id: "alumni123", // Dummy ID, will be replaced by actual user ID later
    company: "",
    role: "",
    location: "",
    content: "",
    tags: "",
    posted_at: new Date().toISOString().split("T")[0],
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Interview Experience Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <AlumniSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 px-4 py-10">
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
              Post Interview Experience
            </h2>

            {submitted ? (
              <div className="text-green-600 text-center font-semibold">
                Interview experience posted successfully (check console).
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Company */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g., Amazon"
                    className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 border-gray-300"
                  />
                </div>

                {/* Role */}
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

                {/* Location */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g., Bangalore"
                    className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 border-gray-300"
                  />
                </div>

                {/* Content */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Experience Content</label>
                  <textarea
                    name="content"
                    rows="5"
                    value={formData.content}
                    onChange={handleChange}
                    placeholder="Share your experience, rounds, questions etc."
                    className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 border-gray-300 resize-none
                              h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64"
                  />
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Tags <span className="text-sm text-gray-500">(comma separated)</span>
                  </label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    placeholder="e.g., DSA, HR Round, System Design"
                    className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 border-gray-300"
                  />
                </div>

                {/* Posted At */}
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
                  Submit Experience
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

export default PostInterviewExperience;
