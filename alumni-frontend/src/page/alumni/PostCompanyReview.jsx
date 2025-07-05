// src/pages/alumni/PostCompanyReview.jsx
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const PostCompanyReview = () => {
  const [formData, setFormData] = useState({
    alumni_id: "alumni123", // Replace with logged-in user's ID later
    company_name: "",
    work_culture_rating: "",
    salary_rating: "",
    growth_rating: "",
    tips: "",
    comment: "",
    posted_at: new Date().toISOString().split("T")[0],
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Company Review Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 px-4 py-10">
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
              Post Company Insider Review
            </h2>

            {submitted ? (
              <div className="text-green-600 text-center font-semibold">
                Review submitted successfully (check console).
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Company Name */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Company Name</label>
                  <input
                    type="text"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                    placeholder="e.g., Adobe"
                    className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 border-gray-300"
                  />
                </div>

                {/* Ratings */}
                {["work_culture_rating", "salary_rating", "growth_rating"].map((field) => (
                  <div key={field}>
                    <label className="block text-gray-700 font-medium mb-1 capitalize">
                      {field.replace("_", " ").replace("_", " ")}
                    </label>
                    <select
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 border-gray-300 bg-white"
                    >
                      <option value="">Select rating (1–5)</option>
                      {[1, 2, 3, 4, 5].map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                ))}

                {/* Tips */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Tips</label>
                  <textarea
                    name="tips"
                    rows="2"
                    value={formData.tips}
                    onChange={handleChange}
                    placeholder="Tips for future applicants..."
                    className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 border-gray-300 resize-none
                              h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64"
                  />
                </div>

                {/* Comment */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Comment</label>
                  <textarea
                    name="comment"
                    rows="4"
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="Add your detailed review..."
                    className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 border-gray-300 resize-none
                              h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64"
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
                  Submit Review
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

export default PostCompanyReview;
