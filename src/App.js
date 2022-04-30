import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Layout from "./components/Layout";
import Portfolio from "./components/Portfolio";
import Clients from "./components/Clients";
import Skill from "./components/Skill";
import Testimoni from "./components/Testimoni";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Portfolio />
      <Clients />
      <Skill />
      <Testimoni />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;
