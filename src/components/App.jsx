import Header from "./Header";
import Footer from "./Footer";
import CV from "./CV";
import Form from "./Form";
import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
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

  return (
    <div className="App">
      <div className="App">
        <Header />
        <main>
          {/* Pass setFormData as a prop to Form component */}
          <Form formData={formData} setFormData={setFormData} />
          {/* Pass formData as a prop to CV component */}
          <CV formData={formData} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
