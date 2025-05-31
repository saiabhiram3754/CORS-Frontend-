import React, { useState } from 'react';
import { X, GraduationCap, Clock, CheckCircle, ArrowRight, BookOpen } from 'lucide-react';

const EducationRoadmapModal = ({ isOpen, onClose, careerTitle }) => {
  const [selectedPath, setSelectedPath] = useState(null);

  const educationPaths = {
    "Software Engineer": [
      {
        id: "traditional",
        name: "Traditional Degree Path",
        duration: "4-6 years",
        description: "Complete formal education through university",
        steps: [
          { level: "Class 12th", duration: "2 years", description: "Science stream with Mathematics, Physics, Computer Science" },
          { level: "Bachelor's Degree", duration: "4 years", description: "B.Tech/B.E in Computer Science or Software Engineering", requirements: ["JEE Main/Advanced", "State CET exams"] },
          { level: "Internships", duration: "6 months", description: "Gain practical experience through industry internships" },
          { level: "Master's (Optional)", duration: "2 years", description: "M.Tech in Computer Science for specialization" }
        ]
      },
      {
        id: "polytechnic",
        name: "Polytechnic + Degree Path",
        duration: "6-7 years",
        description: "Start with polytechnic then lateral entry to degree",
        steps: [
          { level: "Class 10th", duration: "Completed", description: "Complete secondary education" },
          { level: "Polytechnic Diploma", duration: "3 years", description: "Diploma in Computer Science Engineering" },
          { level: "B.Tech (Lateral Entry)", duration: "3 years", description: "Direct admission to 2nd year of B.Tech", requirements: ["Polytechnic with 60%+ marks"] },
          { level: "Industry Certifications", duration: "6 months", description: "AWS, Google Cloud, or programming certifications" }
        ]
      },
      {
        id: "bootcamp",
        name: "Fast-Track Bootcamp Path",
        duration: "1-2 years",
        description: "Intensive coding bootcamp route",
        steps: [
          { level: "Class 12th", duration: "Completed", description: "Any stream (preferably with basic computer knowledge)" },
          { level: "Coding Bootcamp", duration: "6-12 months", description: "Intensive programming bootcamp", requirements: ["Basic computer skills", "Logical thinking"] },
          { level: "Portfolio Building", duration: "3-6 months", description: "Build real-world projects and GitHub portfolio" },
          { level: "Industry Certifications", duration: "3-6 months", description: "Obtain relevant technology certifications" }
        ]
      }
    ],
    "Data Scientist": [
      {
        id: "traditional",
        name: "Traditional Academic Path",
        duration: "6-8 years",
        description: "Complete formal education with strong mathematical foundation",
        steps: [
          { level: "Class 12th", duration: "2 years", description: "Science stream with Mathematics, Statistics, Computer Science" },
          { level: "Bachelor's Degree", duration: "4 years", description: "B.Sc/B.Tech in Mathematics, Statistics, Computer Science", requirements: ["Strong mathematical aptitude"] },
          { level: "Master's Degree", duration: "2 years", description: "M.Sc in Data Science, Statistics, or Machine Learning" },
          { level: "Practical Projects", duration: "1 year", description: "Work on real datasets and Kaggle competitions" }
        ]
      },
      {
        id: "engineering",
        name: "Engineering Background Path",
        duration: "5-6 years",
        description: "Leverage engineering degree for data science transition",
        steps: [
          { level: "B.Tech/B.E", duration: "4 years", description: "Any engineering discipline (preferably CS/IT/Electronics)" },
          { level: "Data Science Certification", duration: "6-12 months", description: "Professional data science certification programs" },
          { level: "Programming Skills", duration: "6 months", description: "Master Python, R, SQL for data analysis" },
          { level: "Specialization", duration: "6 months", description: "Choose domain like ML, AI, or Business Analytics" }
        ]
      }
    ],
    "UX/UI Designer": [
      {
        id: "design",
        name: "Design Degree Path",
        duration: "4-5 years",
        description: "Formal design education route",
        steps: [
          { level: "Class 12th", duration: "2 years", description: "Any stream (Arts preferred for creative foundation)" },
          { level: "Bachelor's in Design", duration: "4 years", description: "B.Des in UI/UX, Visual Communication, or Interaction Design" },
          { level: "Portfolio Development", duration: "6 months", description: "Build strong portfolio with real projects" },
          { level: "Industry Tools", duration: "3 months", description: "Master Figma, Adobe XD, Sketch, Prototyping tools" }
        ]
      },
      {
        id: "alternative",
        name: "Alternative Qualification Path",
        duration: "2-3 years",
        description: "Non-design background with specialized training",
        steps: [
          { level: "Any Bachelor's Degree", duration: "3-4 years", description: "Psychology, Computer Science, or any discipline" },
          { level: "UX/UI Certification", duration: "6-12 months", description: "Professional UX/UI design certification course" },
          { level: "Design Portfolio", duration: "6 months", description: "Create comprehensive design portfolio" },
          { level: "Internship/Freelance", duration: "6 months", description: "Gain practical experience through projects" }
        ]
      }
    ],
    "Product Manager": [
      {
        id: "business",
        name: "Business Management Path",
        duration: "6-8 years",
        description: "Traditional business education route",
        steps: [
          { level: "Class 12th", duration: "2 years", description: "Any stream (Commerce/Science preferred)" },
          { level: "Bachelor's Degree", duration: "3-4 years", description: "BBA, B.Com, or Engineering degree" },
          { level: "Work Experience", duration: "2-3 years", description: "Gain experience in marketing, development, or business analysis" },
          { level: "MBA (Optional)", duration: "2 years", description: "Master of Business Administration for advanced roles" }
        ]
      },
      {
        id: "technical",
        name: "Technical Background Path",
        duration: "4-6 years",
        description: "Leverage technical skills for product management",
        steps: [
          { level: "Engineering Degree", duration: "4 years", description: "B.Tech in any engineering discipline" },
          { level: "Industry Experience", duration: "2-3 years", description: "Work as developer/analyst to understand technology" },
          { level: "Product Management Course", duration: "3-6 months", description: "Specialized product management certification" },
          { level: "Business Skills", duration: "6 months", description: "Develop business acumen and market analysis skills" }
        ]
      }
    ]
  };

  const careerPaths = educationPaths[careerTitle] || [];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-2 rounded-xl">
                <GraduationCap className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Education Roadmap</h2>
                <p className="text-gray-600">Choose your path to become a {careerTitle}</p>
              </div>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {!selectedPath ? (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Choose Your Educational Path</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {careerPaths.map((path) => (
                  <div
                    key={path.id}
                    className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                    onClick={() => setSelectedPath(path.id)}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                        <BookOpen className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{path.name}</h4>
                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>{path.duration}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{path.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-purple-600 font-medium">{path.steps.length} steps</span>
                      <ArrowRight className="h-4 w-4 text-purple-600" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <button
                onClick={() => setSelectedPath(null)}
                className="text-purple-600 hover:text-purple-700 font-medium mb-6 flex items-center space-x-2"
              >
                <span>← Back to path selection</span>
              </button>

              {(() => {
                const selectedPathData = careerPaths.find(p => p.id === selectedPath);
                if (!selectedPathData) return null;

                return (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{selectedPathData.name}</h3>
                      <p className="text-gray-600">{selectedPathData.description}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Clock className="h-4 w-4 text-purple-600" />
                        <span className="text-sm text-purple-600 font-medium">Total Duration: {selectedPathData.duration}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {selectedPathData.steps.map((step, index) => (
                        <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-100">
                          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-800">{step.level}</h4>
                              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">{step.duration}</span>
                            </div>
                            <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                            {step.requirements && (
                              <div className="mt-2">
                                <p className="text-xs font-medium text-gray-700 mb-1">Requirements:</p>
                                <div className="flex flex-wrap gap-1">
                                  {step.requirements.map((req, reqIndex) => (
                                    <span key={reqIndex} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{req}</span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <h4 className="font-semibold text-green-800">Success Tips</h4>
                      </div>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Stay updated with industry trends and technologies</li>
                        <li>• Build a strong portfolio with real projects</li>
                        <li>• Network with professionals in your field</li>
                        <li>• Consider internships and practical experience</li>
                      </ul>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationRoadmapModal;