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
      <div className="educationInput"></div>
      <div className="experienceInput"></div>
      <div className="skillInput"></div>
    </>
  );
}

export default InputSection;
