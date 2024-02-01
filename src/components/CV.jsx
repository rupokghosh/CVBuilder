function CV({ formData, setFormData }) {
  const { personalInfo, education, experience, skills } = formData;

  const clearCV = () => {
    setFormData({
      personalInfo: {
        fullName: "",
        email: "",
        phone: "",
      },
      education: {
        schoolName: "",
        degreeName: "",
        schoolLocation: "",
        startDate: "",
        endDate: "",
      },
      experience: {
        companyName: "",
        positionName: "",
        startDate: "",
        endDate: "",
      },
      skills: {
        skill: "",
      },
    });
  };

  return (
    <div className="CV">
      <div className="PersonalInfo">
        <h2>{personalInfo.fullName}</h2>
        <div className="contact">
          <div>{personalInfo.email}</div>
          <div>{personalInfo.phone}</div>
        </div>
      </div>
      <div className="Education">
        <h2>Education</h2>
        <div className="dateAndLocationSchool">
          <div>{education.date}</div>
          <div>{education.schoolLocation}</div>
        </div>
        <div className="school">
          <div>{education.schoolName}</div>
          <div>{education.degreeName}</div>
        </div>
      </div>
      <div className="Experience">
        <h2>Experience</h2>
        <div className="dateAndLocationJob">
          <div>{experience.startDate}</div>
          <div>{experience.endDate}</div>
        </div>
        <div className="job">
          <div>{experience.companyName}</div>
          <div>{experience.positionName}</div>
        </div>
      </div>
      <div className="Skills">
        <h2>Skills</h2>
        <div>{skills.skill}</div>
      </div>
      <button onClick={clearCV}>Clear</button>
    </div>
  );
}

export default CV;
