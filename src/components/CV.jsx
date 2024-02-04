// CV.jsx
import React from "react";

function CV({ formData, setFormData }) {
  const { personalInfo, education, experience, skills } = formData;

  const clearCV = () => {
    setFormData({
      personalInfo: {
        fullName: "",
        email: "",
        phone: "",
      },
      education: [],
      experience: [],
      skills: [],
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
        {education.map((edu, index) => (
          <div key={index}>
            <div className="school">
              <h3>
                <b>{edu.schoolName}</b>
              </h3>
              <h4>{edu.degreeName}</h4>
            </div>
            <div className="dateAndLocationSchool">
              <div>From - {edu.startDate}</div>
              <div>To - {edu.endDate}</div>
              <div>
                <i>{edu.schoolLocation}</i>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="Experience">
        <h2>Experience</h2>
        <hr />
        {experience.map((exp, index) => (
          <div key={index}>
            <div className="job">
              <h3>
                <b>{exp.companyName}</b>
              </h3>
              <h4>
                <i>{exp.positionName}</i>
              </h4>
            </div>
            <div className="dateAndLocationJob">
              <div>From - {exp.startDate}</div>
              <div>To - {exp.endDate}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="Skills">
        <h2>Skills</h2>
        <hr />
        {skills.map((skill, index) => (
          <div key={index}>{skill}</div>
        ))}
      </div>
      <button onClick={clearCV}>Clear</button>
    </div>
  );
}

export default CV;
