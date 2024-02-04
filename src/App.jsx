import Header from "./components/Header";
import Footer from "./components/Footer";
import CV from "./components/CV";
import Form from "./components/Form";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
    },
    education: [],
    experience: [],
    skills: [], 
  });

  return (
    <div className="App">
      <div className="App">
        <Header />
        <main>
          {/* Pass setFormData as a prop to Form component */}
          <Form formData={formData} setFormData={setFormData} />
          {/* Pass formData as a prop to CV component */}
          <CV formData={formData} setFormData={setFormData} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
