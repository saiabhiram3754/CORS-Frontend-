import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage'; 
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import EngineeringRoadmap from './pages/EngineeringRoadmap';
import HealthcareRoadmap from './pages/HealthcareRoadmap';
import AllBranchesPage from './pages/AllBranchesPage';
import HealthcareBranchesPage from './pages/HealthcareBranchesPage';
import GovernmentRoadmap from './pages/GovernmentRoadmap';
import GovtRolesPage from './pages/GovtRolesPage';
import FinanceRoadmap from './pages/FinanceRoadmap';
import ArtsDesignRoadmap from './pages/ArtsDesignRoadmap';
import DashboardPage from './pages/DashboardPage';
import LawRoadmap from './pages/LawRoadmap';
import RndRoadmap from './pages/RndRoadmap';
import BusinessAndManagementRoadmap from './pages/BusinessAndManagementRoadmap';
import CareerRecommendation from './components/CareerRecommendation';
import EducationAndTeachingRoadmap from './pages/EducationAndTeachingRoadmap';
import Blog from './pages/Blog';
import PrivateRoute from './components/PrivateRoute';
import AdminDashboard from './pages/AdminDashboard';
import CareersPage from './pages/CarrersPage';
import CoursesPage from './pages/CoursesPage';
import UserPage from './pages/UserPage';
import AboutUs from './pages/AboutUs';



const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/engineering-roadmap" element={<EngineeringRoadmap />} />
      <Route path="/healthcare-roadmap" element={<HealthcareRoadmap />} />
      <Route path="/Govt-roadmap" element={<GovernmentRoadmap />} />
      <Route path="/Edu-roadmap" element={<EducationAndTeachingRoadmap />} />
      <Route path="/Law-roadmap" element={<LawRoadmap/>} />
      <Route path="/rnd-roadmap" element={<RndRoadmap/>} />
      <Route path="/Finance-roadmap" element={<FinanceRoadmap />} />
      <Route path="/arts-roadmap" element={<ArtsDesignRoadmap />} />
      <Route path="/business-roadmap" element={<BusinessAndManagementRoadmap />} />
      <Route path="/branches" element={<AllBranchesPage />} />
      <Route path="/healthcare-branches" element={<HealthcareBranchesPage />} />
      <Route path="/govt-roles" element={<GovtRolesPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/about" element={<AboutUs/>} />
 <Route path="/login" element={<LoginPage />} />
<Route
  path="/recommend"
  element={
    <PrivateRoute>
      <CareerRecommendation />
    </PrivateRoute>
  }
/>

    <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/careers" element={<CareersPage/>} />
      <Route path="/admin/courses" element={<CoursesPage />} />
       <Route path="/admin/users" element={<UserPage/>} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  </Router>
);

export default App;
