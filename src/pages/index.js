import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Work from "../components/Work/Work";
import Contact from "../components/Contact/Contact";
import Copyright from "../components/Copyright";
import SEO from "../components/seo";

const IndexPage = () => (
  <>
    <SEO title="Title" />
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Copyright />
    </Layout>
  </>
)

export default IndexPage;