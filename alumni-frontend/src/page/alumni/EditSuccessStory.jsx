import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const EditSuccessStory = () => {
  const { storyid } = useParams();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    posted_at: "",
  });

  // Sample JSON data
  const successStories = [
    {
      id:301,
      title: "My Journey to Google",
      content: "I cracked Google after 6 months of prep...",
      posted_at: "2025-05-10",
      posted_by: "John Doe"
    },
    {
      id: 2,
      title: "From Tier 3 to Amazon",
      content: "It was tough but worth it...",
      posted_at: "2025-04-22",
      posted_by: "Jane Smith"
    }
  ];

  const selectedStory = successStories.find((story) => story.id === parseInt(storyid));

  useEffect(() => {
    if (selectedStory) {
      setFormData({
        title: selectedStory.title || "",
        content: selectedStory.content || "",
        posted_at: new Date(selectedStory.posted_at).toLocaleDateString("en-IN") || "",
      });
    }
  }, [selectedStory]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Edited Success Story:", formData);
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
              Edit Success Story
            </h2>

            {submitted ? (
              <div className="text-green-600 text-center font-semibold">
                Success story edited successfully (check console).
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g., My Journey to Amazon"
                    className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 border-gray-300"
                  />
                </div>

                {/* Content */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Content</label>
                  <textarea
                    name="content"
                    rows="6"
                    value={formData.content}
                    onChange={handleChange}
                    placeholder="Write your story here..."
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
                  Submit Story
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

export default EditSuccessStory;
