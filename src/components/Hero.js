import React from "react";
import styled from "styled-components";
import heroBg from "../images/spiralbg.png";

const Headline = styled.h1`
  color: var(--pureWhite);
  font-size: 3.7rem;
  font-family: 'Pacifico';
  font-weight: 700;
  text-shadow: 0 0 5px var(--pureWhite);
  line-height: 1;
  margin: 0 0 1rem;
`

const SubHeadline = styled.h2`
  color: var(--pureWhite);
  font-size: 1.5rem;
  font-family: 'Mulish';
  font-weight: 400;
  letter-spacing: .2rem;
  text-shadow: 0 0 2px var(--pureWhite);
  margin: 0;
  margin-bottom: 1rem;
  line-height: 1;
  transition: .5s ease letter-spacing;
  text-transform: uppercase;

  &:hover {
    letter-spacing: .3rem;
  }
`

const SmallHeadline = styled.h3`
  color: var(--pureWhite);
  font-weight: 300;
  font-size: 1.2rem;
  font-family: 'Mulish';
  margin: 0;
  margin-bottom: .5rem;
  line-height: 1;
  text-transform: lowercase;
`

const HeroContainer = styled.div`
  border-bottom: 1px solid var(--fireTeal);
  background-color: var(--black);
  background-image: url(${heroBg});
  background-position-y: 17%;
  background-position-x: center;
  background-size: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
`

const Hero = () => {
    return (
        <HeroContainer>
            <Headline>Ansel Colvin</Headline>
            <SubHeadline>Front-End Developer</SubHeadline>
            <SmallHeadline>Certified AEM Developer</SmallHeadline>
            <SmallHeadline>React Developer</SmallHeadline>
        </HeroContainer>
    )
}

export default Hero;