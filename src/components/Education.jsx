// Education.jsx
import React, { useState } from "react";

function Education({ setFormData }) {
  const [education, setEducation] = useState({
    schoolName: "",
    degreeName: "",
    schoolLocation: "",
    startDate: "",
    endDate: "",
  });

  const addEducation = () => {
    // Check if all required fields are filled before adding to CV
    if (
      education.schoolName &&
      education.degreeName &&
      education.startDate &&
      education.endDate
    ) {
      setFormData((prevData) => ({
        ...prevData,
        education: [...prevData.education, education],
      }));
      setEducation({
        schoolName: "",
        degreeName: "",
        schoolLocation: "",
        startDate: "",
        endDate: "",
      });
    }
  };

  // all the JSX
  return (
    <div className="educationInput">
      <fieldset>
        <label htmlFor="schoolName">School Name</label>
        <input
          type="text"
          name="schoolName"
          id="schoolName"
          value={education.schoolName}
          onChange={(e) =>
            setEducation({ ...education, schoolName: e.target.value })
          }
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
          onChange={(e) =>
            setEducation({ ...education, degreeName: e.target.value })
          }
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
          onChange={(e) =>
            setEducation({ ...education, schoolLocation: e.target.value })
          }
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
          onChange={(e) =>
            setEducation({ ...education, startDate: e.target.value })
          }
        />
        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          name="endDate"
          id="endDate"
          value={education.endDate}
          onChange={(e) =>
            setEducation({ ...education, endDate: e.target.value })
          }
        />
      </fieldset>
      <button onClick={addEducation}>Add Education</button>
    </div>
  );
}

export default Education;
