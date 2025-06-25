import React, { useState } from "react";

const StudentProfileForm = ({ onSubmit }) => {
  const [studentData, setStudentData] = useState({
    student_id: "", // Auto-link from user context
    batch: "",
    department: "",
  });

  const handleChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student Profile Submitted:", studentData);
    onSubmit(studentData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold text-center text-indigo-700 mb-4">Complete Student Profile</h2>

      <div>
        <label className="block mb-1 font-medium">Batch</label>
        <input
          type="text"
          name="batch"
          value={studentData.batch}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-lg"
          placeholder="e.g. 2022"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Department</label>
        <input
          type="text"
          name="department"
          value={studentData.department}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-lg"
          placeholder="e.g. CSE"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
      >
        Submit
      </button>
    </form>
  );
};

export default StudentProfileForm;
