// src/pages/EditAlumniProfile.jsx
import React, { useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";

const dummyAlumniData = [
  {
    id: 1,
    name: "John Doe",
    profile_image_url: "https://via.placeholder.com/150",
    role: "Software Engineer",
    company: "Google",
    location: "Hyderabad",
    batch: "2020",
    linkedin_url: "https://linkedin.com/in/johndoe",
    salary_lpa: 18,
  },
];

const EditAlumniProfile = () => {
  const { id } = useParams();
  const alumniId = parseInt(id);
  const navigate = useNavigate();

  const existingData = dummyAlumniData.find((a) => a.id === alumniId);

  const [formData, setFormData] = useState({ ...existingData });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Alumni Data:", formData);
    navigate("/api/alumni/edit-profile");
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        <main className="flex-1 bg-gray-50 p-6 flex items-center justify-center">
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
              Edit Profile
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 mb-1 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-xl"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1 font-medium">Profile Image URL</label>
                <input
                  type="text"
                  name="profile_image_url"
                  value={formData.profile_image_url}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-xl"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1 font-medium">Role</label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1 font-medium">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1 font-medium">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1 font-medium">Batch</label>
                  <input
                    type="text"
                    name="batch"
                    value={formData.batch}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1 font-medium">Salary (LPA)</label>
                  <input
                    type="number"
                    name="salary_lpa"
                    value={formData.salary_lpa}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1 font-medium">LinkedIn URL</label>
                  <input
                    type="url"
                    name="linkedin_url"
                    value={formData.linkedin_url}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-xl"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition"
              >
                Save Changes
              </button>
            </form>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default EditAlumniProfile;
