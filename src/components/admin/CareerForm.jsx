import React, { useState, useEffect } from "react";

const MultiInputField = ({ label, values, setValues }) => {
  const handleChange = (index, value) => {
    const newList = [...values];
    newList[index] = value;
    setValues(newList);
  };

  const handleAdd = () => setValues([...values, ""]);
  const handleRemove = (index) => setValues(values.filter((_, i) => i !== index));

  return (
    <div className="mb-4">
      <label className="block mb-1 font-semibold">{label}</label>
      {values.map((value, index) => (
        <div key={index} className="flex mb-1">
          <input
            type="text"
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 mr-2"
            placeholder={`Enter ${label.toLowerCase()}`}
          />
          <button type="button" onClick={() => handleRemove(index)} className="text-red-500 font-bold">
            ×
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAdd} className="text-blue-600 text-sm mt-1">
        + Add {label}
      </button>
    </div>
  );
};

const CareerForm = ({ onSubmit, initialData = null, onCancel }) => {
  const [title, setTitle] = useState("");
  const [stream, setStream] = useState("");
  const [requiredSubjects, setRequiredSubjects] = useState([""]);
  const [keySkills, setKeySkills] = useState([""]);
  const [interests, setInterests] = useState([""]);
  const [personalityTypes, setPersonalityTypes] = useState([""]);
  const [financialLevels, setFinancialLevels] = useState([""]);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setStream(initialData.stream || "");
      setRequiredSubjects(initialData.requiredSubjects || [""]);
      setKeySkills(initialData.keySkills || [""]);
      setInterests(initialData.interests || [""]);
      setPersonalityTypes(initialData.personalityTypes || [""]);
      setFinancialLevels(initialData.financialLevels || [""]);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !stream.trim()) {
      return alert("Title and Stream are required");
    }

    const payload = {
      id: initialData?.id,
      title,
      stream,
      requiredSubjects,
      keySkills,
      interests,
      personalityTypes,
      financialLevels,
    };

    onSubmit(payload);

    // Reset if creating new
    if (!initialData) {
      setTitle("");
      setStream("");
      setRequiredSubjects([""]);
      setKeySkills([""]);
      setInterests([""]);
      setPersonalityTypes([""]);
      setFinancialLevels([""]);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {initialData ? "Update Career" : "Add Career"}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Career title"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Stream</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={stream}
            onChange={(e) => setStream(e.target.value)}
            placeholder="Stream (e.g., Science, Commerce)"
          />
        </div>

        <MultiInputField label="Required Subjects" values={requiredSubjects} setValues={setRequiredSubjects} />
        <MultiInputField label="Key Skills" values={keySkills} setValues={setKeySkills} />
        <MultiInputField label="Interests" values={interests} setValues={setInterests} />
        <MultiInputField label="Personality Types" values={personalityTypes} setValues={setPersonalityTypes} />
        <MultiInputField label="Financial Levels" values={financialLevels} setValues={setFinancialLevels} />

        <div className="flex justify-end mt-6">
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 mr-3">
            {initialData ? "Update" : "Add"}
          </button>
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CareerForm;
