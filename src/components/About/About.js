import React from "react";
import SectionHeading from "../SectionHeading";
import AboutWrapper from "./AboutWrapper";

const About = () => {
    return(
        <AboutWrapper>
            <SectionHeading align="left" content="Nice To Meet You" />

            <p>Hi, I'm Ansel. I'm a self-taught, detail-oriented Front-End Developer and Certified AEM Developer based out of Seattle, Washington. I've been tinkering with websites for over two decades now and have been putting my code to work professionally for years. I build clean, coherent, accessible websites and apps to respond to the needs of organizations of all sizes and specialties.</p>

            <p>Outside of code I have a love of traveling and a passion to explore and look forward to plenty of years of traveling the globe. I spend my weekends wandering the city walking for miles, taking a roadtrip to a forest trail, gaming on my PC, or toying with code on the couch.</p>

            <p>Follow along below to get a better understanding of my tools and skills, as well as some of the projects I've worked on in the past. As a front-end developer my skillset is always evolving, so everything here is subject to change, and not everything can be listed, so get in touch if you have something exciting for me to learn!</p>
        </AboutWrapper>
    )
}

export default About;