// Skills.jsx
import React, { useState, useEffect } from "react";

function Skills({ setFormData }) {
  const [skill, setSkill] = useState("");

  const addSkill = () => {
    // Check if the skill is not an empty string before adding to CV
    if (skill.trim() !== "") {
      setFormData((prevData) => ({
        ...prevData,
        skills: [...prevData.skills, skill],
      }));
      setSkill("");
    }
  };

  return (
    <div className="skillInput">
      <fieldset>
        <label htmlFor="skill">Skill Name</label>
        <input
          type="text"
          name="skill"
          id="skill"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          placeholder="Add skill"
        />
      </fieldset>
      <button onClick={addSkill}>Add Skill</button>
    </div>
  );
}

export default Skills;
