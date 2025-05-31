import React, { useState } from 'react';
import {
  TrendingUp, MapPin, DollarSign, Clock, Users, BookOpen,
  Target, Award, ChevronRight, Star, GraduationCap
} from 'lucide-react';
import EducationRoadmapModal from './EducationRoadmapModal';

const StudentDashboard = ({ recommendations, userProfile }) => {
  const [selectedCareerForEducation, setSelectedCareerForEducation] = useState(null);
  const topThreeRecommendations = recommendations.slice(0, 3);
  const topRecommendation = recommendations[0];

  const educationRoadmaps = {
    "Software Engineer": [
      { level: "High School", description: "Focus on Mathematics, Computer Science, and Physics", duration: "4 years" },
      { level: "Bachelor's Degree", description: "Computer Science, Software Engineering, or related field", duration: "4 years" },
      { level: "Internships", description: "Gain practical experience through coding bootcamps or internships", duration: "6 months - 1 year" },
      { level: "Certifications", description: "AWS, Google Cloud, or specific programming certifications", duration: "3-6 months" }
    ],
    "Data Scientist": [
      { level: "High School", description: "Strong foundation in Mathematics, Statistics, and Computer Science", duration: "4 years" },
      { level: "Bachelor's Degree", description: "Statistics, Mathematics, Computer Science, or Data Science", duration: "4 years" },
      { level: "Master's Degree", description: "Data Science, Machine Learning, or related field (Optional but recommended)", duration: "2 years" },
      { level: "Practical Experience", description: "Work on real datasets, Kaggle competitions, personal projects", duration: "1-2 years" }
    ],
    "UX/UI Designer": [
      { level: "High School", description: "Focus on Art, Design, Psychology, and Computer Science", duration: "4 years" },
      { level: "Bachelor's Degree", description: "Graphic Design, HCI, Psychology, or related field", duration: "4 years" },
      { level: "Portfolio Development", description: "Build strong portfolio with real projects and case studies", duration: "1 year" },
      { level: "Design Tools", description: "Master Figma, Adobe Creative Suite, Sketch, and prototyping tools", duration: "6 months" }
    ],
    "Product Manager": [
      { level: "High School", description: "Focus on Business, Mathematics, and Communication", duration: "4 years" },
      { level: "Bachelor's Degree", description: "Business, Engineering, Computer Science, or related field", duration: "4 years" },
      { level: "Work Experience", description: "Gain experience in marketing, development, or business analysis", duration: "2-3 years" },
      { level: "MBA (Optional)", description: "Master of Business Administration for advanced roles", duration: "2 years" }
    ]
  };

  const handleEducationClick = (careerTitle) => {
    setSelectedCareerForEducation(careerTitle);
  };

  const handleCloseEducationModal = () => {
    setSelectedCareerForEducation(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-xl">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  CORS
                </h1>
                <p className="text-sm text-gray-600">Your Path to Success</p>
              </div>
            </div>
            <div className="space-x-10 hidden md:flex">
              <a href="#courses" className="text-gray-700 hover:text-blue-600 font-medium">Courses</a>
              <a href="#career" className="text-gray-700 hover:text-blue-600 font-medium">Career Options</a>
              <a href="#exams" className="text-gray-700 hover:text-blue-600 font-medium">Competitive Exams</a>
              <a href="/login" className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-lg">Login</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="p-4 lg:p-8 max-w-7xl mx-auto space-y-6">
        {/* Dashboard Header */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Your Career Dashboard
              </h1>
              <p className="text-gray-600 mt-2">Top 3 personalized career recommendations based on your profile</p>
            </div>
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-2xl">
              <Award className="h-8 w-8 text-purple-600" />
            </div>
          </div>

          {/* Profile Summary */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Strong Subjects */}
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-2xl">
              <BookOpen className="h-6 w-6 text-purple-600 mb-2" />
              <h3 className="font-semibold text-gray-800 mb-2">Strong Subjects</h3>
              <div className="flex flex-wrap gap-2">
                {userProfile.subjects.slice(0, 3).map((subject, i) => (
                  <span key={i} className="bg-purple-200 text-purple-800 px-2 py-1 rounded-lg text-xs">{subject}</span>
                ))}
                {userProfile.subjects.length > 3 && (
                  <span className="text-purple-600 text-xs">+{userProfile.subjects.length - 3} more</span>
                )}
              </div>
            </div>

            {/* Key Skills */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-2xl">
              <Target className="h-6 w-6 text-blue-600 mb-2" />
              <h3 className="font-semibold text-gray-800 mb-2">Key Skills</h3>
              <div className="flex flex-wrap gap-2">
                {userProfile.skills.slice(0, 3).map((skill, i) => (
                  <span key={i} className="bg-blue-200 text-blue-800 px-2 py-1 rounded-lg text-xs">{skill}</span>
                ))}
                {userProfile.skills.length > 3 && (
                  <span className="text-blue-600 text-xs">+{userProfile.skills.length - 3} more</span>
                )}
              </div>
            </div>

            {/* Top Interests */}
            <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-4 rounded-2xl">
              <Star className="h-6 w-6 text-indigo-600 mb-2" />
              <h3 className="font-semibold text-gray-800 mb-2">Top Interests</h3>
              <div className="flex flex-wrap gap-2">
                {userProfile.interests.slice(0, 3).map((interest, i) => (
                  <span key={i} className="bg-indigo-200 text-indigo-800 px-2 py-1 rounded-lg text-xs">{interest}</span>
                ))}
                {userProfile.interests.length > 3 && (
                  <span className="text-indigo-600 text-xs">+{userProfile.interests.length - 3} more</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Top Career Match */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">🎯 Your Best Career Match</h2>
            <div className="bg-white/20 px-3 py-1 rounded-full">
              <span className="text-sm font-semibold">{topRecommendation?.match ?? 0}% Match</span>
            </div>
          </div>
          {/* Match Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">{topRecommendation?.title}</h3>
              <p className="text-white/90 mb-4">{topRecommendation?.description}</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4" />
                  <span className="text-sm">{topRecommendation?.salary}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">{topRecommendation?.growth} growth</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{topRecommendation?.location}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Required Skills</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {(topRecommendation?.skills || []).map((skill, i) => (
                  <span key={i} className="bg-white/20 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
              <h4 className="font-semibold mb-3">Top Companies</h4>
              <div className="space-y-1">
                {(topRecommendation?.companies || []).slice(0, 3).map((company, i) => (
                  <div key={i} className="text-sm text-white/90">• {company}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Top 3 Recommendations */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-white/20">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Top 3 Career Matches</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {topThreeRecommendations.map((career, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-r from-purple-100 to-blue-100 px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-purple-700">#{i + 1} • {career.match}% Match</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{career.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{career.description}</p>
                <div className="grid grid-cols-1 gap-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">{career.salary}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-gray-700">{career.growth}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4 text-purple-600" />
                    <span className="text-sm text-gray-700">{career.education}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Required Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {(career.skills || []).slice(0, 3).map((skill, si) => (
                      <span key={si} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs">{skill}</span>
                    ))}
                    {(career.skills?.length || 0) > 3 && (
                      <span className="text-gray-500 text-xs">+{career.skills.length - 3} more</span>
                    )}
                  </div>
                </div>
                <button onClick={() => handleEducationClick(career.title)} className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>View Education Path</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Education Roadmap */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-white/20">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">🎓 Education Roadmap for {topRecommendation.title}</h2>
          <div className="space-y-4">
            {educationRoadmaps[topRecommendation.title]?.map((step, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{step.level}</h3>
                  <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Duration: {step.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Steps */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-white/20">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl">
              <BookOpen className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">Start Skill Development</h3>
              <p className="text-gray-600 text-sm mb-4">Begin developing key skills for your top career matches through online courses and practice</p>
              <button className="text-green-600 font-semibold text-sm hover:text-green-700 transition-colors">View Courses →</button>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-6 rounded-2xl">
              <Target className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">Gain Practical Experience</h3>
              <p className="text-gray-600 text-sm mb-4">Start building your portfolio with real projects, internships, and hands-on experience</p>
              <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">Find Opportunities →</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <EducationRoadmapModal
        isOpen={selectedCareerForEducation !== null}
        onClose={handleCloseEducationModal}
        careerTitle={selectedCareerForEducation || ''}
      />
    </div>
  );
};

export default StudentDashboard;
