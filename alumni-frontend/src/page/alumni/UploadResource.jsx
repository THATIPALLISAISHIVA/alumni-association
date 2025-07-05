// src/pages/alumni/UploadResource.jsx
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const UploadResource = () => {
  const [formData, setFormData] = useState({
    alumni_id: "alumni123", // Dummy ID
    title: "",
    description: "",
    drive_link: "",
    category: "Coding",
    posted_at: new Date().toISOString().split("T")[0],
  });

  const [submitted, setSubmitted] = useState(false);

  const categories = ["Coding", "Aptitude", "Interview Prep", "Resume", "Misc"];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Resource Uploaded:", formData);
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
              Upload Resource
            </h2>

            {submitted ? (
              <div className="text-green-600 text-center font-semibold">
                Resource uploaded successfully (check console).
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
                    placeholder="e.g., Google DSA Sheet"
                    className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 border-gray-300"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Description</label>
                  <textarea
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Add any notes or context about the resource"
                    className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 border-gray-300 resize-none
                              h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64"
                  />
                </div>

                {/* Drive Link */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Drive Link</label>
                  <input
                    type="url"
                    name="drive_link"
                    value={formData.drive_link}
                    onChange={handleChange}
                    placeholder="https://drive.google.com/..."
                    className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 border-gray-300"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-white outline-none focus:ring-2"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
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
                  Upload Resource
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

export default UploadResource;
