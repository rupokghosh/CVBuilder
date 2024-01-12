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
      <div className="Skills"></div>
    </>
  );
}

export default CV;
