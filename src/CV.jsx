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
        <div className="dateAndLocation">
            <div>{date}</div>
            <div>{schoolLocation}</div>
        </div>
        <div className="school">
            <div>{schoolName}</div>
            <div>{degreeName}</div>
        </div>
      </div>
      <div className="Experience"></div>
      <div className="Skills"></div>
    </>
  );
}

export default CV;
