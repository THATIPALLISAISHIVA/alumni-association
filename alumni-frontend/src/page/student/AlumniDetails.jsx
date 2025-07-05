import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import { FaGoogleDrive, FaBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";


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

const interviewExperiences = [
  {
    id: 1,
    company: "Google",
    role: "SDE Intern",
    location: "Hyderabad",
    content:
      "The interview consisted of 3 rounds. First was DSA, then system design, and finally behavioral. Focused on problem-solving and clarity.",
    tags: ["DSA", "Behavioral", "System Design"],
    posted_at: "2025-06-18",
    posted_by: "Kiran Reddy",
  },
  {
    id: 2,
    company: "Amazon",
    role: "Data Engineer",
    location: "Bangalore",
    content:
      "2 technical rounds with coding and SQL questions. One managerial round. Prepare well on projects and resume-based questions.",
    tags: ["SQL", "Resume", "Projects"],
    posted_at: "2025-06-17",
    posted_by: "Megha Sharma",
  },
  {
    id: 3,
    company: "Adobe",
    role: "Frontend Developer",
    location: "Noida",
    content:
      "They asked about React lifecycle, API integration, and a take-home assignment to build a responsive UI.",
    tags: ["React", "UI", "APIs"],
    posted_at: "2025-06-15",
    posted_by: "Rahul Jain",
  },
];
const successStories = [
  {
    id: 1,
    title: "From Tier-3 College to Google",
    content:
      "I started my journey in a small town with limited resources, but consistent DSA practice and open-source contributions helped me crack Google SDE internship... I started my journey in a small town with limited resources, but consistent DSA practice and open-source contributions helped me crack Google SDE internship...I started my journey in a small town with limited resources, but consistent DSA practice and open-source contributions helped me crack Google SDE internship...I started my journey in a small town with limited resources, but consistent DSA practice and open-source contributions helped me crack Google SDE internship... "
      ,
    posted_by: "Kiran Reddy",
    posted_at: "2025-06-20",
  },
  {
    id: 2,
    title: "How I Got Into Amazon as a Fresher",
    content:
      "Amazon’s hiring process tested both technical and behavioral skills. Here's how I prepared with mock interviews, resume revisions, and LeetCode grind...",
    posted_by: "Megha Sharma",
    posted_at: "2025-06-18",
  },
  {
    id: 3,
    title: "Working Abroad – My Journey to Microsoft Dublin",
    content:
      "After two years in India, I transitioned to Microsoft Dublin through an internal transfer. Here's how I built visibility within the company and handled the interview process...",
    posted_by: "Rahul Jain",
    posted_at: "2025-06-16",
  },
];

const resources = [
  {
    id: 1,
    title: "Top 100 DSA Questions",
    description: "PDF covering the most important coding questions asked in interviews.",
    drive_link: "https://drive.google.com/sample1",
    category: "Coding",
    posted_at: "2025-06-18",
  },
  {
    id: 2,
    title: "Aptitude Crash Course Notes",
    description: "Handwritten notes with tricks and formulas for aptitude tests.",
    drive_link: "https://drive.google.com/sample2",
    category: "Aptitude",
    posted_at: "2025-06-17",
  },
  {
    id: 3,
    title: "Behavioral Questions Guide",
    description: "Common HR questions and how to answer them with examples.",
    drive_link: "https://drive.google.com/sample3",
    category: "Interview Prep",
    posted_at: "2025-06-15",
  },
];

const companyReviews = [
  {
    id: 1,
    title: "Life at Google",
    company_name: "Google",
    work_culture_rating: 5,
    salary_rating: 4,
    growth_rating: 5,
    tips: "Focus on DSA + System Design. Open source helps.",
    comment: "Great leadership and learning culture.",
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

const categoryColors = {
  Coding: "bg-green-100 text-green-700",
  Aptitude: "bg-yellow-100 text-yellow-700",
  Resume: "bg-blue-100 text-blue-700  ",
};

const renderStars = (count) => {
  return [...Array(5)].map((_, idx) => (
    <FaStar
      key={idx}
      className={`inline-block text-sm ${
        idx < count ? "text-yellow-400" : "text-gray-300"
      }`}
    />
  ));
};

const AlumniDetails = () => {
  const { id } = useParams();
  const alumniId = parseInt(id);
  const alumni = alumniData.find((a) => a.id === alumniId);

  const jobs = jobReferrals.filter((j) => j.id === alumniId);
  const interviews = interviewExperiences.filter((i) => i.id === alumniId);
  const stories = successStories.filter((s) => s.id === alumniId);
  const alumniResources = resources.filter((r) => r.id === alumniId);
  const reviews = companyReviews.filter((r) => r.id === alumniId);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />

        <main className="flex-1 p-6 bg-gray-50">
          <h1 className="text-3xl font-bold text-indigo-700 mb-4 text-center">
            {alumni.name}'s Contributions
          </h1>

          {/* Job Referrals */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Job Referral Board</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((referral) => (
                <div key={referral.id} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-1">{referral.company}</h2>
                    <p className="text-indigo-600 font-medium mb-1">{referral.role}</p>
                    <p className="text-sm text-gray-500 mb-1">📍 {referral.location}</p>
                    <p className="text-sm text-gray-500 mb-1">💸 ₹{referral.salary} LPA</p>
                    <p className="text-sm text-gray-500 mb-1">🗓️ Posted on: {new Date(referral.posted_at).toLocaleDateString("en-IN")}</p>
                    <p className="text-sm text-gray-500 mb-2 truncate">🧾 {referral.description}</p>
                    <p className="text-sm text-gray-600">
                      Referred by: <a href={referral.referer_profile} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-medium">{referral.referred_by}</a>
                    </p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <a href={referral.referral_link} target="_blank" rel="noopener noreferrer" className="text-sm text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Apply</a>
                    <Link to={`/api/job/${referral.id}`} className="text-sm text-indigo-600 px-4 py-2 rounded-lg border border-indigo-600 hover:bg-indigo-100 transition">Read More</Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Interview Experiences */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Interview Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interviews.map((exp) => (
                <div key={exp.id} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-1">{exp.company}</h2>
                    <p className="text-indigo-600 font-medium">{exp.role}</p>
                    <p className="text-sm text-gray-500 mb-1">📍 {exp.location}</p>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">{exp.content}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">#{tag}</span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4">🗓️ {new Date(exp.posted_at).toLocaleDateString("en-IN")}</p>
                    <p className="text-sm text-gray-600">Posted by: <span className="font-medium">{exp.posted_by}</span></p>
                  </div>
                  <Link to={`/api/interview/${exp.id}`} className="mt-4 text-sm text-indigo-600 hover:underline font-medium">Read More →</Link>
                </div>
              ))}
            </div>
          </section>

          {/* Success Stories */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stories.map((story) => (
                <div key={story.id} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-300">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{story.title}</h2>
                  <p className="text-sm text-gray-700 mb-3">{story.content.length > 150 ? story.content.slice(0, 150) + "..." : story.content}</p>
                  <p className="text-sm text-gray-500 mt-2">🗓️ {new Date(story.posted_at).toLocaleDateString("en-IN")}</p>
                  <p className="text-sm text-gray-600">Posted by: <span className="font-medium text-gray-800">{story.posted_by}</span></p>
                  <Link to={`/api/success-stories/${story.id}`} className="inline-block mt-4 text-indigo-600 font-medium hover:underline text-sm">Read More →</Link>
                </div>
              ))}
            </div>
          </section>

          {/* Resources */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Resource Bank</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {alumniResources.map((res) => (
                <div key={res.id} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{res.title}</h2>
                    <p className="text-sm text-gray-600 mb-3">{res.description}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${categoryColors[res.category] || "bg-gray-100 text-gray-700"}`}>{res.category}</span>
                    <p className="text-sm text-gray-500 mt-3">🗓️ Posted on: {new Date(res.posted_at).toLocaleDateString("en-IN")}</p>
                  </div>
                  <a href={res.drive_link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition">
                    <FaGoogleDrive className="text-white text-lg" /> View Resource
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Company Reviews */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Company Insider Reviews</h2>
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
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default AlumniDetails;
