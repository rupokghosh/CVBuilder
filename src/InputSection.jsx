function InputSection() {
  return (
    <>
      <div className="personalInfoInput">
        <form action="">
          <fieldset>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" name="FullName" id="fullName" />
          </fieldset>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input type="email" name="Email" id="email" />
          </fieldset>
          <fieldset>
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="Phone" id="phone" />
          </fieldset>
        </form>
      </div>
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
      <div className="skillInput">
        <fieldset>
          <label htmlFor="skill">Skill Name</label>
          <input type="text" name="skill" id="skill" placeholder="Add skill" />
        </fieldset>
      </div>
    </>
  );
}

export default InputSection;
