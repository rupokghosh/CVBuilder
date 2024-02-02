import { useEffect, useState } from "react";

function Experience({ setFormData }) {
  const [experience, setExperience] = useState({
    companyName: "",
    positionName: "",
    startDate: "",
    endDate: "",
  });

  const handleInputChange = (fieldName, value) => {
    setExperience((prevExperience) => ({
      ...prevExperience,
      [fieldName]: value,
    }));
  };
  useEffect(() => {
    setFormData(
      (prevData) => ({
        ...prevData,
        experience,
      })
      
    );
  }, [experience, setFormData]);
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
            value={experience.companyName}
            onChange={(e) => handleInputChange("companyName", e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="positionName">Position Title</label>
          <input
            type="text"
            name="positionName"
            id="positionName"
            placeholder="Enter position title"
            value={experience.positionName}
            onChange={(e) => handleInputChange("positionName", e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={experience.startDate}
            onChange={(e) => handleInputChange("startDate", e.target.value)}
          />
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            value={experience.endDate}
            onChange={(e) => handleInputChange("endDate", e.target.value)}
          />
        </fieldset>
      </div>
    </>
  );
}

export default Experience;
