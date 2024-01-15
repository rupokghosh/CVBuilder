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
        <fieldsets>
            <label htmlFor="schoolName">School Name</label>
            <input type="text" name="schoolName" id="schoolName" placeholder="Enter school/university" />
        </fieldsets>
        <fieldsets>
            <label htmlFor="degreeName">Degree Name</label>
            <input type="text" name="degreeName" id="degreeName" placeholder="Enter degree/certificate" />
        </fieldsets>
        <fieldsets>
            <label htmlFor="schoolLocation">Location</label>
            <input type="text" name="schoolLocation" id="schoolLocation" placeholder="Enter Location" />
        </fieldsets>
        <fieldsets>
            <label htmlFor="startDate">Start Date</label>
            <input type="date" name="startDate" id="startDate" />
            <label htmlFor="endDate">End Date</label>
            <input type="date" name="endDate" id="endDate" />
        </fieldsets>
      </div>
      <div className="experienceInput"></div>
      <div className="skillInput"></div>
    </>
  );
}

export default InputSection;
