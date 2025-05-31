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

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/engineering-roadmap" element={<EngineeringRoadmap />} />
      <Route path="/healthcare-roadmap" element={<HealthcareRoadmap />} />
      <Route path="/Govt-roadmap" element={<GovernmentRoadmap />} />
      <Route path="/Law-roadmap" element={<LawRoadmap/>} />
      <Route path="/rnd-roadmap" element={<RndRoadmap/>} />
      <Route path="/Finance-roadmap" element={<FinanceRoadmap />} />
      <Route path="/arts-roadmap" element={<ArtsDesignRoadmap />} />
      <Route path="/business-roadmap" element={<BusinessAndManagementRoadmap />} />
      <Route path="/branches" element={<AllBranchesPage />} />
      <Route path="/healthcare-branches" element={<HealthcareBranchesPage />} />
      <Route path="/govt-roles" element={<GovtRolesPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/recommend" element={<CareerRecommendation />} />
      
    </Routes>
  </Router>
);

export default App;
