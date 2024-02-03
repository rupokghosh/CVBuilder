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
        <hr></hr>
        <div className="contact">
          <div>{personalInfo.email}</div>
          <div>{personalInfo.phone}</div>
        </div>
      </div>

      <div className="Education">
        <h2>Education</h2>
        <hr />
        <div className="school">
          <h3>
            <b>{education.schoolName}</b>
          </h3>
          <h4>{education.degreeName}</h4>
        </div>
        <div className="dateAndLocationSchool">
          <div>From - {education.startDate}</div>
          <div>To - {education.endDate}</div>
          <div>
            <i>{education.schoolLocation}</i>
          </div>
        </div>
      </div>

      <div className="Experience">
        <h2>Experience</h2>
        <hr />
        <div className="job">
          <h3>
            <b>{experience.companyName}</b>
          </h3>
          <h4>
            <i>{experience.positionName}</i>
          </h4>
        </div>
        <div className="dateAndLocationJob">
          <div>From - {experience.startDate}</div>
          <div>To - {experience.endDate}</div>
        </div>
      </div>

      <div className="Skills">
        <h2>Skills</h2>
        <hr />
        <div>{skills.skill}</div>
      </div>
      <button onClick={clearCV}>Clear</button>
    </div>
  );
}

export default CV;
