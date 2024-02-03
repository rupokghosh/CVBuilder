// Education.jsx
import React, { useState, useEffect } from "react";

function Education({ setFormData }) {
  const [education, setEducation] = useState({
    schoolName: "",
    degreeName: "",
    schoolLocation: "",
    startDate: "",
    endDate: "",
  });

  const handleInputChange = (fieldName, value) => {
    setEducation((prevEducation) => ({
      ...prevEducation,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      education,
    }));
  }, [education, setFormData]);

  return (
    <div className="educationInput">
      <fieldset>
        <label htmlFor="schoolName">School Name</label>
        <input
          type="text"
          name="schoolName"
          id="schoolName"
          value={education.schoolName}
          onChange={(e) => handleInputChange("schoolName", e.target.value)}
          placeholder="Enter school/university"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="degreeName">Degree Name</label>
        <input
          type="text"
          name="degreeName"
          id="degreeName"
          value={education.degreeName}
          onChange={(e) => handleInputChange("degreeName", e.target.value)}
          placeholder="Enter degree/certificate"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="schoolLocation">Location</label>
        <input
          type="text"
          name="schoolLocation"
          id="schoolLocation"
          value={education.schoolLocation}
          onChange={(e) => handleInputChange("schoolLocation", e.target.value)}
          placeholder="Enter Location"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          name="startDate"
          id="startDate"
          value={education.startDate}
          onChange={(e) => handleInputChange("startDate", e.target.value)}
        />
        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          name="endDate"
          id="endDate"
          value={education.endDate}
          onChange={(e) => handleInputChange("endDate", e.target.value)}
        />
      </fieldset>
      <button>ADD</button>
    </div>
  );
}

export default Education;
