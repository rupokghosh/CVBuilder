import React, { useState, useEffect } from "react";

function Skills({ setFormData }) {
  const [skills, setSkills] = useState({
    skill: "",
  });

  const handleInputChange = (fieldName, value) => {
    setSkills((prevSkills) => ({
      ...prevSkills,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      skills,
    }));
  }, [skills, setFormData]);
  return (
    <>
      <div className="skillInput">
        <fieldset>
          <label htmlFor="skill">Skill Name</label>
          <input
            type="text"
            name="skill"
            id="skill"
            placeholder="Add skill"
            value={skills.skill}
            onChange={(e) => handleInputChange("skill", e.target.value)}
          />
        </fieldset>
        <button>ADD</button>
      </div>
    </>
  );
}

export default Skills;
