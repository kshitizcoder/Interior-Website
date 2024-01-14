import React from "react";
import Hero from "./components/Hero";
import Plan from "./components/Plan";
import Creative from "./components/Creative";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
import News from "./components/News";
import NewLetter from "./components/NewLetter";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Plan />
      <Creative />
      <AboutUs />
      <Projects />
      <News />
      <NewLetter />
      <Footer />
    </>
  );
};

export default App;
