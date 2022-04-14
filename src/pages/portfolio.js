import React from "react";
import Layout from "../components/layout";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Work from "../components/Work/Work";
import Contact from "../components/Contact/Contact";

const PortfolioPage = () => (
  <Layout>
    <Hero />
    <About />
    <Skills />
    <Work />
    <Contact />
  </Layout>
)

export default PortfolioPage;