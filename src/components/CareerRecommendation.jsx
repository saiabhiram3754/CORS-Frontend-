import React, { useState } from 'react';

const requiredSubjects = [
  "Biology", "Chemistry", "Math", "Physics", "Computer Science", "Drawing",
  "Accounts", "Economics", "Business Studies", "History", "Political Science",
  "English", "Psychology", "Art", "Design", "Home Science", "Sociology",
  "Telugu", "Hospitality"
];

const keySkills = [
  "Empathy", "Attention to detail", "Problem-solving", "Logical Thinking", "Statistics",
  "Programming", "Creativity", "Design", "Focus", "Discipline", "Accuracy", "Finance",
  "Analysis", "Research", "Leadership", "Strategy", "Risk-taking", "Innovation",
  "Decision Making", "Writing", "Communication", "Listening", "Trend Awareness",
  "Reasoning", "Debating", "Compassion", "Visual Communication", "Technical Skills",
  "Time Management", "Management", "Analytical Thinking", "Language Skills",
  "Spatial Awareness", "Design Software"
];

const interests = [
  "Health", "Helping People", "Technology", "Building Things", "Data", "AI",
  "Buildings", "Design", "Flying", "Adventure", "Business", "Numbers", "Stock Market",
  "Finance", "Economy", "Analysis", "Management", "Startups", "Innovation",
  "Governance", "Public Service", "News", "Storytelling", "Mind", "Behavior",
  "Fashion", "Law", "Justice", "Healthcare", "Coding", "Art", "Hospitality",
  "Customer Service", "Animation", "Electrical Work", "Hands-on Tasks", "Cooking",
  "Food", "Community Service", "Machines", "Repair Work", "Teaching", "Literature",
  "Decor"
];

const personalityTypes = [
  "Calm", "Caring", "Analytical", "Detail-oriented", "Curious", "Creative",
  "Confident", "Responsible", "Logical", "Leader", "Communicator", "Risk-taker",
  "Disciplined", "Expressive", "Empathetic", "Artistic", "Friendly", "Organized",
  "Patient", "Practical", "Hardworking", "Innovative"
];

const financialLevels = [
  "Govt Education", "Private Institutes", "Scholarship", "Self-funded",
  "Incubators", "Govt Coaching", "Apprenticeship", "Vocational Training",
  "Freelancing"
];

const SelectableGrid = ({ title, options, selected, setSelected, allSelected }) => {
  const toggleSelect = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option));
    } else if (!allSelected.includes(option)) {
      setSelected([...selected, option]);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2 text-center">{title}</h2>
      <p className="text-center text-gray-500 mb-4">Select all that apply</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {options.map((option) => {
          const isDisabled = !selected.includes(option) && allSelected.includes(option);
          return (
            <button
              key={option}
              disabled={isDisabled}
              className={`border rounded-lg px-4 py-2 text-center transition-all duration-150 ${
                selected.includes(option)
                  ? 'bg-purple-500 text-white border-purple-700'
                  : isDisabled
                  ? 'bg-gray-200 text-gray-500 border-gray-300 cursor-not-allowed'
                  : 'bg-white text-black border-gray-300'
              }`}
              onClick={() => toggleSelect(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default function CareerRecommendation() {
  const steps = [
    { title: "What subjects are you good at?", key: "subjects", options: requiredSubjects },
    { title: "Select your key skills", key: "skills", options: keySkills },
    { title: "What are your interests?", key: "interests", options: interests },
    { title: "Select your personality traits", key: "personality", options: personalityTypes },
    { title: "Choose your financial support level", key: "finance", options: financialLevels }
  ];

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState({
    subjects: [],
    skills: [],
    interests: [],
    personality: [],
    finance: []
  });

  const currentStep = steps[currentStepIndex];

  const setSelected = (values) => {
    setFormData({ ...formData, [currentStep.key]: values });
  };

  const allOtherSelected = Object.entries(formData)
    .filter(([key]) => key !== currentStep.key)
    .flatMap(([, values]) => values);

  const goNext = () => {
    if (formData[currentStep.key].length === 0) return;
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      // Submit action
      alert("Form submitted successfully!");
      console.log("Submitted Data:", formData);
    }
  };

  const goBack = () => {
    if (currentStepIndex > 0) setCurrentStepIndex(currentStepIndex - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 flex flex-col items-center justify-start py-10 px-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-6xl">
       <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-t-2xl px-6 py-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl">✨</span>
            <h1 className="text-xl font-bold">Career Recommendation</h1>
          </div>
          <p className="text-sm mt-1">Step {currentStepIndex + 1} of {steps.length}</p>
          <div className="h-1 w-full bg-purple-300 mt-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${((currentStepIndex + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>
        <SelectableGrid
          title={currentStep.title}
          options={currentStep.options}
          selected={formData[currentStep.key]}
          setSelected={setSelected}
          allSelected={allOtherSelected}
        />

        <div className="flex justify-between p-6">
          <button
            onClick={goBack}
            disabled={currentStepIndex === 0}
            className={`px-6 py-2 rounded-lg shadow-md font-semibold transition-all duration-150 ${
              currentStepIndex === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-white text-purple-700 border border-purple-300 hover:bg-purple-100'
            }`}
          >
            Previous
          </button>
          <button
            onClick={goNext}
            disabled={formData[currentStep.key].length === 0}
            className={`px-6 py-2 rounded-lg shadow-md font-semibold transition-all duration-150 ${
              formData[currentStep.key].length === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-500 to-blue-400 text-white hover:opacity-90'
            }`}
          >
            {currentStepIndex === steps.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
