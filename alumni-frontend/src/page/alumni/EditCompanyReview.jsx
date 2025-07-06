// src/pages/EditCompanyReview.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

// Sample mock data
const companyReviews = [
  {
    id: "1",
    title: "Amazing Culture at Google",
    company_name: "Google",
    work_culture_rating: 5,
    salary_rating: 4,
    growth_rating: 5,
    tips: "Be confident in interviews and focus on DSA.",
    comment: "Excellent work-life balance, open culture, and plenty of learning.",
    posted_at: "2024-12-10",
  },
  {
    id: "2",
    title: "Challenging Yet Rewarding at Amazon",
    company_name: "Amazon",
    work_culture_rating: 3,
    salary_rating: 5,
    growth_rating: 4,
    tips: "System design questions are crucial.",
    comment: "Intense environment but great growth opportunities.",
    posted_at: "2025-01-22",
  },
];

const EditCompanyReview = () => {
  const { reviewId } = useParams();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company_name: "",
    work_culture_rating: "",
    salary_rating: "",
    growth_rating: "",
    tips: "",
    comment: "",
    posted_at: "",
  });

  useEffect(() => {
    const selectedReview = companyReviews.find((r) => r.id === reviewId);
    if (selectedReview) {
      setFormData({
        company_name: selectedReview.company_name || "",
        work_culture_rating: selectedReview.work_culture_rating || "",
        salary_rating: selectedReview.salary_rating || "",
        growth_rating: selectedReview.growth_rating || "",
        tips: selectedReview.tips || "",
        comment: selectedReview.comment || "",
        posted_at: new Date(selectedReview.posted_at).toLocaleDateString("en-IN") || "",
      });
    }
  }, [reviewId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Edited Company Review:", formData);
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 px-4 py-10">
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
              Edit Company Insider Review
            </h2>

            {submitted ? (
              <div className="text-green-600 text-center font-semibold">
                Review edited successfully (check console).
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
                      {field.replaceAll("_", " ")}
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
                    className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 border-gray-300 resize-none h-32"
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
                    className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 border-gray-300 resize-none h-40"
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

export default EditCompanyReview;
