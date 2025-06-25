import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Sample preview data
const alumniProfiles = [
  { id: 1, name: "Kiran Kumar", company: "Google", role: "SDE" },
  { id: 2, name: "Anjali Singh", company: "Amazon", role: "Data Engineer" },
];

const successStories = [
  { id: 1, name: "Rahul Jain", story: "From Tier-3 to Microsoft" },
  { id: 2, name: "Sneha Rao", story: "My journey to Meta" },
];

const reviews = [
  { id: 1, company: "TCS", comment: "Great culture and learning." },
  { id: 2, company: "Infosys", comment: "Good work-life balance." },
];

const interviews = [
  { id: 1, company: "Adobe", role: "Frontend Dev" },
  { id: 2, company: "Salesforce", role: "SDE-1" },
];

const leaderboard = [
  { id: 1, name: "Ravi Teja", score: 98 },
  { id: 2, name: "Megha Shah", score: 93 },
];

const fame = [
  { id: 1, name: "Arjun Reddy", recognition: "VP at Microsoft" },
  { id: 2, name: "Priya Sharma", recognition: "Awarded Forbes 30 under 30" },
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Header Section */}
      <header className="relative w-full">
        <img
          src="https://t4.ftcdn.net/jpg/07/32/41/57/360_F_732415788_dkcOnbApHAzBF4szTtUspkBrbdYs3mOa.jpg"
          alt="Alumni Banner"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Welcome to Our Alumni Network</h1>
        </div>
      </header>

      <main className="flex-1 p-6 md:p-10 space-y-10">
        {/* Register & Login */}
        <div className="text-center">
          <p className="text-lg text-gray-700 font-semibold mb-4">Join or sign in to explore more</p>
          <Link to="/register" className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium mr-4 hover:bg-indigo-700 transition">
            Register
          </Link>
          <Link to="/login" className="bg-white border border-indigo-600 text-indigo-600 px-6 py-2 rounded-lg font-medium hover:bg-indigo-50 transition">
            Login
          </Link>
        </div>

        {/* Preview Sections */}
        <PreviewSection title="View Alumni Profiles" link="/student/alumni-profiles" data={alumniProfiles} renderItem={(item) => (
          <div className="border p-4 rounded-lg bg-white shadow hover:shadow-md">
            <h4 className="font-bold text-indigo-700">{item.name}</h4>
            <p className="text-sm text-gray-600">{item.company} — {item.role}</p>
          </div>
        )} />

        <PreviewSection title="Success Stories" link="/student/success-stories" data={successStories} renderItem={(item) => (
          <div className="border p-4 rounded-lg bg-white shadow hover:shadow-md">
            <h4 className="font-semibold text-indigo-700">{item.name}</h4>
            <p className="text-sm text-gray-600">{item.story}</p>
          </div>
        )} />

        <PreviewSection title="Company Insider Reviews" link="/student/company-reviews" data={reviews} renderItem={(item) => (
          <div className="border p-4 rounded-lg bg-white shadow hover:shadow-md">
            <h4 className="font-semibold text-indigo-700">{item.company}</h4>
            <p className="text-sm text-gray-600">"{item.comment}"</p>
          </div>
        )} />

        <PreviewSection title="Interview Experiences" link="/student/interview-experiences" data={interviews} renderItem={(item) => (
          <div className="border p-4 rounded-lg bg-white shadow hover:shadow-md">
            <h4 className="font-semibold text-indigo-700">{item.company}</h4>
            <p className="text-sm text-gray-600">{item.role}</p>
          </div>
        )} />

        <PreviewSection title="Alumni Leaderboard" link="/leaderboard" data={leaderboard} renderItem={(item) => (
          <div className="border p-4 rounded-lg bg-white shadow hover:shadow-md">
            <h4 className="font-bold text-indigo-700">{item.name}</h4>
            <p className="text-sm text-gray-600">Score: {item.score}</p>
          </div>
        )} />

        <PreviewSection title="College Wall of Fame" link="/fame" data={fame} renderItem={(item) => (
          <div className="border p-4 rounded-lg bg-white shadow hover:shadow-md">
            <h4 className="font-bold text-indigo-700">{item.name}</h4>
            <p className="text-sm text-gray-600">{item.recognition}</p>
          </div>
        )} />
      </main>

      <Footer />
    </div>
  );
};

// Reusable preview block
const PreviewSection = ({ title, link, data, renderItem }) => (
  <section>
    <div className="flex justify-between items-center mb-3">
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      <Link to={link} className="text-indigo-600 hover:underline font-medium">
        View all →
      </Link>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.slice(0, 3).map(renderItem)}
    </div>
  </section>
);

export default Home;
