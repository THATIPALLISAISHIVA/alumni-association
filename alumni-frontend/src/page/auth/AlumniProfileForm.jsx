import React, { useState } from "react";

const AlumniProfileForm = ({ onSubmit }) => {
  const [alumniData, setAlumniData] = useState({
    alumni_id: "", // Auto-link from user context
    company: "",
    role: "",
    location: "",
    batch: "",
    linkedin_url: "",
    profile_image_url: "",
    salary_lpa: "",
  });

  const handleChange = (e) => {
    setAlumniData({ ...alumniData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Alumni Profile Submitted:", alumniData);
    onSubmit(alumniData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold text-center text-indigo-700 mb-4">Complete Alumni Profile</h2>

      <input type="text" name="company" placeholder="Company" value={alumniData.company} onChange={handleChange} className="w-full border px-4 py-2 rounded-lg" />
      <input type="text" name="role" placeholder="Role" value={alumniData.role} onChange={handleChange} className="w-full border px-4 py-2 rounded-lg" />
      <input type="text" name="location" placeholder="Location" value={alumniData.location} onChange={handleChange} className="w-full border px-4 py-2 rounded-lg" />
      <input type="text" name="batch" placeholder="Batch" value={alumniData.batch} onChange={handleChange} className="w-full border px-4 py-2 rounded-lg" />
      <input type="url" name="linkedin_url" placeholder="LinkedIn URL" value={alumniData.linkedin_url} onChange={handleChange} className="w-full border px-4 py-2 rounded-lg" />
      <input type="url" name="profile_image_url" placeholder="Profile Image URL" value={alumniData.profile_image_url} onChange={handleChange} className="w-full border px-4 py-2 rounded-lg" />
      <input type="number" name="salary_lpa" placeholder="Salary (LPA)" value={alumniData.salary_lpa} onChange={handleChange} className="w-full border px-4 py-2 rounded-lg" />

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
      >
        Submit
      </button>
    </form>
  );
};

export default AlumniProfileForm;
