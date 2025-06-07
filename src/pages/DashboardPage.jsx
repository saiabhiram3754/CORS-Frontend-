import React, { useEffect, useState } from "react";
import { GraduationCap, ChevronRight } from "lucide-react"; // or any icon package you prefer

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
  // Fallback roadmap if career not found
  "default": [
    { level: "High School", description: "Focus on relevant subjects", duration: "4 years" },
    { level: "Bachelor's Degree", description: "Relevant degree or diploma", duration: "3-4 years" },
    { level: "Internships", description: "Gain practical experience", duration: "6 months - 1 year" },
    { level: "Certifications", description: "Get certifications related to your field", duration: "3-6 months" }
  ]
};

const DashboardPage = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [selectedCareer, setSelectedCareer] = useState(null);

  useEffect(() => {
    const storedRecs = localStorage.getItem("recommendations");
    if (storedRecs) {
      setRecommendations(JSON.parse(storedRecs));
    }
  }, []);

  const handleOpenRoadmap = (careerTitle) => {
    setSelectedCareer(careerTitle);
  };

  const handleCloseRoadmap = () => {
    setSelectedCareer(null);
  };

  const roadmapToShow = selectedCareer ? (educationRoadmaps[selectedCareer] || educationRoadmaps["default"]) : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent">
            🎯 Your Top Career Recommendations
          </h1>
          <p className="mt-2 text-gray-600 text-lg">
            Based on your profile, here are the top 3 careers recommended for you:
          </p>
        </header>

        {recommendations.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No recommendations available. Please complete the form.
          </p>
        ) : (
          <>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {recommendations.slice(0, 3).map((career, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg border-l-8 border-purple-600 p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h2 className="text-2xl font-semibold text-purple-700 mb-2">
                      #{index + 1}: {career.title}
                    </h2>
                    <p className="text-gray-600 mb-1">
                      <strong>Stream:</strong> {career.stream}
                    </p>
                    <p className="text-gray-600 mb-3">
                      <strong>Match Score:</strong> {career.score}
                    </p>
                    <p className="text-gray-700 mb-5">{career.reason}</p>
                  </div>

                  <button
                    onClick={() => handleOpenRoadmap(career.title)}
                    className="mt-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-xl hover:from-purple-700 hover:to-blue-700 transition"
                  >
                    <GraduationCap className="w-5 h-5" />
                    <span>View Education Path</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Modal for Education Roadmap */}
            {selectedCareer && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-3xl max-w-3xl w-full p-8 relative shadow-2xl overflow-y-auto max-h-[80vh]">
                  <button
                    onClick={handleCloseRoadmap}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
                    aria-label="Close Modal"
                  >
                    &times;
                  </button>
                  <h3 className="text-3xl font-bold text-purple-700 mb-6 text-center">
                    🎓 Education Roadmap for {selectedCareer}
                  </h3>

                  <div className="space-y-5">
                    {roadmapToShow.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-5 bg-purple-50 p-4 rounded-2xl border border-purple-200"
                      >
                        <div className="flex-shrink-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold text-lg">
                          {idx + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg text-purple-700 mb-1">{step.level}</h4>
                          <p className="text-gray-700 mb-1">{step.description}</p>
                          <span className="inline-block bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                            Duration: {step.duration}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;


// import React, { useEffect, useState } from "react";
// import { GraduationCap, ChevronRight } from "lucide-react";

// const educationRoadmaps = {
//   // ... your existing education roadmap data ...
// };

// const DashboardPage = () => {
//   const [recommendations, setRecommendations] = useState([]);
//   const [selectedCareer, setSelectedCareer] = useState(null);
//   const [showFeedbackModal, setShowFeedbackModal] = useState(false);
//   const [feedbackCareer, setFeedbackCareer] = useState(null);

//   useEffect(() => {
//     const storedRecs = localStorage.getItem("recommendations");
//     if (storedRecs) {
//       setRecommendations(JSON.parse(storedRecs));
//     }
//   }, []);

//   const handleOpenRoadmap = (careerTitle) => {
//     setSelectedCareer(careerTitle);
//   };

//   const handleCloseRoadmap = () => {
//     setSelectedCareer(null);
//   };

//   const handleOpenFeedback = (career) => {
//     setFeedbackCareer(career);
//     setShowFeedbackModal(true);
//   };

//   const handleCloseFeedback = () => {
//     setShowFeedbackModal(false);
//     setFeedbackCareer(null);
//   };

//   const roadmapToShow = selectedCareer ? (educationRoadmaps[selectedCareer] || educationRoadmaps["default"]) : [];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 px-6 py-10">
//       <div className="max-w-6xl mx-auto">
//         <header className="mb-12 text-center">
//           <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent">
//             🎯 Your Top Career Recommendations
//           </h1>
//           <p className="mt-2 text-gray-600 text-lg">
//             Based on your profile, here are the top 3 careers recommended for you:
//           </p>
//         </header>

//         {recommendations.length === 0 ? (
//           <p className="text-center text-gray-500 text-lg">
//             No recommendations available. Please complete the form.
//           </p>
//         ) : (
//           <>
//             <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//               {recommendations.slice(0, 3).map((career, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-3xl shadow-lg border-l-8 border-purple-600 p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
//                 >
//                   <div>
//                     <h2 className="text-2xl font-semibold text-purple-700 mb-2">
//                       #{index + 1}: {career.title}
//                     </h2>
//                     <p className="text-gray-600 mb-1"><strong>Stream:</strong> {career.stream}</p>
//                     <p className="text-gray-600 mb-3"><strong>Match Score:</strong> {career.score}</p>
//                     <p className="text-gray-700 mb-5">{career.reason}</p>
//                   </div>

//                   <div className="flex flex-col space-y-3">
//                     <button
//                       onClick={() => handleOpenRoadmap(career.title)}
//                       className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-xl hover:from-purple-700 hover:to-blue-700 transition"
//                     >
//                       <GraduationCap className="w-5 h-5" />
//                       <span>View Education Path</span>
//                       <ChevronRight className="w-5 h-5" />
//                     </button>

//                     <button
//                       onClick={() => handleOpenFeedback(career)}
//                       className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-green-400 text-white px-4 py-2 rounded-xl hover:from-green-700 hover:to-green-500 transition"
//                     >
//                       💬 Give Feedback
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Education Roadmap Modal */}
//             {selectedCareer && (
//               <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//                 <div className="bg-white rounded-3xl max-w-3xl w-full p-8 relative shadow-2xl overflow-y-auto max-h-[80vh]">
//                   <button
//                     onClick={handleCloseRoadmap}
//                     className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
//                   >
//                     &times;
//                   </button>
//                   <h3 className="text-3xl font-bold text-purple-700 mb-6 text-center">
//                     🎓 Education Roadmap for {selectedCareer}
//                   </h3>
//                   <div className="space-y-5">
//                     {roadmapToShow.map((step, idx) => (
//                       <div
//                         key={idx}
//                         className="flex items-start space-x-5 bg-purple-50 p-4 rounded-2xl border border-purple-200"
//                       >
//                         <div className="flex-shrink-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold text-lg">
//                           {idx + 1}
//                         </div>
//                         <div>
//                           <h4 className="font-semibold text-lg text-purple-700 mb-1">{step.level}</h4>
//                           <p className="text-gray-700 mb-1">{step.description}</p>
//                           <span className="inline-block bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
//                             Duration: {step.duration}
//                           </span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Feedback Modal */}
//             {showFeedbackModal && (
//               <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
//                 <div className="bg-white max-w-2xl w-full rounded-2xl p-6 relative shadow-2xl overflow-y-auto max-h-[90vh]">
//                   <button
//                     onClick={handleCloseFeedback}
//                     className="absolute top-3 right-4 text-gray-600 hover:text-gray-800 text-2xl font-bold"
//                   >
//                     &times;
//                   </button>
//                   <h2 className="text-xl font-bold text-purple-700 text-center mb-6">
//                     Share your feedback about "{feedbackCareer?.title}" recommendation
//                   </h2>
//                   <form className="space-y-5">
//                     {[
//                       { label: "How satisfied are you?", name: "satisfaction", options: ["Very Unsatisfied", "Unsatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
//                       { label: "How accurate is the recommendation?", name: "accuracy", options: ["Not Accurate", "Somewhat Accurate", "Moderately Accurate", "Very Accurate", "Extremely Accurate"] },
//                       { label: "How helpful was the information?", name: "helpfulness", options: ["Not Helpful", "Slightly Helpful", "Moderately Helpful", "Very Helpful", "Extremely Helpful"] },
//                       { label: "How likely are you to pursue this?", name: "likelihood", options: ["Very Unlikely", "Unlikely", "Maybe", "Likely", "Very Likely"] }
//                     ].map((question, i) => (
//                       <div key={i}>
//                         <p className="font-medium text-gray-800 mb-2">{question.label}</p>
//                         <div className="flex flex-wrap gap-4">
//                           {question.options.map((opt, idx) => (
//                             <label key={idx} className="flex items-center space-x-1">
//                               <input type="radio" name={question.name} value={opt} className="text-purple-600" />
//                               <span className="text-gray-700">{opt}</span>
//                             </label>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                     <textarea placeholder="What could we improve?" className="w-full border rounded-lg p-3 text-gray-700" rows={3} />
//                     <textarea placeholder="Any additional comments?" className="w-full border rounded-lg p-3 text-gray-700" rows={3} />

//                     <div className="flex justify-end gap-3 pt-4">
//                       <button type="button" onClick={handleCloseFeedback} className="px-4 py-2 rounded-xl border border-gray-400 text-gray-600 hover:bg-gray-100">
//                         Maybe Later
//                       </button>
//                       <button type="submit" className="px-5 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700">
//                         Submit Feedback
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;
