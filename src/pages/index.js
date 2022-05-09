import * as React from "react";
import { Helmet } from "react-helmet"
import Layout from "../components/layout";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Work from "../components/Work/Work";
import Contact from "../components/Contact/Contact";
import Copyright from "../components/Copyright";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-68163712-2');
ReactGA.pageview(window.location.pathname + window.location.search);

const IndexPage = () => (
  <>
    <Helmet htmlAttributes={{lang : 'en'}}>
      <meta charSet="utf-8" />
      <title>Ansel Colvin | Front-End Developer</title>
      <description>Front-End Developer, React Developer, and Certified Adobe Experience Manager developer. Making the web a better place.</description>
    </Helmet>
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