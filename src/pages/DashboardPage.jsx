import React from 'react';
import NewStudentDashboard from '../components/StudentDashboard';

const DashboardPage = () => {
  const mockUserProfile = {
    subjects: ['Mathematics', 'Computer Science', 'Physics', 'English'],
    skills: ['Problem Solving', 'Coding', 'Critical Thinking', 'Teamwork'],
    interests: ['AI', 'Web Development', 'Gaming', 'Design']
  };

  const mockRecommendations = [
    {
      title: "Software Engineer",
      description: "Develop software solutions by studying information needs and conferring with users.",
      growth: "High",
      location: "Global",
      averageSalary: "$100,000",
      workLifeBalance: "Good",
      educationRequired: "Bachelor's in CS or related field",
      competition: "Moderate"
    },
    {
      title: "Data Scientist",
      description: "Analyze complex data to help organizations make better decisions.",
      growth: "Very High",
      location: "Global",
      averageSalary: "$110,000",
      workLifeBalance: "Fair",
      educationRequired: "Bachelor's/Master's in Data Science",
      competition: "High"
    },
    {
      title: "UX/UI Designer",
      description: "Design intuitive interfaces and experiences for users.",
      growth: "Moderate",
      location: "Urban Centers",
      averageSalary: "$80,000",
      workLifeBalance: "Excellent",
      educationRequired: "Design or HCI Degree",
      competition: "Moderate"
    }
  ];

  return (
    <div className="pt-8">
      <NewStudentDashboard
        userProfile={mockUserProfile}
        recommendations={mockRecommendations}
      />
    </div>
  );
};

export default DashboardPage;
