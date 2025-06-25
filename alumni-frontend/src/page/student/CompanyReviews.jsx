import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaBuilding } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

// Sample reviews
const reviews = [
  {
    id: 1,
    title: "Life at Google",
    company_name: "Google",
    work_culture_rating: 5,
    salary_rating: 4,
    growth_rating: 5,
    tips: "Focus on DSA + System Design. Open source helps.",
    comment: "Great leadership and learning culture. Promotions are performance-based.Great leadership and learning culture. Promotions are performance-based.Great leadership and learning culture. Promotions are performance-based.Great leadership and learning culture. Promotions are performance-based.Great leadership and learning culture. Promotions are performance-based.Great leadership and learning culture. Promotions are performance-based.Great leadership and learning culture. Promotions are performance-based.Great leadership and learning culture. Promotions are performance-based.Great leadership and learning culture. Promotions are performance-based",
    posted_at: "2025-06-21",
  },
  {
    id: 2,
    title: "My Experience at Amazon",
    company_name: "Amazon",
    work_culture_rating: 3,
    salary_rating: 5,
    growth_rating: 4,
    tips: "Be ready for ownership and long hours. Know STAR method.",
    comment: "High salary, fast-paced environment, excellent for early-career growth.",
    posted_at: "2025-06-19",
  },
  {
    id: 3,
    title: "Working with Adobe",
    company_name: "Adobe",
    work_culture_rating: 4,
    salary_rating: 3,
    growth_rating: 4,
    tips: "Prepare well for frontend interviews and behavioral questions.",
    comment: "Flexible work hours, helpful teams, and steady growth.",
    posted_at: "2025-06-17",
  },
];

// Render star icons
const renderStars = (count) =>
  Array(5)
    .fill(0)
    .map((_, idx) => (
      <FaStar
        key={idx}
        className={`inline-block text-sm ${
          idx < count ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));

const CompanyReviews = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 p-6 bg-gray-50">
          <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
            🏢 Company Insider Reviews
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-300"
              >
                <h2 className="text-lg font-semibold text-gray-800 mb-1">
                  {review.title}
                </h2>
                <p className="text-sm text-gray-500 mb-2 flex items-center gap-1">
                  <FaBuilding /> {review.company_name}
                </p>

                {/* Ratings */}
                <div className="text-sm text-gray-700 space-y-1 mb-3">
                  <div>
                    Work Culture: {renderStars(review.work_culture_rating)}
                  </div>
                  <div>Salary: {renderStars(review.salary_rating)}</div>
                  <div>Growth: {renderStars(review.growth_rating)}</div>
                </div>

                <p className="text-sm text-gray-700 mb-2">
                  💡 <span className="font-medium">Tips:</span> {review.tips}
                </p>

                <p className="text-sm text-gray-600 mb-3">
                  {review.comment.length > 120
                    ? review.comment.slice(0, 120) + "..."
                    : review.comment}
                </p>

                <p className="text-sm text-gray-500">
                  🗓️ Posted on:{" "}
                  {new Date(review.posted_at).toLocaleDateString("en-IN")}
                </p>

                <Link
                  to={`/api/company-reviews/${review.id}`}
                  className="inline-block mt-3 text-indigo-600 text-sm hover:underline"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default CompanyReviews;
