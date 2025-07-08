import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StudentProfileForm from "./StudentProfileForm";
import AlumniProfileForm from "./AlumniProfileForm";
import { useNavigate } from "react-router-dom"; 

const Register = () => {

const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Student",
  });

  const [errors, setErrors] = useState({});
  const [showProfileForm, setShowProfileForm] = useState(false);

  const validate = () => {
    let err = {};
    if (!formData.name) err.name = "Name is required";
    if (!formData.email) err.email = "Email is required";
    if (!formData.password) err.password = "Password is required";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Registered User:", formData);
      alert("Registration Successful! Now fill your profile details.");
      setShowProfileForm(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProfileSubmit = (profileData) => {
    // console.log("Submitted Profile:", profileData);
    
    // Differentiate data based on userType field
    if (profileData.userType === 'student') {
      // Handle student data - add to student table
      const studentPayload = {
        batch: profileData.batch,
        department: profileData.department,
        student_id: profileData.student_id
      };
      
      console.log("Student Data for Database:", studentPayload);
      // Call your API to add student data to student table
      // addStudentToDatabase(studentPayload);
      
    } else if (profileData.userType === 'alumni') {
      // Handle alumni data - add to alumni table
      const alumniPayload = {
        // Alumni specific data
        company: profileData.company,
        jobrole: profileData.role,
        location: profileData.location,
        batch: profileData.batch,
        linkedin_url: profileData.linkedin_url,
        profile_image_url: profileData.profile_image_url,
        salary_lpa: profileData.salary_lpa,
        alumni_id: profileData.alumni_id
      };
      
      console.log("Alumni Data for Database:", alumniPayload);
      // Call your API to add alumni data to alumni table
      // addAlumniToDatabase(alumniPayload);
    }
    
    alert("Profile submitted successfully (check console).");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200 px-4 py-12">
        {!showProfileForm ? (
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
              Register
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Role</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-white outline-none focus:ring-2"
                >
                  <option value="Student">Student</option>
                  <option value="Alumni">Alumni</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-200"
              >
                Register
              </button>
            </form>
            <p className="text-sm text-center text-gray-600 mt-4">
              Already a user?{" "}
              <Link to="/login" className="text-indigo-600 font-semibold hover:underline">
                Login
              </Link>
            </p>
          </div>
        ) : (
          <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8">
            {formData.role === "Student" ? (
              <StudentProfileForm onSubmit={handleProfileSubmit} />
            ) : (
              <AlumniProfileForm onSubmit={handleProfileSubmit} />
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Register;