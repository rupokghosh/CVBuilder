import React, { useState, useEffect } from "react";

function PersonalInfo({ setFormData }) {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (fieldName, value) => {
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      personalInfo,
    }));
  }, [personalInfo, setFormData]);
  return (
    <>
      <div className="personalInfoInput">
        <form action="">
          <fieldset>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="FullName"
              id="fullName"
              value={personalInfo.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="Email"
              id="email"
              value={personalInfo.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="Phone"
              id="phone"
              value={personalInfo.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default PersonalInfo;
