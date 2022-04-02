import React from "react";
import styled from "styled-components";
import AboutWrapper from "./AboutWrapper";

const AboutHeading = styled.h2 `
    font-family: var(--secondaryFont);
    font-size: 2em;
    text-shadow: 0 0 3px var(--pureWhite);
    line-height: 1;
    opacity: .9;
`

const About = () => {
    return(
        <AboutWrapper>
            <AboutHeading>nice to meet you...</AboutHeading>

            <p>I'm Ansel, and I'm a self-taught, detail-oriented Front-End Developer and Certified AEM Developer based out of Seattle, Washington. I've been tinkering with websites for over two decades now and have been putting my code to work professionally for years. I build clean, coherent, accessible websites and apps to respond to the needs of organizations of all sizes and specialties.</p>

            <p>Outside of code I have a love of traveling and a passion to explore and look forward to plenty of years of traveling the globe. I spend my weekends wandering the city walking for miles, or taking a roadtrip to a forest trail.</p>

            <p>Follow my story below to get a better understanding of my tools and skillsets, as well as some of the projects I've worked on in the past. As a front-end developer my knowledge and capabilities are always evolving, so everything here is subject to change, and not everything can be listed, so get in touch if you have something exciting for me to learn!</p>
        </AboutWrapper>
    )
}

export default About;