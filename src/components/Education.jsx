function Education() {
  return (
    <>
      <div className="educationInput">
        <fieldset>
          <label htmlFor="schoolName">School Name</label>
          <input
            type="text"
            name="schoolName"
            id="schoolName"
            placeholder="Enter school/university"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="degreeName">Degree Name</label>
          <input
            type="text"
            name="degreeName"
            id="degreeName"
            placeholder="Enter degree/certificate"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="schoolLocation">Location</label>
          <input
            type="text"
            name="schoolLocation"
            id="schoolLocation"
            placeholder="Enter Location"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="startDate">Start Date</label>
          <input type="date" name="startDate" id="startDate" />
          <label htmlFor="endDate">End Date</label>
          <input type="date" name="endDate" id="endDate" />
        </fieldset>
      </div>
    </>
  );
}

export default Education;
