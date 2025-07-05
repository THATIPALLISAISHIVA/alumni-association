import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const EditInterviewExperience = () => {
  const { interviewid } = useParams();
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    location: "",
    content: "",
    tags: "",
    posted_at: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const interviewExperiences = [
    {
      id: 201,
      company: "Amazon",
      role: "SDE I",
      location: "Hyderabad",
      content: "There were 4 rounds: OA, Technical, Managerial, and HR.",
      tags: ["DSA", "System Design", "Behavioral"],
      posted_at: "2024-12-05",
      posted_by: "John Alumni"
    },
    {
      id: 202,
      company: "Flipkart",
      role: "Backend Engineer",
      location: "Bangalore",
      content: "Focus was on REST APIs, Java, and Spring Boot.",
      tags: ["Java", "Spring Boot", "SQL"],
      posted_at: "2024-11-22",
      posted_by: "Jane Alumni"
    }
  ];

  const selectedInterview = interviewExperiences.find(
    (exp) => exp.id === parseInt(interviewid)
  );

  useEffect(() => {
    if (selectedInterview) {
      setFormData({
        company: selectedInterview.company || "",
        role: selectedInterview.role || "",
        location: selectedInterview.location || "",
        content: selectedInterview.content || "",
        tags: selectedInterview.tags.join(", ") || "",
        posted_at:
          new Date(selectedInterview.posted_at).toLocaleDateString("en-IN") || ""
      });
    }
  }, [selectedInterview]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = {
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim())
    };
    console.log("Updated Interview Experience:", updated);
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
              Edit Interview Experience
            </h2>
            {submitted ? (
              <div className="text-green-600 text-center font-semibold">
                Interview experience updated successfully (check console).
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
                  <label className="block text-gray-700 font-medium mb-1">Experience Content</label>
                  <textarea
                    name="content"
                    rows="5"
                    value={formData.content}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 border-gray-300 resize-none h-48"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Tags <span className="text-sm text-gray-500">(comma separated)</span>
                  </label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 border-gray-300"
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
                  Update Experience
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

export default EditInterviewExperience;
