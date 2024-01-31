import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Skills from "./Skills";
import { useState } from "react";

function Form({ formData, setFormData }) {
  return (
    <>
      <PersonalInfo setFormData={setFormData} />
      <Education setFormData={setFormData} />
      <Experience setFormData={setFormData} />
      <Skills setFormData={setFormData} />
    </>
  );
}

export default Form;
