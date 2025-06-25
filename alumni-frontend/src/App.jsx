import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

//student imports
import Register from "./page/auth/Register";
import Login from "./page/auth/Login";
import StudentDashboard from "./page/student/StudentDashboard";
import Home from "./page/auth/Home";
import ViewAlumniProfiles from "./page/student/ViewAlumniProfiles";
import JobReferrals from "./page/student/JobReferrals";
import JobDetails from "./page/student/JobDetails"
import InterviewExperiences from "./page/student/InterviewExperiences";
import SuccessStories from "./page/student/SuccessStories";
import SuccessStoryDetail from "./page/student/SuccessStoryDetail";
import ResourceBank from "./page/student/ResourceBank";
import CompanyReviews from "./page/student/CompanyReviews";
import CompanyReviewDetail from "./page/student/CompanyReviewDetail";
import InterviewDetails from "./page/student/InterviewDetails";
import AlumniDetails from "./page/student/AlumniDetails";

//alumni imports
import PostJobReferral from "./page/alumni/PostJobReferral";
import PostInterviewExperience from "./page/alumni/PostInterviewExperience";
import UploadResource from "./page/alumni/UploadResource";
import PostSuccessStory from "./page/alumni/PostSuccessStory";
import PostCompanyReview from "./page/alumni/PostCompanyReview";
import AlumniProfile from "./page/alumni/AlumniProfile";
import EditAlumniProfile from "./page/alumni/EditAlumniProfile";





function App() {
  

  return (
    <>
      <Router>
      <Routes>


        <Route path="/" element={<Home />} />

        {/* Auth Routes */}
        <Route path="/register" element={<Register />} />
        {/* TODO: Add more routes as you build more pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/api/dashboard" element={<StudentDashboard />} />
        <Route path="/api/alumni-profiles" element={<ViewAlumniProfiles />} />
        <Route path="/api/alumni/:id" element={<AlumniDetails  />} />
        <Route path="/api/referrals" element={<JobReferrals />} />
        <Route path="/api/interview-experiences" element={<InterviewExperiences />} />
        <Route path="/api/success-stories" element={<SuccessStories />} />
        <Route path="/api/success-stories/:id" element={<SuccessStoryDetail />} />
        <Route path="/api/resources" element={<ResourceBank />} />
        <Route path="/api/company-reviews" element={<CompanyReviews />} />
        <Route path="/api/company-reviews/:id" element={<CompanyReviewDetail />} />
        <Route path="/api/job/:id" element={<JobDetails />} />
        <Route path="/api/interview/:id" element={<InterviewDetails />} />

        {/* alumni routes */}

        <Route path="/api/alumni/post-referral" element={<PostJobReferral />} />
        <Route path="/api/alumni/post-interview" element={<PostInterviewExperience />} />
        <Route path="/api/alumni/upload-resource" element={<UploadResource/>} />
        <Route path="/api/alumni/post-success" element={<PostSuccessStory/>} />
        <Route path="/api/alumni/post-company-review" element={<PostCompanyReview/>} />
        <Route path="/api/alumni/edit-profile" element={<AlumniProfile/>} />
        <Route path="api/alumni/edit-alumni-data/:id" element={<EditAlumniProfile />} />


        
      </Routes>
    </Router>
    </>
  )
}

export default App
