import React from "react";
import Layout from "../components/layout";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import ContentLeft from "../components/ContentLeft";

const PortfolioPage = () => (
  <Layout>
    <Hero />
    <About />
    <ContentLeft>
      <p>Some text.</p>
    </ContentLeft>
  </Layout>
)

export default PortfolioPage;