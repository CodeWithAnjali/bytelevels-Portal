import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Removed BrowserRouter
import Layout from './components/Layout';
import Login from './components/Login';
import AdminPage from './components/AdminPage';
import JobseekerPage from './components/JobseekerPage';
import Events from './pages/Events';
import Articles from './pages/Articles';
import ResumeBuilder from './pages/ResumeBuilder';
import PlanPage from './pages/PlansPage';
import ManageSubscriptionPage from './pages/ManageSubscriptionPage';
import RenewSubscriptionPage from './pages/RenewSubscriptionPage';
import UsagePage from './pages/UsagePage';
import SearchJobsPage from './pages/SearchJobsPage';
import AdminDashboard from './components/AdminDashboard';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Contact from './pages/Contact';
import About from './pages/AboutUs';
import Loader from './components/Loader';
import ApplyJobs from './pages/ApplyJobs';

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show loader when route changes
    setLoading(true);

    // Simulate loading duration (e.g., for data fetching)
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after a short delay
    }, 1000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [location]);

  return (
    <>
      {loading && <Loader />} 
      <Routes>
        <Route path="/" element={<Layout><Login /></Layout>} />
        <Route path="/admin" element={<Layout><AdminPage /></Layout>} />
        <Route path="/jobseeker" element={<Layout><JobseekerPage /></Layout>} />
        <Route path="/resume-builder" element={<Layout><ResumeBuilder /></Layout>} />
        <Route path="/events" element={<Layout><Events /></Layout>} />
        <Route path="/articles" element={<Layout><Articles /></Layout>} />
        <Route path="/subscription/plans" element={<Layout><PlanPage /></Layout>} />
        <Route path="/subscription/manage" element={<Layout><ManageSubscriptionPage /></Layout>} />
        <Route path="/subscription/renew" element={<Layout><RenewSubscriptionPage /></Layout>} />
        <Route path="/subscription/usage" element={<Layout><UsagePage /></Layout>} />
        <Route path="/search-jobs" element={<Layout><SearchJobsPage /></Layout>} />
        <Route path="/admin-dashboard" element={<Layout><AdminDashboard /></Layout>} />
        <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/Terms-Conditions" element={<Layout><TermsConditions /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />

        <Route path="/apply-jobs" element={<Layout><ApplyJobs/></Layout>} />
      </Routes>
    </>
  );
};

export default App;
