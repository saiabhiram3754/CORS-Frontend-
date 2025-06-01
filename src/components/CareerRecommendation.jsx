import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // for navigation

const requiredSubjects = [
  "Mathematics", "Science", "English", "History", "Geography", "Physics", "Chemistry",
  "Biology", "Computer Science", "Art", "Music", "Physical Education", "Foreign Languages",
  "Economics", "Psychology", "Philosophy"
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

const SelectableGrid = ({ title, options, selected, setSelected }) => {
  const toggleSelect = (option) => {
    setSelected((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {options.map((option) => (
          <button
            key={option}
            className={`border rounded-lg px-4 py-2 text-center transition-all duration-150 ${
              selected.includes(option)
                ? 'bg-purple-500 text-white border-purple-700'
                : 'bg-white text-black border-gray-300'
            }`}
            onClick={() => toggleSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default function CareerRecommendation() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedPersonality, setSelectedPersonality] = useState([]);
  const [selectedFinance, setSelectedFinance] = useState([]);

  const steps = [
    {
      title: "What subjects are you good at?",
      options: requiredSubjects,
      selected: selectedSubjects,
      setSelected: setSelectedSubjects,
    },
    {
      title: "Select your key skills",
      options: keySkills,
      selected: selectedSkills,
      setSelected: setSelectedSkills,
    },
    {
      title: "What are your interests?",
      options: interests,
      selected: selectedInterests,
      setSelected: setSelectedInterests,
    },
    {
      title: "Select your personality traits",
      options: personalityTypes,
      selected: selectedPersonality,
      setSelected: setSelectedPersonality,
    },
    {
      title: "Choose your financial support level",
      options: financialLevels,
      selected: selectedFinance,
      setSelected: setSelectedFinance,
    },
  ];

  const currentStep = steps[step];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      // Final step, handle submit
      console.log("Submitted Data:", {
        selectedSubjects,
        selectedSkills,
        selectedInterests,
        selectedPersonality,
        selectedFinance,
      });
      navigate("/dashboard"); // Go to home page
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-6xl overflow-hidden">
        {/* Header with icon, title and progress */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-t-2xl px-6 py-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl">✨</span>
            <h1 className="text-xl font-bold">Career Recommendation</h1>
          </div>
          <p className="text-sm mt-1">Step {step + 1} of {steps.length}</p>
          <div className="h-1 w-full bg-purple-300 mt-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${((step + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <SelectableGrid
          title={currentStep.title}
          options={currentStep.options}
          selected={currentStep.selected}
          setSelected={currentStep.setSelected}
        />

        {/* Navigation Buttons */}
        <div className="flex justify-between p-6">
          <button
            onClick={handlePrevious}
            disabled={step === 0}
            className={`px-6 py-2 rounded-lg font-semibold ${
              step === 0
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-gray-300 hover:bg-gray-400 text-black'
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-gradient-to-r from-purple-500 to-blue-400 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:opacity-90"
          >
            {step === steps.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
