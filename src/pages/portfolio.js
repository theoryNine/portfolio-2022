import React from "react";
import Layout from "../components/layout";
import Hero from "../components/Hero/Hero";
import ContentLeft from "../components/ContentLeft";
import ContentRight from "../components/ContentRight";

const PortfolioPage = () => (
  <Layout>
    <Hero />
    <ContentLeft>
      <p>Some text.</p>
    </ContentLeft>
    <ContentRight>
      <p>Some text.</p>
    </ContentRight>
  </Layout>
)

export default PortfolioPage;