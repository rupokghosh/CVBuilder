import { useEffect, useState } from "react";

function Experience({ setFormData }) {
  const [education, setEducation] = useState({
    schoolName: "",
    degreeName: "",
    schoolLocation: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    setFormData(
      (prevData) => ({
        ...prevData,
        education,
      }),
      [education, setFormData]
    );
  });
  return (
    <>
      <div className="experienceInput">
        <fieldset>
          <label htmlFor="companyName">Company</label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            placeholder="Enter company"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="positionName">Position Title</label>
          <input
            type="text"
            name="positionName"
            id="positionName"
            placeholder="Enter position title"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="startDate">Start Date</label>
          <input type="date" name="startDate" id="startDate" />
          <label htmlFor="endDate">End Date</label>
          <input type="date" name="endDate" id="endDate" />
        </fieldset>
      </div>
      ;
    </>
  );
}

export default Experience;
