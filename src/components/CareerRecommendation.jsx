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
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedPersonality, setSelectedPersonality] = useState([]);
  const [selectedFinance, setSelectedFinance] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 flex flex-col items-center justify-start py-10 px-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-6xl">
        <div className="border-b-2 border-purple-200 rounded-t-2xl">
          <div className="p-6">
            <h1 className="text-xl font-bold text-purple-800">Career Recommendation</h1>
            <p className="text-sm text-gray-500">Step 1 of 5</p>
            <div className="h-1 w-full bg-purple-100 mt-2 rounded-full">
              <div className="h-full bg-purple-500 rounded-full" style={{ width: '20%' }}></div>
            </div>
          </div>
        </div>
        <SelectableGrid
          title="What subjects are you good at?"
          options={requiredSubjects}
          selected={selectedSubjects}
          setSelected={setSelectedSubjects}
        />
        <SelectableGrid
          title="Select your key skills"
          options={keySkills}
          selected={selectedSkills}
          setSelected={setSelectedSkills}
        />
        <SelectableGrid
          title="What are your interests?"
          options={interests}
          selected={selectedInterests}
          setSelected={setSelectedInterests}
        />
        <SelectableGrid
          title="Select your personality traits"
          options={personalityTypes}
          selected={selectedPersonality}
          setSelected={setSelectedPersonality}
        />
        <SelectableGrid
          title="Choose your financial support level"
          options={financialLevels}
          selected={selectedFinance}
          setSelected={setSelectedFinance}
        />
        <div className="flex justify-end p-6">
          <button className="bg-gradient-to-r from-purple-500 to-blue-400 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:opacity-90">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}