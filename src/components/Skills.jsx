// Skills.jsx
import React, { useState } from "react";

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
  // all the jsx
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
        <button className="inputButton" onClick={addSkill}>
          Add Skill
        </button>
      </fieldset>
    </div>
  );
}

export default Skills;
