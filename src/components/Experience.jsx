// Experience.jsx
import React, { useState } from "react";

function Experience({ setFormData }) {
  const [experience, setExperience] = useState({
    companyName: "",
    positionName: "",
    startDate: "",
    endDate: "",
  });

  const addExperience = () => {
    // Check if all required fields are filled before adding to CV
    if (
      experience.companyName &&
      experience.positionName &&
      experience.startDate &&
      experience.endDate
    ) {
      setFormData((prevData) => ({
        ...prevData,
        experience: [...prevData.experience, experience],
      }));
      setExperience({
        companyName: "",
        positionName: "",
        startDate: "",
        endDate: "",
      });
    }
  };

  return (
    <div className="experienceInput">
      <fieldset>
        <label htmlFor="companyName">Company</label>
        <input
          type="text"
          name="companyName"
          id="companyName"
          value={experience.companyName}
          onChange={(e) =>
            setExperience({ ...experience, companyName: e.target.value })
          }
          placeholder="Enter company"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="positionName">Position Title</label>
        <input
          type="text"
          name="positionName"
          id="positionName"
          value={experience.positionName}
          onChange={(e) =>
            setExperience({ ...experience, positionName: e.target.value })
          }
          placeholder="Enter position title"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          name="startDate"
          id="startDate"
          value={experience.startDate}
          onChange={(e) =>
            setExperience({ ...experience, startDate: e.target.value })
          }
        />
        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          name="endDate"
          id="endDate"
          value={experience.endDate}
          onChange={(e) =>
            setExperience({ ...experience, endDate: e.target.value })
          }
        />
      </fieldset>
      <button onClick={addExperience}>Add Experience</button>
    </div>
  );
}

export default Experience;
