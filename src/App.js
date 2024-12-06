import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Keypoint from "./components/Keypoint";
import Voices from "./components/Voices";
import Join from "./components/Join";
import Question from "./components/Question";
import Updates from "./components/Updates";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Keypoint />
        <Voices />
        <Question />
        <Join />
        <Updates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
