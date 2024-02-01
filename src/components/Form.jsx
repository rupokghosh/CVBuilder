import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Skills from "./Skills";

function Form({ formData, setFormData }) {
  return (
    <div className="form">
      <PersonalInfo setFormData={setFormData} />
      <Education setFormData={setFormData} />
      <Experience setFormData={setFormData} />
      <Skills setFormData={setFormData} />
    </div>
  );
}

export default Form;
