import React from "react";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import NavMenu from "./components/navMenu/NavMenu";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <NavMenu />
      <About />
      <Experience />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
