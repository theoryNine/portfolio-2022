// Component Name: Hero Main Content

import React from "react";
import styled from "styled-components";
import DownloadButton from "./DownloadButton";

const Headline = styled.h1`
  color: var(--pureWhite);
  font-size: 3.7rem;
  font-family: 'Pacifico';
  font-weight: 700;
  text-shadow: 0 0 5px var(--pureWhite);
  line-height: 1;
  margin: 0 0 1rem;
  z-index: 2;

  @media (max-width: 370px) {
    font-size: 3.4rem;
  }
`

const SubHeadline = styled.h2`
  color: var(--pureWhite);
  font-size: 1.4rem;
  font-family: 'Mulish';
  font-weight: 400;
  letter-spacing: .2rem;
  text-shadow: 0 0 2px var(--pureWhite);
  margin: 0;
  margin-bottom: 1rem;
  line-height: 1;
  transition: .5s ease letter-spacing;
  text-transform: uppercase;
  z-index: 2;

  &:hover {
    letter-spacing: .3rem;
  }

  @media (max-width: 370px) {
    font-size: 1.2rem;
  }
`

const SmallHeadline = styled.h3`
  color: var(--pureWhite);
  font-weight: 300;
  font-size: 1.15rem;
  font-family: 'Mulish';
  margin: 0;
  margin-bottom: .5rem;
  line-height: 1;
  text-transform: lowercase;
  z-index: 2;

  @media (max-width: 370px) {
    font-size: 1rem;
  }
`

const MainContent = () => {
    return (
        <>
            <Headline>Ansel Colvin</Headline>
            <SubHeadline>Front-End Developer</SubHeadline>
            <SmallHeadline>React Developer / Certified AEM Developer</SmallHeadline>
            <DownloadButton />
        </>
    )
}

export default MainContent;