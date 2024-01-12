function CV() {
  return (
    <>
      <div className="PersonalInfo">
        <h2>{fullName}</h2>
        <div className="contact">
          <div>{email}</div>
          <div>{phone}</div>
          <div>{address}</div>
        </div>
      </div>
      <div className="Education">
        <h2>Education</h2>
        <div className="dateAndLocationSchool">
            <div>{date}</div>
            <div>{schoolLocation}</div>
        </div>
        <div className="school">
            <div>{schoolName}</div>
            <div>{degreeName}</div>
        </div>
      </div>
      <div className="Experience">
        <h2>Experience</h2>
        <div className="dateAndLocationJob">
            <div>{dateJob}</div>
            <div>{jobLocation}</div>
        </div>
        <div className="job">
            <div>{companyName}</div>
            <div>{positionName}</div>
            <div>{positionDescription}</div>
        </div>
      </div>
      <div className="Skills">
        <h2>Skills</h2>
        <div>{skill}</div>
      </div>
    </>
  );
}

export default CV;
