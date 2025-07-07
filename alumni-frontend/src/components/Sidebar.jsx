// src/components/Sidebar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const role = "student"; // use actual role from backend/auth here (e.g., 'student' or 'alumni')

  const studentLinks = [
    { label: "View Alumni Profiles", path: "/api/alumni-profiles" },
    { label: "Job Referral Board", path: "/api/referrals" },
    { label: "Interview Experiences", path: "/api/interview-experiences" },
    { label: "Success Stories", path: "/api/success-stories" },
    { label: "Resource Bank", path: "/api/resources" },
    { label: "Company Inside Reviews", path: "/api/company-reviews" },
  ];

  const alumniLinks = [
    { label: "Home", path: "/api/alumni/dashboard" },
    { label: "Manage Profile (Edit Profile)", path: "/api/alumni/edit-profile" },
    { label: "Post Job Referral Form", path: "/api/alumni/post-referral" },
    { label: "Post Interview Experience Form", path: "/api/alumni/post-interview" },
    { label: "Upload Resources Form", path: "/api/alumni/upload-resource" },
    { label: "Post Success Story Form", path: "/api/alumni/post-success" },
    { label: "Post Company Insider Review", path: "/api/alumni/post-company-review" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const menuItems =
    role === "alumni"
      ? [...alumniLinks, ...studentLinks]
      : [{ label: "Home", path: "/api/dashboard" }, ...studentLinks];

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-indigo-700 text-white rounded-lg shadow-lg hover:bg-indigo-600 transition-colors"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        />
      )}

      <div
        className={`
          bg-indigo-700 text-white w-64 min-h-screen p-6
          fixed md:relative top-0 left-0 z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          overflow-y-auto
        `}
      >
        <button
          onClick={closeSidebar}
          className="md:hidden absolute top-4 right-4 p-2 text-white hover:text-gray-300 transition-colors"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-8 text-center mt-8 md:mt-0">Student Panel</h2>

        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={closeSidebar}
                className="block p-4 rounded-lg border border-indigo-500 bg-indigo-600/30 
                         hover:bg-indigo-500 hover:border-indigo-300 hover:shadow-lg
                         hover:scale-105 transition-all duration-200 ease-in-out
                         text-sm font-medium text-center"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
