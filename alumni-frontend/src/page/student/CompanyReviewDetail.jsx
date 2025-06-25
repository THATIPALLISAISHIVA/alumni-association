import React from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaBuilding } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

// Sample reviews (same dataset reused)
const reviews = [
  {
    id: 1,
    title: "Life at Google",
    company_name: "Google",
    work_culture_rating: 5,
    salary_rating: 4,
    growth_rating: 5,
    tips: "Focus on DSA + System Design. Open source helps.",
    comment: "Great leadership and learning culture. Promotions are performance-based.Great leadership and learning culture. Promotions are performance-based.Great leadership and learning culture. Promotions are performance-based.Great leadership and learning culture. Promotions are performance-based.Great leadership and learning culture. Promotions are performance-based.Great leadership and learning culture. Promotions are performance-based.Great leadership and learning culture. Promotions are performance-based.Great leadership and learning culture. Promotions are performance-based.Great leadership and learning culture. Promotions are performance-based.",
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

const CompanyReviewDetail = () => {
  const { id } = useParams();
  const review = reviews.find((r) => r.id === parseInt(id));

  if (!review) return <div className="text-center mt-10">Review not found.</div>;

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 p-6 bg-gray-50">
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {review.title}
            </h1>
            <p className="text-sm text-gray-500 mb-3 flex items-center gap-1">
              <FaBuilding /> {review.company_name}
            </p>

            <div className="text-sm text-gray-700 space-y-1 mb-4">
              <div>Work Culture: {renderStars(review.work_culture_rating)}</div>
              <div>Salary: {renderStars(review.salary_rating)}</div>
              <div>Growth: {renderStars(review.growth_rating)}</div>
            </div>

            <p className="text-sm text-gray-700 mb-4">
              💡 <span className="font-semibold">Tips:</span> {review.tips}
            </p>

            <p className="text-gray-800 text-sm leading-relaxed whitespace-pre-line mb-4">
              {review.comment}
            </p>

            <p className="text-sm text-gray-500">
              🗓️ Posted on:{" "}
              {new Date(review.posted_at).toLocaleDateString("en-IN")}
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default CompanyReviewDetail;
