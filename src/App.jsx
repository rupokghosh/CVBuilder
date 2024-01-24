import Header from "./Header";
import Footer from "./Footer";
import CV from "./CV";
import Form from "./components/Form";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Form></Form>
        <CV></CV>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
